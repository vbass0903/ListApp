//Bootstrap

//Components
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
