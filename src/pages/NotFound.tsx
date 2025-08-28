
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-9xl font-bold text-kcl-blue mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          It might have been moved, deleted, or perhaps never existed. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-kcl-blue text-white px-6 py-3 rounded-md hover:bg-kcl-lightblue transition-colors"
        >
          <Home size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
