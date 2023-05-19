const Form = () => {
	return (
		<section className="main">
			<div className="mainInput">
				<div className="mainInput-box">
					<label htmlFor="inputWeight" className="mainInputWeight">おもさ</label>
					<input type="number" id="inputWeight" placeholder="重さを書いてね！"/>
				</div>
				<div className="mainInput-box">
					<label htmlFor="inputWeightName" className="mainInputWeightName">なまえ</label>
					<input type="text" id="inputWeightName" placeholder="名前を書いてね！"/>
				</div>
			</div>
			<div className="mainSummarize">
				<p>？？？kgの</p>
				<p>？？？は…</p>
			</div>
			<button type="button" className="mainButton">何メロディーレーン？</button>
		</section>
	);
}

export default Form