import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext.js'

function Count() {
	const { count, increase, decrease } = useContext(CounterContext)

	return (
		<div className='count_cont'>
			<p>Count is: {count}</p>
			<div className='count_btn'>
				<button onClick={increase} className='btn'>
					Increase
				</button>
				<button onClick={decrease} className='btn'>
					Decrease
				</button>
			</div>
		</div>
	)
}

export default Count
