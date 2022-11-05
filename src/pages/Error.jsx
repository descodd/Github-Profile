import ErrorBoundaries from "../components/ErrorBoundaries";
import Repo from "../components/Repo";

function Error() {
  return (
    <div className="error">
      <h1>Error Page</h1>
      <p>
        Testing the error boundary by not passing the actual prop to the Repo
        components
      </p>
      <ErrorBoundaries>
        <Repo />
      </ErrorBoundaries>
    </div>
  );
}

export default Error;
