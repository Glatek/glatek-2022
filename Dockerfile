FROM denoland/deno:alpine-1.25.1 as builder

COPY . .

RUN ["deno", "task", "build"]

FROM denoland/deno:distroless-1.25.1

WORKDIR /_site
EXPOSE 4507

COPY --from=builder /_site .

RUN ["deno", "cache", "https://deno.land/std@0.154.0/http/file_server.ts"]

CMD ["run", "--allow-net", "--allow-read", "https://deno.land/std@0.154.0/http/file_server.ts"]
