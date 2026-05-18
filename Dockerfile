FROM denoland/deno:debian-2.7.14 AS builder

USER deno
WORKDIR /app

COPY deno.json deno.lock ./
RUN deno install --frozen && \
    deno install --global --allow-net --allow-read -r -n file-server jsr:@std/http/file-server

ADD . .
RUN deno task build

FROM denoland/deno:distroless-2.7.14 AS runtime

USER deno
WORKDIR /usr/app/src


COPY --from=builder /usr/local/bin/file-server /usr/local/bin/file-server
COPY --from=builder /app/_site /usr/app/src

EXPOSE 8000
CMD ["file-server", ".", "--port", "8000"]
