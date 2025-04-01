import { useLoaderData } from "react-router";
import "./homePage.css";

export const HomePage = () => {
  const { health } = useLoaderData();
  return (
    <div className="home-page">
      <pre>{JSON.stringify(health, null, 2)}</pre>
      <p>home</p>
    </div>
  );
};
