'use client'
import {use, useEffect, useState} from "react"

import styles from './wds.css'
const Page = () => {
const [title, settitle] = useState("letz");
const [product, setProduct] = useState();
const [setLoading, setSetLoading] = useState(true);

useEffect(() => {
	const handler = () => {
		document.title = title +" info"
		console.log(title);
	}

	const timeout = setTiemout(() => {
		console.log(`this page name is ${title}`)
	},1000)

	document.addEventListener("click", handler)
	return () => {
		//document.removeEventListener("click", handler)
		clearTimeout(timeout)
	}
}, [title]);

useEffect(() => {
	fetch('').then(res => res.JSON()).then(data=> {
		setProduct(data)
	}).finally(() => {
		setLoading(false)
	})
}, []);

	return (
		<div>
			<input value={title} onChange={e => settitle(e.target.value)}/>
			<button className="btn_ic" onClick={() => settitle(title)}>button</button>
			<h1>Page Title is {title} 검색</h1>
			<h1>{JSON.stringify(product)}</h1>
		</div>
	)
}
export default Page






