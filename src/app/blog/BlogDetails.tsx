"use client";
import { useParams, Link } from "react-router-dom";
import { FaUserPen } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import axios from "axios";
// import DOMPurify from "dompurify";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
const cleanContent = (html) => {
  return DOMPurify.sanitize(html, {
    FORBID_ATTR: ["style"], // removes inline styles
  });
};

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  console.log(slug);

  useEffect(() => {
    setPost(null);
    const fetchBlogPost = async () => {
      try {
        const [postRes, relatedRes, categoryapi] = await Promise.all([
          fetch(
            `https://cms.sevenunique.com/apis/blogs/get-blogs.php?status=2&slug=${slug}&website_id=6`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
          fetch(
            `https://cms.sevenunique.com/apis/blogs/get-blogs.php?status=2&limit=3&website_id=6`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
          fetch(
            `https://cms.sevenunique.com/apis/category/get_category_by_id.php?category_id=6 `,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
        ]);

        const postJson = await postRes.json();
        const relatedJson = await relatedRes.json();
        const categoryapijson = await categoryapi.json();
        // console.log(postJson);
        // console.log(relatedJson);
        // console.log(categoryapijson);

        if (postJson.status === "success" && postJson.data.length > 0) {
          const matchedPost = postJson.data.find((p) => p.slug === slug);
          if (matchedPost) {
            matchedPost.content = cleanContent(matchedPost.content);
            setPost(matchedPost);
          } else {
            setPost(null);
          }
        }
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="py-16 px-4 text-center">
        <h2 className="text-2xl text-red-600 font-semibold">Blog not found.</h2>
        <div className="mt-4">
          <Link
            to="/blog"
            className="inline-block px-6 py-2 bg-[#b7603d]   text-white rounded hover:bg-blue-700"
          >
            Back to Blog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-white max-w-5xl mx-auto">
      <img
        src={post?.image}
        alt={post?.title}
        className="w-full h-[400px] object-cover rounded mb-6"
      />
      <span className="flex items-center">
        <FaCalendarAlt className="mr-2 text-cyan-500" />
        {new Date(post?.created_at).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>

      <h1 className="text-3xl font-bold mb-6">{post?.title}</h1>

      <div
        className="space-y-4 text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />

      <div className="mt-8">
        <Link
          to="/blog"
          className="inline-block border border-[#b7603d] text-[#b7603d]   hover:bg-[#b7603d] hover:text-white transition px-6 py-2 rounded"
        >
          ← Back to All Blogs
        </Link>
      </div>
    </section>
  );
}
