import { App as ObsidianApp } from "obsidian";
import { Counter } from "./components/Counter";

// Define the props our component will accept
interface AppProps {
  obsidianApp: ObsidianApp;
}

export function App({ obsidianApp }: AppProps) {
  // This function uses the Obsidian API passed down through props
  const handleCreateNote = async () => {
    try {
      await obsidianApp.vault.create("New Note from React.md", "Hello, world!");
      console.log("Note created successfully!");
    } catch (err) {
      console.error("Error creating note:", err);
    }
  };

  // template
  return (
    <div>
      <h2>Hello from React! 👋</h2>
      <p>This UI is rendered by React, inside an Obsidian View.</p>
      <button onClick={handleCreateNote}>Create a New Note</button>
      <Counter />
    </div>
  );
}
