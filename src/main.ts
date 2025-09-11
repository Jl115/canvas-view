import { App, Plugin } from "obsidian";
import { activateView, setupView } from "./app/core/view";
import { addCommands } from "./app/core/commands";
import { MY_VIEW_TYPE } from "./app/core/ReactView";

export default class MyPlugin extends Plugin {
  static instance: MyPlugin;

  constructor(app: App, manifest: any) {
    super(app, manifest);
    MyPlugin.instance = this;
  }

  public static getInstance() {
    return MyPlugin.instance;
  }

  async onload() {
    setupView(this);
    addCommands(this);
    // setupSettings(this); // You could add this later
  }

  async activateView() {
    this.app.workspace.detachLeavesOfType(MY_VIEW_TYPE);
    await activateView(this);
  }

  onunload() {
    console.log("Plugin unloading...");
  }
}
