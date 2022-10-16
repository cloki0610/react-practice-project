import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Sorry, Page not found, seems somthing went wrong.</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
