import "./globals.css"

export const metadata = {
  title: "Letz Shop Together",
  description: "Shop Japan"
}

export default function RootLayout({children}) {
  return (
    <html lang="kr">
      <body>
        <div className={`styles.container`}>
          {/*<Navbar />*/}
          <div className="child">{children}</div>
          {/*<Footer />*/}
        </div>
      </body>
    </html>
  )
}
