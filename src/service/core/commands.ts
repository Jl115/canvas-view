import MyPlugin from "@/main";
import { SampleModal } from "@/components/modals";
import { Editor, MarkdownView } from "obsidian";

export const addCommands = (plugin: MyPlugin) => {
  // Simple command to open a modal
  plugin.addCommand({
    id: "open-sample-modal-simple",
    name: "Open sample modal (simple)",
    callback: () => {
      new SampleModal(plugin.app).open();
    },
  });

  // Editor command to modify content
  plugin.addCommand({
    id: "sample-editor-command",
    name: "Sample editor command",
    editorCallback: (editor: Editor, view: MarkdownView) => {
      console.log(editor.getSelection());
      editor.replaceSelection("Sample Editor Command");
    },
  });

  // Complex command with a check
  plugin.addCommand({
    id: "open-sample-modal-complex",
    name: "Open sample modal (complex)",
    checkCallback: (checking: boolean) => {
      const markdownView =
        plugin.app.workspace.getActiveViewOfType(MarkdownView);
      if (markdownView) {
        if (!checking) {
          new SampleModal(plugin.app).open();
        }
        return true;
      }
      return false;
    },
  });
};
