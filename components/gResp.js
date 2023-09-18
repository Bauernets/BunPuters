export default function gResp(path = "./lua/g.lua") {
    const file = Bun.file(path);
    return new Response(file);
}