import { useContext } from 'react'
import { ResultContext } from '../App'

import imgMeloVarious from '../assets/images/MelodyLaneVarious.png'

const VariousResult = () => {
	const { variousResult, variousResultBB, variousResultCarrot } = useContext(ResultContext);
	return (
		<div className="resultVarious resultCommon">
			<div>
				<img src={imgMeloVarious} alt="メロディーレーンと生まれたてのメロディーレーンとにんじん" />
			</div>
			<div>
				<p>{variousResult}メロディーレーン<br />
				{variousResultBB}うまれたてのメロディーレーン<br />
				そしてにんじん{variousResultCarrot}本です！</p>
			</div>
		</div>
	)
}

export default VariousResult