FROM denoland/deno:debian-2.7.14 AS builder
WORKDIR /app
COPY deno.json deno.lock _config.ts ./
RUN deno install --frozen
RUN deno cache --allow-scripts _config.ts
RUN deno install --global --allow-net --allow-read -r -n file-server jsr:@std/http/file-server

ADD . .
RUN deno task build

# 3. Slutgiltig minimal runtime
FROM denoland/deno:debian-2.7.14 AS runtime
EXPOSE 8000
COPY --from=builder /usr/local/bin/file-server /usr/local/bin/file-server
COPY --from=builder /app/_site /usr/app/src
WORKDIR /usr/app/src
CMD ["file-server", ".", "--port", "8000"]
