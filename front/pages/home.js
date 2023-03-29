import clientPromise from '../lib/mongodb.js'


export default function Home({post}) {
  return (
    <div>
        <h2>Post Home</h2>
        {post.map((pst) => (
            <>
            <h2>{pst.title}</h2>
            <p>{pst.content}</p>
            </>
        ))}

    </div>
  )
}

export async function getServerSideProps() {
try {
    const client = await clientPromise;
    const db = client.db("test");

    const post = await db
        .collection("posts")
        .find({})
        .toArray()
        return {
            props: { post: JSON.parse(JSON.stringify(post)) },
        };

} catch (error) {
    console.error(e);

}

}
