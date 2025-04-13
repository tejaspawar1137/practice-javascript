import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const prefetchRoutes = (routes) => {
  routes.forEach((route) => {
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = route;
    link.as = "document";
    document.head.appendChild(link);
  });
};

const Dashboard = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      prefetchRoutes(["/profile", "/settings"]);
    }
  }, [location]);

  return <div>Welcome to the Dashboard</div>;
};

export default Dashboard;
