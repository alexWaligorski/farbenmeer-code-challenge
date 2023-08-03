import { Link } from "react-router-dom";

export default function BlogPostCard({ id, title }) {
  return (
    <Link key={id} className="blogposts-card" to={`/${id}`}>
      <h3 className="blogposts-card__heading">{title.toUpperCase()}</h3>
    </Link>
  );
}
