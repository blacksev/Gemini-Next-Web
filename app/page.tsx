import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";
import Footer from "./components/footer";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <Home />
      <Footer />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
