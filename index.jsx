import React from "react";
import { renderToReadableStream } from "react-dom/server";
import { Elysia } from 'elysia'

import Time from "./components/time.jsx";
import Button from "./components/button.jsx";

const app = new Elysia()
    .get("/", async (req) => {
        console.log('request')
        const stream = await renderToReadableStream(
        <div>
            <Time time={new Date().toString()} />
            <Button onClick="" text="button 1"></Button>
        </div>

        );
        return new Response(stream, {
            headers: {
                "Content-Type": "text/html",
            },
        });
    })
    .get("/startup", async (req) => {
        console.log('startup request')
        //import startupResp from './components/startup.js' and return default();
        import('./components/startupResp.js').then((module) => {
            console.log(module.default())
            return module.default();
        })
    })
    .get("/g", async (req) => {
        console.log('g request')
        return gResp;
    })
    .get("/stat", async (req) => {
        console.log('stat request')
        return statResp;
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

