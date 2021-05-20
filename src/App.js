import "./App.css";
import { Banner, NavBar, Services, About, Skills, Portfolio, Contact, Prices, Footer } from "./pages";

function App() {
  return (
    <div>
      <Banner />
      <NavBar />
      <Services />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
