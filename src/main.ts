import { MyPluginSettings } from "./models/settings/settings";
import { MY_VIEW, MyView } from "./views/view";

import "./globals.css";
import { addCommands } from "./service/core/commands";
import { addComponents } from "./service/core/components";
import { registerEvents } from "./service/core/events";
import PluginExt from "./service/pluginExtend";
import { SampleSettingTab } from "./views/settings/settingsTab";
import { DEFAULT_SETTINGS } from "./models/settings/defaultSettings";

export default class MyPlugin extends PluginExt<MyPluginSettings> {
  async onload() {
    // Load settings
    await this.loadSettings(DEFAULT_SETTINGS);

    // Add the settings tab
    this.addSettingTab(new SampleSettingTab(this.app, this));

    // Register the custom view
    this.registerView(MY_VIEW, (leaf) => new MyView(leaf, this));

    // Add commands, UI components, and events from separate modules
    addCommands(this);
    addComponents(this);
    registerEvents(this);

    console.log("MyPlugin loaded successfully!");
  }

  onunload() {
    console.log("MyPlugin unloaded.");
  }
}
