import { Plugin, TFile } from "obsidian";
import * as fs from "./core/filesystem";
import * as workspace from "./core/workspace";

export default abstract class PluginExt<S> extends Plugin {
  settings: S;

  async loadSettings(defaultSetting: S) {
    this.settings = Object.assign({}, defaultSetting, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  // --- Filesystem Wrappers ---
  getBaseFullPath = () => fs.getVaultFullPath(this);
  getPluginPath = () => fs.getPluginPath(this);
  getPluginFullPath = () => fs.getPluginFullPath(this);
  writeFileDirectly = (path: string, content: string) =>
    fs.writeFile(this, path, content);

  // Note: The original file data methods were slightly simplified for clarity.
  // You can adapt them back if the generic constraints are critical.
  loadFileData = <T>(path: string, defaultData: T) =>
    fs.loadPluginData(this, path, defaultData);
  saveFileData = <T>(path: string, data: T) =>
    fs.savePluginData(this, path, data);

  // --- Workspace Wrappers ---
  activateView = (viewType: string, side: "left" | "right" | "tab" = "right") =>
    workspace.activateView(this, viewType, side);

  jumpTo = (file: TFile, line: number) => workspace.jumpTo(this, file, line);
}
