import { useState, createContext } from 'react'

export const CounterContext = createContext()

const CounterContextProvider = ({ children }) => {
	const [count, setCount] = useState(0)

	function increase() {
		setCount(count + 1)
	}

	function decrease() {
		setCount(count - 1)
	}

	const value = { count, increase, decrease }

	return (
		<CounterContext.Provider value={value}>
			{children}
		</CounterContext.Provider>
	)
}

export default CounterContextProvider
