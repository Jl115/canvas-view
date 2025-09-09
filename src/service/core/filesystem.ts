import { Plugin, FileSystemAdapter } from "obsidian";

/**
 * Gets the full path to the vault's root.
 */
export const getVaultFullPath = (plugin: Plugin): string => {
  // @ts-ignore - Using internal API to get the base path
  return plugin.app.vault.adapter.basePath;
};

/**
 * Gets the relative path to the plugin's folder.
 */
export const getPluginPath = (plugin: Plugin): string => {
  return plugin.manifest.dir!;
};

/**
 * Gets the full system path to the plugin's folder.
 */
export const getPluginFullPath = (plugin: Plugin): string => {
  const adapter = plugin.app.vault.adapter as FileSystemAdapter;
  return adapter.getFullPath(getPluginPath(plugin));
};

/**
 * Ensures the parent directory for a given path exists, creating it if necessary.
 */
export const ensurePathExists = async (
  plugin: Plugin,
  normalizedPath: string,
) => {
  const parent = normalizedPath.split("/").slice(0, -1).join("/");
  if (!(await plugin.app.vault.adapter.exists(parent))) {
    await plugin.app.vault.createFolder(parent);
  }
};

/**
 * Writes content to a file, creating the parent folder if it doesn't exist.
 */
export const writeFile = async (
  plugin: Plugin,
  path: string,
  content: string,
) => {
  await ensurePathExists(plugin, path);
  await plugin.app.vault.adapter.write(path, content);
};

/**
 * Loads and parses a JSON file from the plugin's data directory.
 * If the file doesn't exist, it creates it with default data.
 */
export const loadPluginData = async <T>(
  plugin: Plugin,
  filePath: string,
  defaultData: T,
): Promise<T> => {
  const fullPath = `${getPluginPath(plugin)}/${filePath}`;

  if (!(await plugin.app.vault.adapter.exists(fullPath))) {
    await writeFile(plugin, fullPath, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }

  const data = await plugin.app.vault.adapter.read(fullPath);
  return JSON.parse(data) as T;
};

/**
 * Saves data as a JSON file to the plugin's data directory.
 */
export const savePluginData = async <T>(
  plugin: Plugin,
  filePath: string,
  data: T,
) => {
  const fullPath = `${getPluginPath(plugin)}/${filePath}`;
  await writeFile(plugin, fullPath, JSON.stringify(data, null, 2));
};
