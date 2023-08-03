import useSWR from "swr";
import BlogPostCard from "./BlogPostCard";

export default function BlogList() {
  const {
    data: blogposts,
    error,
    isLoading,
  } = useSWR("http://localhost:3001/rest/blogposts");

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <section className="blogposts-container">
      {blogposts.map(({ id, title }) => {
        return <BlogPostCard id={id} title={title} />;
      })}
    </section>
  );
}
