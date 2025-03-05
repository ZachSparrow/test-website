import MyNavigationBar from "./components/MyNavigationBar";
import SelfPortrait from "/image/self_portrait2.jpg";

function AboutPage() {
  return (
    //I tried to format each page a little differently to demonstrate felxibility
    <div className="aboutText">
      <div className="myStyle">
        <MyNavigationBar />
        <h1>About Me</h1>

        <br />
        <img className="aboutPhoto" src={SelfPortrait} />
        <p>
          <span className="bigTitle">Introduction:</span>
          <span className="biggerText">
            Hello, I'm Zach Koonce. I am a recently graduated software developer
            with a passion for problem solving and programming. I graduated at
            the end of 2023 from SNHU with a Bachelor's in Computer Sciences. To
            help myself standout, I have assembled this portfolio with some of
            my larger university projects, and I will be updating it with any
            passion projects I complete on the side related to software
            development.
          </span>
        </p>
        <p>
          <span className="bigTitle">Education:</span>
          <br />
          <span className="subTitle">Degree:</span>
          <span className="smallText">Bachelor's of Computer Science</span>
          <br />
          <span className="subTitle">GPA: </span>
          <span className="smallText">3.7</span>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
