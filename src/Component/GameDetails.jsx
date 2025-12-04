import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";

const GameDetails = () => {
  
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const foundGame = data.find((item) => item.id === id);
        setGame(foundGame);
      });
  }, [id]);
  useEffect(() => {
    if (game) {
      document.title = `${game.title}`;
    } else {
      document.title = "Game Details";
    }
  }, [game]);
  if (!game) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-gray-500">
        Loading game details...
      </div>
    );
  }
  

  return (
    <div className="max-w-11/12 mx-auto bg-[#f9fafb] py-14 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">

        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-8 md:p-10 space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {game.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <p>
              <span className="font-semibold text-gray-700">Category:</span>{" "}
              {game.category}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Developer:</span>{" "}
              {game.developer}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Ratings:</span>{" "}
              ⭐ {game.ratings}
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">{game.description}</p>

          <div className="flex gap-4 flex-wrap pt-4">
            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#0cc0df] hover:bg-[#09b1cd] border-none text-white font-semibold"
            >
              Download Now
            </a>

            <Link
              to="/"
              className="btn border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
