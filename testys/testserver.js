
export default async function testserver(time = 1000) {
        console.log('testserver starting...');
        const { spawn, exec } = require('child_process');
        const serve = spawn('bun', ['run', 'serve']);
        const pid = serve.pid;

        serve.stdout.on('data', (data) => {
            //console.log(`stdout: ${data}`);
            //expect( data ).toEqual(Buffer.from('Listening on http://localhost:3000 ...\n'));
        });
        serve.stderr.on('data', (data) => {
            //console.error(`stderr: ${data}`);
            //expect( data ).toEqual(Buffer.from('$ bun run index.jsx\n'));
        });
        serve.on('close', (code) => {
            //console.log(`child process exited with code ${code}`);
            //expect( code ).toBe( null );
        });      
    
        await new Promise(resolve => setTimeout(resolve, 1000));

        serve.kill('SIGINT');
        console.log('PID: ' + pid); // 'PID: 12345'
        exec('kill ' + (pid + 1));
        console.log('testserver done.');
}
