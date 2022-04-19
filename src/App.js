import "./App.css";
import React, { useRef } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import ApiContextProvider from "./services/api.context";
import NavBar from "./components/header/navbar";
import Carousel from "./components/codeCarousel/carousel";
import ProjectView from "./components/projects/projectsview";
import ContactMeView from "./components/contactMe/contact-me";
import SkillsView from "./components/my Skills/skills";
import Footer from "./components/footer/footer";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "my-portfolio-35b84.firebaseapp.com",
  databaseURL:
    "https://my-portfolio-35b84-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-portfolio-35b84",
  storageBucket: "my-portfolio-35b84.appspot.com",
  messagingSenderId: "870805883123",
  appId: "1:870805883123:web:c979664ed96d8331968f86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function App() {
  const homeref = useRef();
  const skillref = useRef();
  const projectref = useRef();
  const contactref = useRef();

  const pagerefs = [homeref, skillref, projectref, contactref];

  return (
    <div className="App">
      <section ref={homeref} className="child" id="home">
        <NavBar pagerefs={pagerefs} />
        <Carousel />
      </section>
      <section ref={skillref} className="child">
        <SkillsView />
      </section>
      <section ref={projectref} className="child">
        <ApiContextProvider db={database}>
          <ProjectView />
        </ApiContextProvider>
      </section>
      <section ref={contactref} className="child">
        <ContactMeView />
      </section>
      <Footer />
    </div>
  );
}

export default App;
