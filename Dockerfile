FROM denoland/deno:distroless-1.28.1
EXPOSE 4507
COPY _site .
RUN ["deno", "cache", "https://deno.land/std@0.165.0/http/file_server.ts"]
CMD ["run", "--allow-net", "--allow-read", "https://deno.land/std@0.165.0/http/file_server.ts"]
