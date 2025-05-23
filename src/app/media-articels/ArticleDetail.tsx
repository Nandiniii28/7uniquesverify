import { useParams } from "react-router-dom";
import { articles } from "./articelsdata";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <div className="text-center py-20 text-red-500">Article not found</div>;
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <img
        src={article.image}
        alt={article.title}
        className="rounded-lg w-full mb-6 object-cover h-72"
      />
      <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
        {article.category}
      </p>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <time className="text-sm italic text-gray-400 mb-6 block">
        {new Date(article.date).toDateString()}
      </time>
      <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
        {article.content}
      </p>
    </div>
  );
};

export default ArticleDetail;
