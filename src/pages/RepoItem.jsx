import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import GithubUserContext from "../contextAPI/GithubUserContext";

function RepoItem() {
  const { loading, repo, fetchSingleRepo } = useContext(GithubUserContext);
  const { id } = useParams();

  useEffect(() => {
    fetchSingleRepo(id);
  }, [id]);

  if (loading) return <Spinner />;
  return (
    <div className="rep-card">
      <h1>Single Repo</h1>
      <div>
        <h3>Name: {repo.name}</h3>
        <p>Fork: {repo.forks}</p>
        <p>Fork: {repo.language}</p>
        <p>File Size: {repo.size}kb</p>
        <p>visibility : {repo.visibility}</p>
        <p>watchers : {repo.watchers}</p>
        <p>open issues : {repo.open_issues}</p>
        <p>created_at : {repo.created_at}</p>
        <button className="btn">
          <a target="_blank" rel="noreferrer" href={repo.html_url}>
            view on github
          </a>
        </button>
      </div>
    </div>
  );
}

export default RepoItem;
