import "./globals.css"

async function getData() {
  await wait(2000)
  return fetch("https://jsonplaceholder.typicode.com/todos").then(r => r.json())
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <div>
      <div className="container flex text-center">
        {/*<Image src="/main.jpg" layout="fill" objectFit="cover" alt="background" />*/}
        <div className="backgroundDesktop2"></div>
        <div className="backgroundMobile"></div>
        <nav>
          <ul>
            <li
              className="z-1 sticky"
              style={{position: "absolute", top: 300, left: 300}}
            >
              <a href="https://letz.co.kr">{data.length}</a>
            </li>
          </ul>
        </nav>
        <div className="linkContainer">
          <a
            href="https://www.pinterest.co.kr/canmart051/"
            className="linkButton" // 클래스 이름이 linkBuggon에서 linkButton으로 오타 수정
            rel="noopener noreferrer" // 보안 관련 속성 추가
            target="_blank" // 새 탭에서 링크 열기
          >
            canmart
          </a>
        </div>
      </div>
    </div>
  )
}
//Move to Util later
function wait(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
