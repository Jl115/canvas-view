import { useContext } from "react";
import { Notice } from "obsidian";
import { Counter } from "./components/Counter";
import { AppContext } from "./core/AppContext";
import FileReader from "./components/FileReader";

export function App() {
  const pluginInstance = useContext(AppContext);

  const handleCreateNote = async () => {
    if (!pluginInstance) return;

    try {
      await pluginInstance.app.vault.create(
        "New Note from Context.md",
        "Hello, world from Context! ✨",
      );
      new Notice("Note created successfully via Context!");
    } catch (err) {
      new Notice("Error creating note.");
    }
  };

  return (
    <div>
      <h2>Hello from React! 👋</h2>
      <p>This UI is rendered by React, inside an Obsidian View.</p>
      <button onClick={handleCreateNote}>Create a New Note</button>
      <Counter />
      <FileReader />
    </div>
  );
}
