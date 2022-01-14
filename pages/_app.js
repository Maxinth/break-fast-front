import { useEffect } from "react";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import "../public/css/global.scss";
import "react-dates/initialize";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import "@reach/dialog/styles.css";
import { setAuthorizationHeader } from "../utils/index";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    // load AOS for animations
    AOS.init();
    AOS.refresh();
    console.log("aos has loaded!");
  }, []);

  useEffect(() => {
    // set authHeaders for authorizations
    setAuthorizationHeader();
    console.log("authorizationHeader set!");
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
