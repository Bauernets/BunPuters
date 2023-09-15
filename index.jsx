import React from "react";

const indexhtml = <html>
    <head>
        <title>React</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
</html>

function startupLua(path = "./lua/turtle.lua") {
    const file = Bun.file(path);
    return new Response(file);
}
const startupResp = startupLua();

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        return new Response(startupResp);
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);

