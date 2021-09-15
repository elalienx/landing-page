// Project files
import NavigationBar from "./components/NavigationBar";
import "./styles/style.sass";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div id="home">
        {/* Hero */}
        <header className="hero">
          <div className="container">
            <h1 className="title">
              Front
              <br />
              End
              <br />
              Course
            </h1>
            <h2 className="subtitle">
              Training Program
              <br />
              Autum 2021
            </h2>
            <a href="#about">Learn more</a>
          </div>
        </header>

        {/* About */}
        <section className="about">
          <img src="" alt="" />
          <div className="container">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident excepturi numquam aspernatur a ipsa qui tenetur vero
              iste dolorum, consequuntur facere beatae omnis saepe, aliquid,
              consequatur quae. Culpa, perspiciatis nesciunt!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
