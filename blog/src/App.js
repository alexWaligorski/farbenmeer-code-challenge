import "./App.css";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const {
    data: blogposts,
    error,
    isLoading,
  } = useSWR("http://localhost:3001/rest/blogposts", fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <div className="App">
      {blogposts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}

export default App;
