import React from "react";
import { renderToReadableStream } from "react-dom/server";
import { Elysia } from 'elysia'

function TimeC(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <p>Current time is: {props.time}</p>
        </div>
    );
}

function startupLua(path = "./lua/turtle.lua") {
    const file = Bun.file(path);
    return new Response(file);
}
const startupResp = startupLua();

const app = new Elysia()
    .get("/", async (req) => {
        console.log('request')
        const stream = await renderToReadableStream(<TimeC time={new Date().toString()} />);
        return new Response(stream, {
            headers: {
                "Content-Type": "text/html",
            },
        });
    })
    .get("/startup", async (req) => {
        console.log('startup request')
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

