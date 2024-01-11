import React, { useCallback, useState } from 'react'
import Todos from './ToDos';

const UseCallback = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const addCount = () => {
		setCount(count + 1)
	}

	const addTodo = useCallback(() => {
		setTodos((todo) => [...todo, "New Todo"]);
	}, [todos]);

	return (
		<>
			<Todos todos={todos} addTodo={addTodo} />
			<hr />
			<div>
				Count: {count}
				<button onClick={addCount}>+</button>
			</div>
		</>
	);
}

export default UseCallback