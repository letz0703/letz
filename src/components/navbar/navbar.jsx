import Link from "next/link"
import styles from "./navbar.module.css"
import Links from "./links/links"
const Navbar = () => {
  return (
    <div className={`${styles.container} ${styles.links}`}>
      <div className={`${styles.logo}`}>i.etz</div>
      <Links />
    </div>
  )
}
export default Navbar
