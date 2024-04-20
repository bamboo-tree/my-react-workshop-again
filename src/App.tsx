import "./App.css";
import { Text } from "./ui";
import { Button } from "./ui";

function App() {
	return (
		<>
			<Text>Elo bync</Text>
			<Button
				label="Click me"
				onClick={() => alert("i'm red")}
				className="text-white bg-red-500 border-2 px-6 py-3 rounded hover:bg-red-600"
			/>
			<Button
				label="Click me"
				onClick={() => alert("i'm blue")}
				className="text-white bg-blue-500 border-2 px-6 py-3 rounded hover:bg-blue-600"
			/>
			<Button
				label="Click me"
				onClick={() => alert("i'm green")}
				className="text-white bg-green-500 border-2 px-6 py-3 rounded hover:bg-green-600"
			/>
		</>
	);
}

export default App;
