import { existsSync } from "node:fs";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

export const VISITOR_COOKIE = "pv_vid" as const;

const dataPath = () => join(process.cwd(), ".data", "visitor-ids.json");

type Result = { count: number } | { count: null };

/**
 * Counts unique visitors: HTTP-only cookie `pv_vid` and ids in `.data/visitor-ids.json`
 * (gitignored). Only works when the process can write to disk (e.g. `next dev` or a
 * self-hosted Node server with a persistent filesystem). Fails closed on read-only
 * or serverless hosts without a writable data directory.
 */
export async function addUniqueVisitor(visitorId: string): Promise<Result> {
  try {
    const count = await localFileAddAndCount(visitorId);
    return { count };
  } catch {
    return { count: null };
  }
}

async function localFileAddAndCount(visitorId: string): Promise<number> {
  const dir = join(process.cwd(), ".data");
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
  const file = dataPath();
  let ids: string[] = [];
  if (existsSync(file)) {
    try {
      const raw = await readFile(file, "utf-8");
      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed) && parsed.every((x) => typeof x === "string")) {
        ids = parsed;
      }
    } catch {
      ids = [];
    }
  }
  if (!ids.includes(visitorId)) {
    ids.push(visitorId);
  }
  await writeFile(file, JSON.stringify(ids, null, 0), "utf-8");
  return ids.length;
}
