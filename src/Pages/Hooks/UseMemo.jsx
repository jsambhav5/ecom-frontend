import React, { useState, useMemo } from "react";

function expensiveCount(num) {
	console.log("Calculating...")
	let ans = 0;
	for (let i = 0; i < 10000; i++)
		ans += 1;
	return ans + num;
}

const Hooks = () => {
	const [todo, setTodo] = useState([])
	const [count, setCount] = useState(0)
	const grandTotal = useMemo(() => expensiveCount(count), [count])

	const addCount = () => {
		setCount(count + 1)
	}

	const addTodo = () => {
		setTodo([...todo, "New Task"])
	}

	return (
		<div>
			<div className="todo">
				<h1>To Do</h1>
				{todo.map((task) => <p>{task}</p>)}
				<button onClick={addTodo}>Add Todo</button>
			</div>

			<hr />

			<div className="counter">
				<h1>Counter</h1>
				<p>{count}</p>
				<button onClick={addCount}>+</button>
				<br />
				Grand Total: {grandTotal}
			</div>
		</div>
	)
}

export default Hooks