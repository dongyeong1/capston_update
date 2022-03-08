import "../styles/styles.js";
import Head from "next/head";
import { Global } from "../styles/styles.js";
import "antd/dist/antd.css";
import AppLayout from "../component/Layout/AppLayout.js";
import Link from "next/link";
import wrapper from '../store/configureStore';


function MyApp({ Component, ...pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <AppLayout>
        <Global />
        <Head>
          <meta charset="UTF-8" />
          <title>Runnable</title>
          <link rel="icon" href="rider4.png" />
        </Head>
        {page}
      </AppLayout>
    ));

  return getLayout(
    <>
      <Global />
      <Head>
        <meta charset="UTF-8" />
        <title>Runnable</title>
        <link rel="icon" href="rider4.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
