const fs = require("fs");
const localtunnel = require("localtunnel");
const { spawn } = require("child_process");
const chalk = require("chalk");

let yarnProcessGlobal;

const spawnExpoProcess = (callback) => {
  console.log(chalk.cyan("Spawning child process for Expo\n"));
  const yarn = spawn("yarn", ["start"], { stdio: "inherit" });
  yarnProcessGlobal = yarn;

  yarn.on("close", (code) => {
    console.log(
      chalk.cyan(`\nClosing spawned child process with return code: ${code}`)
    );
    callback();
  });
};

const initLocalTunnel = async () => {
  const PORT = 3000;
  console.log(chalk.cyan("Initializing local tunnel on PORT:", PORT));
  const tunnel = await localtunnel({ port: PORT });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me

  tunnel.on("close", async () => {
    // tunnels are closed

    console.log(chalk.cyan(`Closing tunnel with url:`), tunnel.url);
  });

  tunnel.on("error", async (error) => {
    console.log(
      chalk.red("Error Occured: LocalTunnel closed before metro bundler", error)
    );
    await yarnProcessGlobal.kill();
  });
  return tunnel;
};

const runDevelopmentEnv = async () => {
  const tunnel = await initLocalTunnel();
  fs.writeFileSync(
    "env.json",
    JSON.stringify({ API_URL: tunnel.url }, undefined, 2)
  );
  spawnExpoProcess(() => tunnel.close());
};

// //Obtain the environment string passed to the node script
const environment = process.argv[2];
//read the content of the json file
if (environment === "development") runDevelopmentEnv();
else {
  const envFileContent = require(`../envs/${environment}.json`);
  //copy the json inside the env.json file
  fs.writeFileSync("env.json", JSON.stringify(envFileContent, undefined, 2));
}
