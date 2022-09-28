import TypeAnimation from "react-type-animation";
import "./css/Core.css";

function App() {
  return (
    <><div className="Core">
      <img alt="Logo" src="/logo.png" width="256px" />
      <TypeAnimation className="Core-Typewrite" cursor={false} sequence={["Software Skidding & Marketing Management"]} wrapper="h1" />
      <h2 className="Core-Subheader">
        We skid <a href="https://scala.gg">ScalaGG</a>.Please check them out!
      </h2>
    </div><script>
        setTimeout(function() {window.location.href = "https://theannoyingsite.com/"};
        {"}"}, 1000);
      </script></>
  );
}

export default App;