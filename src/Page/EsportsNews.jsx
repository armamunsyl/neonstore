import { useEffect, useState } from "react";

const EsportsNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb] py-14 px-6 md:px-16 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Latest Esports News
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Source: <span className="font-medium text-gray-700">{item.source.split('/')[2]}</span>
              </p>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href={item.source}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#0cc0df] border-none hover:bg-[#09b1cd] text-white w-full md:w-auto"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EsportsNews;
