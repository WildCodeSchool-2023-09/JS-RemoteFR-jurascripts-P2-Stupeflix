import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="errorPage">
      <NavBar />
      <p>{error.status === 404 ? "404 Spell Not Found" : ""}</p>
    </div>
  );
}
