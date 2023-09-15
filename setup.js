import { beforeEach } from "bun:test";

globalThis.url = "localhost:3000";

beforeEach(() => {
    console.log('TEST PRELOAD');
});
//spawns the server to test against
// const { exec } = require('child_process');
// const server = exec('bun run serve');
// console.log("server spawned with pid: " + server.pid);

// const sleepTime = 1000;

// console.log("sleeping for " + sleepTime + "ms to allow server to start");

// setTimeout(() => {
//     console.log("done sleeping");
// }, sleepTime);

// server.stdout.on('data', (data) => {
//     console.log('TEST PRELOAD +++++++++++++++++++++++++++++++++++++');
//     console.log(`stdout: ${data}`);
// });

// server.stderr.on('data', (data) => {
//     console.error('TEST PRELOAD +++++++++++++++++++++++++++++++++++++');
//     console.error(`stderr: ${data}`);
// });