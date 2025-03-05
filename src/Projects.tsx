import MyNavigationBar from "./components/MyNavigationBar";
function Projects() {
  return (
    <div className="myStyle">
      <MyNavigationBar />
      <h1>Projects Page</h1>

      <h2>
        Below I have a list of projects that I have worked on. Either from
        university or personal endeavors
      </h2>
      <h2>This page is a work in progress</h2>

      <a href="https://github.com/ZachSparrow/cs465_Fullstack">
        {" "}
        Git Hub Full Stack Project{" "}
      </a>
      <br />

      <a href="https://github.com/ZachSparrow/CS340_Database_Sorting">
        {" "}
        Mongo Database Management{" "}
      </a>
      <br />

      <a href="https://github.com/ZachSparrow/cs370_AI_TreasureHunter">
        {" "}
        AI Maze Solver{" "}
      </a>
    </div>
  );
}

export default Projects;
