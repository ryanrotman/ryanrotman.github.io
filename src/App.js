import { useState } from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import project1Img from "./assets/images/PortfolioPage_Screenshot_Project1.png";
import project2Img from "./assets/images/PortfolioPage_Screenshot_Project2.png";
import project3Img from "./assets/images/PortfolioPage_Screenshot_Project3.png";
import readingListImg from "./assets/images/PortfolioPage_Screenshot_ReadingList.png";
import homework13Img from "./assets/images/PortfolioPage_ScreenShot_Homework13.png";
import homework11Img from "./assets/images/PortfolioPage_ScreenShot_Homework11.png";
import homework6Img from "./assets/images/PortfolioPage_Screenshot_Homework6.png";
import homework21Img from "./assets/images/PortfolioPage_ScreenShot_Homework21.png";
import "materialize-css/dist/css/materialize.min.css";

function App() {

  const [projects] = useState([
    {
    id: 1,
    title: "Stock Tracker",
    description: "Full MERN stack application that allows a user to search for and save stocks that they are either currently investing in or are interested in investing in. Based on their saved stocks they can view a graph that plots out how that particular stock has performed over the prior 100 days.",
    app: "https://app-stock-investment-tracker.herokuapp.com/",
    code: "https://github.com/ryanrotman/stock-tracker-app",
    screenshot: project3Img
    },
    {
    id: 2,
    title: "Google Books Search",
    description: "A full stack application built with MongoDB, Express, React, and Node that uses the Google Books API and allows for a user to search for books, view books, and save or delete them from the database.",
    app: "https://rr-google-books-search.herokuapp.com/",
    code: "https://github.com/ryanrotman/google-books-react-search",
    screenshot: homework21Img
    },
    {
    id: 3,
    title: "Reading List",
    description: "A full-stack app built on MongoDB, Express, React, and Node that allows a user to add a book, author, and synopsis to their list of books they want to read.",
    app: "https://rr-react-reading-list.herokuapp.com/",
    code: "https://github.com/ryanrotman/react-reading-list",
    screenshot: readingListImg
    },
    {
    id: 4,
    title: "It's a Blog's Life",
    description: "A full-stack weblog app built on NodeJS using express-sequelize, handlebars, Passport, and ESLint. Share your thoughts, find new friends, and give feedback to others content in the form of comments and likes!",
    app: "https://its-a-blogs-life.herokuapp.com/",
    code: "https://github.com/Cenzo-cmd/Project-2",
    screenshot: project2Img
    },
    {
    id: 5,
    title: "Eat-Da-Burger",
    description: "Burger logger that allows a user to create a burger, change its devoured status, and delete a burger. This app uses Node, Express, Handlebars, and MySQL.",
    app: "https://rr-eat-da-burger.herokuapp.com",
    code: "https://github.com/ryanrotman/handlebars-eat-da-burger",
    screenshot: homework13Img
    },
    {
    id: 6,
    title: "SHAKR App",
    description: "A cocktail generator web-app that uses theCocktailDB.com and Google Maps API to render cocktail recipes based on user-submitted ingredients on-hand.",
    app: "https://abraspin.github.io/Project-1-The-Silent-Marvels-/",
    code: "https://github.com/abraspin/Project-1-The-Silent-Marvels-",
    screenshot: project1Img
    },
    {
    id: 7,
    title: "Note Taker",
    description: "This an express application that allows a user to write notes, view submitted notes, and delete notes.",
    app: "https://radiant-tor-19120.herokuapp.com",
    code: "https://github.com/ryanrotman/express-note-taker",
    screenshot: homework11Img
    },
    {
    id: 8,
    title: "Weather Dashboard",
    description: "Weather dashboard that incorporates third-party APIs using jQuery's AJAX call to show a city's current temperature, humidity, wind speed, uv index and 5-day forecast. Uses Local Storage for persistent data.",
    app: "https://ryanrotman.github.io/weather-dashboard/",
    code: "https://github.com/ryanrotman/weather-dashboard",
    screenshot: homework6Img
    }
  ]);

  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home
              project={projects}
            />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio
              project={projects}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
