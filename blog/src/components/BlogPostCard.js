import { Link } from "react-router-dom";

export default function BlogPostCard({ id, title }) {
  return (
    <Link className="blogposts-card" to={`/${id}`}>
      <h2 className="blogposts-card__heading">{title.toUpperCase()}</h2>
    </Link>
  );
}
