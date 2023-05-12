const ModeSwitch = () => {
	return (
		<section className="selectMenu">
			<div className="selectMenuStandard">
				<div className="selectMenuBalloon">
					<p>1メロディーレーン = 338kg<br />最小馬体重勝利記録で計算！</p>
				</div>
				<div className="selectMenuRadio">
					<input type="radio" name="menu" value="standard" id="radioStandard" checked/>
					<label>標準モード</label>
				</div>
			</div>
			<div className="selectMenuVarious">
				<div className="selectMenuBalloon">
					<p>標準&うまれたて！<br />2種類のメロディーレーンと<br />にんじんで計算！</p>
				</div>
				<div className="selectMenuRadio">
					<input type="radio" name="menu" value="variousMelodyLane" id="radioVarious"/>
					<label>いろいろモード</label>
				</div>
			</div>
		</section>
	);
};

export default ModeSwitch;