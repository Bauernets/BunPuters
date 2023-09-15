import React from "react";
import ReactDOM from "react-dom";
import { Elysia } from 'elysia'

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

const app = new Elysia()
    .get("/", async (req) => {
        return new Response(indexhtml, { headers: { "Content-Type": "text/html" } });
    })
    .get("/startup", async (req) => {
        return startupResp;
    })
    .listen(3000)


// const server = Bun.serve({
//     port: 3000,
//     async fetch(req) {
//         return new Response(startupResp);
//     },
// });
// const server = Bun.serve < { authToken: string } > ({
//     fetch(req, server) {
//         const success = server.upgrade(req);
//         if (success) {
//             // Bun automatically returns a 101 Switching Protocols
//             // if the upgrade succeeds
//             return undefined;
//         }

//         // handle HTTP request normally
//         return new Response("Hello world!");
//     },
//     websocket: {
//         // define websocket handlers
//     },
// });

console.log(`Listening on http://localhost:${app.server.port} ...`);

