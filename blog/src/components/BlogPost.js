import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import useSWR from "swr";

export default function BlogPost() {
  const { postId } = useParams();

  const [isCopied, setIsCopied] = useState(false);

  const { pathname: path } = useLocation();

  const {
    data: blogpost,
    error,
    isLoading,
  } = useSWR(`http://localhost:3001/rest/blogpost/${postId}`);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  const { title, subtitle, author, created, content, image } = blogpost;

  function handleCopyUrl() {
    navigator.clipboard.writeText(`http://localhost:3000${path}`).then(
      () => {
        setIsCopied(true);
      },
      (err) => {
        console.log(err);
      }
    );

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <main>
      <article>
        <img src={image} alt="cute cat doing stuff related to post content" />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>by: {author}</p>
        <p>{created}</p>
        {isCopied && <div>Link copied!</div>}
        <button onClick={handleCopyUrl} type="button">
          Copy URL
        </button>
        <p>{content}</p>
      </article>
    </main>
  );
}
