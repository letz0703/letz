import Image from "next/image"
import "./globals.css"

export default function Home() {
  return (
    <>
      <div className={`styles.container`}>부산 깡통시장 구매대행</div>
      <div className="imageContainer">
        <Image src="/orihiro.jpg" alt="" fill></Image>
      </div>
    </>
  )
}
