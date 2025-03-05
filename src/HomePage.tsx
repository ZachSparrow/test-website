import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import MyNavigationBar from "./components/MyNavigationBar";

import "./components/App.css";

function HomePage() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="myStyle">
      <MyNavigationBar />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello!</Alert>
      )}

      <h2>
        I built this portfolio to demonstrate modern skills and host old
        projects in an easily accessible format.
      </h2>
      <br />
      <span className="homePage">
        <p>
          <b>Home:</b> My landing page.
        </p>
        <p>
          <b>About:</b> A brief description to get to know a little bit more
          about me.
        </p>
        <p>
          <b>Projects:</b> Various projects and their descriptions/links.
        </p>
        <p>
          <b>Contact:</b> All of the easiest ways to get ahold of me.
        </p>
      </span>

      <Button color="info" onClick={() => setAlertVisibility(true)}>
        Pop-Up Button
      </Button>
    </div>
  );
}

export default HomePage;
