import { Plugin } from "obsidian";
import { activateView, setupView } from "./app/service/core/view";
import { addCommands } from "./app/service/core/commands";

export default class MyPlugin extends Plugin {
  async onload() {
    setupView(this);
    addCommands(this);
    // setupSettings(this); // You could add this later
  }

  async activateView() {
    await activateView(this);
  }

  onunload() {
    console.log("Plugin unloading...");
  }
}
