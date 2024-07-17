import { useState, useEffect, createContext, useContext, useRef } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'


const UserContext = createContext();

function Component1() {
	const [user, setUser] = useState("Jesse Hall");

	return (
		<UserContext.Provider value={user}>
			<h1>{`Hello ${user}!`}</h1>
			<Component2 />
		</UserContext.Provider>
	);
}

function Component2() {
	return (
		<>
			<h1>Component 2</h1>
			<Component3 />
		</>
	);
}

function Component3() {
	return (
		<>
			<h1>Component 3</h1>
			<Component4 />
		</>
	);
}

function Component4() {
	return (
		<>
			<h1>Component 4</h1>
			<Component5 />
		</>
	);
}

function Component5() {
	const user = useContext(UserContext);
	return (
		<>
			<h1>Component 5</h1>
			<h2>{`Hello ${user} again!`}</h2>
		</>
	);
}


function RenderCount() {
	const [inputValue, setInputValue] = useState("");
	const count = useRef(0);

	useEffect(() => {
		count.current = count.current + 1;
	});

	return (
		<>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<h1>Render Count: {count.current}</h1>
		</>
	);
}

function Timer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount(() => count + 1); //This is working properly
			// setCount((count) => count + 1); //This is working properly
		}, 1000);
	}, []); // <- add empty brackets here

	return <h1>I've rendered {count} times!</h1>;
}


function TimerCleanUp() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let timer = setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);

		return () => clearTimeout(timer)
	}, []);

	return <h1>I've rendered {count} times in timer clean-up!</h1>;
}

function Counter() {
	const [count, setCount] = useState(0);
	const [calculation, setCalculation] = useState(0);

	useEffect(() => {
		setCalculation(() => count * 2);
	}, [count]); // <- add the count variable here

	return (
		<>
			<p>Count: {count}</p>
			<button onClick={() => setCount((c) => c + 1)}>+</button>
			<p>Calculation: {calculation}</p>
		</>
	);
}


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<h2 className="font-bold text-3xl text-red-600">Count is {count}</h2>

				<div className="my-3">
					<button className="mx-2 bg-blue-600 text-white" onClick={() => setCount((count) => count + 1)}>Increase</button>
					<button className="mx-2 bg-blue-600 text-white" onClick={() => setCount((count) => count - 1)}>Decrease</button>
					<button className="mx-2 bg-blue-600 text-white" onClick={() => setCount(() => 0)}>Reset</button>
				</div>

				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>

			<h1>React is {5 + 5} times better with JSX</h1>;
		</>
	)
}

export { Timer, TimerCleanUp, Counter, App, Component1, RenderCount }
