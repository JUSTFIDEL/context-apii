import Count from './components/Count'
import CounterContextProvider from './contexts/CounterContext'

function App() {
	return (
		<CounterContextProvider>
			<div className='app'>
				<h1>Context API</h1>
				<Count />
			</div>
		</CounterContextProvider>
	)
}

export default App
