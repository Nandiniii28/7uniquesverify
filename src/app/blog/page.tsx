"use client";
import { SetStateAction, useEffect, useState } from "react";
import HomeCTA from "../../pages/HomeCTA";
import { Link } from "react-router-dom";
import axios from "axios";

// const blogs = [
//   {
//     title: "Mastering Responsive Design: Best Practices for 2024.",
//     slug: "mastering-responsive-design-2024",
//     img: "https://storage.googleapis.com/a1aa/image/986258b5-ace5-4fb7-2191-642d667089d3.jpg",
//     author: "Jamie Carter",
//     date: "Dec 18, 2024",
//   },
//   {
//     title: "What is VOIP and Why Your Business Needs It?",
//     slug: "what-is-voip-business-needs",
//     img: "https://storage.googleapis.com/a1aa/image/956ab758-a344-471a-2cd6-b82bd995d00a.jpg",
//     author: "Jamie Carter",
//     date: "Dec 18, 2024",
//   },
//   {
//     title: "Top 10 Benefits of Switching to VOIP Services.",
//     slug: "top-10-benefits-voip-services",
//     img: "https://storage.googleapis.com/a1aa/image/3757454b-f169-40f4-6d60-ac77f8fe980f.jpg",
//     author: "Jamie Carter",
//     date: "Dec 18, 2024",
//   },
//   {
//     title: "Top Benefits of Adopting VOIP for Your Business.",
//     slug: "top-10-benefits-voip-adopt",
//     img: "https://storage.googleapis.com/a1aa/image/f2432f07-8924-423d-b13c-a91e5e4c1ddd.jpg",
//     author: "Jamie Carter",
//     date: "Dec 18, 2024",
//   },
//   {
//     title: "How VOIP is Revolutionizing Modern Communication.",
//     slug: "how-voip-revolutionizing-modern-communication",
//     img: "https://storage.googleapis.com/a1aa/image/2aa561ba-3b8e-4d6a-03af-899c189dd4dc.jpg",
//     author: "Jamie Carter",
//     date: "Dec 18, 2024",
//   },
//   {
//     title: "Secure Communication in the Telecom Industry.",
//     slug: "secure-communication-telecom-industry",
//     img: "https://storage.googleapis.com/a1aa/image/e6668424-011f-4447-71cc-d337dc2cbe6c.jpg",
//     author: "Jamie Carter",
//     date: "Dec 18, 2024",
//   },
//   {
//     title: "Secure Communication in the Telecom Industry.",
//     slug: "secure-communication-in-the-telecom-industry",
//     img: "https://storage.googleapis.com/a1aa/image/e6668424-011f-4447-71cc-d337dc2cbe6c.jpg",
//     author: "Jamie Carter",
//     date: "Dec 18, 2024",
//   },
//   {
//     title: "Secure Communication in the Telecom Industry.",
//     slug: "secure-communication-in-the-telecom-industry",
//     img: "https://storage.googleapis.com/a1aa/image/e6668424-011f-4447-71cc-d337dc2cbe6c.jpg",
//     author: "Jamie Carter",
//     date: "Dec 18, 2024",
//   },
//   {
//     title: "Secure Communication in the Telecom Industry.",
//     slug: "secure-communication-in-the-telecom-industry",
//     img: "https://storage.googleapis.com/a1aa/image/e6668424-011f-4447-71cc-d337dc2cbe6c.jpg",
//     author: "Jamie Carter",
//     date: "Dec 18, 2024",
//   },
// ];

export default function BlogPage() {
  const [blogPosts, setAllblog] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=7&status=2",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            },
          }
        );

        const data = await res.json();
        // console.log(data.data);
        setAllblog(data?.data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <main className="w-full mx-auto px-6 sm:px-10 bg-[#faf8f8] md:px-16 lg:px-20 xl:px-24 pb-24">
      <section className="text-center all-banner-section mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight relative z-10">
          News &amp; Articles
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed relative z-10">
          We are passionate about transforming the way businesses communicate.
          Specializing in VOIP, telecom.
        </p>
        <div
          aria-hidden="true"
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          style={{
            top: "0",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <svg
            aria-hidden="true"
            className="opacity-10"
            fill="none"
            height="160"
            width="160"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 0v160M80 0v160M120 0v160M0 40h160M0 80h160M0 120h160"
              stroke="#D1D5DB"
              strokeWidth="1"
            />
          </svg>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {blogPosts.length !== 0 ? (
          blogPosts.map((blog, index) => (
            <article
              key={index}
              className="bg-[#F5F9FA] rounded-xl overflow-hidden shadow-sm"
            >
              <Link to={`/blog/${blog?.slug}`}>
                <img
                  src={blog?.image}
                  alt={blog?.title}
                  className="w-full h-44 object-cover rounded-t-xl"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="flex items-center text-gray-600 text-xs mb-2 space-x-2">
                    <span>
                      <i className="far fa-calendar-alt" />{" "}
                      {new Date(blog?.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base leading-snug mb-3">
                    {blog?.title}
                  </h3>
                  <div
                    className="text-xs font-semibold flex items-center space-x-1 text-black"
                  >
                    <span>Read More</span>
                    <span className="bg-[#b7603d] text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold leading-none">
                      ▹
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <p className="">No blog posts available.</p>
        )}
      </section>

      {/* Pagination */}
      {/* <div className="flex justify-center items-center mt-10 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-[#b7603d] text-white font-bold" : "bg-gray-100"}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div> */}
      <HomeCTA />
    </main>
  );
}
