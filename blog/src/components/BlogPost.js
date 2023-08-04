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
      <article className="blogpost">
        <div className="blogpost__image-container">
          <img src={image} alt="cute cat doing stuff related to post content" />
        </div>
        <h2>{title}</h2>
        <h3 className="blogpost__subtitle">{subtitle}</h3>
        <p>by: {author}</p>
        <p>posted: {created.slice(0, 10)}</p>
        <div className="copy-url-container">
          {isCopied && (
            <div className="copy-url-notification">Link copied!</div>
          )}
          <button
            className="copy-url-button"
            onClick={handleCopyUrl}
            type="button"
          >
            Copy URL
          </button>
        </div>
        <p>{content}</p>
      </article>
    </main>
  );
}
