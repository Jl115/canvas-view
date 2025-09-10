import { MY_VIEW_TYPE, MyReactView } from "@/app/views/View";
import MyPlugin from "@/main";

export function setupView(plugin: MyPlugin) {
  plugin.registerView(MY_VIEW_TYPE, (leaf) => new MyReactView(leaf));
}

export async function activateView(plugin: MyPlugin) {
  plugin.app.workspace.detachLeavesOfType(MY_VIEW_TYPE);

  const leaf = plugin.app.workspace.getRightLeaf(false);
  if (!leaf) return;

  await leaf.setViewState({
    type: MY_VIEW_TYPE,
    active: true,
  });

  plugin.app.workspace.revealLeaf(leaf);
}
