import KycHero from "../../pages/KycHero";
import KycCards from "../../pages/KycCards";
import KycFeatures from "../../pages/KycFeatures";
import APIsUnderKyc from "../../pages/KycAPIs";
import HomeFAQ from "../../pages/HomeFAQ";
import SEO from "../Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../../config/context";
export default function KycPage() {
    const { seo } = useContext(ContextData);
  
  return (
 <>
 <SEO seo={seo} />
 <KycHero></KycHero>
 <KycCards></KycCards>
 <KycFeatures></KycFeatures>
 <APIsUnderKyc></APIsUnderKyc>
 <HomeFAQ></HomeFAQ>
 </>
  );
}