const indexhtml = <html>
    <head>
        <title>React</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
</html>

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return new Response("Bun!");
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);

