import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex bg-black flex-col items-center pt-25 text-center min-h-screen  ">
      <p className="text-sm sm:text-base text-emerald-400 font-medium hover:bg-gray-700  rounded-2xl  flex cursor-pointer">
        • New Components: Field, Input Group, Item and more <ArrowRight />
      </p>

      <h1 className="sm:text-5xl md:text-6xl font-bold text-white max-w-6xl leading-tight">
        The Foundation for your Design System
      </h1>

      <p className="text-sm text-white sm:text-lg max-w-2xl">
        A set of beautifully designed components that you can customize, extend,
        and build on. Start here then make it your own. <br />
        <span className="text-emerald-400">Open Source. Open Code.</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link to={"/"}>
          <Button className="px-6 py-3 text-base font-medium bg-emerald-500 hover:bg-emerald-600 cursor-pointer">
            Get Started
          </Button>
        </Link>
        <Link to={"/"}>
          <Button
            variant="outline"
            className="px-6 py-3 text-base font-medium border-emerald-500 text-emerald-400 hover:bg-white cursor-pointer"
          >
            View Components
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
