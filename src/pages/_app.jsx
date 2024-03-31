import React from "react";
import { store } from "../redux/store";
import '../styles/index.scss';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  )
}

export default MyApp
