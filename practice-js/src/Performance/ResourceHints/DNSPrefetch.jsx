import { useEffect } from "react";

const dnsPrefetch = (domains) => {
  domains.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = domain;
    document.head.appendChild(link);
  });
};

const ContactPage = () => {
  useEffect(() => {
    dnsPrefetch([
      "https://api.openai.com",
      "https://fonts.gstatic.com",
    ]);
  }, []);

  return <div>Contact Page</div>;
};

export default ContactPage;
