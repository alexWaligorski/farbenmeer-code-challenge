import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { DATA_API_URL, APP_URL } from "../config";
import useSWR from "swr";

export default function BlogPost() {
  const { postId } = useParams();

  const [isCopied, setIsCopied] = useState(false);

  const { pathname: path } = useLocation();

  const {
    data: blogpost,
    error,
    isLoading,
  } = useSWR(`${DATA_API_URL}/blogpost/${postId}`);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  const { title, subtitle, author, created, content, image } = blogpost;

  function handleCopyUrl() {
    navigator.clipboard.writeText(`${APP_URL}${path}`).then(
      () => {
        setIsCopied(true);
      },
      (err) => {
        console.error(err);
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
        <h1>{title}</h1>
        <h2 className="blogpost__subtitle">{subtitle}</h2>
        <p>by: {author}</p>
        <p>posted: {created.slice(0, 10)}</p>
        <div role="alert" className="copy-url-container">
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
