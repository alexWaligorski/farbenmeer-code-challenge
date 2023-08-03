import useSWR from "swr";

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
      {blogposts.map(({ id, title, content }) => {
        return (
          <li key={id}>
            <h3>{title}</h3>
          </li>
        );
      })}
    </ul>
  );
}
