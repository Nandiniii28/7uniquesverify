import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ContextData = createContext();

export const ContextProvider = ({ children }) => {
  const partname = useLocation();
  const [seo, setSeo] = useState({});
  const [allSeoData, setAllSeoData] = useState([]);

  useEffect(() => {
    const fetchSeo = async () => {
      try {
        const res = await fetch(
          "https://cms.sevenunique.com/apis/SEO/get-seo-content.php?website_id=7",
          {
            method: "GET",
          }
        );
        const json = await res.json();
        setAllSeoData(json?.data || []);
        // console.log(json?.data);
      } catch (err) {
        console.error("SEO Fetch Error:", err);
      }
    };
    fetchSeo();
  }, [partname]);

  useEffect(() => {
    const normalizeUrl = (url) => url?.replace(/\/+$/, "").toLowerCase();
    const fullUrl = normalizeUrl(
      window.location.origin + window.location.pathname
    );
    console.log(fullUrl);
    
    // const fullUrl = "https://7uniqueverfiy.com/";
    // const fullUrl = "https://rummy-eight.vercel.app";

    const matched = allSeoData.find((item) => item?.page_slug === fullUrl);
    // console.log(matched);

    if (matched) {
      setSeo(matched);
      console.log(matched);
    } else setSeo({});
  }, [allSeoData, partname]);

  return (
    <ContextData.Provider value={{ seo }}>{children}</ContextData.Provider>
  );
};
