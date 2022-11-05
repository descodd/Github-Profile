import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function Repo({ currentRepo }) {
  return (
    <div className="rep-container">
      {currentRepo.map((repo) => (
        <Link to={`repoItem/${repo.name}`} className="rep-card">
          <div key={repo.id}>
            <div className="head">
              <h3>{repo.name}</h3>
              <FaExternalLinkAlt />
            </div>
            <p>{repo.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Repo;
