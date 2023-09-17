# BunPuters
## Setup
sudo apt install unzip
curl -fsSL https://bun.sh/install | bash
bun upgrade

# Main
bun run serve             -> bun run index.jsx 
bun run build             -> docker build --tag=computerbun .
bun run dock              -> docker run --rm --init --ulimit memlock=-1:-1 -p 3000:3000 computerbun

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

# Build 
bun build ./index.jsx --outdir ./out

# Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun

/*
FROM jarredsumner/bun:edge
COPY . .
EXPOSE 3000
ENTRYPOINT ["bun",  "dev"]
*/
docker build --tag=computerbun .
docker run --rm --init --ulimit memlock=-1:-1 -p 3000:3000 computerbun