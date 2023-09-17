# BunPuters
## Setup

    sudo apt install unzip
    
    curl -fsSL https://bun.sh/install | bash
    
    bun upgrade

# Main

Running locally...

    bun run serve             -> bun run index.jsx 

Docking...

    bun run build             -> docker build --tag=computerbun .
    
    bun run dock              -> docker run --rm --init --ulimit memlock=-1:-1 -p 3000:300 computerbun

login with docker login credentials from container registry

    bun run deploy           -> bun run build -> docker tag -> docker push

# ToDo List

    bun test --todo

## XTRAS

test your code 😡 !!!

    bun test                      # run tests
    bun test --watch             # run tests with rerun on file changes
    bun run serve                 # run the `serve` script in `package.json`

more bun commands...

    bun install <pkg>​             # install a package
    bunx cowsay 'Hello, world!'   # execute a package

# Bun running in the background??

    sudo ss -lptn 'sport = :3000'
    
    kill pid

# Build 

    bun build ./index.jsx --outdir ./out

# Docker

    docker build --tag=computerbun .
    docker run --rm --init --ulimit memlock=-1:-1 -p 3000:3000 computerbun

ref...

    docker pull oven/bun
    docker run --rm --init --ulimit memlock=-1:-1 oven/bun

# Azure

get credentials from az container registry -> settings/access keys/...

    docker login bunputers.azurecr.io

    docker tag computerbun bunputers.azurecr.io/computerbun
    docker push bunputers.azurecr.io/computerbun


/* DOCKERFILE
FROM oven/bun:latest
COPY . .
EXPOSE 3000
ENTRYPOINT ["bun",  "run", "serve"]
*/
