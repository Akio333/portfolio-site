// Renders the site icons from public/favicon.svg and the OG card from
// design/og-image.html. Run with `npm run brand` (needs Google Chrome).
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const at = (path) => `${root}${path}`;

const svg = readFileSync(at("public/favicon.svg"), "utf8");
// Home-screen icons are masked by the OS, so the tile is square and edgeless.
const squareSvg = svg.replace(/<rect[^>]*\/>/, '<rect width="64" height="64" fill="#1E2330"/>');

const png = (source, size) =>
  sharp(Buffer.from(source), { density: (72 * size) / 64 * 4 })
    .resize(size, size)
    .png()
    .toBuffer();

writeFileSync(at("public/favicon-32.png"), await png(svg, 32));
writeFileSync(at("public/apple-touch-icon.png"), await png(squareSvg, 180));
writeFileSync(at("public/icon-192.png"), await png(squareSvg, 192));
writeFileSync(at("public/icon-512.png"), await png(squareSvg, 512));

// favicon.ico holds PNG-encoded 16, 32 and 48px images.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((size) => png(svg, size)));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((size, i) => {
  const entry = 6 + 16 * i;
  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(images[i].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += images[i].length;
});
writeFileSync(at("public/favicon.ico"), Buffer.concat([header, ...images]));

const chrome = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find((path) => path && existsSync(path));
if (!chrome) throw new Error("Google Chrome not found. Set CHROME_PATH to render the OG image.");

const shot = at("design/.og-shot.png");
execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--window-size=1200,630",
  "--virtual-time-budget=2000",
  `--screenshot=${shot}`,
  pathToFileURL(at("design/og-image.html")).href,
], { stdio: "ignore" });
await sharp(shot).resize(1200, 630, { position: "top" }).png({ compressionLevel: 9 }).toFile(at("public/images/og-image.png"));
execFileSync("rm", [shot]);

console.log("Rendered icons and OG image.");
