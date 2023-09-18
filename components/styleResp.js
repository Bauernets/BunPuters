export default function stylesheet(path = "style.css") {
    const file = Bun.file(path);
    return new Response(file);
}