import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, multiply } from './features/counter/counterSlice';
import './App.css';
import Button from '@mui/material/Button';

function App() {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter.value);

	return (
		<div className='App'>
			<header className='App-header'>
				<p>Counter: {counter}</p>
				<div className='buttons'>
					<Button onClick={() => dispatch(decrement())} variant='contained'>
						Минус
					</Button>
					<Button onClick={() => dispatch(increment())} variant='contained'>
						Плюс
					</Button>
					<Button onClick={() => dispatch(multiply())} variant='contained'>
						Умножение
					</Button>
				</div>
			</header>
		</div>
	);
}

export default App;
