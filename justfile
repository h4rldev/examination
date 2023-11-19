default: watch

watch:
    @bunx tailwindcss -i ./tailwind.css -o ./styles/style.css --watch

build:
    @bunx tailwindcss -i ./tailwind.css -o ./styles/style.css

install-deps:
    @bun install -D