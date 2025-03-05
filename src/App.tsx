// Filename - App.js

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Home component
import HomePage from "./HomePage";
// import About component
import AboutPage from "./AboutPage";
// import ContactUs component
import ContactPage from "./ContactPage";
//
import Projects from "./Projects";

function App() {
  return (
    <div>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<HomePage />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/about" element={<AboutPage />} />

          {/* This route is for contactus component
          with exact path "/projects", in 
          component props we passes the imported component*/}
          <Route path="/projects" element={<Projects />} />

          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/contact" element={<ContactPage />} />

          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Redirect to="/" /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
