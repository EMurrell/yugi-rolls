import Head from "next/head";
import Hero from "../components/Hero.js";
import Nav from "../components/Nav.js";
import About from "../components/About.js";
import Testimonials from "../components/Testimonials.js";
import Footer from "../components/Footer.js";
import Meta from "../components/Meta.js";
import Header from "../components/Header.js";

export default function Home() {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}
