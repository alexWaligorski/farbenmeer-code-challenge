import { useParams } from "react-router-dom";
import useSWR from "swr";

export default function BlogPost() {
  const { postId } = useParams();

  const {
    data: blogpost,
    error,
    isLoading,
  } = useSWR(`http://localhost:3001/rest/blogpost/${postId}`);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  const { title, subtitle, author, created, content, image } = blogpost;

  return (
    <main>
      <article>
        <img src={image} alt="cute cat doing stuff related to post content" />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>by: {author}</p>
        <p>{created}</p>
        <p>{content}</p>
      </article>
    </main>
  );
}
