'use client'
import { useParams, Link } from 'react-router-dom';
import { FaUserPen } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function BlogDetail() {
  const [blog, setBlog] = useState<any>(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/api/blog/read?id=${id}`);
      setBlog(response?.data?.allBlog);
      console.log(id,"idddddddddddddddddddddddddd")
      console.log("asc",response?.data?.allBlog);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!blog) {
    return (
      <div className="py-16 px-4 text-center">
        <h2 className="text-2xl text-red-600 font-semibold">Blog not found.</h2>
        <div className="mt-4">
          <Link to="/blog" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Back to Blog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-white max-w-5xl mx-auto">
      <img
        src={blog.mainImage}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded mb-6"
      />

      <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4 gap-4">
        <span className="flex items-center">
          <FaUserPen className="mr-2 text-cyan-500" />
          {blog.author}
        </span>
        <span className="flex items-center">
          <FaCalendarAlt className="mr-2 text-cyan-500" />
          {blog.date}
        </span>
      </div>

      <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        {/* You may need to change this if blog.content is already formatted HTML */}
        <p>{blog.long_description}</p>
        <p>{blog.short_description}</p>
      </div>

      <div className="mt-8">
        <Link
          to="/blog"
          className="inline-block border border-[#2dc1e3] text-blue-600 hover:bg-[#2dc1e3] hover:text-white transition px-6 py-2 rounded"
        >
          ← Back to All Blogs
        </Link>
      </div>
    </section>
  );
}
