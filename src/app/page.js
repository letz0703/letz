import Image from "next/image"
import "./globals.css"

export default function Home() {
  return (
    <div className="container flex flex-col">
      <h1 className="title">부산 깡통시장</h1>
      <p className="description">구매 대행(택배비 4000)</p>
      <p className="description">공동 구매(무료 택배)</p>
      <div className="text-blue-500">문자만 받습니다 010.9876.1815</div>
      <a href="https://www.pinterest.co.kr/canmart051/" className="btn">
        pinterest
      </a>
      <div className="items">
        <ul>
          <li>
            <h1 className="text-gray-700 text-xl ">
              <a href="">공동구매: 곤약젤리 3개 만원(배송비 무료)</a>{" "}
            </h1>
            <p className="description">
              <ul>
                <li className="text-sm">선발송: 당일발송</li>
                <li className="text-sm">후주문: 발송 후 일본현지 주문</li>
                <li>
                  <button className="btn">
                    <a href="https://arc.net/e/8155EE89-315F-4D13-B44B-190488FDFC81">
                      공동구매 자세히 보기
                    </a>
                  </button>
                </li>
              </ul>
            </p>
            <div className="flex">
              <Image src="/zero.jpg" alt="" width={100} height={100} />
              <Image src="/musora.jpg" alt="" width={100} height={100} />
              <Image src="/appgra.jpg" alt="" width={100} height={100} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
