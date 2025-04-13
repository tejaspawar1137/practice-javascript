import { useEffect } from "react";

const preloadModules = (modules) => {
  modules.forEach((module) => {
    const link = document.createElement("link");
    link.rel = "modulepreload";
    link.href = module;
    document.head.appendChild(link);
  });
};

const LazyPage = () => {
  useEffect(() => {
    preloadModules([
      "/static/js/Contact.js",
      "/static/js/Dashboard.js",
    ]);
  }, []);

  return <div>Lazy Loaded Page</div>;
};

export default LazyPage;
