import MyNavigationBar from "./components/MyNavigationBar";
function Projects() {
  return (
    <div className="myStyle">
      <MyNavigationBar />
      <h1>Projects Page</h1>

      <h2>Either elaborate on each project</h2>
      <h2>Or give each project its own page for bonus details.</h2>
      <h2>I like option 2 a little more, despite the additional effort</h2>

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
