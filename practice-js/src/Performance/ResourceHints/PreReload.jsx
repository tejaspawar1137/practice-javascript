import { useEffect } from "react";

const preloadResources = (resources) => {
  resources.forEach((resource) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = resource;
    link.as = "style"; // or "image", "script"
    document.head.appendChild(link);
  });
};

const HomePage = () => {
  useEffect(() => {
    preloadResources([
      "/static/css/main.css",
      "/static/js/main.js",
      "/assets/logo.png",
    ]);
  }, []);

  return <div>Welcome to the Home Page</div>;
};

export default HomePage;
