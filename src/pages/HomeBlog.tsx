const blogPosts = [
  {
    title: 'Mastering Responsive Design: Best Practices for 2024.',
    date: 'Dec 18, 2024',
    author: 'Jamie Carter',
    excerpt: 'Designing for all devices is essential—explore new best practices that keep you ahead in 2024.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '/news/mastering-responsive-design-best-practices-for-2024',
  },
  {
    title: 'Next-Gen Cloud Phone Systems Enhance Support',
    date: 'Nov 11, 2024',
    author: 'Devon Lane',
    excerpt: 'Why cloud phone solutions are a game-changer for remote teams, scalability, and ROI.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    link: '/news/next-gen-cloud-phone-systems',
  },
  {
    title: 'Unified Communications for Modern Business',
    date: 'Oct 28, 2024',
    author: 'Jenny Wilson',
    excerpt: 'Combining voice, video, and chat is the new normal. See how to boost your business.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: '/news/unified-communications-modern',
  },
];

export default function HomeBlog() {
  return (
    <section className="bg-[#f6fafd] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#373533] mb-4 text-center">Insights and Updates from World Communication.</h2>
        <p className="text-lg text-[#9c9e99] text-center mb-14 max-w-2xl mx-auto">The power of VOIP, telecom, and cloud technologies to deliver seamless communication solutions for businesses of all sizes.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              className="bg-white hover:shadow-lg transition rounded-xl overflow-hidden block shadow border border-[#e0e5ef]"
            >
              <img src={post.image} alt={post.title} className="object-cover h-44 w-full" />
              <div className="p-6 flex flex-col h-full">
                <div className="text-sm text-[#9c9e99] mb-1">{post.author} / {post.date}</div>
                <div className="font-bold text-lg text-[#373533] mb-3">{post.title}</div>
                <div className="text-[#595c5c] text-base mb-4">{post.excerpt}</div>
                <span className="inline-flex items-center text-[#2dc1e3] font-bold hover:underline mt-auto">
                  Read more
                  <img src="https://ext.same-assets.com/1049470090/3253856763.svg" alt="arrow" className="h-4 w-4 ml-2" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
