import { Link } from "react-router-dom";

const ModeSwitch = (props) => {
	return (
		<section className="selectMenu">
			<div className="selectMenuStandard">
				<div className="selectMenuBalloon">
					<p>1メロディーレーン = 338kg<br />最小馬体重勝利記録で計算！</p>
				</div>
				<div className={`selectMenuLink ${props.isStandard ? "selectedStandard" : ""}`} onClick={props.standardModeSwitch}>
					<Link to="/">標準モード</Link>
				</div>
			</div>
			<div className="selectMenuVarious">
				<div className="selectMenuBalloon">
					<p>標準&うまれたて！<br />2種類のメロディーレーンと<br />にんじんで計算！</p>
				</div>
				<div className={`selectMenuLink ${props.isStandard ? "" : "selectedVarious"}`} onClick={props.variousModeSwitch}>
					<Link to="/various">いろいろモード</Link>
				</div>
			</div>
		</section>
	);
};

export default ModeSwitch;