/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Kārlis Dubra",
  title: "Student with big dreams",
  bio: "I am a student who is studying programming and web development. I am a motivated person who is always looking for new challenges. My current challange - combining CS studies with my passion for teaching. I am always looking for new opportunities to learn and grow.",
  email: "dubra.karlis@gmail.com",
  gitHub: "https://github.com/KarlisDubra",
  instagram: "https://www.instagram.com/karlis.dubra/",
  linkedIn: "https://www.linkedin.com/in/kārlis-dubra/",
  medium: "",
  twitter: "https://twitter.com/KarlisDubra",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
