import { useContext } from 'react'
import { ResultContext } from '../App'
import imgMeloStd from '../assets/images/MelodyLaneStd.png'

const StandardResult = () => {
	const { standardResult } = useContext(ResultContext);
	return (
		<div className="resultStandard resultCommon" >
			<div>
				<img src={imgMeloStd} alt="手を挙げるメロディーレーン"/>
			</div>
			<div>
				<p>{standardResult}メロディーレーンです！</p>
			</div>
		</div>
	)
}
export default StandardResult