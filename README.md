# BunPuters
## Setup
sudo apt install unzip
curl -fsSL https://bun.sh/install | bash
bun upgrade

# Main
bun run serve -> bun run index.jsx 

## XTRAS
bun test                      # run tests
bun run start                 # run the `start` script in `package.json`
bun install <pkg>​             # install a package
bunx cowsay 'Hello, world!'   # execute a package