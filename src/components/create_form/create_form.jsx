import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {addDoc, collection} from "firebase/firestore"
import {auth, db} from "../../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"

export default function CreateForm() {
  const [user] = useAuthState(auth)
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must add a description")
  })

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({resolver: yupResolver(schema)})

  const postsRef = collection(db, "posts")

  const onCreatePost = async data => {
    // console.log(data)
    await addDoc(postsRef, {
      // title: data.title,
      // description: data.description,
      ...data,
      username: user?.displayName,
      userId: user?.uid
    })
  }

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Title..." {...register("title")} />
      <p className="text-red-500">{errors.title?.message}</p>
      <textarea placeholder="Description..." {...register("description")} />
      <p className="text-red-500">{errors.description?.message}</p>
      <input type="submit" />
    </form>
  )
}
