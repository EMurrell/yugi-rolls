import Head from "next/head";
import Nav from "../components/Nav.js";
import Intro from "../components/Intro.js";
import Testimonials from "../components/Testimonials.js";
import Footer from "../components/Footer.js";
import Meta from "../components/Meta.js";
import Header from "../components/Header.js";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <Intro />
      <Testimonials />
      <Footer />
    </>
  );
}
