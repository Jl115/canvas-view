// view.ts
import { ItemView, WorkspaceLeaf } from "obsidian";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../app";

export const MY_VIEW_TYPE = "my-react-view";

export class MyReactView extends ItemView {
  private root: ReactDOM.Root | null = null;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return MY_VIEW_TYPE;
  }

  getDisplayText() {
    return "My React View";
  }

  // onOpen is where you mount your React component
  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty(); // Clear any existing content

    this.root = ReactDOM.createRoot(container);
    this.root.render(
      <React.StrictMode>
        {/* Pass the 'app' object and other methods as props! */}
        <App obsidianApp={this.app} />
      </React.StrictMode>,
    );
  }

  // onClose is where you unmount to prevent memory leaks
  async onClose() {
    if (this.root) {
      this.root.unmount();
    }
  }
}
