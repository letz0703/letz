import Link from "next/link"
import styles from "./navbar.module.css"
import "../../app/globals.css"
import Links from "./links/links"
const Navbar = () => {
  return (
    <div className={`${styles.container} ${styles.links}`}>
      <div className={`${styles.logo} logo`}>i.etz</div>
      <Links />
    </div>
  )
}
export default Navbar
