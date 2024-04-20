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
				className="bg-red-500 hover:bg-red-600"
			/>
			<Button
				label="Click me"
				onClick={() => alert("i'm blue")}
				className="bg-blue-500 hover:bg-blue-600"
			/>
			<Button
				label="Click me"
				onClick={() => alert("i'm green")}
				className="bg-green-500 hover:bg-green-600"
			/>
		</>
	);
}

export default App;
