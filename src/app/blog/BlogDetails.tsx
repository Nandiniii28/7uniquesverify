// src/pages/BlogDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { blogs } from './blogdata'; 
import { FaUserPen } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

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
        src={blog.img}
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
  <p>
    In 2025, responsive design isn’t just a best practice—it’s a necessity. With over 60% of web traffic coming from mobile devices, brands that fail to optimize for multiple screen sizes risk losing users at first click. Responsive design ensures that websites adapt seamlessly to desktops, tablets, and smartphones without compromising usability or aesthetics.
  </p>
  <p>
    One of the core principles of responsive design is mobile-first development. Start designing for smaller screens and scale up, rather than trying to shrink a desktop experience down. This ensures better performance, faster loading, and a layout tailored for touch navigation.
  </p>
  <p>
    Another crucial strategy is using flexible grid systems and media queries. Tools like CSS Grid and Flexbox help developers build adaptive layouts, while media queries allow fine-tuning based on screen resolution, orientation, and more. Together, they enable tailored experiences across all devices.
  </p>
  <p>
    Lastly, performance plays a pivotal role in responsiveness. Compress images, use lazy loading, and leverage modern file formats like WebP to reduce load time. Combine these practices with a mobile-first mindset and accessibility testing, and your site will be future-ready for the dynamic digital world of 2024.
  </p>
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
