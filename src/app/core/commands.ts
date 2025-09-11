import MyPlugin from "@/main";

// A function that takes the plugin instance and adds commands to it
export function addCommands(plugin: MyPlugin) {
  plugin.addCommand({
    id: "open-my-react-view",
    name: "Open My React View",
    callback: () => {
      plugin.activateView(); // We can call public methods on the plugin instance
    },
  });

  plugin.addCommand({
    id: "another-command",
    name: "Do another thing",
    callback: () => {
      console.log("Doing another thing!");
    },
  });
}
