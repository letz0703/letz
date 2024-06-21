'use client'
import {use, useEffect, useState} from "react"

//import styles from './page.module.css'
const Page = () => {
const [stateName, setStateName] = useState("LETz iCANMART")

useEffect(() => {
	document.title = stateName
}, [stateName]);


	return (
		<div>
			<h2>{stateName}</h2>
		</div>
	)
}
export default Page






