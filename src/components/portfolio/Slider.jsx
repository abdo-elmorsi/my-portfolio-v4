import React, { useMemo } from 'react'
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider({ src = [] }) {
	const settings = useMemo(() => {
		return {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
		}
	}, []);

	return <Slick {...settings}>
		{src.map((ele, i) => {
			return <div key={i} className="slide_item">
				<img src={`img/projects/${ele}`} alt={`slide ${i}`} />
			</div>
		})}
	</Slick>
}
