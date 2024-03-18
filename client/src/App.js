import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element />
        </Routes>
      </BrowserRouter>
      Hello
    </div>
  );
}

export default App;
