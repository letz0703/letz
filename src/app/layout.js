import Navbar from "@/components/navbar/navbar"
import {Inter} from "next/font/google"
import Footer from "./footer/footer"
import "./globals.css"

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "Letz Shop Together",
  description: "Shop Japan"
}

export default function RootLayout({children}) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <div className={`styles.container`}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
