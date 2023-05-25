import imgMeloTwitter from '../assets/images/MelodyLaneTwitter.png'
import imgMeloLINE from '../assets/images/MelodyLaneLINE.png'
import imgMeloCopy from '../assets/images/MelodyLaneCopy.png'
import imgMeloCopied from '../assets/images/MelodyLaneCopied.png'
import imgMeloAgain from '../assets/images/MelodyLaneAgain.png'
import imgMeloFlying from '../assets/images/MelodyLaneFlying.png'

const VariousShare = () => {
	return (
		<div className="resultShare">
			<div className="resultShareTwitter">
				<button target="_blank" rel="noopener noreferrer">
					<img src={imgMeloTwitter} alt="メロディーレーンと青い鳥" />
					<p>Twitterで<br />シェア？</p>
				</button>
			</div>
			<div className="resultShareLINE">
				<img src={imgMeloLINE} alt="スマホを持つメロディーレーン" />
				<p>LINEで<br />シェア？</p>
			</div>
			<div className="resultShareCopy">
				<button type="button" >
					<img src={imgMeloCopy} alt="コピーするメロディーレーン" />
					<img src={imgMeloCopied} alt="コピー完了したメロディーレーン" />
					<p>結果をコピー？→コピー完了！</p>
				</button>
			</div>
			<section className="again">
				<button type="button" className="againButton">
					<img src={imgMeloAgain} alt="ほうきを持ったメロディーレーン" />
					<img src={imgMeloFlying} alt="ほうきで飛ぶメロディーレーン" />
					<p>もう一回？</p>
				</button>
			</section>
		</div>
	)
}
export default VariousShare