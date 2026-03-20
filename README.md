# Sistemi e Reti — Studio Maturità

App web per studiare **Sistemi e Reti** in vista dell'esame di maturità. Contiene teoria, quiz, flashcard, simulazione orale, glossario e mappa concettuale interattiva.

**[Apri l'app](https://bazanji0.github.io/sistemi-e-reti/)**

## Funzionalità

| Funzione | Descrizione |
|----------|-------------|
| **Dashboard** | Panoramica progresso per sezione con statistiche globali |
| **Studio** | 121 argomenti con contenuti markdown, tabelle, blocchi di codice CLI |
| **Quiz** | 136 domande a risposta multipla, filtro per sezione o misto, timer opzionale, storico con grafici |
| **Flashcard** | 59 card con flip animation, spaced repetition, filtro per sezione |
| **Simulazione orale** | 27 domande aperte stile maturità con risposte modello |
| **Mappa concettuale** | Visualizzazione interattiva delle connessioni tra i 20 moduli (React Flow) |
| **Glossario** | 137 termini tecnici in ordine alfabetico con ricerca |
| **Ricerca globale** | Cerca in argomenti, quiz e glossario |

Il progresso (argomenti studiati, bookmark, quiz) viene salvato nel **localStorage** del browser.

## Contenuti — 20 Sezioni

| # | Sezione | Argomenti |
|---|---------|-----------|
| A | Mezzi trasmissivi | Doppino, fibra ottica, wireless |
| B | Apparati di rete | Hub, switch, router, AP, modem |
| C | Cablaggio strutturato | Rack, patch panel, standard EIA/TIA |
| D | Ethernet e MAC | Frame, MAC address, CSMA/CD |
| E | Modelli di riferimento | OSI a 7 livelli, TCP/IP a 4 livelli, incapsulamento |
| F | Indirizzi IP | IPv4, subnet mask, CIDR, gateway |
| G | Subnetting FLSM | Divisione in sottoreti con mask uguale + esercizi passo passo |
| H | Subnetting VLSM | Divisione ottimizzata con mask variabile + esercizi passo passo |
| I | Routing | Tabella di routing, metriche, statico vs dinamico |
| J | Routing statico | Configurazione manuale rotte, rotta di default |
| K | Grafi e reti | Rappresentazione matematica delle reti |
| L | RIP e OSPF | Distance vector vs link state |
| M | Livello Trasporto | TCP, UDP, three-way handshake, porte |
| N | Livello Applicazione | HTTP, HTTPS, DNS, DHCP, QUIC |
| O | Firewall | Packet filter, stateful, proxy, ACL, DMZ |
| P | Crittografia | Simmetrica, asimmetrica, hash, TLS, firma digitale |
| Q | VPN | Tunneling, IPsec, OpenVPN, WireGuard |
| R | VLAN | Segmentazione, 802.1Q, trunk, inter-VLAN routing |
| S | Malware | Virus, worm, trojan, ransomware, difese |
| T | Packet Tracer | CLI Cisco, configurazione router/switch, DNS, Email, FTP |

## Tech Stack

- **Frontend**: React 18 + Vite 6 + Tailwind CSS
- **Routing**: React Router (HashRouter per GitHub Pages)
- **Markdown**: react-markdown + remark-gfm (tabelle GFM)
- **Grafici**: Recharts
- **Mappa concettuale**: React Flow
- **Deploy**: GitHub Pages (cartella `docs/`)

## Deploy

Il sito è una **Single Page App statica** servita da GitHub Pages. Non richiede backend.

I dati (argomenti, quiz, flashcard, glossario) sono generati a build time dallo script `scripts/extract-data.mjs` a partire da `backend/db/seed.js`.

### Rigenerare e deployare

```bash
# 1. Rigenerare i dati statici
node scripts/extract-data.mjs

# 2. Installare dipendenze e buildare
cd frontend
npm install
npx vite build    # output in ../docs/

# 3. Commit e push
cd ..
git add docs/ frontend/src/data/database.js
git commit -m "Rebuild site"
git push origin master
```

GitHub Pages serve automaticamente la cartella `docs/` dal branch `master`.

## Sviluppo locale

```bash
cd frontend
npm install
npm run dev
```

Apri http://localhost:5173

## Struttura progetto

```
sistemi-e-reti/
  backend/db/seed.js          # Tutti i contenuti (sorgente unica)
  scripts/extract-data.mjs    # Genera database.js dai seed
  frontend/
    src/
      data/database.js         # Dati statici (auto-generato)
      pages/                   # Dashboard, TopicView, Quiz, ecc.
      components/              # UI components
    vite.config.js
  docs/                        # Build di produzione (GitHub Pages)
```

## Licenza

Progetto didattico per la preparazione all'esame di maturità.
