import { useEffect } from "react";
import { Link } from "react-router";

const ErrorPage = () => {
        useEffect(() => {
        document.title = "404 Error";
    }, []);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f9fafb] text-center px-6">
      <h1 className="text-[120px] font-extrabold text-[#0cc0df] leading-none">
        404
      </h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Page Not Found
      </h2>
      <p className="text-gray-500 max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved.  
        Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="btn bg-[#0cc0df] hover:bg-[#09b1cd] border-none text-white font-semibold px-6"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
