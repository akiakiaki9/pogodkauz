import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Shapka from "./components/Shapka";

export default function Home() {
  return (
    <div className="layout">
      <Navbar />
      <Shapka />
      <Layout />
      <Footer />
    </div>
  );
};