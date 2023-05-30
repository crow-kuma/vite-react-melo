import StandardResult from './StandardResult'
import StandardShare from './StandardShare'

import { useContext } from 'react'
import { ResultContext } from '../App'

const Standard = () => {
	const { isOpen } = useContext(ResultContext);
	return (
		<div style={{
			display: isOpen ? 'block' : 'none',
			transition: '1s',
		}}>
			<StandardResult />
			<StandardShare />
		</div>
	)
}
export default Standard