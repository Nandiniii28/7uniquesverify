import { Link } from "react-router-dom";

const articleData = [
  {
    img: "/img/1.1.jpg",
    title: "How to Create a Cozy Atmosphere",
    slug: "create-cozy-atmosphere",
    category: "Candle Tips",
    desc: "Transform your space into a warm retreat using lighting, textures, and calming scents.",
  },
  {
    img: "/img/1.2.jpg",
    title: "The Benefits of Aromatherapy in Home",
    slug: "benefits-of-aromatherapy",
    category: "Wellness Tips",
    desc: "Explore how essential oils can enhance mood, reduce stress, and promote restful sleep.",
  },
  {
    img: "/img/1.3.jpg",
    title: "Sustainable Living: Tips for Every Home",
    slug: "sustainable-living-tips",
    category: "Candle Tips",
    desc: "Adopt eco-friendly habits to create a greener, more conscious home environment.",
  },
  {
    img: "/img/1.4.jpg",
    title: "How to Create a Cozy Atmosphere",
    slug: "create-cozy-atmosphere-2",
    category: "Candle Tips",
    desc: "Elevate your home's comfort with textures, warm lighting, and personalized decor.",
  },
  {
    img: "/img/1.5.jpg",
    title: "Creating a Relaxing Outdoor Space",
    slug: "relaxing-outdoor-space",
    category: "Wellness Tips",
    desc: "Design a peaceful backyard or balcony retreat using plants, lighting, and soft furnishings.",
  },
  {
    img: "/img/1.6.jpg",
    title: "Essential Tips for Home Organization",
    slug: "home-organization-tips",
    category: "Candle Tips",
    desc: "Declutter and arrange your home effectively to boost peace, focus, and efficiency.",
  },
];

const MediaArticles = () => {
  return (
    <div className="container my-16">
      {/* Header */}
      <header className="mb-10 max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Insights</p>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 leading-tight">
          Explore Our Latest Insights
        </h1>
        <p className="text-gray-600 text-base max-w-xl">
          Discover tips and trends for your health and home.
        </p>
      </header>

      {/* Featured Section */}
      <main className="max-w-7xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <img
                src="/img/1.1.jpg"
                alt="A lit candle with a matchstick"
                className="rounded-lg w-full mb-6 object-cover h-72"
              />
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Online Guide</p>
              <h2 className="text-2xl font-semibold mb-3 leading-snug">
                The Benefits of Aromatherapy in Home
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Explore how essential oils can enhance mood, reduce stress, and promote restful sleep.
              </p>
            </div>
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <Link
                to="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                <span>View More</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <time className="italic" dateTime="2025-05-10">
                Saturday, 10 May 2025
              </time>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 md:flex-col md:gap-6">
            {["Candle Tips", "Wellness Tips", "Eco Living", "DIY Projects", "Interior Style"].map((cat, i) => (
              <button
                key={i}
                className="px-4 py-1 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100"
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Article Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {articleData.map((item, i) => (
            <article
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {item.category}
                </p>

                {/*  Title wrapped with Link using slug */}
                <Link to={`/articles/${item.slug}`} className="hover:underline">
                  <h3 className="text-lg font-semibold mb-2 leading-snug">
                    {item.title}
                  </h3>
                </Link>

                <p className="text-gray-700 text-sm flex-grow leading-relaxed">
                  {item.desc}
                </p>
                <time className="mt-4 text-xs italic text-gray-500" dateTime="2025-05-10">
                  Saturday, 10 May 2025
                </time>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default MediaArticles;
