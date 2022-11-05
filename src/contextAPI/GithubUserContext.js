import { createContext, useState, useEffect } from "react";

const GithubUserContext = createContext();

export const GithubProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [repo, setRepo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(6);

  const url = process.env.REACT_APP_GITHUB_URL;
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    fetchUser();
    fetchRepo();
  }, []);

  // fetching the user
  const fetchUser = async () => {
    const response = await fetch(`${url}/users/descodd`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  // fetching the repos
  const fetchRepo = async () => {
    const response = await fetch(`${url}/users/descodd/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setRepos(data);
    setLoading(false);
  };

  // fetch single repo
  const fetchSingleRepo = async (id) => {
    const response = await fetch(`${url}/repos/descodd/${id}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setRepo(data);
    setLoading(false);
  };

  // Pagination logic
  const indexOfLastNumber = currentPage * repoPerPage;
  const indexOfFirstNumber = indexOfLastNumber - repoPerPage;
  const currentRepo = repos.slice(indexOfFirstNumber, indexOfLastNumber);
  const numberOfPages = Math.ceil(repos.length / repoPerPage);

  return (
    <GithubUserContext.Provider
      value={{
        user,
        repo,
        loading,
        currentRepo,
        numberOfPages,
        currentPage,
        setCurrentPage,
        fetchSingleRepo,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
};

export default GithubUserContext;
