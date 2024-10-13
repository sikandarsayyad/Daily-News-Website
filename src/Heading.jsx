import React from 'react'
import {PiDotOutlineFill} from "react-icons/pi";
import {FcNews} from "react-icons/fc";
import "./App.css";


function Heading({list}) {  //List is props passed from parent element

    //mapping list array
	return (
		<div className='list-item'>
			<div className='col_1'>
				<div className='source'>
					<i>{
						list.source.name
					}</i>
				</div>
				<a href={
						list.url
					}
					id='ipos'
					target='_blank'>
					<h3>{
						list.title
					}</h3>
				</a>
				<div className='author'>
					<p>Published @ {
						list.publishedAt
					}<PiDotOutlineFill/>  
						<span>By {
							list.author ? list.author : "unknown"
						}</span>
					</p>
				</div>
			</div>
			<div className='col_2'>
				<img src={
						list.urlToImage
					}
					alt="Image"/>
				<a href={
						list.url
					}
					id='ipos'
					target='_blank'>
					<button><FcNews/>full coverage</button>
				</a>
			</div>
		</div>
	)
}

export default Heading
