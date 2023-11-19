# Använd en Markdown Previewing Mjukvara för att se detta ordentligt!

## Hur man sätter up för development

- Installera [NodeJS](https://nodejs.org/en/download/current) eller [Bun](https://bun.sh/) (Bun är bättre men kräver WSL)
  - Hur man installerar Bun på WSL:
    `curl -fsSL https://bun.sh/install | bash`
- Installera [Just](https://github.com/casey/just)
  - Du borde ha winget installerat. I så fall kör detta i CMD/Powershell/Terminal:
    `winget install --id Casey.Just --exact`
- Öppna CMD/Powershell/Terminal i mappen du läser denna filen i.
- Kör `npm install -D`
  - ifall du har bun kör detta istället: `bun install -D`
- Kör `just`

## Hur man sätter upp för visning

- Använd Five Server eller Live Server.
