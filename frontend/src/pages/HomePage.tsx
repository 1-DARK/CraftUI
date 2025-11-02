import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import Examples from "../component/Examples";
import Dashboard from "../component/Dashboard";
import Tasks from "../component/Tasks";
import Playground from "../component/Playground";
import Authentication from "../component/Authentication";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex bg-black flex-col items-center pt-50 text-center min-h-screen">
      <p className="sm:text-base text-emerald-400 font-medium hover:bg-gray-700 rounded-2xl cursor-pointer">
        <Link to={"/m"} className="flex">
          • New Components: Field, Input Group, Item and more <ArrowRight />
        </Link>
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

      <div className="w-5xl mt-20 px-4 sm:px-10">
        {isMobile ? (
          <div className="w-full rounded-xl mt-6 p-6">
            <Dashboard />
          </div>
        ) : (
          <Tabs defaultValue="a" className="w-full">
            <TabsList className="w-full justify-start flex overflow-x-auto bg-black">
              <TabsTrigger
                value="a"
                className="flex-1 text-center text-gray-500"
              >
                Examples
              </TabsTrigger>
              <TabsTrigger
                value="b"
                className="flex-1 text-center text-gray-500"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="c"
                className="flex-1 text-center text-gray-500"
              >
                Tasks
              </TabsTrigger>
              <TabsTrigger
                value="d"
                className="flex-1 text-center text-gray-500"
              >
                Playground
              </TabsTrigger>
              <TabsTrigger
                value="e"
                className="flex-1 text-center text-gray-500"
              >
                Authentication
              </TabsTrigger>
            </TabsList>

            <TabsContent value="a" className="w-full rounded-xl mt-6 p-6">
              <Examples />
            </TabsContent>
            <TabsContent value="b" className="w-full rounded-xl mt-6 p-6">
              <Dashboard />
            </TabsContent>
            <TabsContent value="c" className="w-full rounded-xl mt-6 p-6">
              <Tasks />
            </TabsContent>
            <TabsContent value="d" className="w-full rounded-xl mt-6 p-6">
              <Playground />
            </TabsContent>
            <TabsContent value="e" className="w-full rounded-xl mt-6 p-6">
              <Authentication />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default HomePage;
