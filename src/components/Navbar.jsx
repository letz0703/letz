/* eslint-disable jsx-a11y/alt-text */
import {Link} from "react-router-dom"
import {auth} from "../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import "../css/Navbar.css"
import {signOut} from "firebase/auth"

export default function Navbar() {
  const [user] = useAuthState(auth)
  const handleSignOut = async () => {
    await signOut(auth)
  }
  return (
    <div className="flex items-center justify-end bg-slate-200 p-2 nav">
      <Link to="/" className="mr-2">
        Home
      </Link>
      {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <div className="flex ml-2">
            {/* <p>{auth.currentUser?.displayName}</p> */}
            <img
              src={auth.currentUser?.photoURL || ""}
              width="30px"
              height="30px"
              className="mr-2"
            />
            <button className="mr-2" onClick={handleSignOut}>
              Log out
            </button>
          </div>
          <Link to="/createpost">Create Post</Link>
        </>
      )}
    </div>
  )
}
