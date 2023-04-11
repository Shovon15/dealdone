import "./App.css";
import ScrollButton from "./Components/Button/ScrollButton";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1440px] mx-auto bg-gray-100 text-textPrimary dark:bg-dark dark:text-white static ">
        <LandingPage />
        <ScrollButton />
      </div>
    </div>
  );
}

export default App;
