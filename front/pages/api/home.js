

import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("test");

       const post = await db
           .collection("posts")
           .find({})

           .toArray();

       res.json(post);
   } catch (e) {
       console.error(e);
   }
};