import { useRoutes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    ]
  },
]

const RouteConf = () => {
  const routeConfig = useRoutes(routes)
  return routeConfig
}

export default RouteConf