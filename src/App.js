import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import RepoPage from "./pages/RepoPage";
import RepoItem from "./pages/RepoItem";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { GithubProvider } from "./contextAPI/GithubUserContext";


export default function App() {
  return (
    <div className="container">
      <GithubProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repo/*" element={<RepoPage />} />
            {/* <Route path="/repoItem/:id" element={<RepoItem />} /> */}
            <Route path="/error" element={<Error />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notfound" />} />
          </Routes>
        </Router>
      </GithubProvider>
    </div>
  );
}
