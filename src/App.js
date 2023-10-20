import Count from './components/Count'
import CountingContextProvider from './contexts/CountingContext'

function App() {
	return (
		<CountingContextProvider>
			<div className='app'>
				<h1>Context API</h1>
				<Count />
			</div>
		</CountingContextProvider>
	)
}

export default App
