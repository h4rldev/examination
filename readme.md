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

## Dokumentation

### Mina verktyg

(Inkluderande några VSCode extensions)

- [Bun](https://bun.sh/) eller [Node.js](https://nodejs.org/en)
- [Five Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server)
- [git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Github Markdown Preview](https://marketplace.visualstudio.com/items?itemName=bierner.github-markdown-preview)
- [Tailwind CSS](https://tailwindcss.com/)
- [WSL](https://learn.microsoft.com/en-us/windows/wsl/about)

## Innehållsförteckning

- [Dokumentation](#dokumentation)
  - [Mina verktyg](#mina-verktyg)
  - [Innehållsförteckning](#innehållsförteckning)
    - [Fördjupnings Teknik(er)](#fördjupnings-tekniker)
    - [Hur Byggde Jag Webbplatsen](#hur-byggde-jag-webbplatsen)
    - [Prioriteringar?](#prioriteringar)
    - [Mitt Resultat](#mitt-resultat)

---

### Fördjupnings Teknik(er)

- CSS Flex

Dessa kanske kan säkert också räknas:

- Absolute positioning
- Padding
- Margin
- Width och Height
- Hover
- Overflow
- Transitions

### Hur byggde jag webbsidan?

Jag använde mig utav Bun och TailwindCSS för att bygga websidan med dess snabba utility classes, för att inte spendera så mycket tid med troubleshooting pga css-problem, samtidigt finns det extensions i Tailwind som gör att använda color palettes bättre, det jag använde var @catppuccin/tailwindcss som tillåter dig att använda catppuccin's color palette inom css.

### Prioriteringar

Jag prioriterade att få webbsidan att följa standarder och för att få det att se bra ut. Jag försökte fixa med Accessibility lite grann, men jag vet inte ifall jag lyckas. Därmed vet jag inte ifall websidan fungerar på alla skärmstorlekar, vilket jag kan försöka med senare.

### Resultat

Det blev en fin webbsida med SVG backgrunder och ikoner, som går enligt en del standarder (I det jag vet), därmed fokuserade jag också på Performance och SEO, med att inte använda några riktiga bilder in webbsidan, bara svger. Den är rätt simpel, för jag använder mig inte utav någon framework eller någonting liknande. Men det blev väldigt bra endån.
