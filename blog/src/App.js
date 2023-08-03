import "./App.css";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import { SWRConfig } from "swr";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: BlogList,
  },
  {
    path: ":postId",
    Component: BlogPost,
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
