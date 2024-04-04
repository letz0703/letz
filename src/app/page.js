import "./globals.css"

export default function Home() {
  return (
    <div className="container flex text-center">
      {/*<Image src="/main.jpg" layout="fill" objectFit="cover" alt="background" />*/}
      <div className="backgroundDesktop2"></div>
      <div className="backgroundMobile"></div>
      <div className="linkContainer">
        <a
          href="https://www.pinterest.co.kr/canmart051/"
          className="linkButton" // 클래스 이름이 linkBuggon에서 linkButton으로 오타 수정
          rel="noopener noreferrer" // 보안 관련 속성 추가
          target="_blank" // 새 탭에서 링크 열기
        >
          아이템 보기
        </a>
      </div>
    </div>
  )
}
