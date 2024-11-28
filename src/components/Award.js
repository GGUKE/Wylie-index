import data from "../data";

function Award() {
	
	let {award}=data;

	return (
		<>
			<div id="section4">
				<div className="inner">
					<div className="title">
						<h3>AWARDS</h3>
						<p>주요 Award의 다양한 수상 실적을 통해 전문성과 크리에이티브를 검증받았습니다.</p>
					</div>
					<div className="content-list">
						<ul>
							{
								award.map((d, i) => (
									<li key={i}>
										<div className="content">
											<a href="">
												<img src={d.imageUrl} alt={d.altText} />
											</a>
											<div className="text">
												<strong>{d.title}</strong>
												<p>{d.award}</p>
												<p>{d.category}</p>
												<p>{d.result}</p>
											</div>
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

export default Award;
