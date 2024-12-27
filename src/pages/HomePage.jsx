import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>Top trip</h1>
      <Link to="/app">Go to app</Link>
    </div>
  );
}

export default HomePage;
