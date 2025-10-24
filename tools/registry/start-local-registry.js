// tools/start-local-registry.js
const fs = require("fs");
const { spawn, execSync } = require("child_process");
const http = require("http");

const REGISTRY_URL = "http://localhost:4873";
const CONFIG_PATH = ".verdaccio/config-local.yml";

function waitForVerdaccio(timeout = 10000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      http
        .get(`${REGISTRY_URL}/-/ping`, (res) => {
          if (res.statusCode === 200) return resolve(true);
          retry();
        })
        .on("error", retry);
    };

    const retry = () => {
      if (Date.now() - start > timeout)
        return reject(new Error("Timeout waiting for Verdaccio to start"));
      setTimeout(check, 500);
    };

    check();
  });
}

async function main() {
  console.log("🚀 Lancement de Verdaccio...");

  const verdaccio = spawn(
    "verdaccio",
    ["--config", CONFIG_PATH, "--listen", "4873"],
    { stdio: "inherit" }
  );

  try {
    await waitForVerdaccio();
    console.log("✅ Verdaccio est prêt !");
  } catch (err) {
    console.error("❌ Verdaccio n'a pas démarré :", err.message);
    verdaccio.kill();

    process.exit(1);
  }

  console.log("👤 Ajout de l'utilisateur non interactif...");

  try {
    execSync(
      `npx npm-cli-login -u user -p pwd -e user@local.com -r ${REGISTRY_URL}`,
      { stdio: "inherit" }
    );
    console.log("✅ Utilisateur ajouté avec succès !");
  } catch (err) {
    console.error("❌ Erreur lors de l'ajout de l'utilisateur :", err.message);
    verdaccio.kill();

    process.exit(1);
  }

  console.log("🎉 Verdaccio et utilisateur prêts !");
}

main();
