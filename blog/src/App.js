import "./App.css";
import BlogPost from "./components/BlogPost";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { SWRConfig } from "swr";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: ":postId",
        Component: BlogPost,
      },
    ],
  },
]);

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <RouterProvider router={router} />
    </SWRConfig>
  );
}

export default App;
