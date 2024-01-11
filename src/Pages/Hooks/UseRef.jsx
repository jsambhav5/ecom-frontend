import { useState, useEffect, useRef } from "react";

const UseRef = () => {
	const [text, setText] = useState("");
	const count = useRef(0);

	useEffect(() => {
		count.current = count.current + 1;
	});

	return (
		<>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<h1>Render Count: {count.current}</h1>
		</>
	);
}

export default UseRef;