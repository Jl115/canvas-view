import { ItemView, WorkspaceLeaf } from "obsidian";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../app";
import MyPlugin from "@/main";
import { AppContext } from "./AppContext";

export const MY_VIEW_TYPE = "my-react-view";

export class ReactView extends ItemView {
  private pluginInstance: MyPlugin;
  private root: ReactDOM.Root | null = null;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
    this.pluginInstance = MyPlugin.instance;
  }

  getViewType() {
    return MY_VIEW_TYPE;
  }

  getDisplayText() {
    return "My React View";
  }

  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty();

    this.root = ReactDOM.createRoot(container);
    this.root.render(
      // TODO: Remove StrictMode if it causes issues with Obsidian APIs
      <React.StrictMode>
        <AppContext.Provider value={this.pluginInstance}>
          <App />
        </AppContext.Provider>
      </React.StrictMode>,
    );
  }

  async onClose() {
    if (this.root) this.root.unmount();
  }
}
