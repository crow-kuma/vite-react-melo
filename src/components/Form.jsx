// import { useState } from 'react';

const Form = (props) => {
	
	return (
		<section className="main">
			<div className="mainInput">
				<div className="mainInput-box">
					<label htmlFor="inputWeight" className="mainInputWeight">おもさ</label>
					<input type="number" id="inputWeight" name="weight" placeholder="重さを書いてね！" onChange={e => props.setWeight(e.target.valueAsNumber)}/>
				</div>
				<div className="mainInput-box">
					<label htmlFor="inputWeightName" className="mainInputWeightName">なまえ</label>
					<input type="text" id="inputWeightName" name="weightName" placeholder="名前を書いてね！" onChange={e => props.setWeightName(e.target.value)}/>
				</div>
			</div>
			<div className="mainSummarize">
				<p>{props.weight === 0 ? "？？？" : props.weight}kgの</p>
				<p>{props.weightName === "" ? "？？？" : props.weightName}は…</p>
			</div>
			<button type="button" className="mainButton" onClick={props.openResult}>何メロディーレーン？</button>
		</section>
	);
}

export default Form