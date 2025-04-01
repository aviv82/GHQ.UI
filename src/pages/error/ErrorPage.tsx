import { useRouteError } from "react-router";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/nav-bar/NavBar";
import "./errorPage.css";
import { ErrorVm } from "../../models/ErrorVm";

export const ErrorPage = () => {
  const error = useRouteError() as ErrorVm;

  return (
    <div>
      <NavBar />
      <div className="error-page">
        <h2 className="error-head">Something went wrong</h2>
        <h4 className="error-subhead">
          {error.status || 500} {error.statusText || "unexpected error"}
        </h4>
        <p className="error-details">{error.data || "No details available"}</p>
      </div>
      <Footer />
    </div>
  );
};
