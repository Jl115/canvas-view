import MyPlugin from "@/main";

export class FileReaderService {
  private obsidianInstance = MyPlugin.getInstance();

  async readActiveFile(): Promise<string | null> {
    const activeFile = this.obsidianInstance.app.workspace.getActiveFile();
    if (!activeFile) return null;

    const fileContent = await this.obsidianInstance.app.vault.read(activeFile);
    return fileContent;
  }
}
