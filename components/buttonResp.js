export default function buttonsheet(path = "./button.css") {
    const file = Bun.file(path);
    return new Response(file);
}