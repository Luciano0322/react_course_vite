import { useRoutes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import RegisterPage from "./pages/RegisterPage"

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <RegisterPage /> },
    ]
  },
]

const RouteConf = () => {
  const routeConfig = useRoutes(routes)
  return routeConfig
}

export default RouteConf