export default function startupLua(path = "./lua/turtle.lua") {
    const file = Bun.file(path);
    return new Response(file);
}