import ForgotPassword from "../components/organisms/forms/ForgotPassword";
import Login from "../components/organisms/forms/Login";
import Register from "../components/organisms/forms/Register";
import DashboardLayout from "../components/pages/DashboardLayout";
import MainPage from "../components/pages/MainPage";
import About from "../components/templates/About/About";
import Contact from "../components/templates/Contact/Contact";
import Dashboard from "../components/templates/Dashboard/Dashboard";
import Home from "../components/templates/Home";
import Task from "../components/templates/Task/Task";
import Error from "../Error";

const routes = [
  {
    path: "/",
    element: <MainPage />,
    error: <Error />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/passwordReset",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/:dashboard",
    element: <DashboardLayout />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/:dashboard/task",
        element: <Task />,
      },
    ],
  },
];

export default routes;
