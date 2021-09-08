import { useEffect, useState } from "react";
import ReactGA from "react-ga";

const InitlizeReactGA = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (window.location.href.includes("localhost")) return;
    const trackingId = window.location.href.includes("staging")
      ? process.env.REACT_APP_GOOGLE_ANALYTICS_STAGING_TRACKING_ID
      : process.env.REACT_APP_GOOGLE_ANALYTICS_PRODUCTION_TRACKING_ID;
    ReactGA.initialize(trackingId);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(window.location.pathname);
    }
  }, [initialized, window.location]);
};

export default InitlizeReactGA;
