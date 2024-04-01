"use client"
import Link from "next/link" // 주의: 이 코드 예제에서는 Link 컴포넌트가 사용되지 않고 있습니다.
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"

const Links = () => {
  const links = [
    {title: "home", path: "/"},
    {title: "order", path: "/order"}
  ]
  const session = true
  const isAdmin = true

  return (
    <div className={styles.links}>
      {links.map(link => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <NavLink item={{title: "login", path: "/login"}} />
      )}
    </div>
  )

  function handleLogout() {
    // 로그아웃 처리 로직 구현
  }
}

export default Links
