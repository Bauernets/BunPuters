
export default class TestServerF {
    constructor(verbose = false) {
        this._verbose = verbose;
        this._server = null;
        this._pid = null;
    }

    start() {
        if (this._verbos) { console.log('testserver starting...') };
        const { spawn } = require('child_process');

        this._server = spawn('bun', ['run', 'serve']);
        this._pid = this._server.pid;

        this._server.stdout.on('data', this.outFunc);
        this._server.stderr.on('data', this.errFunc);
        this._server.on('close', this.closeFunc);
    }

    stop() {
        const { exec } = require('child_process');

        this._server.kill('SIGINT');
        exec('kill ' + (this._pid + 1));
        if (this._verbose) { console.log('testserver done.') };
    }

    //these are ovveridable for testing
    errFunc(err) {
        //console.error(err);
    }

    outFunc(out) {
        //console.log(out);
    }

    closeFunc(code) {
        //console.log(`child process exited with code ${code}`);
    }
}