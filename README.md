# BunPuters
## Setup
sudo apt install unzip
curl -fsSL https://bun.sh/install | bash
bun upgrade

# Main
bun run serve -> bun run index.jsx 

# ToDo
bun test --todo

## XTRAS
bun test                      # run tests
bun test --watch             # run tests with rerun on file changes
bun run serve                 # run the `serve` script in `package.json`
bun install <pkg>​             # install a package
bunx cowsay 'Hello, world!'   # execute a package

# Bun running in the background??
sudo ss -lptn 'sport = :3000'
kill pid