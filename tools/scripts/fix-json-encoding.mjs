import { readFileSync, writeFileSync } from "fs";

const file = "libs/skill-html/src/schema.fr.json";

let content = readFileSync(file, "utf8");

// 🔹 1. Remplace les séquences UTF-8 mal encodées typiques
content = content
  .replace(/Ã©/g, "é")
  .replace(/Ã¨/g, "è")
  .replace(/Ãª/g, "ê")
  .replace(/Ã«/g, "ë")
  .replace(/Ã /g, "à")
  .replace(/Ã¢/g, "â")
  .replace(/Ã§/g, "ç")
  .replace(/Ã¹/g, "ù")
  .replace(/Ã»/g, "û")
  .replace(/Ã¼/g, "ü")
  .replace(/Ã´/g, "ô")
  .replace(/Ã¶/g, "ö")
  .replace(/Ãœ/g, "Ü")
  .replace(/Ã‰/g, "É")
  .replace(/Ã€/g, "À")
  .replace(/Ãˆ/g, "È")
  .replace(/Ã‹/g, "Ë")
  .replace(/Ã‡/g, "Ç")
  .replace(/�/g, ""); // supprime les octets invalides résiduels

// 🔹 2. Vérifie que le JSON reste valide
try {
  JSON.parse(content);
  console.log("✅ JSON syntax OK — encoding cleaned.");
} catch (err) {
  console.error("⚠️ JSON invalid after cleanup:", err.message);
  process.exit(1);
}

// 🔹 3. Écrit le contenu propre
writeFileSync(file, content, "utf8");
console.log(`🧹 Cleaned encoding in ${file}`);
