import { useEffect } from "react"
import gsap from "gsap"
import data from "../data";

function Business() {

	useEffect(() => {
		let contentlist= document.querySelectorAll("#section .content ul li");
		const sccon= gsap.timeline({
			scrollTrigger: "#section .content",
			start: "top bottom"
		});
	
		contentlist.forEach(function(item, i){
			if(i%2 == 1){
				sccon.fromTo(item, { y: -500, opacity: 0 }, { y:0, opacity: 1, duration: 0.5 });
			}
			else{
				sccon.fromTo(item, { x: 500, opacity: 0 }, { x:0, opacity: 1, duration: 0.5 });
			}
		});

	})

	let {business}=data;

	return (
		<>
			<div id="section">
				<div className="inner">
					<div className="title">
						<h3>BUSINESS</h3>
						<p>고객사의 니즈에 최적화된 디지털 통합 마케팅 솔루션을 제공합니다.</p>
					</div>
					<div className="content">
						<ul>
							{
								business.map((item, index) => (
									<li key={index}>
										<div className="image-container">
											<a href="">
											<img src={item.imageUrl} alt={item.altText} />
											</a>
										</div>
										<div className="text">
											<strong>{item.title}</strong>
											{
												item.services.map((service, i) => (
													<span key={i}>{service}</span>
												))
											}
										</div>
									</li>
								))
							}
						</ul>
					</div>
				</div>	
			</div>
		</>
	)
}

export default Business;
