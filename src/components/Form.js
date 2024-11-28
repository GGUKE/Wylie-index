function Form() {
	return (
		<>
			<div id="section6">
				<div className="inner">
					<div className="title">
						<h3>CONTACT US</h3>
						<p>다양한 경험과 노하우로 성공을 설계합니다.</p>
					</div>
					<form>
						<div className="form_text">
							<span className="row">
								<input type="text" placeholder="YOUR NAME*" className="text" />
								<input type="text" placeholder="YOUR E-MAIL*" className="text" />
								<input type="text" placeholder="SUBJECT*" className="text" />
							</span>

							<textarea className="message" placeholder="YOUR MESSAGE*"></textarea>
						</div>
						<div className="button">
							<input type="submit" placeholder="SEND MESSAGE" />
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Form;
