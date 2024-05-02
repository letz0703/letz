import "./globals.css"

export const metadata = {
  title: "Letz Korea",
  description: "Best Price in S. Korea"
}

export default function RootLayout({children}) {
  return (
    <html lang="kr">
      <body>
        <div className={`styles.container`}>
          {/*<Navbar />*/}
          <nav className="top-nav">
            <ul>
              <li>
                <a href="https://www.notion.so/81344badf5894c5ca36d0864e96bc3bd">
                  공동구매 안내
                </a>
              </li>
            </ul>
          </nav>

          <div className="child">{children}</div>
          {/*<Footer />*/}
        </div>
      </body>
    </html>
  )
}
