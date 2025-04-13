

const GoogleAnalytics = () => {


  function loadGoogleAnalytics() {
const script = document.createElement("script")
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA-TRACKING-ID';
    script.async = true;
    document.body.appendChild(script);
  }
  return (
    <button onClick={() => loadGoogleAnalytics()}>Track Me</button>

    
  )
}

export default GoogleAnalytics