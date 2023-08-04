import useSWR from "swr";
import BlogPostCard from "./BlogPostCard";
import { DATA_API_URL } from "../config";

export default function BlogList() {
  const {
    data: blogposts,
    error,
    isLoading,
  } = useSWR(`${DATA_API_URL}/blogposts`);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <section className="blogposts-container">
      {blogposts.map(({ id, title }) => {
        return <BlogPostCard key={id} id={id} title={title} />;
      })}
    </section>
  );
}
