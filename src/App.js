import "./App.css";
import { AppDevelopmentSection, DigitalStrategySection, FooterSection, HeaderSection,HeroSection } from "./components";

function App() {
  return (
    <div>
      <HeaderSection />
      <HeroSection/>
      <AppDevelopmentSection/>
      <DigitalStrategySection/>
      <FooterSection/>
    </div>
  );
}

export default App;
