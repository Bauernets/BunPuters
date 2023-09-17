FROM oven/bun:latest
COPY . .
EXPOSE 3000
ENTRYPOINT ["bun",  "run", "serve"]