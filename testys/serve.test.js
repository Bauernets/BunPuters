import { expect, test, describe } from "bun:test";

const { spawn, exec } = require('child_process');

describe("serves", () => {
    test("bun run serve", async () => {
        const serve = spawn('bun', ['run', 'serve']);

        const pid = serve.pid;

        serve.stdout.on('data', (data) => {
            //console.log(`stdout: ${data}`);
            expect( data ).toEqual(Buffer.from('Listening on http://localhost:3000 ...\n'));
        });
        serve.stderr.on('data', (data) => {
            //console.error(`stderr: ${data}`);
            //expect( data ).toEqual(Buffer.from('$ bun run index.jsx\n'));
        });
        serve.on('close', (code) => {
            //console.log(`child process exited with code ${code}`);
            expect( code ).toBe( null );
        });      
    
        await new Promise(resolve => setTimeout(resolve, globalThis.time));

        serve.kill('SIGINT');
        exec('kill ' + (pid + 1));
    });
});
