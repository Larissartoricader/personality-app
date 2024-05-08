import useSWR, { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import NavBar from "@/components/nav";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading } = useSWR("api/people", fetcher);

  if (isLoading) {
    return <h2>Still Loading...</h2>;
  }

  if (!data) {
    return <p>No Data</p>;
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} people={data} />
        <NavBar />
      </SWRConfig>
    </>
  );
}
