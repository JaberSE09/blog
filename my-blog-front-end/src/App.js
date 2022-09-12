import "./App.css";
import "./index.css"
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./pages/NavBar";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (

    <div className="App">
    <NavBar />
      <div id="page-body">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/article" element={<ArticleListPage />} />
          <Route path="/article/:name" element={<ArticlePage />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
