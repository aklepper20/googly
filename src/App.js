import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Any COMPONENT that sits within the router and routes can have access to the Link,
//so home component, search component - go to home component to learn about links

//
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* when URL is /, it will render the home page */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
