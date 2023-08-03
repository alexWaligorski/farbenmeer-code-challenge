import BlogList from "../components/BlogList";

export default function Home() {
  return (
    <main>
      <h1>amazing cat content!</h1>
      <section className="blog-intro">
        Gain intimate insights into the unexciting life of Maxi Mustermann's
        cat. Sleeping, eating, purring, repeat. Every day is like the next and
        yet Maxi manages to create captivating blog entries that make the hearts
        of all cat lovers beat faster.
      </section>
      <BlogList />
    </main>
  );
}
