import "./App.css";
import Homepage from "./routes/Home/Homepage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
