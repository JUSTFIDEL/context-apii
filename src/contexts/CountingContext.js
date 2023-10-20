import { useState, createContext } from 'react'

export const CountingContext = createContext()

const CountingContextProvider = ({ children }) => {
	const [count, setCount] = useState(0)

	function increase() {
		setCount(count + 1)
	}

	function decrease() {
		setCount(count - 1)
	}

	const value = { count, increase, decrease }

	return (
		<CountingContext.Provider value={value}>
			{children}
		</CountingContext.Provider>
	)
}

export default CountingContextProvider
