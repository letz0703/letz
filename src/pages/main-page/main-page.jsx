/* eslint-disable react-hooks/exhaustive-deps */
import {getDocs, collection} from "firebase/firestore"
import React, {useState, useEffect} from "react"
import {db} from "../../config/firebase"
import Post from "./post"
import {v4 as uuidv4} from "uuid"

export default function Main() {
  const [postList, setPostList] = useState(null)

  const postRef = collection(db, "posts")

  const getPosts = async () => {
    const data = await getDocs(postRef)
    setPostList(data.docs.map(row => ({...row.data(), id: uuidv4()})))
    console.log(postList)
  }
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      {postList?.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}
