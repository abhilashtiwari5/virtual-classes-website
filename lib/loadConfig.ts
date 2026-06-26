import fs from "node:fs";
import path from "node:path";

export function loadConfig<T>(fileName: string): T {
  const filePath = path.join(process.cwd(), "config", fileName);

  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(rawData) as T;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    throw new Error(`Failed to load config '${fileName}' from '${filePath}': ${message}`);
  }
}
