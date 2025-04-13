import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const prerenderRoutes = (routes) => {
  routes.forEach((route) => {
    const link = document.createElement("link");
    link.rel = "prerender";
    link.href = route;
    document.head.appendChild(link);
  });
};

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      prerenderRoutes(["/contact", "/dashboard"]);
    }
  }, [location]);

  return <div>Welcome to Home Page</div>;
};

export default HomePage;
