import data from "../data";

function Signature() {

	let {signature}=data;

	return (
		<>
			<div id="section5">
				<div className="inner">
					<ul>
						{
							signature.map((d, i) => (
								<li key={i}>
									<a href="">
										<img src={d.src} alt={d.alt} />
									</a>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</>
	)
}
export default Signature;
