import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import {auth, provider} from "../config/firebase"

export default function Login() {
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    // console.log(result)
    navigate("/")
  }
  return (
    <div>
      <p>Google Login to continue...</p>
      <button className="btn p-2 mt-1 bg-red-300" onClick={signInWithGoogle}>
        login with google
      </button>
    </div>
  )
}
