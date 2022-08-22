import TypeAnimation from "react-type-animation";
import "./css/Core.css";

function App() {
  return (
    <div className="Core"> 
      <img alt="Logo" src="/logo.png" width="256px" />
      <TypeAnimation className="Core-Typewrite" cursor={false} sequence={["Software Develop & Marketing Management"]} wrapper="h1" />
      <h2 className="Core-Subheader">
        Cubed Studios is a Software Development and Media Marketing management team. We protect Developers and Content Creators and Servers.
      </h2>
    </div>
  );
}

export default App;