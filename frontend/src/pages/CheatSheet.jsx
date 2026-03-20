import { useState } from 'react';

const sections = [
  { id: 'osi', label: 'OSI vs TCP/IP' },
  { id: 'porte', label: 'Porte' },
  { id: 'subnet', label: 'Subnetting' },
  { id: 'cli', label: 'Comandi CLI' },
  { id: 'cavi', label: 'Cavi' },
  { id: 'sicurezza', label: 'Sicurezza' },
  { id: 'servizi', label: 'Servizi PT' },
];

export default function CheatSheet() {
  const [active, setActive] = useState('osi');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Cheat Sheet</h1>
        <p className="page-subtitle">Schemi riassuntivi per il ripasso veloce</p>
      </div>

      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              active === s.id
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                : 'bg-white/[0.03] text-gray-500 border border-white/[0.06] hover:text-gray-300 hover:bg-white/[0.06]'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="animate-fade-in">
        {active === 'osi' && <OsiTcpIp />}
        {active === 'porte' && <Porte />}
        {active === 'subnet' && <Subnetting />}
        {active === 'cli' && <ComandiCli />}
        {active === 'cavi' && <Cavi />}
        {active === 'sicurezza' && <Sicurezza />}
        {active === 'servizi' && <ServiziPT />}
      </div>
    </div>
  );
}

/* ──────────── Table helper ──────────── */
function Table({ headers, rows, accent = 'purple' }) {
  const colors = {
    purple: 'border-purple-500/15',
    blue: 'border-blue-500/15',
    emerald: 'border-emerald-500/15',
    amber: 'border-amber-500/15',
    red: 'border-red-500/15',
  };
  return (
    <div className={`overflow-x-auto rounded-xl border ${colors[accent]} bg-white/[0.02]`}>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-white/[0.06]">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2.5 text-left font-semibold text-gray-300 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-3 py-2 ${j === 0 ? 'font-medium text-gray-200' : 'text-gray-400'} whitespace-nowrap`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionTitle({ children }) {
  return <h3 className="text-sm font-bold text-gray-200 mt-6 mb-3 flex items-center gap-2">{children}</h3>;
}

function Tip({ children }) {
  return (
    <div className="mt-3 px-3.5 py-2.5 rounded-xl bg-purple-500/[0.06] border border-purple-500/10 text-xs text-purple-300/90 leading-relaxed">
      💡 {children}
    </div>
  );
}

/* ──────────── SEZIONI ──────────── */

function OsiTcpIp() {
  return (
    <div className="space-y-4">
      <SectionTitle>Modello OSI (7 livelli) vs TCP/IP (4 livelli)</SectionTitle>
      <Table
        headers={['#', 'Livello OSI', 'TCP/IP', 'PDU', 'Dispositivo', 'Protocolli']}
        rows={[
          ['7', 'Applicazione', 'Application', 'Dati', '—', 'HTTP, DNS, FTP, SMTP'],
          ['6', 'Presentazione', 'Application', 'Dati', '—', 'SSL/TLS, JPEG, ASCII'],
          ['5', 'Sessione', 'Application', 'Dati', '—', 'NetBIOS, RPC'],
          ['4', 'Trasporto', 'Transport', 'Segmento', '—', 'TCP, UDP'],
          ['3', 'Rete', 'Internet', 'Pacchetto', 'Router', 'IP, ICMP, ARP'],
          ['2', 'Collegamento', 'Network Access', 'Frame', 'Switch', 'Ethernet, 802.1Q'],
          ['1', 'Fisico', 'Network Access', 'Bit', 'Hub, Cavo', 'UTP, Fibra, Wi-Fi'],
        ]}
      />
      <Tip>
        Memorizza dall'alto: <strong>A</strong>ll <strong>P</strong>eople <strong>S</strong>eem <strong>T</strong>o <strong>N</strong>eed <strong>D</strong>ata <strong>P</strong>rocessing (7→1)
      </Tip>

      <SectionTitle>TCP vs UDP</SectionTitle>
      <Table
        accent="blue"
        headers={['', 'TCP', 'UDP']}
        rows={[
          ['Connessione', '✅ 3-way handshake', '❌ Connectionless'],
          ['Affidabilità', '✅ ACK, ritrasmissione', '❌ Nessuna garanzia'],
          ['Ordine', '✅ Sequence number', '❌ No'],
          ['Velocità', '🐌 Più lento', '🚀 Più veloce'],
          ['Header', '20+ byte', '8 byte'],
          ['Uso', 'Web, email, file', 'Streaming, DNS, VoIP, gaming'],
        ]}
      />
    </div>
  );
}

function Porte() {
  return (
    <div className="space-y-4">
      <SectionTitle>Porte principali da ricordare</SectionTitle>
      <Table
        accent="blue"
        headers={['Porta', 'Protocollo', 'Servizio', 'Trasporto']}
        rows={[
          ['20-21', 'FTP', 'Trasferimento file (20=dati, 21=controllo)', 'TCP'],
          ['22', 'SSH', 'Accesso remoto sicuro', 'TCP'],
          ['23', 'Telnet', 'Accesso remoto non sicuro', 'TCP'],
          ['25', 'SMTP', 'Invio email', 'TCP'],
          ['53', 'DNS', 'Risoluzione nomi', 'TCP/UDP'],
          ['67-68', 'DHCP', 'Assegnazione IP (67=server, 68=client)', 'UDP'],
          ['80', 'HTTP', 'Web non cifrato', 'TCP'],
          ['110', 'POP3', 'Ricezione email', 'TCP'],
          ['143', 'IMAP', 'Ricezione email (sincronizzata)', 'TCP'],
          ['443', 'HTTPS', 'Web cifrato (TLS)', 'TCP'],
        ]}
      />
      <Tip>Le porte <strong>0-1023</strong> = well-known, <strong>1024-49151</strong> = registered, <strong>49152-65535</strong> = dynamic/private</Tip>

      <SectionTitle>Range porte</SectionTitle>
      <Table
        accent="emerald"
        headers={['Range', 'Nome', 'Descrizione']}
        rows={[
          ['0 — 1023', 'Well-Known', 'Servizi standard (HTTP, DNS, FTP...)'],
          ['1024 — 49151', 'Registered', 'Applicazioni registrate'],
          ['49152 — 65535', 'Dynamic/Private', 'Porte temporanee del client'],
        ]}
      />
    </div>
  );
}

function Subnetting() {
  return (
    <div className="space-y-4">
      <SectionTitle>Formule fondamentali</SectionTitle>
      <Table
        accent="emerald"
        headers={['Formula', 'Significato', 'Esempio']}
        rows={[
          ['2ⁿ', 'Numero di sottoreti (n = bit presi)', '2³ = 8 sottoreti'],
          ['2ʰ − 2', 'Host utilizzabili (h = bit host)', '2⁶ − 2 = 62 host'],
          ['256 − valore_ottetto', 'Salto tra sottoreti', '256 − 192 = 64'],
          ['32 − n', 'Bit host dalla notazione /n', '/26 → 32-26 = 6 bit host'],
        ]}
      />

      <SectionTitle>Tabella Mask / Host / Sottoreti</SectionTitle>
      <Table
        headers={['CIDR', 'Subnet Mask', 'Host', 'Salto', 'Uso tipico']}
        rows={[
          ['/30', '255.255.255.252', '2', '4', 'Link WAN punto-punto'],
          ['/28', '255.255.255.240', '14', '16', 'Piccolo ufficio'],
          ['/27', '255.255.255.224', '30', '32', 'Ufficio medio'],
          ['/26', '255.255.255.192', '62', '64', 'Reparto grande'],
          ['/25', '255.255.255.128', '126', '128', 'Piano intero'],
          ['/24', '255.255.255.0', '254', '256', 'Rete standard'],
          ['/23', '255.255.254.0', '510', '2 (3° ott.)', 'Rete grande'],
          ['/22', '255.255.252.0', '1022', '4 (3° ott.)', 'Campus'],
          ['/16', '255.255.0.0', '65534', '—', 'Rete classe B'],
        ]}
      />

      <SectionTitle>Procedimento FLSM</SectionTitle>
      <div className="card p-4 text-xs text-gray-300 leading-relaxed space-y-1">
        <p><strong>1.</strong> Quante sottoreti servono? → 2ⁿ ≥ sottoreti → prendi <strong>n bit</strong></p>
        <p><strong>2.</strong> Nuova mask = mask originale + n bit → es. /24 + 2 = <strong>/26</strong></p>
        <p><strong>3.</strong> Host per sottorete = 2ʰ − 2 (h = bit host rimasti)</p>
        <p><strong>4.</strong> Salto = 256 − valore ottetto mask → es. 256 − 192 = <strong>64</strong></p>
        <p><strong>5.</strong> Indirizzo di rete: .0, .64, .128, .192 ... (intervallo = salto)</p>
        <p><strong>6.</strong> Broadcast = prossima rete − 1</p>
      </div>

      <SectionTitle>Procedimento VLSM</SectionTitle>
      <div className="card p-4 text-xs text-gray-300 leading-relaxed space-y-1">
        <p><strong>1.</strong> Elenca le sottoreti con il numero di host</p>
        <p><strong>2.</strong> <strong>Ordina dalla più grande alla più piccola</strong> (fondamentale!)</p>
        <p><strong>3.</strong> Per ognuna: 2ʰ − 2 ≥ host → trova la mask</p>
        <p><strong>4.</strong> Assegna partendo dal primo indirizzo disponibile</p>
        <p><strong>5.</strong> Link WAN tra router = sempre <strong>/30</strong> (2 host)</p>
      </div>
      <Tip>Nell'esame scrivi sempre la tabella: <strong>Rete | Primo host | Ultimo host | Broadcast | Host</strong></Tip>
    </div>
  );
}

function ComandiCli() {
  return (
    <div className="space-y-4">
      <SectionTitle>Modalità CLI del Router</SectionTitle>
      <Table
        accent="amber"
        headers={['Prompt', 'Modalità', 'Come entrare']}
        rows={[
          ['Router>', 'User EXEC', 'Accesso iniziale'],
          ['Router#', 'Privileged EXEC', 'enable'],
          ['Router(config)#', 'Global Config', 'configure terminal'],
          ['Router(config-if)#', 'Interface Config', 'interface Gig0/0'],
          ['Router(config-router)#', 'Router Config', 'router ospf 1'],
        ]}
      />

      <SectionTitle>Comandi Router essenziali</SectionTitle>
      <Table
        accent="amber"
        headers={['Comando', 'Cosa fa']}
        rows={[
          ['hostname R1', 'Cambia nome del router'],
          ['interface GigabitEthernet0/0', 'Entra nella config interfaccia'],
          ['ip address 192.168.1.1 255.255.255.0', 'Assegna IP all\'interfaccia'],
          ['no shutdown', 'Attiva l\'interfaccia'],
          ['ip route 0.0.0.0 0.0.0.0 <next-hop>', 'Rotta di default'],
          ['copy running-config startup-config', 'Salva la configurazione'],
          ['show running-config', 'Mostra config attiva'],
          ['show ip route', 'Mostra tabella di routing'],
          ['show ip interface brief', 'Stato delle interfacce'],
        ]}
      />

      <SectionTitle>Comandi Switch essenziali</SectionTitle>
      <Table
        accent="blue"
        headers={['Comando', 'Cosa fa']}
        rows={[
          ['vlan 10', 'Crea VLAN 10'],
          ['name Ufficio', 'Nomina la VLAN'],
          ['switchport mode access', 'Porta in modalità access'],
          ['switchport access vlan 10', 'Assegna porta a VLAN 10'],
          ['switchport mode trunk', 'Porta in modalità trunk'],
          ['show vlan brief', 'Mostra VLAN configurate'],
          ['show mac-address-table', 'Mostra tabella MAC'],
        ]}
      />

      <SectionTitle>Comandi NAT</SectionTitle>
      <Table
        accent="emerald"
        headers={['Comando', 'Cosa fa']}
        rows={[
          ['ip nat inside', 'Marca interfaccia come lato LAN'],
          ['ip nat outside', 'Marca interfaccia come lato WAN'],
          ['access-list 1 permit 192.168.1.0 0.0.0.255', 'IP che possono uscire'],
          ['ip nat inside source list 1 int G0/1 overload', 'Attiva il NAT'],
          ['show ip nat translations', 'Mostra traduzioni attive'],
        ]}
      />

      <SectionTitle>Comandi Port Security</SectionTitle>
      <Table
        accent="red"
        headers={['Comando', 'Cosa fa']}
        rows={[
          ['switchport port-security', 'Attiva port security'],
          ['switchport port-security maximum 1', 'Max 1 MAC per porta'],
          ['switchport port-security mac-address sticky', 'Impara il MAC automaticamente'],
          ['switchport port-security violation shutdown', 'Spegni porta se MAC diverso'],
          ['show port-security', 'Mostra stato port security'],
        ]}
      />

      <SectionTitle>Comandi verifica da PC</SectionTitle>
      <Table
        headers={['Comando', 'Cosa fa']}
        rows={[
          ['ping <IP>', 'Verifica raggiungibilità'],
          ['tracert <IP>', 'Mostra percorso dei pacchetti'],
          ['ipconfig', 'Mostra IP del PC'],
          ['ipconfig /all', 'Mostra tutti i dettagli IP'],
          ['nslookup <dominio>', 'Interroga il DNS'],
          ['ftp <IP>', 'Connessione FTP al server'],
        ]}
      />
      <Tip><strong>Tab</strong> = autocompleta il comando, <strong>?</strong> = mostra comandi disponibili, <strong>do show</strong> = esegui show da config mode</Tip>
    </div>
  );
}

function Cavi() {
  return (
    <div className="space-y-4">
      <SectionTitle>Tipi di cavo in Packet Tracer</SectionTitle>
      <Table
        headers={['Cavo', 'Uso', 'Esempio']}
        rows={[
          ['Dritto (straight-through)', 'Dispositivi DIVERSI', 'PC ↔ Switch, Router ↔ Switch'],
          ['Incrociato (crossover)', 'Dispositivi UGUALI', 'Switch ↔ Switch, PC ↔ PC'],
          ['Console (azzurro)', 'Configurazione CLI', 'PC ↔ porta Console router/switch'],
          ['Seriale (DCE/DTE)', 'Link WAN', 'Router ↔ Router'],
        ]}
      />
      <Tip>Regola semplice: <strong>diversi = dritto</strong>, <strong>uguali = incrociato</strong>. Il cavo console serve solo per configurare.</Tip>

      <SectionTitle>Mezzi trasmissivi</SectionTitle>
      <Table
        accent="blue"
        headers={['Mezzo', 'Tipo', 'Distanza', 'Velocità', 'Connettore']}
        rows={[
          ['UTP (doppino)', 'Guidato', '100 m', '1-10 Gbps', 'RJ45'],
          ['STP (doppino schermato)', 'Guidato', '100 m', '1-10 Gbps', 'RJ45'],
          ['Fibra monomodale', 'Guidato', 'Centinaia km', '100+ Gbps', 'LC/SC'],
          ['Fibra multimodale', 'Guidato', 'Centinaia m', '10+ Gbps', 'LC/SC'],
          ['Wi-Fi (802.11)', 'Non guidato', '~50 m indoor', 'Variabile', '—'],
          ['Bluetooth', 'Non guidato', '~10 m', 'Bassa', '—'],
        ]}
      />
    </div>
  );
}

function Sicurezza() {
  return (
    <div className="space-y-4">
      <SectionTitle>Tipi di Firewall</SectionTitle>
      <Table
        accent="red"
        headers={['Tipo', 'Livello', 'Cosa analizza', 'Velocità']}
        rows={[
          ['Packet Filter', 'L3-L4', 'IP, porta, protocollo', '🚀 Veloce'],
          ['Stateful', 'L3-L4', '+ stato connessione', '⚡ Medio'],
          ['Proxy / Application GW', 'L7', '+ contenuto (URL, file)', '🐌 Lento'],
          ['NGFW', 'L3-L7', 'Tutto + IPS + SSL', '⚡ Medio'],
        ]}
      />

      <SectionTitle>Crittografia — Confronto</SectionTitle>
      <Table
        accent="amber"
        headers={['', 'Simmetrica', 'Asimmetrica']}
        rows={[
          ['Chiavi', '1 chiave condivisa', '2 chiavi (pubblica + privata)'],
          ['Velocità', '🚀 Molto veloce', '🐌 Lenta (100-1000x)'],
          ['Problema', 'Come scambiare la chiave?', 'Lenta per grandi dati'],
          ['Algoritmi', 'AES, ChaCha20, DES', 'RSA, Diffie-Hellman, ECC'],
          ['Uso', 'Cifratura dati', 'Scambio chiavi, firma digitale'],
        ]}
      />

      <SectionTitle>Tipi di malware</SectionTitle>
      <Table
        headers={['Malware', 'Caratteristica', 'Si replica?', 'Azione umana?']}
        rows={[
          ['Virus', 'Si attacca a file', '✅', '✅'],
          ['Worm', 'Si propaga via rete', '✅', '❌'],
          ['Trojan', 'Si maschera da programma utile', '❌', '✅'],
          ['Ransomware', 'Cifra file, chiede riscatto', '❌/✅', '✅'],
          ['Spyware', 'Spia attività utente', '❌', '❌'],
          ['Keylogger', 'Registra tasti premuti', '❌', '❌'],
          ['Rootkit', 'Si nasconde nel SO', '❌', '❌'],
        ]}
      />

      <SectionTitle>Difese principali</SectionTitle>
      <Table
        accent="emerald"
        headers={['Minaccia', 'Difesa']}
        rows={[
          ['Malware generico', 'Antivirus aggiornato, patch'],
          ['Ransomware', 'Backup 3-2-1 (3 copie, 2 supporti, 1 off-site)'],
          ['Phishing', 'Formazione utenti, MFA'],
          ['MitM', 'HTTPS, TLS, certificati'],
          ['DDoS', 'CDN, firewall, anti-DDoS'],
          ['MAC Flooding', 'Port Security sullo switch'],
          ['DHCP Spoofing', 'DHCP Snooping'],
          ['Accesso non autorizzato', 'Password, MFA, minimo privilegio'],
        ]}
      />

      <SectionTitle>Architettura di sicurezza</SectionTitle>
      <div className="card p-4 text-xs text-gray-300 leading-relaxed font-mono">
        <p>Internet → <span className="text-red-400">[Firewall]</span> → <span className="text-amber-400">[DMZ: Web/Mail/DNS]</span> → <span className="text-red-400">[Firewall]</span> → <span className="text-emerald-400">[LAN con VLAN]</span></p>
        <p className="mt-2 text-gray-500 font-sans">+ VPN per accesso remoto + TLS per cifratura dati in transito</p>
      </div>
    </div>
  );
}

function ServiziPT() {
  return (
    <div className="space-y-4">
      <SectionTitle>Servizi su Server in Packet Tracer</SectionTitle>
      <Table
        accent="blue"
        headers={['Servizio', 'Dove si configura', 'Cosa impostare']}
        rows={[
          ['DHCP', 'Services → DHCP', 'Gateway, DNS, Start IP, Mask'],
          ['DNS', 'Services → DNS', 'Record A: nome → IP'],
          ['Email', 'Services → EMAIL', 'Domain, SMTP/POP3 ON, utenti'],
          ['FTP', 'Services → FTP', 'Utenti con permessi R/W/D/L'],
          ['HTTP', 'Services → HTTP', 'Pagina HTML personalizzata'],
        ]}
      />

      <SectionTitle>Configurazione IP sui PC</SectionTitle>
      <Table
        accent="emerald"
        headers={['Campo', 'Dove', 'Esempio']}
        rows={[
          ['IP / Mask / GW / DNS', 'Desktop → IP Configuration', 'Static o DHCP'],
          ['Client Email', 'Desktop → Email', 'SMTP/POP3 server, user, password'],
          ['Web Browser', 'Desktop → Web Browser', 'URL o IP del server'],
          ['Command Prompt', 'Desktop → Command Prompt', 'ping, tracert, ipconfig, nslookup, ftp'],
        ]}
      />

      <SectionTitle>Checklist servizi — cosa serve per ognuno</SectionTitle>
      <div className="space-y-2">
        {[
          { name: 'DNS', steps: ['Server con IP statico', 'Services → DNS → ON', 'Aggiungere record A (nome → IP)', 'Sui PC: campo DNS Server = IP del server DNS'] },
          { name: 'Email', steps: ['Server DNS configurato (record A per mail.dominio)', 'Server Mail: Services → EMAIL → domain, SMTP/POP3 ON, creare utenti', 'PC: Desktop → Email → server SMTP/POP3, user, password'] },
          { name: 'FTP', steps: ['Server: Services → FTP → creare utente + permessi', 'Dal PC: Command Prompt → ftp <IP> oppure Web Browser → ftp://user:pass@IP'] },
          { name: 'DHCP', steps: ['Server: Services → DHCP → pool con gateway, DNS, start IP', 'Oppure: router CLI → ip dhcp pool', 'PC: Desktop → IP Configuration → selezionare DHCP'] },
          { name: 'NAT', steps: ['Router: interfaccia LAN = ip nat inside', 'Router: interfaccia WAN = ip nat outside', 'access-list 1 permit <rete> <wildcard>', 'ip nat inside source list 1 interface <WAN> overload'] },
        ].map(svc => (
          <div key={svc.name} className="card p-3">
            <div className="text-xs font-bold text-purple-400 mb-1.5">{svc.name}</div>
            <ol className="text-xs text-gray-400 space-y-0.5 list-decimal list-inside">
              {svc.steps.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </div>
        ))}
      </div>
      <Tip>Per ogni servizio: prima configura il <strong>server</strong>, poi i <strong>PC client</strong>, poi <strong>verifica</strong> (ping, nslookup, Receive...)</Tip>
    </div>
  );
}
