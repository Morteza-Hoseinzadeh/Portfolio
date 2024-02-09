import React from "react";
import { useRoutes } from "react-router-dom"
import routes from "./components/routes";

export default function App() {

  let Route = useRoutes(routes)

  return (
    <>
    </>
  );
}

