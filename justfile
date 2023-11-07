default: watch

watch:
    @npx tailwindcss -i ./tailwind.css -o ./styles/style.css --watch

build:
    npx tailwindcss -i ./tailwind.css -o ./styles/style.css