import useSWR from "swr";
import { Link } from "react-router-dom";

export default function BlogList() {
  const {
    data: blogposts,
    error,
    isLoading,
  } = useSWR("http://localhost:3001/rest/blogposts");

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <ul>
      {blogposts.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/${id}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
