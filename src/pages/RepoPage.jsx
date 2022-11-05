import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Repo from "../components/Repo";
import Pagination from "../components/Pagination";
import RepoItem from "./RepoItem";
import GithubUserContext from "../contextAPI/GithubUserContext";
import Spinner from "../components/Spinner";

function RepoPage() {
  const { loading, currentRepo, numberOfPages, currentPage, setCurrentPage } =
    useContext(GithubUserContext);

  const { pathname } = useLocation();

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="container">
      {pathname === "/repo" && (
        <div className="flex">
          {/* <User user={user} /> */}
          <div>
            <Repo currentRepo={currentRepo} />
            <Pagination
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}

      <Routes>
        <Route path="repoItem/:id" element={<RepoItem />} />
      </Routes>
    </section>
  );
}

export default RepoPage;
