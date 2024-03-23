import { Navigate } from "react-router-dom";

const languages = ["en", "fa", "sa", "fr", "de"];
const path = window.location.pathname;
const language = path.split("/")[1];

const routes = [
  {
    path: "/",
    element: <Navigate to={languages.includes(language) ? language : "en"} />,
  },
];

export default routes;
