import { Plugin, TFile, MarkdownView, WorkspaceLeaf } from "obsidian";

/**
 * Activates a view of a specific type in the workspace.
 * Opens the view in the specified side if it's not already open.
 */
export const activateView = async (
  plugin: Plugin,
  viewType: string,
  side: "left" | "right" | "tab" = "right",
) => {
  // Make sure the workspace is ready
  if (plugin.app.workspace.rightSplit === null) return;

  let leaf: WorkspaceLeaf | undefined =
    plugin.app.workspace.getLeavesOfType(viewType)[0];

  // If the view isn't open yet, create a new leaf for it
  if (!leaf) {
    let newLeaf: WorkspaceLeaf | null = null; // Explicitly allow null for creation

    switch (side) {
      case "left":
        newLeaf = plugin.app.workspace.getLeftLeaf(false);
        break;
      case "right":
        newLeaf = plugin.app.workspace.getRightLeaf(false);
        break;
      case "tab":
        newLeaf = plugin.app.workspace.getLeaf("tab");
        break;
    }

    // If a new leaf was successfully created, set its state
    if (newLeaf) {
      await newLeaf.setViewState({ type: viewType, active: true });
      leaf = newLeaf; // Assign the newly created, non-null leaf
    }
  }

  // If we have a leaf (either pre-existing or newly created), reveal it
  if (leaf) {
    plugin.app.workspace.revealLeaf(leaf);
  }
};

/**
 * Opens a file and jumps to a specific line number.
 * If the file is already open, it reveals it and sets the cursor.
 */
export const jumpTo = (plugin: Plugin, file: TFile, line: number) => {
  const leaves = plugin.app.workspace.getLeavesOfType("markdown");
  const existingLeaf = leaves.find(
    (leaf) => (leaf.view as MarkdownView).file?.path === file.path,
  );

  const openState = { eState: { line } };

  if (existingLeaf) {
    plugin.app.workspace.revealLeaf(existingLeaf);
    (existingLeaf.view as MarkdownView).setEphemeralState({ line });
  } else {
    plugin.app.workspace.getLeaf("tab").openFile(file, openState);
  }
};
