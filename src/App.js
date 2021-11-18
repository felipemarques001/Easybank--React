import Header from "./components/header/Header"
import Presentation from "./components/presentation/Presentation"
import About from "./components/about/About"
import Articles from "./components/Articles/Articles"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Presentation></Presentation>
        <About></About>
        <Articles></Articles>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
