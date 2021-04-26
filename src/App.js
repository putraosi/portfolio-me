import "./App.css";
import { About, Banner, Footer, NavBar, Prices, Services } from "./components";

function App() {
  return (
    <div>
      <Banner />
      <NavBar />
      <Services />
      <About />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
