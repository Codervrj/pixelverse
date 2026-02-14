import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-685SK0ME1E");
};

export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
