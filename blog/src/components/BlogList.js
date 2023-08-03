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
    <ul className="blogposts-container">
      {blogposts.map(({ id, title }) => {
        return (
          <li className="blogposts-item" key={id}>
            <Link className="blogposts-link" to={`/${id}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
