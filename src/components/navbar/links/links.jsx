"use client"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import {useState} from "react"
import Image from "next/image"

const Links = () => {
  const [open, setOpen] = useState(false)
  const links = [
    {title: "home", path: "/"},
    {title: "order", path: "/order"}
  ]
  const session = true

  return (
    <div className={styles.container}>
      {/*<div className={styles.links}>
        {links.map(link => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{title: "Admin", path: "/admin"}} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{title: "Login", path: "/login"}} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen(prev => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map(link => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}*/}
    </div>
  )
}

export default Links
