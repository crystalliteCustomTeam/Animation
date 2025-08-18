
import fs from "fs";
import path from "path";

const baseUrl = process.env.SITE_URL || "https://infinityanimations.com";
const baseDir = "src/app";
const excludeDirs = ["api", "fonts"];

export const revalidate = 3600; // revalidate at most every hour

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function getRoutes() {
  const fullPath = path.join(process.cwd(), baseDir);
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  let routes = ["/"];

  entries.forEach((entry) => {
    if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
      routes.push(`/${entry.name}`);
    }
  });

  return routes.map((route) => ({
    url: escapeXml(`${baseUrl}${route}`), // escape before returning
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  }));
}

export default getRoutes;
