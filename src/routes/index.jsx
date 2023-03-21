import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function index(props) {
  return (
    <Routes>
      {/* public route */}
      {routes.map(
        (route) =>
          route.public &&
          route.public.map((val, i) => (
            <Route key={i} path={val.path} element={<val.component />} />
          ))
      )}
      {/* private route */}
      {routes.map(
        (route) =>
          route.private &&
          route.private.map((val, i) => (
            <Route key={i} path={val.path} element={<val.component />} />
          ))
      )}
    </Routes>
  );
}

export default index;
