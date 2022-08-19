import DefaultLayout from "layouts/DefaultLayout";
import type { AppProps } from "next/app";
import App from "next/app";
import ThemeProvider from "ThemeContext";
import "../global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
