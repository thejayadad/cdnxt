

import clientPromise from "../lib/mongodb";



export default function Home({users}) {
  return (
    <>
     <h2>Home</h2>
     <div>
        {users.map((user, index) => {
          return (
            <div className="card" key={index}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.mobile}</p>
            </div>
          );
        })}
      </div>

    </>
  )
}


export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("test");

  let users = await db.collection("users").find({}).toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}