import MyPlugin from "@/main";
import { MY_VIEW } from "@/views/view";
import { Notice } from "obsidian";

export const addComponents = (plugin: MyPlugin) => {
  // Add a ribbon icon
  const ribbonIconEl = plugin.addRibbonIcon(
    "bot",
    "Sample Plugin",
    (evt: MouseEvent) => {
      // Open the custom view
      plugin.activateView(MY_VIEW, "right");
      new Notice("Hello, World!");
    },
  );
  ribbonIconEl.addClass("my-plugin-ribbon-class");

  // Add a status bar item
  const statusBarItemEl = plugin.addStatusBarItem();
  statusBarItemEl.setText("Status Bar Text");
};
