import TypeAnimation from "react-type-animation";
import "./css/Core.css";

function App() {
  return (
    <div className="Core"> 
      <img alt="Logo" src="/logo.png" width="256px" />
      <TypeAnimation className="Core-Typewrite" cursor={false} sequence={["Software Develop & Marketing Management"]} wrapper="h1" />
      <h2 className="Core-Subheader">
        Scope Development, LLC. is an American software development, talent management and digital marketing agency
      </h2>
    </div>
  );
}

export default App;