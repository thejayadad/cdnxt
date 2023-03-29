
import { useState } from "react";
import { useRouter } from 'next/router'


export default function Home({ posts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter("");



  let submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    res = await res.json();
    setPostsState([...postsState, res]);
    setTitle("");
    setContent("");
    setLoading(false);
    router.push("/")

  };

  return (
    <>
      <div>

      <div>


        </div>

        <div className="add-form">
          <form onSubmit={submitForm}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              type="text"
              name="content"
              rows="10"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" disabled={loading ? true : false}>
              {loading ? "Adding" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}