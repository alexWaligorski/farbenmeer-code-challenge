import "./App.css";
import BlogPost from "./components/BlogPost";
import Header from "./components/Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import { SWRConfig } from "swr";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
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
      <Header />
      <Footer />
      <RouterProvider router={router} />
    </SWRConfig>
  );
}

export default App;
