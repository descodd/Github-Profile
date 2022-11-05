import { useContext } from "react";
import GithubUserContext from "../contextAPI/GithubUserContext";
import User from "../components/User";
import Spinner from "../components/Spinner";

export default function Home() {
  const { user, loading } = useContext(GithubUserContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <User user={user} />
    </div>
  );
}
