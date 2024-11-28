import data from "../data";

function Portfolio() {

	let {portfolio}=data;
	
	return (
		<>
			<div id="section2">
				<div className="inner">
					<div className="title">
						<h3>PORTFOLIO</h3>
						<p>고객사와 하나 된 울림이 만들어 낸 행복한 성과입니다.</p>
					</div>
					<div className="content">
						<ul>
							{
								portfolio.map((item, index) => (
									<li key={index}>
										<a href="">
											<div className="image">
												<img src={item.imageUrl} alt={item.altText} />
											</div>
											<div className="text">
												<strong>{item.title}</strong>
												<span>{item.desc}</span>
											</div>
										</a>
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

export default Portfolio;
