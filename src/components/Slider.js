import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect } from 'react';

function Slider() {

	useEffect(() => {

		const sliderinfo= gsap.timeline();

		sliderinfo.fromTo("#slider .info p", { y:100, opacity: 0 },{ y: 0, opacity: 1, duration: 0.5 });
		sliderinfo.fromTo("#slider .info strong", { y:100, opacity: 0 },{ y: 0, opacity: 1, duration: 0.5 });
		sliderinfo.fromTo("#slider .info a", { y:100, opacity: 0 },{ y: 0, opacity: 1, duration: 0.5 });

	})

	return (
		<>
			<div id="slider">
				<div className="info">
					<p>value of WYLIE</p>
					<strong>꿈을꾸고 실현을 상상하며<br />
							가치를 함께 합니다.</strong>
					<a href="" className="more">MORE</a>
				</div>
				<img src="/images/keyvisual.jpg" alt="keyvisual" />
			</div>
		</>
	)
}

export default Slider;
