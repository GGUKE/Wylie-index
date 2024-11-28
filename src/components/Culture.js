import { useEffect } from "react";
import gsap from "gsap";
import data from "../data";

function Culture() {

	useEffect(() => {
		let s3list= document.querySelectorAll("#section3 .content-list ul li");

		const s3con= gsap.timeline({
			scrollTrigger: "#section3 .content-list",
			start: "top bottom",
			onEnterBack: () => {
				gsap.to(s3list, { 
					opacity: 0, 
					duration: 0.5, 
					stagger: 0.1 
				});
				gsap.to("#section3 .content-list", { opacity: 0 });
			}
		});
	
		s3list.forEach(function(item, i){
			if(i%2 == 1){
				s3con.fromTo(item, { x: 100, opacity: 0}, { x: 0, opacity: 1, duration: 0.5});
			}
			else{
				s3con.fromTo(item, { x: -100, opacity: 0}, { x: 0, opacity: 1, duration: 0.5});
			}
		})
	})

	let {culture}=data;

	return (
		<>
			<div id="section3">
				<div className="title">
					<h3>CULTURE</h3>
					<p>매년 새롭게 구성되는 Club Wylie는 다양한 직군의 멤버들이 조를 이루어<br />
					한 해 동안 허락된 땡땡이를 즐기며 팀워크를 다집니다.</p>
				</div>
				<div className="content-list">
					<ul>
						{
   
							culture.map((item, index) => (
								<li key={index}>
									<div className={`content content-${index % 2 === 0 ? 'left' : 'right'}`}>
										<div className="fixed-image">
											<a href="">
												<img src={item.imageUrl} alt={item.altText} />
											</a>
											<div className="text">
												<div className="text-top">
													<strong>{item.type} - {item.title}</strong>
													<strong>{item.subtitle}</strong>
												</div>
												<div className="text-bottom">
													{item.desc.map((desc, i) => (
														<p key={i}>{desc}</p>
													))}
												</div>
											</div>
										</div>
									</div>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Culture;
