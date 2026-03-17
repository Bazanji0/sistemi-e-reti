export function seedDatabase(db) {
  const insertSection = db.prepare('INSERT INTO sections (id, code, name, description, sort_order) VALUES (?,?,?,?,?)');
  const insertTopic = db.prepare('INSERT INTO topics (section_id, number, title, content, keywords) VALUES (?,?,?,?,?)');
  const insertQuiz = db.prepare('INSERT INTO quiz_questions (section_id, topic_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES (?,?,?,?,?,?,?,?,?)');
  const insertFlashcard = db.prepare('INSERT INTO flashcards (section_id, topic_id, front, back) VALUES (?,?,?,?)');
  const insertOral = db.prepare('INSERT INTO oral_questions (section_id, question, model_answer, cross_section) VALUES (?,?,?,?)');
  const insertGlossary = db.prepare('INSERT INTO glossary (term, definition) VALUES (?,?)');

  const sections = [
    ['A','A','Mezzi Trasmissivi','Supporti fisici e canali per il trasporto dei segnali nelle reti',1],
    ['B','B','Apparati di Rete','Dispositivi hardware per la comunicazione in rete',2],
    ['C','C','Cablaggio Strutturato','Sistema standardizzato di cavi e componenti in edifici',3],
    ['D','D','Ethernet','Tecnologia LAN più diffusa per reti cablate',4],
    ['E','E','Modelli di Riferimento','Modelli a livelli ISO/OSI e TCP/IP',5],
    ['F','F','Indirizzi IP','Identificatori numerici per host e instradamento',6],
    ['G','G','Subnetting FLSM','Divisione reti con Fixed Length Subnet Mask',7],
    ['H','H','VLSM','Variable Length Subnet Mask per efficienza',8],
    ['I','I','Routing','Processo di instradamento dei pacchetti',9],
    ['J','J','Routing Statico','Configurazione manuale dei percorsi di rete',10],
    ['K','K','Grafi','Rappresentazione matematica delle reti',11],
    ['L','L','RIP e OSPF','Protocolli di routing dinamico',12],
    ['M','M','Trasporto','Comunicazione end-to-end tra applicazioni',13],
    ['N','N','Applicazioni e QUIC','Protocolli applicativi e QUIC di Google',14],
  ];

  const txn = db.transaction(() => {
    for (const s of sections) insertSection.run(...s);

    // ── SEZIONE A ──
    const topicsA = [
      [1,'Mezzo trasmissivo','Il **mezzo trasmissivo** è il supporto fisico o il canale attraverso cui vengono trasportati i segnali (elettrici, ottici o elettromagnetici) da un dispositivo all\'altro in una rete.\n\nÈ il componente fondamentale che determina:\n- **Velocità** di trasmissione dei dati\n- **Distanza** massima raggiungibile\n- **Affidabilità** della comunicazione\n\nSenza un mezzo trasmissivo, non è possibile alcuna comunicazione di rete.','mezzo trasmissivo,segnale,velocità,distanza,affidabilità'],
      [2,'Mezzi guidati vs non guidati','I mezzi trasmissivi si dividono in due categorie:\n\n### Mezzi guidati\n- Il segnale viaggia lungo un percorso fisico definito (cavo)\n- Esempi: **doppino intrecciato**, **fibra ottica**, cavo coassiale\n- Segnale più stabile e meno soggetto a interferenze\n\n### Mezzi non guidati\n- Il segnale si propaga nello spazio libero tramite **onde elettromagnetiche**\n- Esempi: **Wi-Fi**, **Bluetooth**, **satellite**, onde radio\n- Maggiore flessibilità e mobilità\n- Più soggetti a **interferenze** e attenuazione','mezzi guidati,mezzi non guidati,onde elettromagnetiche,Wi-Fi,Bluetooth'],
      [3,'Doppino intrecciato','Il **doppino intrecciato** (twisted pair) è composto da **2 fili di rame isolati e intrecciati** tra loro.\n\n### Caratteristiche:\n- L\'intreccio **riduce le interferenze elettromagnetiche** e la **diafonia** (crosstalk)\n- Utilizza il connettore **RJ45**\n- È il cavo più utilizzato nelle reti **Ethernet**\n- Economico e facile da installare\n- Distanza massima tipica: **100 metri** per segmento','doppino intrecciato,rame,RJ45,Ethernet,diafonia,interferenze'],
      [4,'UTP vs STP','Due varianti del doppino intrecciato:\n\n### UTP (Unshielded Twisted Pair)\n- **Senza schermatura** metallica\n- Più **economico** e flessibile\n- Ideale per **uffici** e ambienti domestici\n- Più soggetto a interferenze esterne\n\n### STP (Shielded Twisted Pair)\n- Con **schermatura metallica** (foglio o calza)\n- Migliore protezione contro interferenze\n- Usato in **ambienti industriali** con molte interferenze\n- Più costoso e rigido','UTP,STP,schermatura,interferenze'],
      [5,'Fibra monomodale vs multimodale','Due tipi di fibra ottica:\n\n### Fibra monomodale (Single-mode)\n- Usa sorgente **laser**\n- Il segnale segue **un solo percorso** (modo)\n- Raggiunge **centinaia di km** di distanza\n- Usata per **dorsali Internet** e collegamenti a lunga distanza\n\n### Fibra multimodale (Multi-mode)\n- Usa sorgente **LED**\n- Il segnale segue **più percorsi** contemporaneamente\n- Raggiunge **centinaia di metri**\n- Usata per **reti campus** e data center','fibra monomodale,fibra multimodale,laser,LED,dorsali'],
      [6,'Vantaggi fibra ottica','La **fibra ottica** trasmette dati sotto forma di impulsi luminosi.\n\n### Vantaggi:\n- **Velocità elevata**: capacità di banda molto superiore al rame\n- **Lunga distanza**: segnale si attenua molto meno\n- **Immune alle interferenze** elettromagnetiche\n- **Sicura**: difficile da intercettare (no emissioni EM)\n- Leggera e sottile\n\n### Svantaggi:\n- **Costo elevato** di materiali e installazione\n- Richiede competenze specializzate per giunzione\n- Più fragile del rame','fibra ottica,velocità,interferenze,sicurezza,costo'],
      [7,'Wireless','La comunicazione **wireless** utilizza **onde radio e microonde** per trasmettere dati senza cavi.\n\n### Tecnologie principali:\n- **Wi-Fi**: reti locali wireless (IEEE 802.11)\n- **Bluetooth**: connessioni a corto raggio\n- **Cellulare**: 4G, 5G per comunicazioni mobili\n- **Satellite**: copertura globale\n\n### Caratteristiche:\n- Grande **mobilità** e flessibilità\n- Nessun cablaggio necessario\n- Più soggetto a **interferenze** e ostacoli\n- Sicurezza richiede crittografia (WPA2/WPA3)','wireless,Wi-Fi,Bluetooth,cellulare,onde radio'],
    ];
    const aIds = [];
    for (const t of topicsA) { const r = insertTopic.run('A', t[0], t[1], t[2], t[3]); aIds.push(r.lastInsertRowid); }

    // ── SEZIONE B ──
    const topicsB = [
      [1,'Apparato di rete','Un **apparato di rete** è un dispositivo hardware che permette la comunicazione tra dispositivi in una rete.\n\n### Principali apparati:\n- **Switch**: commutatore di rete locale\n- **Router**: instradatore tra reti diverse\n- **Hub**: ripetitore multiporta (obsoleto)\n- **Modem**: modulatore/demodulatore\n- **Access Point (AP)**: punto di accesso wireless\n\nOgni apparato opera a un livello specifico del modello OSI e svolge funzioni precise.','apparato di rete,switch,router,hub,modem,access point'],
      [2,'Hub vs Switch','### Hub\n- Opera al **livello 1** (Fisico) del modello OSI\n- **Ripete il segnale a tutte le porte**\n- Non distingue i destinatari\n- Causa **collisioni** (dominio di collisione unico)\n- Oggi **obsoleto**\n\n### Switch\n- Opera al **livello 2** (Data Link) del modello OSI\n- **Legge l\'indirizzo MAC** di destinazione\n- Invia il frame **solo alla porta corretta**\n- Ogni porta è un dominio di collisione separato\n- Molto più efficiente dell\'hub','hub,switch,collisioni,MAC,livello 1,livello 2'],
      [3,'Switch Ethernet','Lo **switch Ethernet** è il dispositivo centrale delle reti locali moderne.\n\n### Funzionamento:\n- Mantiene una **tabella MAC** (MAC address table)\n- **Associa** ogni indirizzo MAC alla porta fisica corrispondente\n- Quando riceve un frame, consulta la tabella e **inoltra solo alla porta** del destinatario\n- Se il MAC non è in tabella, fa **flooding** (invia a tutte le porte)\n- Apprende automaticamente i MAC dai frame in ingresso','switch Ethernet,tabella MAC,porta,frame,flooding'],
      [4,'Router','Il **router** è il dispositivo che collega **reti diverse** tra loro.\n\n### Funzioni principali:\n- Opera al **livello 3** (Rete) del modello OSI\n- Instrada i pacchetti usando gli **indirizzi IP**\n- Funzioni aggiuntive: **NAT** (traduzione indirizzi), **firewall**, **DHCP**\n- Mantiene una **tabella di routing** con i percorsi verso le reti\n- Separa i **domini di broadcast**\n\nÈ il dispositivo fondamentale per la connessione a Internet.','router,IP,NAT,firewall,DHCP,instradamento,livello 3'],
      [5,'Modem vs Router','### Modem\n- **Converte il segnale** digitale in analogico (e viceversa)\n- Collega la rete domestica alla **linea del provider** (DSL, fibra, cavo)\n- Opera al livello fisico\n\n### Router\n- **Gestisce il traffico** tra LAN e Internet\n- Assegna indirizzi IP (DHCP)\n- Applica regole di sicurezza\n\n### Dispositivo combinato\n- Spesso modem e router sono **combinati in un unico dispositivo** fornito dall\'ISP\n- Include anche funzionalità switch e access point Wi-Fi','modem,router,provider,ISP,segnale'],
      [6,'Access Point','L\'**Access Point (AP)** funge da **ponte tra rete cablata e wireless**.\n\n### Caratteristiche:\n- Permette ai dispositivi wireless di connettersi alla rete LAN\n- Trasmette e riceve segnali Wi-Fi\n- Connesso via cavo Ethernet alla rete cablata\n\n### Router Wi-Fi\nUn tipico **router Wi-Fi** domestico è in realtà un dispositivo che combina:\n- **Router** (instradamento)\n- **Switch** (porte Ethernet)\n- **Access Point** (Wi-Fi)\n- Spesso anche **modem**','access point,wireless,Wi-Fi,ponte,LAN'],
      [7,'Livelli OSI degli apparati','Ogni apparato di rete opera a un livello specifico del modello **OSI**:\n\n| Apparato | Livello OSI | Funzione |\n|----------|-------------|----------|\n| **Hub** | Livello 1 - Fisico | Ripete segnali elettrici |\n| **Switch** | Livello 2 - Data Link | Commuta frame tramite MAC |\n| **Router** | Livello 3 - Rete | Instrada pacchetti tramite IP |\n\n### Regola pratica:\n- **Hub** = lavora con segnali (bit)\n- **Switch** = lavora con frame (MAC address)\n- **Router** = lavora con pacchetti (IP address)','OSI,hub,switch,router,livello 1,livello 2,livello 3'],
    ];
    const bIds = [];
    for (const t of topicsB) { const r = insertTopic.run('B', t[0], t[1], t[2], t[3]); bIds.push(r.lastInsertRowid); }

    // ── SEZIONE C ──
    const topicsC = [
      [1,'Introduzione al cablaggio strutturato','Il **cablaggio strutturato** è un sistema standardizzato di cavi, connettori e apparati installati in un edificio per supportare le comunicazioni.\n\n### Obiettivi:\n- **Ordine**: organizzazione sistematica dei cablaggi\n- **Flessibilità**: facile aggiunta/modifica di postazioni\n- **Manutenzione**: interventi rapidi e semplici\n- **Scalabilità**: crescita senza ristrutturazione\n\nSostituisce il cablaggio "spaghetti" disorganizzato con un sistema progettato secondo standard precisi.','cablaggio strutturato,ordine,flessibilità,manutenzione,scalabilità'],
      [2,'Vantaggi del cablaggio strutturato','### Vantaggi principali:\n- **Universale**: supporta dati, voce, video sullo stesso cablaggio\n- **Standardizzato**: segue norme internazionali\n- **Indipendente** dalla tecnologia: funziona con diversi protocolli\n- **Affidabile**: componenti certificati e testati\n- **Economico** nel lungo termine: riduce costi di gestione\n- **Documentato**: ogni componente è identificato e mappato','vantaggi,universale,standardizzato,affidabile'],
      [3,'Componenti del cablaggio','I componenti principali del cablaggio strutturato:\n\n- **Cavi**: doppino UTP/STP cat. 5e, 6, 6a; fibra ottica\n- **Prese di rete** (outlet): punti di connessione a muro negli uffici\n- **Patch panel**: pannello di permutazione nell\'armadio rack\n- **Armadio rack**: struttura che ospita gli apparati\n- **Patch cord**: cavi corti per collegare presa↔PC e patch panel↔switch\n- **Canalizzazioni**: tubi e canaline per il passaggio dei cavi','cavi,prese,patch panel,armadio rack,patch cord'],
      [4,'Cablaggio orizzontale vs dorsale','### Cablaggio orizzontale\n- Collega le **prese ufficio** all\'**armadio di piano** (floor distributor)\n- Usa tipicamente cavo in rame (UTP cat. 6)\n- Distanza massima: **90 metri** (+ 10m patch cord)\n- Topologia a **stella**\n\n### Cablaggio dorsale (backbone)\n- Collega gli **armadi di piano** tra loro e al **centro stella** principale\n- Collega edifici diversi nel campus\n- Usa spesso **fibra ottica** per prestazioni e distanza\n- È la "spina dorsale" della rete','orizzontale,dorsale,backbone,stella,fibra ottica'],
      [5,'Armadio rack','L\'**armadio rack** è una struttura metallica standardizzata da **19 pollici** di larghezza.\n\n### Contenuto tipico:\n- **Switch** di rete\n- **Patch panel**\n- **Router**\n- **Server**\n- Gruppi di continuità (UPS)\n- Sistemi di raffreddamento\n\n### Caratteristiche:\n- Misurato in **unità rack (U)** = 1.75 pollici di altezza\n- Armadi comuni: 12U, 24U, 42U\n- Garantisce ordine e accessibilità','armadio rack,19 pollici,unità rack,switch,server'],
      [6,'Patch panel','Il **patch panel** è un pannello con molteplici porte dove vengono **terminati i cavi** provenienti dalle prese ufficio.\n\n### Funzionamento:\n- Sul retro: collegamento permanente dei cavi dagli uffici\n- Sul fronte: porte numerate per collegamento con **patch cord** allo switch\n\n### Vantaggi:\n- **Flessibilità**: cambiare connessioni senza toccare i cavi nel muro\n- **Ordine**: gestione pulita dei collegamenti\n- **Manutenzione**: facile identificazione e sostituzione','patch panel,porte,patch cord,switch,flessibilità'],
      [7,'Standard di cablaggio','### EIA/TIA-568 (standard americano)\n- Definisce specifiche per cablaggio in edifici commerciali\n- Due schemi di cablaggio: **T568A** e **T568B**\n- Regole su cavi, connettori, distanze, topologie\n\n### ISO/IEC 11801 (standard internazionale)\n- Equivalente internazionale del TIA-568\n- Definisce **classi** di collegamento e **categorie** di cavi\n- Applicabile a livello globale\n\n### Categorie cavi comuni:\n- **Cat 5e**: fino a 1 Gbps\n- **Cat 6**: fino a 10 Gbps (55m)\n- **Cat 6a**: fino a 10 Gbps (100m)','EIA/TIA-568,ISO/IEC 11801,T568A,T568B,categorie'],
    ];
    const cIds = [];
    for (const t of topicsC) { const r = insertTopic.run('C', t[0], t[1], t[2], t[3]); cIds.push(r.lastInsertRowid); }

    // ── SEZIONE D ──
    const topicsD = [
      [1,'Cos\'è Ethernet','**Ethernet** è la tecnologia **LAN più diffusa** al mondo. Definisce le regole per la trasmissione dei dati nelle reti locali cablate.\n\n### Caratteristiche:\n- Standard **IEEE 802.3**\n- Utilizzata nella stragrande maggioranza delle reti locali\n- Economica e affidabile\n- In continua evoluzione (velocità sempre maggiori)','Ethernet,LAN,IEEE 802.3,standard'],
      [2,'Ethernet e il modello OSI','Ethernet opera al **livello 2 (Data Link)** del modello OSI.\n\n### Funzioni al livello 2:\n- Gestione dei **frame** (unità dati del livello 2)\n- Indirizzamento tramite **MAC address**\n- Rilevamento errori con **CRC**\n- Controllo accesso al mezzo (MAC sublayer)\n\nEthernet definisce anche specifiche per il livello 1 (cavi, connettori, segnali).','livello 2,Data Link,frame,MAC,CRC'],
      [3,'Struttura rete Ethernet','Una rete Ethernet è composta da:\n\n### Componenti fisici:\n- **Cavi**: rame (UTP) o fibra ottica\n- **Switch**: dispositivo centrale di commutazione\n- **Router**: per connessione ad altre reti\n- **NIC** (Network Interface Card): scheda di rete nei dispositivi\n\n### Topologia:\n- **Stella**: tutti i dispositivi collegati a uno switch centrale\n- Oggi è la topologia standard per Ethernet','cavi,switch,router,NIC,stella'],
      [4,'Frame Ethernet','Il **frame** è l\'unità dati del livello 2. Struttura:\n\n| Campo | Dimensione | Funzione |\n|-------|-----------|----------|\n| Preambolo | 7 byte | Sincronizzazione |\n| SFD | 1 byte | Inizio frame |\n| **MAC destinazione** | 6 byte | Chi deve ricevere |\n| **MAC sorgente** | 6 byte | Chi ha inviato |\n| **Tipo/Lunghezza** | 2 byte | Protocollo superiore (es. IPv4=0x0800) |\n| **Payload** | 46-1500 byte | Dati trasportati |\n| **CRC/FCS** | 4 byte | Controllo errori |','frame,MAC,payload,CRC,preambolo'],
      [5,'MAC Address','Il **MAC Address** (Media Access Control) identifica in modo **univoco** ogni scheda di rete.\n\n### Caratteristiche:\n- Lungo **48 bit** (6 byte)\n- Scritto in formato **esadecimale** (es. `AA:BB:CC:11:22:33`)\n- I primi 3 byte: **OUI** (identifica il produttore)\n- Gli ultimi 3 byte: identificatore unico del dispositivo\n- **Assegnato in fabbrica** (burned-in), ma può essere modificato via software\n- Usato per comunicazioni al livello 2 (locale)','MAC address,48 bit,esadecimale,OUI,univoco'],
      [6,'Ruolo dello switch','Lo **switch** è l\'elemento centrale in una rete Ethernet moderna.\n\n### Funzionamento:\n1. Riceve un frame su una porta\n2. Legge il **MAC di destinazione**\n3. Consulta la **tabella MAC**\n4. **Inoltra il frame solo alla porta** corretta\n\n### Vantaggi rispetto all\'hub:\n- **No collisioni**: ogni porta è un dominio separato\n- **Full-duplex**: invio e ricezione simultanei\n- **Maggiore sicurezza**: i dati non raggiungono tutti\n- **Prestazioni superiori**: banda dedicata per porta','switch,tabella MAC,full-duplex,porta'],
      [7,'Velocità Ethernet','L\'evoluzione delle velocità Ethernet:\n\n| Standard | Velocità | Nome |\n|----------|----------|------|\n| 802.3 | **10 Mbps** | Ethernet |\n| 802.3u | **100 Mbps** | Fast Ethernet |\n| 802.3ab | **1 Gbps** | Gigabit Ethernet |\n| 802.3an | **10 Gbps** | 10 Gigabit Ethernet |\n| 802.3bs | **200/400 Gbps** | Ultra-high speed |\n\nLa retrocompatibilità è garantita: dispositivi di velocità diverse possono coesistere (autonegotiation).','velocità,Mbps,Gbps,Fast Ethernet,Gigabit'],
      [8,'Ethernet e cablaggio strutturato','Ethernet è **pienamente compatibile** con il cablaggio strutturato.\n\n### Integrazione:\n- I cavi UTP cat. 5e/6/6a sono progettati per Ethernet\n- Le prese RJ45 a muro si collegano direttamente a dispositivi Ethernet\n- Gli switch Ethernet si installano negli armadi rack\n- I patch panel facilitano la gestione delle connessioni\n\nIl cablaggio strutturato fornisce l\'infrastruttura fisica su cui Ethernet opera.','cablaggio strutturato,UTP,RJ45,rack'],
      [9,'CSMA/CD','**CSMA/CD** (Carrier Sense Multiple Access with Collision Detection):\n\n### Funzionamento:\n1. **Carrier Sense**: ascolta se il canale è libero\n2. **Multiple Access**: più dispositivi condividono il mezzo\n3. **Collision Detection**: rileva collisioni durante la trasmissione\n4. In caso di collisione → attesa casuale (backoff) → ritrasmissione\n\n### Oggi:\n- **Meno rilevante** nelle reti moderne\n- Gli switch full-duplex eliminano le collisioni\n- Ogni porta dello switch è un dominio di collisione isolato\n- Rimane importante per la teoria e la storia di Ethernet','CSMA/CD,collisione,full-duplex,backoff'],
    ];
    const dIds = [];
    for (const t of topicsD) { const r = insertTopic.run('D', t[0], t[1], t[2], t[3]); dIds.push(r.lastInsertRowid); }

    // ── SEZIONE E ──
    const topicsE = [
      [1,'Perché i modelli a livelli','I **modelli a livelli** organizzano le funzioni di rete in strati separati.\n\n### Vantaggi:\n- **Modularità**: ogni livello ha una funzione specifica\n- **Interoperabilità**: produttori diversi possono collaborare\n- **Manutenzione**: problemi isolati a un livello\n- **Sviluppo indipendente**: modificare un livello senza toccare gli altri\n- **Astrazione**: nasconde la complessità\n\nI due modelli principali sono **ISO/OSI** e **TCP/IP**.','modelli a livelli,modularità,interoperabilità,astrazione'],
      [2,'Modello ISO/OSI','Il modello **ISO/OSI** (Open Systems Interconnection) ha **7 livelli**:\n\n| # | Livello | Funzione | PDU |\n|---|---------|----------|-----|\n| 7 | **Applicazione** | Interfaccia utente | Dati |\n| 6 | **Presentazione** | Formato/crittografia | Dati |\n| 5 | **Sessione** | Gestione sessioni | Dati |\n| 4 | **Trasporto** | Comunicazione end-to-end | Segmento |\n| 3 | **Rete** | Instradamento (IP) | Pacchetto |\n| 2 | **Collegamento dati** | Frame e MAC | Frame |\n| 1 | **Fisico** | Bit sul mezzo | Bit |\n\nMnemonico: **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing','ISO/OSI,7 livelli,applicazione,trasporto,rete,fisico'],
      [3,'Modello TCP/IP','Il modello **TCP/IP** ha **4 livelli**:\n\n| # | Livello | Funzione | Protocolli |\n|---|---------|----------|------------|\n| 4 | **Application** | Servizi all\'utente | HTTP, FTP, DNS, SMTP |\n| 3 | **Transport** | Comunicazione end-to-end | TCP, UDP |\n| 2 | **Internet** | Instradamento | IP, ICMP, ARP |\n| 1 | **Network Access** | Accesso fisico alla rete | Ethernet, Wi-Fi |\n\n### Caratteristiche:\n- Più semplice e pratico dell\'OSI\n- Basato sui protocolli reali di Internet\n- Modello di riferimento effettivo per le reti moderne','TCP/IP,4 livelli,Application,Transport,Internet,Network Access'],
      [4,'Corrispondenza OSI ↔ TCP/IP','### Mapping tra i due modelli:\n\n| OSI | TCP/IP |\n|-----|--------|\n| Applicazione + Presentazione + Sessione | **Application** |\n| Trasporto | **Transport** |\n| Rete | **Internet** |\n| Collegamento dati + Fisico | **Network Access** |\n\n### Differenze chiave:\n- OSI: modello **teorico** di riferimento\n- TCP/IP: modello **pratico** basato su protocolli reali\n- OSI ha 7 livelli più dettagliati\n- TCP/IP accorpa alcuni livelli per semplicità','corrispondenza,OSI,TCP/IP,mapping'],
      [5,'Perché Internet usa TCP/IP','Internet utilizza il modello **TCP/IP** per ragioni storiche e pratiche:\n\n### Motivazioni:\n- TCP/IP è stato **sviluppato prima** dell\'OSI (anni \'70 vs anni \'80)\n- È stato **adottato nella pratica** da ARPANET (predecessore di Internet)\n- I protocolli TCP e IP erano già **funzionanti e testati**\n- L\'OSI è rimasto un modello **teorico/accademico**\n- TCP/IP è **più semplice** e pragmatico\n\n### Risultato:\n- OSI = ottimo per **studiare** e **comprendere** le reti\n- TCP/IP = modello **usato nella realtà** di Internet','Internet,TCP/IP,ARPANET,storico,pratico'],
    ];
    const eIds = [];
    for (const t of topicsE) { const r = insertTopic.run('E', t[0], t[1], t[2], t[3]); eIds.push(r.lastInsertRowid); }

    // ── SEZIONE F ──
    const topicsF = [
      [6,'Indirizzo IP','L\'**indirizzo IP** è un identificatore numerico assegnato a ogni dispositivo (host) connesso a una rete.\n\n### Funzioni:\n- **Identifica** univocamente un host nella rete\n- Permette l\'**instradamento** dei pacchetti verso la destinazione corretta\n- È l\'equivalente dell\'"indirizzo postale" nel mondo delle reti\n\n### Versioni:\n- **IPv4**: versione attuale più usata\n- **IPv6**: nuova versione con più indirizzi disponibili','indirizzo IP,host,instradamento,IPv4,IPv6'],
      [7,'IPv4','**IPv4** (Internet Protocol versione 4):\n\n### Formato:\n- Lungo **32 bit** (4 byte)\n- Scritto in **4 ottetti** separati da punti\n- Esempio: `192.168.1.10`\n- Ogni ottetto va da 0 a 255\n\n### Struttura:\n- **Net ID** (parte rete): identifica la rete di appartenenza\n- **Host ID** (parte host): identifica il dispositivo nella rete\n\n### Spazio indirizzamento:\n- 2³² = circa **4,3 miliardi** di indirizzi\n- Oggi insufficienti → si usa NAT e IPv6','IPv4,32 bit,ottetti,Net ID,Host ID'],
      [8,'Indirizzi speciali','Nella notazione IPv4 ci sono indirizzi con significato speciale:\n\n### Indirizzo di rete\n- Host ID tutto a **0** (es. `192.168.1.0`)\n- Identifica la **rete stessa**, non un host\n- Non assegnabile a nessun dispositivo\n\n### Indirizzo host\n- Qualsiasi indirizzo valido (es. `192.168.1.15`)\n- Assegnato a un dispositivo specifico\n\n### Indirizzo di broadcast\n- Host ID tutto a **1** / **255** (es. `192.168.1.255`)\n- Invia il pacchetto a **tutti gli host** della rete\n- Non assegnabile a nessun dispositivo','indirizzo di rete,host,broadcast,.0,.255'],
      [9,'Subnet mask','La **subnet mask** (maschera di sottorete) separa la parte **rete** dalla parte **host** di un indirizzo IP.\n\n### Funzionamento:\n- I bit a **1** indicano la parte di **rete**\n- I bit a **0** indicano la parte **host**\n\n### Esempio:\n- Subnet mask: `255.255.255.0`\n- In binario: `11111111.11111111.11111111.00000000`\n- 24 bit per la rete, 8 bit per gli host\n\n### Operazione AND:\n- IP AND subnet mask = **indirizzo di rete**\n- `192.168.1.10 AND 255.255.255.0 = 192.168.1.0`','subnet mask,rete,host,AND,bit'],
      [10,'Notazione CIDR','**CIDR** (Classless Inter-Domain Routing) è una notazione compatta per indicare la subnet mask.\n\n### Formato:\n- Si scrive dopo l\'IP con uno **slash**: `192.168.1.0/24`\n- Il numero indica quanti bit sono dedicati alla **rete**\n\n### Esempi:\n| CIDR | Subnet Mask | Host disponibili |\n|------|-------------|------------------|\n| /8 | 255.0.0.0 | 16.777.214 |\n| /16 | 255.255.0.0 | 65.534 |\n| /24 | 255.255.255.0 | 254 |\n| /26 | 255.255.255.192 | 62 |\n| /28 | 255.255.255.240 | 14 |\n\nCIDR è più **flessibile** delle vecchie classi A, B, C.','CIDR,slash,notazione,flessibile,classi'],
      [11,'Default gateway','Il **default gateway** è l\'indirizzo del **router** che un host utilizza per raggiungere reti esterne alla propria.\n\n### Funzionamento:\n1. L\'host vuole comunicare con un IP\n2. Confronta l\'IP con la propria rete (tramite subnet mask)\n3. Se è nella **stessa rete**: comunicazione diretta\n4. Se è in una **rete diversa**: invia al default gateway\n5. Il router instrada verso la destinazione\n\n### Configurazione:\n- Deve essere un IP nella **stessa rete** dell\'host\n- Tipicamente il **primo** (.1) o l\'**ultimo** (.254) indirizzo utile','default gateway,router,rete esterna,instradamento'],
    ];
    const fIds = [];
    for (const t of topicsF) { const r = insertTopic.run('F', t[0], t[1], t[2], t[3]); fIds.push(r.lastInsertRowid); }

    // ── SEZIONE G ──
    const topicsG = [
      [12,'Cos\'è il subnetting','Il **subnetting** è la tecnica di dividere una rete IP in **sottoreti** (subnet) più piccole.\n\n### Motivazioni:\n- **Gestione**: reti più piccole sono più facili da amministrare\n- **Traffico**: riduce il dominio di broadcast\n- **Sicurezza**: isola segmenti di rete\n- **Efficienza**: migliore utilizzo degli indirizzi IP\n\nSi realizza "prendendo in prestito" bit dalla parte host per creare la parte sottorete.','subnetting,sottoreti,gestione,sicurezza,broadcast'],
      [13,'FLSM','**FLSM** (Fixed Length Subnet Mask) = tutte le sottoreti hanno la **stessa subnet mask**.\n\n### Caratteristiche:\n- Ogni sottorete ha lo **stesso numero** di host disponibili\n- Semplice da calcolare e configurare\n- Non ottimale per reti con esigenze diverse\n\n### Esempio:\n- Rete: `192.168.1.0/24`\n- Servono 4 sottoreti\n- Tutte avranno mask `/26` (255.255.255.192)\n- Ogni sottorete: 62 host disponibili','FLSM,Fixed Length,stessa mask,sottoreti'],
      [14,'Procedimento FLSM','### Passi per il subnetting FLSM:\n\n1. **Determinare** il numero di sottoreti necessarie\n2. **Calcolare** i bit da prendere dalla parte host: 2ⁿ ≥ numero sottoreti\n3. **Nuova subnet mask**: aggiungere n bit alla mask originale\n4. **Calcolare** gli indirizzi per ogni sottorete:\n   - Indirizzo di rete\n   - Range host utilizzabili\n   - Indirizzo di broadcast\n   - Host disponibili = 2^(bit host rimanenti) - 2\n\n### Formula host:\n**Host utilizzabili = 2^h - 2** (si sottraggono rete e broadcast)','procedimento,FLSM,bit,calcolo,formula'],
      [15,'Esempio FLSM','### Esempio pratico:\n\n**Rete**: `192.168.1.0/24` → servono **4 sottoreti**\n\n**Calcolo**: 2² = 4 → prendiamo **2 bit** → nuova mask: **/26** (255.255.255.192)\n\nHost per sottorete: 2⁶ - 2 = **62**\n\n| Sottorete | Rete | Primo host | Ultimo host | Broadcast |\n|-----------|------|------------|-------------|-----------|\n| 1 | 192.168.1.0/26 | .1 | .62 | .63 |\n| 2 | 192.168.1.64/26 | .65 | .126 | .127 |\n| 3 | 192.168.1.128/26 | .129 | .190 | .191 |\n| 4 | 192.168.1.192/26 | .193 | .254 | .255 |','esempio,FLSM,/26,sottoreti,calcolo'],
      [16,'Limiti FLSM','### Svantaggi di FLSM:\n\n- **Spreco di indirizzi**: se una sottorete ha 10 host ma la mask ne prevede 62, si sprecano 52 indirizzi\n- **Poca flessibilità**: non si adatta a reti con esigenze diverse\n- **Non ottimale**: in reti reali le dimensioni delle sottoreti variano molto\n\n### Esempio di spreco:\n- Sottorete A: 100 host necessari\n- Sottorete B: 5 host necessari\n- Con FLSM entrambe avrebbero la stessa dimensione\n- → Si spreca spazio nella sottorete B\n\nPer risolvere questo problema si usa il **VLSM**.','limiti,spreco,flessibilità,VLSM'],
    ];
    const gIds = [];
    for (const t of topicsG) { const r = insertTopic.run('G', t[0], t[1], t[2], t[3]); gIds.push(r.lastInsertRowid); }

    // ── SEZIONE H ──
    const topicsH = [
      [17,'VLSM','**VLSM** (Variable Length Subnet Mask) permette di usare **subnet mask diverse** per ogni sottorete.\n\n### Vantaggi:\n- Ogni sottorete ha la dimensione **adatta** alle sue esigenze\n- **Efficienza** nell\'uso degli indirizzi IP\n- Riduce drasticamente lo spreco\n\n### Differenza con FLSM:\n- FLSM: tutte le sottoreti uguali\n- VLSM: sottoreti di **dimensioni diverse**','VLSM,Variable Length,subnet mask diverse,efficienza'],
      [18,'Efficienza VLSM','VLSM è più **efficiente** perché assegna solo gli indirizzi necessari.\n\n### Confronto:\n| Scenario | FLSM | VLSM |\n|----------|------|------|\n| LAN 100 host | /25 (126 host) | /25 (126 host) |\n| LAN 30 host | /25 (126 host) | /27 (30 host) |\n| LAN 10 host | /25 (126 host) | /28 (14 host) |\n| **Totale usati** | 378 | 170 |\n| **Sprecati** | 238 | 30 |\n\nVLSM risparmia **oltre l\'80%** degli indirizzi sprecati!','efficienza,confronto,FLSM,spreco,risparmio'],
      [19,'Metodo VLSM','### Procedimento VLSM:\n\n1. **Elencare** tutte le sottoreti necessarie con il numero di host\n2. **Ordinare** dalla più grande alla più piccola\n3. **Assegnare prima** le sottoreti più grandi\n4. Per ogni sottorete:\n   - Calcolare la mask adatta: 2^h - 2 ≥ host richiesti\n   - Assegnare il prossimo blocco disponibile\n5. **Verificare** che non ci siano sovrapposizioni\n\n### Regola fondamentale:\nSempre **partire dalla sottorete più grande** per evitare frammentazione dello spazio indirizzi.','metodo,procedimento,ordinare,assegnare'],
      [20,'Esempio VLSM','### Esempio pratico:\n\n**Rete**: `192.168.10.0/24`\n\n| LAN | Host necessari | Mask | Host disponibili |\n|-----|---------------|------|------------------|\n| A | 100 | **/25** | 126 |\n| B | 30 | **/27** | 30 |\n| C | 10 | **/28** | 14 |\n\n### Assegnazione (dalla più grande):\n\n| LAN | Rete | Range | Broadcast |\n|-----|------|-------|-----------|\n| A | 192.168.10.0/25 | .1 - .126 | .127 |\n| B | 192.168.10.128/27 | .129 - .158 | .159 |\n| C | 192.168.10.160/28 | .161 - .174 | .175 |\n\nSpazio rimanente: .176 - .255 disponibile per future espansioni!','esempio,VLSM,/25,/27,/28,assegnazione'],
      [21,'Uso del VLSM','### Dove si usa VLSM:\n\n- **Reti aziendali**: dipartimenti con dimensioni diverse\n- **ISP** (Internet Service Provider): assegnazione efficiente ai clienti\n- **Grandi infrastrutture**: data center, campus universitari\n- **Link punto-punto**: tra router bastano /30 (2 host)\n\n### Requisiti:\n- I router devono supportare **routing classless** (CIDR)\n- Protocolli di routing compatibili: **OSPF**, **EIGRP**, **RIPv2**\n- RIPv1 **non** supporta VLSM\n\nVLSM è lo standard nelle reti moderne.','aziendali,ISP,infrastrutture,CIDR,OSPF'],
    ];
    const hIds = [];
    for (const t of topicsH) { const r = insertTopic.run('H', t[0], t[1], t[2], t[3]); hIds.push(r.lastInsertRowid); }

    // ── SEZIONE I ──
    const topicsI = [
      [22,'Cos\'è il routing','Il **routing** (instradamento) è il processo con cui un router determina il **percorso migliore** per inoltrare un pacchetto verso la destinazione.\n\n### Processo:\n1. Il router riceve un pacchetto\n2. Legge l\'**IP di destinazione**\n3. Consulta la **tabella di routing**\n4. Determina l\'**interfaccia di uscita** e il **next hop**\n5. Inoltra il pacchetto\n\nIl routing avviene al **livello 3** (Rete) del modello OSI.','routing,instradamento,percorso,router,livello 3'],
      [23,'Tabella di routing','La **tabella di routing** è il database che il router consulta per prendere decisioni di instradamento.\n\n### Contenuto di ogni entry:\n- **Rete di destinazione**: la rete da raggiungere\n- **Subnet mask**: dimensione della rete\n- **Next hop**: IP del prossimo router\n- **Interfaccia di uscita**: porta da cui inviare il pacchetto\n- **Metrica**: costo del percorso\n- **Tipo**: come è stata appresa la rotta (statica, dinamica, direttamente connessa)\n\nIl router sceglie sempre la rotta **più specifica** (longest prefix match).','tabella di routing,next hop,interfaccia,metrica,entry'],
      [24,'Routing diretto vs indiretto','### Routing diretto\n- Mittente e destinatario sono nella **stessa rete**\n- Il pacchetto viene consegnato **direttamente**\n- Non serve passare per un router\n- Si usa ARP per trovare il MAC del destinatario\n\n### Routing indiretto\n- Mittente e destinatario sono in **reti diverse**\n- Il pacchetto deve attraversare **uno o più router**\n- L\'host invia al **default gateway**\n- Ogni router inoltra al next hop fino alla destinazione\n\nIl confronto IP + subnet mask determina se è diretto o indiretto.','diretto,indiretto,stessa rete,reti diverse,ARP'],
      [25,'Longest prefix match','Il **longest prefix match** è la regola usata dal router per scegliere la rotta quando più entry corrispondono.\n\n### Principio:\n- Si sceglie la rotta con la **subnet mask più lunga** (più specifica)\n- Più bit nella mask = corrispondenza più precisa\n\n### Esempio:\nDestinazione: `10.1.1.100`\n\n| Rotta | Match? |\n|-------|--------|\n| 10.0.0.0/8 | Sì (generico) |\n| 10.1.0.0/16 | Sì (più specifico) |\n| 10.1.1.0/24 | Sì (**più specifico** ✓) |\n\nVince la rotta `/24` perché è la più specifica.','longest prefix match,rotta più specifica,subnet mask'],
      [26,'Router di default','Il **router di default** (default route) è il percorso utilizzato quando **non esiste una rotta specifica** per la destinazione.\n\n### Caratteristiche:\n- Indicato come `0.0.0.0/0` nella tabella di routing\n- Corrisponde a **qualsiasi** destinazione\n- Ha la mask più corta possibile (/0)\n- Viene scelta **solo** se nessun\'altra rotta è più specifica\n- Tipicamente punta verso il router di **uscita verso Internet**\n\n### Analogia:\nÈ come il cartello "tutte le direzioni" in un incrocio.','default route,0.0.0.0,rotta predefinita,Internet'],
    ];
    const iIds = [];
    for (const t of topicsI) { const r = insertTopic.run('I', t[0], t[1], t[2], t[3]); iIds.push(r.lastInsertRowid); }

    // ── SEZIONE J ──
    const topicsJ = [
      [27,'Routing statico','Il **routing statico** prevede che i percorsi di rete vengano **configurati manualmente** dall\'amministratore.\n\n### Caratteristiche:\n- Le rotte vengono inserite **a mano** nella tabella di routing\n- **Non si aggiornano automaticamente** in caso di cambiamenti\n- Il router segue sempre le rotte configurate\n- Se un link cade, la rotta statica rimane (e il traffico viene perso)\n\n### Comando tipico (Cisco):\n```\nip route [rete] [mask] [next-hop]\nip route 192.168.2.0 255.255.255.0 10.0.0.2\n```','routing statico,manuale,configurazione,rotte'],
      [28,'Vantaggi e svantaggi routing statico','### Vantaggi:\n- **Semplice** da configurare in reti piccole\n- **Sicuro**: l\'amministratore ha controllo totale\n- **Nessun overhead**: non genera traffico di routing\n- **Prevedibile**: il percorso è sempre noto\n- Basso consumo di CPU e memoria\n\n### Svantaggi:\n- **Non scalabile**: impraticabile con molte reti\n- **Gestione complessa**: ogni modifica va fatta manualmente su ogni router\n- **Nessun failover automatico**: se un link cade, serve intervento manuale\n- Non adatto a reti dinamiche e in evoluzione\n\n### Uso ideale:\nReti piccole, link punto-punto, default route.','vantaggi,svantaggi,scalabilità,sicurezza,overhead'],
    ];
    const jIds = [];
    for (const t of topicsJ) { const r = insertTopic.run('J', t[0], t[1], t[2], t[3]); jIds.push(r.lastInsertRowid); }

    // ── SEZIONE K ──
    const topicsK = [
      [31,'Rete come grafo','Una rete può essere rappresentata come un **grafo matematico**.\n\n### Corrispondenze:\n- **Router** → **nodi** (vertici) del grafo\n- **Link** (collegamenti) → **archi** del grafo\n- **Costo del link** → **peso** dell\'arco\n\n### Vantaggi della rappresentazione:\n- Permette di applicare **algoritmi** matematici\n- Calcolo del **percorso più efficiente**\n- Analisi della **topologia** di rete\n- Base per i protocolli di routing dinamico','grafo,nodi,archi,router,link'],
      [32,'Elementi del grafo','### Terminologia dei grafi applicata alle reti:\n\n- **Nodo** (vertice): punto di interconnessione (router, switch)\n- **Arco** (edge): collegamento tra due nodi\n- **Cammino** (path): sequenza di nodi e archi che connette due punti\n- **Costo** (peso): valore numerico associato a un arco (banda, latenza, hop)\n\n### Tipi di grafo:\n- **Non orientato**: link bidirezionali (caso comune)\n- **Orientato**: link con direzione specifica\n- **Pesato**: archi con costi diversi\n- **Connesso**: ogni nodo è raggiungibile da ogni altro','nodo,arco,cammino,costo,peso'],
      [33,'Cammino minimo','Il **cammino minimo** (shortest path) è il percorso tra due nodi con il **costo totale minore**.\n\n### Definizione:\n- Somma dei pesi degli archi attraversati\n- Non necessariamente il percorso con meno hop\n- Dipende dalla metrica usata (banda, latenza, costo)\n\n### Algoritmi:\n- **Dijkstra**: trova il cammino minimo da un nodo a tutti gli altri (usato da OSPF)\n- **Bellman-Ford**: approccio distribuito (usato da RIP)\n\n### Importanza:\nI protocolli di routing usano questi algoritmi per determinare il percorso migliore.','cammino minimo,shortest path,Dijkstra,Bellman-Ford,costo'],
    ];
    const kIds = [];
    for (const t of topicsK) { const r = insertTopic.run('K', t[0], t[1], t[2], t[3]); kIds.push(r.lastInsertRowid); }

    // ── SEZIONE L ──
    const topicsL = [
      [34,'Routing dinamico','Il **routing dinamico** permette ai router di **scambiarsi informazioni** e aggiornare automaticamente le tabelle di routing.\n\n### Vantaggi rispetto allo statico:\n- **Adattamento automatico** a cambiamenti di topologia\n- **Scalabile**: funziona con reti grandi e complesse\n- **Failover**: ricalcola percorsi se un link cade\n- **Meno errori**: riduce configurazione manuale\n\n### Categorie:\n- **Distance Vector**: RIP, EIGRP\n- **Link State**: OSPF, IS-IS\n- **Path Vector**: BGP (inter-AS)','routing dinamico,automatico,scalabile,failover'],
      [35,'RIP','**RIP** (Routing Information Protocol) è un protocollo di tipo **distance vector**.\n\n### Caratteristiche:\n- Metrica: **hop count** (numero di router attraversati)\n- Massimo **15 hop** (16 = irraggiungibile)\n- Aggiornamenti ogni **30 secondi** (broadcast/multicast)\n- Convergenza **lenta**\n- Versioni: RIPv1 (classful), RIPv2 (classless, supporta VLSM)\n\n### Algoritmo:\n- Basato su **Bellman-Ford**\n- Ogni router invia la sua tabella ai vicini\n- I vicini aggiornano le proprie tabelle\n\n### Uso: reti **piccole e semplici**','RIP,distance vector,hop count,15 hop,Bellman-Ford'],
      [36,'OSPF','**OSPF** (Open Shortest Path First) è un protocollo di tipo **link state**.\n\n### Caratteristiche:\n- Usa l\'algoritmo di **Dijkstra** (SPF)\n- Metrica: **costo** basato sulla banda del link\n- Convergenza **veloce**\n- Struttura **gerarchica** con aree (Area 0 = backbone)\n- Ogni router ha una **mappa completa** della topologia\n\n### Funzionamento:\n1. Ogni router invia **LSA** (Link State Advertisement) ai vicini\n2. Tutti costruiscono un **database topologico** identico\n3. Ogni router calcola l\'albero dei cammini minimi\n\n### Uso: reti **medie e grandi**','OSPF,link state,Dijkstra,costo,gerarchico,LSA'],
      [37,'RIP vs OSPF','### Confronto:\n\n| Caratteristica | RIP | OSPF |\n|---------------|-----|------|\n| Tipo | Distance Vector | Link State |\n| Algoritmo | Bellman-Ford | Dijkstra |\n| Metrica | Hop count | Costo (banda) |\n| Limite | 15 hop | Nessuno |\n| Convergenza | Lenta | Veloce |\n| Complessità | Semplice | Complesso |\n| Scalabilità | Bassa | Alta |\n| Uso risorse | Basso | Alto (CPU/RAM) |\n| Ideale per | Reti piccole | Reti grandi |\n\n### Regola pratica:\n- Poche reti, pochi router → **RIP**\n- Rete aziendale/enterprise → **OSPF**','RIP,OSPF,confronto,distance vector,link state'],
    ];
    const lIds = [];
    for (const t of topicsL) { const r = insertTopic.run('L', t[0], t[1], t[2], t[3]); lIds.push(r.lastInsertRowid); }

    // ── SEZIONE M ──
    const topicsM = [
      [39,'Livello trasporto','Il **livello trasporto** (livello 4 OSI / livello 3 TCP/IP) gestisce la comunicazione **end-to-end** tra applicazioni.\n\n### Funzioni:\n- **Multiplexing**: più applicazioni usano la rete contemporaneamente (tramite porte)\n- **Segmentazione**: divide i dati in segmenti\n- **Riassemblaggio**: ricostruisce i dati in ordine\n- Due protocolli principali: **TCP** e **UDP**','livello trasporto,end-to-end,multiplexing,segmentazione'],
      [40,'TCP vs UDP overview','### Due approcci diversi:\n\n**TCP** (Transmission Control Protocol):\n- **Affidabile**: garantisce consegna e ordine\n- Connection-oriented: richiede connessione prima dell\'invio\n- Più lento ma sicuro\n\n**UDP** (User Datagram Protocol):\n- **Non affidabile**: nessuna garanzia di consegna\n- Connectionless: invia senza stabilire connessione\n- Più veloce ma senza garanzie\n\nLa scelta dipende dall\'applicazione.','TCP,UDP,affidabile,non affidabile'],
      [41,'TCP in dettaglio','**TCP** fornisce un trasporto **affidabile** e orientato alla connessione.\n\n### Caratteristiche:\n- **Connection-oriented**: stabilisce connessione prima di trasmettere\n- **Affidabilità**: conferma ricezione di ogni segmento\n- **Ordinamento**: riordina pacchetti arrivati fuori sequenza\n- **Controllo di flusso**: adatta la velocità al ricevitore\n- **Controllo di congestione**: riduce velocità se la rete è congestionata\n- **Full-duplex**: comunicazione bidirezionale simultanea\n\n### Uso:\n- Web (HTTP/HTTPS), email (SMTP), file transfer (FTP), SSH','TCP,affidabile,connessione,flusso,congestione'],
      [42,'Three-way handshake','Il **three-way handshake** è il processo con cui TCP stabilisce una connessione.\n\n### I tre passi:\n\n```\nClient                    Server\n  |                         |\n  |──── SYN ───────────────>|  1. "Voglio connettermi"\n  |                         |\n  |<──── SYN-ACK ──────────|  2. "Ok, accetto"\n  |                         |\n  |──── ACK ───────────────>|  3. "Confermo, iniziamo"\n  |                         |\n  |<════ CONNESSIONE ══════>|\n```\n\n### Dettagli:\n- **SYN**: client invia numero di sequenza iniziale\n- **SYN-ACK**: server conferma e invia il suo numero\n- **ACK**: client conferma, connessione stabilita\n\nLa chiusura usa un processo simile con **FIN**.','three-way handshake,SYN,SYN-ACK,ACK,connessione'],
      [43,'Sequence e ACK number','I numeri di **sequenza** e **acknowledgment** garantiscono ordine e affidabilità.\n\n### Sequence Number:\n- Identifica la **posizione** di ogni byte nel flusso dati\n- Permette al ricevitore di **riordinare** i segmenti\n\n### Acknowledgment Number:\n- Indica il **prossimo byte atteso** dal ricevitore\n- Conferma tutti i byte precedenti (acknowledgment cumulativo)\n\n### Rilevamento perdite:\n- Se un ACK non arriva entro il **timeout** → ritrasmissione\n- **ACK duplicati**: 3 ACK uguali → fast retransmit\n\nQuesto meccanismo rende TCP resistente a perdite e disordine.','sequence number,acknowledgment,ritrasmissione,timeout'],
      [44,'UDP in dettaglio','**UDP** (User Datagram Protocol) è un protocollo di trasporto **semplice e veloce**.\n\n### Caratteristiche:\n- **Connectionless**: nessuna connessione preliminare\n- **Nessuna garanzia** di consegna, ordine o integrità\n- **Header minimo**: solo 8 byte (vs 20+ di TCP)\n- **Nessun controllo** di flusso o congestione\n- Ogni messaggio è un **datagram** indipendente\n\n### Vantaggi:\n- **Veloce**: nessun overhead di connessione\n- **Leggero**: meno elaborazione\n- **Real-time**: adatto a dati sensibili al ritardo\n\n### Uso:\n- DNS, streaming, VoIP, gaming online','UDP,connectionless,datagram,veloce,leggero'],
      [45,'TCP vs UDP confronto','### Tabella comparativa:\n\n| Caratteristica | TCP | UDP |\n|---------------|-----|-----|\n| Connessione | Sì (3-way handshake) | No |\n| Affidabilità | Sì (ACK, ritrasmissione) | No |\n| Ordinamento | Sì (sequence number) | No |\n| Controllo flusso | Sì | No |\n| Velocità | Più lento | Più veloce |\n| Header | 20+ byte | 8 byte |\n| Uso tipico | Web, email, file | Streaming, DNS, VoIP |\n\n### Regola:\n- Servono **dati corretti** → TCP\n- Serve **velocità** → UDP','TCP,UDP,confronto,affidabile,veloce'],
      [46,'Porte','Le **porte** identificano le applicazioni specifiche su un host.\n\n### Porte note (well-known):\n| Porta | Protocollo | Servizio |\n|-------|-----------|----------|\n| 20-21 | TCP | FTP |\n| 22 | TCP | SSH |\n| 25 | TCP | SMTP (email) |\n| 53 | TCP/UDP | DNS |\n| 80 | TCP | **HTTP** |\n| 443 | TCP | **HTTPS** |\n\n### Range porte:\n- **0-1023**: Well-known (servizi standard)\n- **1024-49151**: Registered (applicazioni)\n- **49152-65535**: Dynamic/Private (temporanee)','porte,HTTP,HTTPS,80,443,well-known'],
      [47,'Socket','Un **socket** è la combinazione di **indirizzo IP + numero di porta**.\n\n### Formato:\n`IP:porta` → es. `192.168.1.10:443`\n\n### Funzione:\n- Identifica univocamente un **endpoint** di comunicazione\n- Permette a più applicazioni di comunicare contemporaneamente\n\n### Connessione TCP:\nDefinita da una **coppia di socket**:\n- Socket sorgente: `192.168.1.10:52431`\n- Socket destinazione: `93.184.216.34:443`\n\nQuesta coppia identifica univocamente la connessione nella rete.','socket,IP,porta,endpoint,connessione'],
    ];
    const mIds = [];
    for (const t of topicsM) { const r = insertTopic.run('M', t[0], t[1], t[2], t[3]); mIds.push(r.lastInsertRowid); }

    // ── SEZIONE N ──
    const topicsN = [
      [49,'Scelta del protocollo','### Quando usare TCP o UDP:\n\n**TCP** (dati corretti > velocità):\n- **Web** (HTTP/HTTPS): pagine devono arrivare complete\n- **File transfer** (FTP): nessun byte può mancare\n- **Email** (SMTP/IMAP): messaggi integri\n- **Database**: transazioni affidabili\n\n**UDP** (velocità > completezza):\n- **Streaming video/audio**: perdere un frame è ok\n- **Videoconferenza**: ritardo è peggio di perdita\n- **Gaming online**: stato aggiornato in tempo reale\n- **DNS**: query/risposta veloci\n- **VoIP**: conversazione fluida','TCP,UDP,scelta,web,streaming'],
      [50,'Perdita vs ritardo','### Perché lo streaming usa UDP:\n\nIn applicazioni real-time come le **videochiamate**:\n\n- **Perdere qualche dato** → piccolo glitch visivo/audio, quasi impercettibile\n- **Ritardare i dati** (per ritrasmettere) → conversazione a singhiozzo, inutilizzabile\n\n### Principio:\n> È meglio **perdere** qualche dato che **ritardare** tutto il flusso\n\n### Perché:\n- TCP ritrasmette i pacchetti persi → introduce **latenza**\n- Il dato ritrasmesso arriva **troppo tardi** per essere utile\n- UDP ignora la perdita e va avanti → esperienza più **fluida**','perdita,ritardo,real-time,latenza,streaming'],
      [51,'QUIC introduzione','**QUIC** (Quick UDP Internet Connections) è un protocollo sviluppato da **Google**.\n\n### Caratteristiche principali:\n- Basato su **UDP** (non TCP)\n- **Connessione veloce**: 0-RTT o 1-RTT (vs 3-RTT di TCP+TLS)\n- **Sicurezza integrata**: TLS 1.3 incluso nel protocollo\n- **Multiplexing** senza head-of-line blocking\n- Usato da **HTTP/3**\n\n### Motivazione:\n- TCP è lento nell\'handshake (specialmente con TLS)\n- TCP soffre di head-of-line blocking\n- QUIC combina il meglio di TCP (affidabilità) e UDP (velocità)','QUIC,Google,UDP,veloce,sicurezza,HTTP/3'],
      [52,'QUIC vantaggi','### Vantaggi di QUIC:\n\n1. **Connessione rapida**:\n   - TCP+TLS: 3 RTT prima di inviare dati\n   - QUIC: 1 RTT (o 0 se già connesso prima)\n\n2. **Sicurezza integrata**:\n   - Crittografia TLS 1.3 di default\n   - Non è possibile comunicare in chiaro\n\n3. **Migliore su reti instabili**:\n   - Gestisce meglio cambio di rete (es. Wi-Fi → 4G)\n   - Connection migration: la connessione sopravvive al cambio IP\n\n4. **Caricamento web rapido**:\n   - Riduce latenza percepita\n   - Già usato da Google, YouTube, Gmail\n   - Base di **HTTP/3**','QUIC,vantaggi,0-RTT,TLS,connection migration,HTTP/3'],
    ];
    const nIds = [];
    for (const t of topicsN) { const r = insertTopic.run('N', t[0], t[1], t[2], t[3]); nIds.push(r.lastInsertRowid); }

    // ═══════════════════════════════════════
    // QUIZ QUESTIONS — at least 5-8 per section
    // ═══════════════════════════════════════

    const quizzes = [
      // SEZIONE A
      ['A',null,'Qual è la funzione principale di un mezzo trasmissivo?','Generare segnali elettrici','Elaborare dati','Trasportare segnali da un dispositivo all\'altro','Memorizzare informazioni','C','Il mezzo trasmissivo è il supporto fisico o canale che trasporta i segnali tra dispositivi.'],
      ['A',null,'Quale tra questi è un mezzo trasmissivo guidato?','Wi-Fi','Bluetooth','Satellite','Fibra ottica','D','I mezzi guidati hanno un percorso fisico definito: doppino, fibra ottica, cavo coassiale.'],
      ['A',null,'Perché i fili del doppino intrecciato sono intrecciati?','Per aumentare la velocità','Per ridurre interferenze e diafonia','Per ridurre il costo','Per aumentare la distanza','B','L\'intreccio riduce le interferenze elettromagnetiche e la diafonia tra i cavi.'],
      ['A',null,'Quale connettore usa il doppino intrecciato?','RJ11','USB-C','RJ45','LC','C','Il doppino intrecciato utilizza il connettore RJ45 per le reti Ethernet.'],
      ['A',null,'Qual è la differenza principale tra UTP e STP?','La velocità','La schermatura metallica','Il numero di fili','Il tipo di connettore','B','STP ha una schermatura metallica che protegge dalle interferenze, UTP no.'],
      ['A',null,'Quale tipo di fibra usa il laser e raggiunge centinaia di km?','Multimodale','Monomodale','Bifibra','Coassiale','B','La fibra monomodale usa laser, un solo percorso di luce, e copre centinaia di km.'],
      ['A',null,'Quale NON è un vantaggio della fibra ottica?','Costo basso','Velocità elevata','Immunità alle interferenze','Sicurezza','A','La fibra ottica ha un costo elevato, che è il suo principale svantaggio.'],
      ['A',null,'Quale tecnologia wireless è usata per connessioni a corto raggio?','Wi-Fi','5G','Bluetooth','Satellite','C','Bluetooth è progettato per connessioni a corto raggio (pochi metri).'],

      // SEZIONE B
      ['B',null,'Quale apparato ripete il segnale a tutte le porte?','Switch','Router','Hub','Access Point','C','L\'hub opera al livello 1 e ripete il segnale a tutte le porte, causando collisioni.'],
      ['B',null,'A quale livello OSI opera uno switch?','Livello 1','Livello 2','Livello 3','Livello 4','B','Lo switch opera al livello 2 (Data Link), leggendo gli indirizzi MAC.'],
      ['B',null,'Cosa contiene la tabella MAC di uno switch?','Indirizzi IP','Associazioni MAC-porta','Nomi host','Rotte di rete','B','La tabella MAC associa ogni indirizzo MAC alla porta fisica corrispondente.'],
      ['B',null,'Quale funzione NON è tipica di un router?','NAT','DHCP','Commutazione frame via MAC','Firewall','C','La commutazione dei frame tramite MAC è funzione dello switch, non del router.'],
      ['B',null,'Cosa fa un Access Point?','Instrada pacchetti IP','Converte segnale analogico-digitale','Funge da ponte tra rete cablata e wireless','Ripete segnali a tutte le porte','C','L\'AP permette ai dispositivi wireless di connettersi alla rete LAN cablata.'],
      ['B',null,'Un router Wi-Fi domestico combina:','Solo router e modem','Router, switch e access point','Solo switch e hub','Hub e access point','B','Un router Wi-Fi è la combinazione di router + switch + access point.'],
      ['B',null,'A quale livello OSI opera un router?','Livello 1','Livello 2','Livello 3','Livello 7','C','Il router opera al livello 3 (Rete) e instrada pacchetti tramite indirizzi IP.'],
      ['B',null,'Cosa fa il modem?','Gestisce il traffico LAN','Converte il segnale per la linea del provider','Assegna indirizzi IP','Filtra il traffico di rete','B','Il modem converte il segnale digitale in analogico e viceversa per il provider.'],

      // SEZIONE C
      ['C',null,'Qual è il vantaggio principale del cablaggio strutturato?','Costo minimo','Ordine, flessibilità e scalabilità','Velocità massima','Nessuna manutenzione','B','Il cablaggio strutturato garantisce ordine, flessibilità, facilità di manutenzione e scalabilità.'],
      ['C',null,'Quale componente termina i cavi provenienti dagli uffici?','Switch','Hub','Patch panel','Router','C','Il patch panel è il pannello dove vengono terminati i cavi che arrivano dalle prese ufficio.'],
      ['C',null,'Qual è la larghezza standard di un armadio rack?','12 pollici','15 pollici','19 pollici','24 pollici','C','L\'armadio rack ha una larghezza standardizzata di 19 pollici.'],
      ['C',null,'Il cablaggio dorsale (backbone) collega:','PC alle prese a muro','Armadi di piano tra loro','Switch alle stampanti','Monitor ai server','B','Il backbone collega gli armadi di piano tra loro e al centro stella principale.'],
      ['C',null,'Quale standard americano regola il cablaggio strutturato?','ISO 9001','IEEE 802.3','EIA/TIA-568','RFC 2549','C','Lo standard EIA/TIA-568 definisce le specifiche per il cablaggio in edifici commerciali.'],
      ['C',null,'Qual è la distanza massima del cablaggio orizzontale?','50 metri','90 metri (+10m patch cord)','200 metri','1 km','B','Il cablaggio orizzontale ha un limite di 90 metri più 10 metri di patch cord.'],

      // SEZIONE D
      ['D',null,'Ethernet è una tecnologia per reti:','WAN','MAN','LAN','PAN','C','Ethernet è la tecnologia LAN (Local Area Network) più diffusa al mondo.'],
      ['D',null,'A quale livello OSI opera principalmente Ethernet?','Livello 1','Livello 2','Livello 3','Livello 4','B','Ethernet opera al livello 2 (Data Link), gestendo frame e indirizzi MAC.'],
      ['D',null,'Quanti bit ha un MAC address?','32','48','64','128','B','Il MAC address è lungo 48 bit (6 byte), scritto in formato esadecimale.'],
      ['D',null,'Cosa contiene il campo CRC/FCS di un frame Ethernet?','Indirizzo sorgente','Dati utente','Controllo errori','Tipo di protocollo','C','Il CRC (Cyclic Redundancy Check) serve per il controllo degli errori nel frame.'],
      ['D',null,'Quale velocità corrisponde a Gigabit Ethernet?','10 Mbps','100 Mbps','1 Gbps','10 Gbps','C','Gigabit Ethernet (802.3ab) opera a 1 Gbps.'],
      ['D',null,'Cosa significa CSMA/CD?','Carrier Sense Multiple Access with Collision Detection','Central Switch MAC Address / Collision Direction','Cable Standard for Metropolitan Area / Circuit Design','Common Standard Multiple Access / Connection Delivery','A','CSMA/CD sta per Carrier Sense Multiple Access with Collision Detection.'],
      ['D',null,'Perché CSMA/CD è meno rilevante oggi?','Perché si usa il wireless','Perché gli switch full-duplex eliminano le collisioni','Perché non funziona con IPv6','Perché è stato sostituito da CSMA/CA','B','Gli switch moderni operano in full-duplex, eliminando le collisioni.'],
      ['D',null,'Qual è la topologia standard di Ethernet moderna?','Bus','Anello','Stella','Mesh','C','Ethernet moderna usa topologia a stella con switch centrale.'],

      // SEZIONE E
      ['E',null,'Quanti livelli ha il modello ISO/OSI?','4','5','7','8','C','Il modello ISO/OSI è composto da 7 livelli.'],
      ['E',null,'Quanti livelli ha il modello TCP/IP?','4','5','7','3','A','Il modello TCP/IP ha 4 livelli: Application, Transport, Internet, Network Access.'],
      ['E',null,'Quale livello OSI corrisponde a "Internet" in TCP/IP?','Livello 2','Livello 3 (Rete)','Livello 4','Livello 7','B','Il livello Internet di TCP/IP corrisponde al livello 3 (Rete) dell\'OSI.'],
      ['E',null,'Perché Internet usa TCP/IP e non OSI?','OSI è più veloce','TCP/IP è nato prima e adottato nella pratica','OSI non supporta IP','TCP/IP ha più livelli','B','TCP/IP è stato sviluppato prima dell\'OSI ed era già adottato da ARPANET.'],
      ['E',null,'I livelli 5, 6, 7 dell\'OSI corrispondono a quale livello TCP/IP?','Transport','Internet','Application','Network Access','C','Applicazione, Presentazione e Sessione dell\'OSI corrispondono ad Application in TCP/IP.'],
      ['E',null,'Quale livello OSI gestisce il formato dei dati e la crittografia?','Applicazione','Presentazione','Sessione','Trasporto','B','Il livello 6 (Presentazione) gestisce formato dati, compressione e crittografia.'],

      // SEZIONE F
      ['F',null,'Quanti bit ha un indirizzo IPv4?','16','32','64','128','B','IPv4 usa indirizzi a 32 bit, scritti come 4 ottetti decimali.'],
      ['F',null,'Cosa indica l\'indirizzo .255 in una rete /24?','Indirizzo di rete','Indirizzo host','Indirizzo di broadcast','Default gateway','C','In una rete /24, l\'ultimo indirizzo (.255) è l\'indirizzo di broadcast.'],
      ['F',null,'Cosa fa la subnet mask?','Cripta i dati','Separa parte rete da parte host','Identifica il MAC address','Assegna porte TCP','B','La subnet mask separa la parte rete dalla parte host di un indirizzo IP.'],
      ['F',null,'Cosa significa /24 in notazione CIDR?','24 host disponibili','24 bit per la rete','24 byte di dati','24 sottoreti','B','CIDR /24 significa che 24 bit sono dedicati alla parte rete.'],
      ['F',null,'A cosa serve il default gateway?','Assegnare indirizzi IP','Filtrare il traffico','Raggiungere reti esterne','Risolvere nomi DNS','C','Il default gateway è il router usato per raggiungere reti esterne alla propria.'],
      ['F',null,'Quale operazione si usa per calcolare l\'indirizzo di rete?','OR','XOR','AND','NOT','C','IP AND subnet mask = indirizzo di rete.'],

      // SEZIONE G
      ['G',null,'Cosa significa FLSM?','Fixed Length Subnet Mask','Flexible LAN Subnet Mode','Fast Link State Metric','Frame Level Security Mode','A','FLSM = Fixed Length Subnet Mask, tutte le sottoreti con la stessa mask.'],
      ['G',null,'Quanti host utilizzabili ci sono in una rete /26?','64','62','30','126','B','2^6 - 2 = 62 host utilizzabili (si sottraggono rete e broadcast).'],
      ['G',null,'Qual è il principale limite di FLSM?','Troppo veloce','Spreco di indirizzi IP','Non supporta IPv4','Richiede fibra ottica','B','FLSM spreca indirizzi perché tutte le sottoreti hanno la stessa dimensione.'],
      ['G',null,'Per dividere una /24 in 4 sottoreti FLSM, quanti bit servono?','1','2','3','4','B','2² = 4, servono 2 bit in prestito dalla parte host.'],
      ['G',null,'Quale sarà la nuova mask dividendo una /24 in 4 sottoreti?','/25','/26','/27','/28','B','24 + 2 bit = /26 (255.255.255.192).'],
      ['G',null,'La formula per gli host utilizzabili è:','2^n','2^n + 2','2^n - 2','2^n - 1','C','Host utilizzabili = 2^h - 2, dove si sottraggono indirizzo di rete e broadcast.'],

      // SEZIONE H
      ['H',null,'Cosa permette VLSM?','Sottoreti con la stessa mask','Sottoreti con mask diverse','Solo 2 sottoreti','Solo reti /24','B','VLSM permette di usare subnet mask diverse per ogni sottorete.'],
      ['H',null,'Nel metodo VLSM, da quale sottorete si parte?','La più piccola','La più grande','Quella centrale','Non importa l\'ordine','B','Si assegnano prima le sottoreti più grandi per evitare frammentazione.'],
      ['H',null,'Quale protocollo NON supporta VLSM?','OSPF','RIPv2','RIPv1','EIGRP','C','RIPv1 è classful e non supporta VLSM, a differenza di RIPv2.'],
      ['H',null,'VLSM è più efficiente di FLSM perché:','Usa meno router','Assegna solo gli indirizzi necessari','Non richiede subnet mask','Funziona solo con IPv6','B','VLSM assegna la dimensione adatta a ogni sottorete, riducendo sprechi.'],
      ['H',null,'Per una LAN con 100 host, quale mask VLSM è adatta?','/25 (126 host)','/26 (62 host)','/27 (30 host)','/28 (14 host)','A','Con /25 si hanno 126 host disponibili, sufficienti per 100 host.'],

      // SEZIONE I
      ['I',null,'A quale livello OSI avviene il routing?','Livello 1','Livello 2','Livello 3','Livello 4','C','Il routing avviene al livello 3 (Rete) del modello OSI.'],
      ['I',null,'Cosa contiene una entry della tabella di routing?','Solo l\'IP di destinazione','Rete destinazione, mask, next hop, interfaccia','Solo il MAC address','Nome host e password','B','Ogni entry contiene rete di destinazione, subnet mask, next hop e interfaccia.'],
      ['I',null,'Quando si usa il routing diretto?','Quando mittente e destinatario sono in reti diverse','Quando mittente e destinatario sono nella stessa rete','Quando si usa un firewall','Quando si usa il wireless','B','Il routing diretto avviene quando i dispositivi sono nella stessa rete.'],
      ['I',null,'Il longest prefix match sceglie:','La rotta con la mask più corta','La rotta con la mask più lunga (più specifica)','La prima rotta nella tabella','La rotta con meno hop','B','Il longest prefix match seleziona la rotta più specifica (mask più lunga).'],
      ['I',null,'Come si rappresenta la default route?','255.255.255.255/32','127.0.0.1/8','0.0.0.0/0','192.168.0.0/16','C','La default route è 0.0.0.0/0, corrisponde a qualsiasi destinazione.'],

      // SEZIONE J
      ['J',null,'Nel routing statico, chi configura le rotte?','Il protocollo OSPF','L\'amministratore manualmente','Il router automaticamente','Il DNS','B','Nel routing statico le rotte sono configurate manualmente dall\'amministratore.'],
      ['J',null,'Quale NON è un vantaggio del routing statico?','Semplicità','Sicurezza','Adattamento automatico ai guasti','Nessun overhead','C','Il routing statico non si adatta automaticamente: se un link cade, serve intervento manuale.'],
      ['J',null,'In quale scenario è ideale il routing statico?','Reti enterprise con 100+ router','Reti piccole e link punto-punto','Data center con migliaia di server','ISP con milioni di utenti','B','Il routing statico è ideale per reti piccole, link punto-punto e default route.'],
      ['J',null,'Cosa succede se un link cade con routing statico?','Il router trova un percorso alternativo','Il traffico viene perso finché non si interviene','Il protocollo ricalcola la rotta','Il link si ripristina automaticamente','B','Con routing statico, la rotta rimane anche se il link è giù, causando perdita di traffico.'],
      ['J',null,'Il routing statico genera traffico di routing aggiuntivo?','Sì, molto','Sì, poco','No, nessuno','Solo con OSPF','C','Il routing statico non genera nessun traffico di routing (nessun overhead).'],

      // SEZIONE K
      ['K',null,'In un grafo di rete, i router corrispondono a:','Archi','Nodi','Pesi','Cammini','B','I router corrispondono ai nodi (vertici) del grafo.'],
      ['K',null,'Quale algoritmo è usato da OSPF per il cammino minimo?','Bellman-Ford','Dijkstra','Floyd-Warshall','A*','B','OSPF usa l\'algoritmo di Dijkstra (Shortest Path First).'],
      ['K',null,'Il cammino minimo è sempre quello con meno hop?','Sì, sempre','No, dipende dalla metrica (costo)','Solo con RIP','Solo con routing statico','B','Il cammino minimo dipende dalla metrica usata: può essere banda, latenza, costo.'],
      ['K',null,'I link di rete corrispondono a quali elementi del grafo?','Nodi','Archi','Vertici','Sottoreti','B','I link (collegamenti fisici) corrispondono agli archi del grafo.'],
      ['K',null,'Quale algoritmo è usato da RIP?','Dijkstra','Kruskal','Bellman-Ford','Prim','C','RIP usa l\'algoritmo distribuito di Bellman-Ford.'],

      // SEZIONE L
      ['L',null,'RIP è un protocollo di tipo:','Link State','Distance Vector','Path Vector','Hybrid','B','RIP è un protocollo distance vector basato sull\'algoritmo Bellman-Ford.'],
      ['L',null,'Qual è il limite massimo di hop in RIP?','10','15','20','255','B','RIP ha un limite massimo di 15 hop; 16 significa rete irraggiungibile.'],
      ['L',null,'OSPF usa quale algoritmo?','Bellman-Ford','Dijkstra','RIP','BGP','B','OSPF usa l\'algoritmo di Dijkstra (SPF - Shortest Path First).'],
      ['L',null,'Quale protocollo è più adatto a reti grandi?','RIP','RIPv1','OSPF','Nessuno','C','OSPF è progettato per reti medie e grandi grazie alla sua struttura gerarchica.'],
      ['L',null,'La metrica di OSPF è basata su:','Hop count','Costo (banda del link)','Numero di router','Tempo di attività','B','OSPF usa il costo basato sulla banda del collegamento come metrica.'],
      ['L',null,'Ogni quanti secondi RIP invia aggiornamenti?','10','30','60','120','B','RIP invia aggiornamenti della tabella di routing ogni 30 secondi.'],

      // SEZIONE M
      ['M',null,'Il livello trasporto gestisce la comunicazione:','Hop-by-hop','End-to-end','Solo locale','Solo wireless','B','Il livello trasporto gestisce la comunicazione end-to-end tra applicazioni.'],
      ['M',null,'Quale sequenza descrive il three-way handshake?','ACK → SYN → FIN','SYN → SYN-ACK → ACK','FIN → ACK → RST','PUSH → ACK → SYN','B','Il three-way handshake TCP è: SYN → SYN-ACK → ACK.'],
      ['M',null,'Quanti byte ha l\'header UDP?','4','8','20','32','B','L\'header UDP è minimo: solo 8 byte (vs 20+ di TCP).'],
      ['M',null,'Quale porta usa HTTPS?','80','8080','443','22','C','HTTPS usa la porta 443, mentre HTTP usa la porta 80.'],
      ['M',null,'Un socket è composto da:','MAC + porta','IP + porta','IP + MAC','Porta + protocollo','B','Un socket è la combinazione di indirizzo IP e numero di porta.'],
      ['M',null,'TCP garantisce la consegna tramite:','Flooding','ACK e ritrasmissione','Broadcast','Multicast','B','TCP usa acknowledgment e ritrasmissione per garantire la consegna affidabile.'],
      ['M',null,'Quale protocollo è connectionless?','TCP','HTTP','UDP','FTP','C','UDP è connectionless: invia datagram senza stabilire connessione.'],

      // SEZIONE N
      ['N',null,'Perché le videochiamate usano UDP?','Perché è più sicuro','Perché perdere dati è meglio che ritardare','Perché TCP non esiste per video','Perché UDP è più affidabile','B','Nelle videochiamate, il ritardo è peggiore della perdita: UDP evita la latenza da ritrasmissione.'],
      ['N',null,'QUIC è stato sviluppato da:','Microsoft','Apple','Google','Mozilla','C','QUIC è stato sviluppato da Google per migliorare le prestazioni web.'],
      ['N',null,'QUIC si basa su quale protocollo di trasporto?','TCP','UDP','SCTP','DCCP','B','QUIC utilizza UDP come protocollo di trasporto sottostante.'],
      ['N',null,'Quale versione di HTTP usa QUIC?','HTTP/1.1','HTTP/2','HTTP/3','HTTP/4','C','HTTP/3 è basato su QUIC invece che su TCP.'],
      ['N',null,'Quanti RTT servono a QUIC per una connessione già nota?','0 RTT','1 RTT','2 RTT','3 RTT','A','QUIC supporta 0-RTT per connessioni già stabilite in precedenza.'],
      ['N',null,'Quale vantaggio ha QUIC su reti instabili?','Nessuno','Connection migration: sopravvive al cambio IP','Velocità dimezzata','Usa più banda','B','QUIC gestisce il cambio di rete (es. Wi-Fi → 4G) senza interrompere la connessione.'],
    ];

    for (const q of quizzes) {
      insertQuiz.run(...q);
    }

    // ═══════════════════════════════════════
    // FLASHCARDS
    // ═══════════════════════════════════════
    const flashcards = [
      ['A',null,'Cos\'è un mezzo trasmissivo?','Supporto fisico o canale che trasporta segnali (elettrici, ottici, elettromagnetici) tra dispositivi. Determina velocità, distanza e affidabilità.'],
      ['A',null,'Differenza tra mezzi guidati e non guidati?','Guidati: segnale viaggia su un percorso fisico (cavo). Non guidati: onde elettromagnetiche nello spazio (Wi-Fi, Bluetooth).'],
      ['A',null,'Cos\'è il doppino intrecciato?','2 fili di rame isolati e intrecciati. L\'intreccio riduce interferenze e diafonia. Usa connettore RJ45. Usato in Ethernet.'],
      ['A',null,'UTP vs STP?','UTP: senza schermatura, economico, uffici. STP: con schermatura metallica, ambienti industriali.'],
      ['A',null,'Fibra monomodale vs multimodale?','Monomodale: laser, 1 percorso, centinaia km, dorsali. Multimodale: LED, più percorsi, centinaia metri, campus.'],
      ['B',null,'Hub vs Switch?','Hub: livello 1, ripete a tutte le porte, collisioni. Switch: livello 2, legge MAC, invia solo alla porta corretta.'],
      ['B',null,'Cosa fa un router?','Collega reti diverse, instrada con IP (livello 3), funzioni NAT/firewall/DHCP.'],
      ['B',null,'Cos\'è un Access Point?','Ponte tra rete cablata e wireless. Router Wi-Fi = router + switch + AP.'],
      ['C',null,'Cos\'è il cablaggio strutturato?','Sistema standardizzato di cavi in edifici: ordine, flessibilità, manutenzione, scalabilità.'],
      ['C',null,'Cablaggio orizzontale vs dorsale?','Orizzontale: prese ufficio → armadio piano (rame). Dorsale: collega armadi/piani (fibra).'],
      ['C',null,'Cos\'è un patch panel?','Pannello porte per terminare cavi uffici, collegamento a switch tramite patch cord.'],
      ['D',null,'Cos\'è Ethernet?','Tecnologia LAN più diffusa, standard IEEE 802.3, opera a livello 2, gestisce frame e MAC.'],
      ['D',null,'Struttura del frame Ethernet?','MAC destinazione + MAC sorgente + Tipo protocollo + Payload (46-1500 byte) + CRC.'],
      ['D',null,'Cos\'è il MAC address?','Identificatore univoco di 48 bit in esadecimale della scheda di rete.'],
      ['D',null,'Cos\'è CSMA/CD?','Carrier Sense Multiple Access with Collision Detection. Rileva collisioni, oggi meno rilevante con switch full-duplex.'],
      ['E',null,'7 livelli OSI?','Applicazione, Presentazione, Sessione, Trasporto, Rete, Collegamento dati, Fisico.'],
      ['E',null,'4 livelli TCP/IP?','Application, Transport, Internet, Network Access.'],
      ['E',null,'Perché Internet usa TCP/IP?','Nato prima dell\'OSI, adottato nella pratica da ARPANET, più semplice e pragmatico.'],
      ['F',null,'Cos\'è un indirizzo IP?','Identificatore numerico per host. IPv4: 32 bit, 4 ottetti, Net ID + Host ID.'],
      ['F',null,'Cos\'è la subnet mask?','Separa parte rete da parte host. Es: 255.255.255.0 = /24 = 24 bit rete.'],
      ['F',null,'Cos\'è il CIDR?','Notazione /N che indica i bit di rete. Es: /24 = 24 bit rete, 8 host. Più flessibile delle classi.'],
      ['F',null,'Cos\'è il default gateway?','IP del router per raggiungere reti esterne. Deve essere nella stessa rete dell\'host.'],
      ['G',null,'Cos\'è il subnetting?','Dividere una rete in sottoreti per gestione, traffico e sicurezza.'],
      ['G',null,'FLSM: formula host utilizzabili?','2^h - 2 (si sottraggono indirizzo di rete e broadcast).'],
      ['H',null,'VLSM vs FLSM?','VLSM: mask diverse per sottorete, più efficiente. FLSM: stessa mask, spreco indirizzi.'],
      ['I',null,'Cos\'è il routing?','Processo per determinare il percorso dei pacchetti. Il router consulta la tabella di routing.'],
      ['I',null,'Longest prefix match?','Il router sceglie la rotta con la subnet mask più lunga (più specifica).'],
      ['J',null,'Routing statico: vantaggi e svantaggi?','Vantaggi: semplice, sicuro, no overhead. Svantaggi: non scalabile, nessun failover automatico.'],
      ['K',null,'Rete come grafo?','Router = nodi, Link = archi, Costo collegamento = peso. Dijkstra/Bellman-Ford per cammino minimo.'],
      ['L',null,'RIP vs OSPF?','RIP: distance vector, hop count, max 15 hop, reti piccole. OSPF: link state, Dijkstra, costo banda, reti grandi.'],
      ['M',null,'TCP vs UDP?','TCP: connessione, affidabile, controllo flusso, lento. UDP: connectionless, non affidabile, veloce.'],
      ['M',null,'Three-way handshake?','SYN → SYN-ACK → ACK. Stabilisce connessione TCP.'],
      ['M',null,'Cos\'è un socket?','IP + porta. Identifica univocamente un endpoint di comunicazione.'],
      ['N',null,'Cos\'è QUIC?','Protocollo Google su UDP. Connessione veloce (0-1 RTT), sicurezza TLS 1.3 integrata, base di HTTP/3.'],
      ['N',null,'Perché streaming usa UDP?','Perdere dati è meglio che ritardare. TCP ritrasmette causando latenza.'],
    ];
    for (const f of flashcards) insertFlashcard.run(...f);

    // ═══════════════════════════════════════
    // ORAL QUESTIONS
    // ═══════════════════════════════════════
    const oralQuestions = [
      ['A','Descrivi i principali mezzi trasmissivi e le loro caratteristiche.','I mezzi trasmissivi si dividono in guidati e non guidati. I guidati includono il doppino intrecciato (rame, RJ45, economico, usato in Ethernet) con varianti UTP e STP, e la fibra ottica (monomodale con laser per lunghe distanze, multimodale con LED per brevi). I non guidati usano onde elettromagnetiche: Wi-Fi, Bluetooth, cellulare, satellite. La scelta dipende da velocità, distanza, costo e ambiente.',0],
      ['B','Spiega il funzionamento di uno switch Ethernet e il suo ruolo nella rete.','Lo switch opera al livello 2 OSI. Mantiene una tabella MAC che associa indirizzi MAC a porte fisiche. Quando riceve un frame, legge il MAC di destinazione, consulta la tabella e inoltra solo alla porta corretta. Se il MAC non è noto, fa flooding. A differenza dell\'hub (livello 1, ripete a tutti), lo switch elimina le collisioni e permette comunicazione full-duplex.',0],
      ['C','Descrivi i componenti e la struttura di un cablaggio strutturato.','Il cablaggio strutturato comprende: cavi (UTP/fibra), prese di rete a muro, patch panel negli armadi rack, patch cord per i collegamenti. Si divide in orizzontale (prese ufficio → armadio di piano, max 90m, rame) e dorsale/backbone (tra armadi/piani, tipicamente fibra). L\'armadio rack da 19 pollici ospita switch, patch panel, router e server. Standards: EIA/TIA-568 e ISO/IEC 11801.',0],
      ['D','Spiega la struttura di un frame Ethernet e il ruolo del MAC address.','Il frame Ethernet contiene: preambolo (sincronizzazione), MAC destinazione (6 byte), MAC sorgente (6 byte), tipo protocollo, payload (46-1500 byte) e CRC per il controllo errori. Il MAC address è un identificatore univoco di 48 bit in esadecimale assegnato a ogni scheda di rete. I primi 3 byte identificano il produttore (OUI). Lo switch usa i MAC per inoltrare i frame.',0],
      ['E','Confronta i modelli OSI e TCP/IP e spiega perché Internet usa TCP/IP.','L\'OSI ha 7 livelli (Fisico, Data Link, Rete, Trasporto, Sessione, Presentazione, Applicazione), il TCP/IP ne ha 4 (Network Access, Internet, Transport, Application). I 3 livelli superiori OSI corrispondono ad Application in TCP/IP. Internet usa TCP/IP perché è nato prima (anni 70), era già adottato da ARPANET, ed è più pragmatico. L\'OSI resta il riferimento teorico per lo studio.',0],
      ['F','Spiega gli indirizzi IP, la subnet mask e il CIDR.','Un indirizzo IPv4 è un numero di 32 bit diviso in 4 ottetti che identifica un host. È composto da Net ID (rete) e Host ID (host). La subnet mask separa le due parti: i bit a 1 = rete, bit a 0 = host. Il CIDR (/N) è la notazione compatta: /24 = 24 bit rete, 8 host = 254 host disponibili. Indirizzi speciali: .0 = rete, .255 = broadcast. Il default gateway è il router per le reti esterne.',0],
      ['G','Spiega il subnetting FLSM con un esempio.','FLSM divide una rete in sottoreti con la stessa subnet mask. Esempio: 192.168.1.0/24, servono 4 sottoreti. 2²=4, prendiamo 2 bit → /26 (255.255.255.192). Ogni sottorete ha 62 host (2⁶-2). Sottoreti: .0/26, .64/26, .128/26, .192/26. Limite: spreco indirizzi se le sottoreti hanno esigenze diverse.',0],
      ['H','Confronta VLSM e FLSM e fai un esempio pratico di VLSM.','FLSM usa la stessa mask per tutte le sottoreti → spreco. VLSM usa mask diverse → efficienza. Esempio: 192.168.10.0/24 con LAN da 100, 30 e 10 host. Si ordina dalla più grande: LAN 100 host → /25 (126 host, .0-.127), LAN 30 → /27 (30 host, .128-.159), LAN 10 → /28 (14 host, .160-.175). Spazio rimanente disponibile per espansioni. VLSM richiede routing classless (OSPF, RIPv2).',0],
      ['I','Spiega il processo di routing e la tabella di routing.','Il routing è il processo con cui un router sceglie il percorso per i pacchetti. La tabella di routing contiene: rete destinazione, subnet mask, next hop, interfaccia di uscita, metrica. Il routing è diretto (stessa rete) o indiretto (reti diverse, via router). La regola del longest prefix match sceglie la rotta più specifica. La default route (0.0.0.0/0) si usa quando non esiste rotta specifica.',0],
      ['L','Confronta RIP e OSPF come protocolli di routing dinamico.','RIP è distance vector con metrica hop count (max 15 hop), convergenza lenta, aggiornamenti ogni 30s, adatto a reti piccole, usa Bellman-Ford. OSPF è link state con metrica costo (banda), convergenza veloce, struttura gerarchica con aree, ogni router ha la mappa completa, usa Dijkstra. RIP è semplice ma non scalabile; OSPF è complesso ma adatto a reti enterprise.',0],
      ['M','Spiega TCP, UDP e il three-way handshake.','TCP è orientato alla connessione, affidabile, con controllo flusso e congestione. Usa il three-way handshake (SYN → SYN-ACK → ACK) per stabilire la connessione. Sequence e ACK number garantiscono ordine e rilevamento perdite. UDP è connectionless, veloce, senza garanzie (header 8 byte vs 20+ TCP). TCP per web/email/file, UDP per streaming/gaming/DNS. Un socket = IP + porta (es. HTTP=80, HTTPS=443).',0],
      ['N','Spiega QUIC e perché le applicazioni real-time usano UDP.','Le app real-time (videochiamate, streaming) usano UDP perché è meglio perdere dati che ritardarli. TCP ritrasmette i pacchetti persi introducendo latenza inaccettabile. QUIC, sviluppato da Google, è basato su UDP ma aggiunge affidabilità. Vantaggi: connessione veloce (0-1 RTT vs 3 di TCP+TLS), sicurezza TLS 1.3 integrata, connection migration (sopravvive al cambio rete). È la base di HTTP/3.',0],
      // Cross-section questions
      ['A','Collega il concetto di mezzo trasmissivo con il cablaggio strutturato e Ethernet.','I mezzi trasmissivi (doppino UTP, fibra) sono i componenti fisici del cablaggio strutturato, che li organizza in modo standardizzato (orizzontale con rame, dorsale con fibra). Ethernet opera su questi mezzi al livello 2, definendo come trasmettere frame sui cavi. Il cablaggio strutturato fornisce l\'infrastruttura, Ethernet il protocollo, il mezzo trasmissivo il supporto fisico.',1],
      ['B','Collega gli apparati di rete con i livelli del modello OSI.','Hub = livello 1 (fisico, ripete bit), Switch = livello 2 (data link, commuta frame via MAC), Router = livello 3 (rete, instrada pacchetti via IP). Ogni apparato legge informazioni del proprio livello: l\'hub non capisce MAC/IP, lo switch non legge IP, il router analizza tutto fino al livello 3. Questo determina le loro capacità e il loro ruolo nella rete.',1],
      ['E','Come si collega il modello OSI al funzionamento di TCP, UDP e allo switch?','Lo switch opera al livello 2 OSI usando i MAC address (frame). TCP e UDP operano al livello 4 (trasporto): TCP offre connessione affidabile, UDP velocità senza garanzie. L\'IP al livello 3 permette il routing. Ogni livello aggiunge il proprio header (incapsulamento): Ethernet aggiunge MAC, IP aggiunge indirizzi IP, TCP/UDP aggiunge le porte.',1],
      ['F','Come si collegano IP, subnet mask, routing e VLSM?','L\'IP identifica gli host, la subnet mask separa rete da host. Il subnetting (FLSM/VLSM) divide le reti in sottoreti. Il router usa la tabella di routing con IP e mask per instradare i pacchetti (longest prefix match). VLSM richiede protocolli classless (OSPF, RIPv2) che portano la mask negli aggiornamenti. Tutto è interconnesso: senza IP e mask corretti, il routing non funziona.',1],
    ];
    for (const o of oralQuestions) insertOral.run(...o);

    // ═══════════════════════════════════════
    // GLOSSARY
    // ═══════════════════════════════════════
    const glossaryTerms = [
      ['Access Point (AP)','Dispositivo che funge da ponte tra rete cablata e wireless, permettendo la connessione Wi-Fi.'],
      ['ACK','Acknowledgment - messaggio di conferma ricezione usato da TCP.'],
      ['ARP','Address Resolution Protocol - risolve indirizzi IP in indirizzi MAC nella rete locale.'],
      ['Armadio rack','Struttura metallica standardizzata da 19 pollici che ospita apparati di rete.'],
      ['Backbone','Cablaggio dorsale che collega gli armadi di piano e gli edifici, spesso in fibra ottica.'],
      ['Bellman-Ford','Algoritmo per il cammino minimo usato dal protocollo RIP.'],
      ['Bluetooth','Tecnologia wireless a corto raggio per connessioni tra dispositivi.'],
      ['Broadcast','Trasmissione di un messaggio a tutti i dispositivi della rete (indirizzo .255 in /24).'],
      ['Cablaggio strutturato','Sistema standardizzato di cavi e componenti per le comunicazioni in edifici.'],
      ['CIDR','Classless Inter-Domain Routing - notazione /N per indicare la subnet mask.'],
      ['Collisione','Quando due dispositivi trasmettono contemporaneamente sullo stesso mezzo, causando corruzione dati.'],
      ['CRC','Cyclic Redundancy Check - campo del frame Ethernet per il controllo errori.'],
      ['CSMA/CD','Carrier Sense Multiple Access with Collision Detection - protocollo di accesso al mezzo.'],
      ['Default gateway','Indirizzo del router usato per raggiungere reti esterne alla propria.'],
      ['DHCP','Dynamic Host Configuration Protocol - assegna automaticamente indirizzi IP ai dispositivi.'],
      ['Diafonia','Interferenza tra cavi adiacenti (crosstalk), ridotta dall\'intreccio nel doppino.'],
      ['Dijkstra','Algoritmo per il cammino minimo usato dal protocollo OSPF.'],
      ['Doppino intrecciato','Cavo di rete con due fili di rame intrecciati, usa connettore RJ45.'],
      ['Ethernet','Tecnologia LAN più diffusa, standard IEEE 802.3, opera al livello 2 OSI.'],
      ['Fibra ottica','Mezzo trasmissivo che usa impulsi luminosi, immune a interferenze EM.'],
      ['FLSM','Fixed Length Subnet Mask - subnetting con la stessa mask per tutte le sottoreti.'],
      ['Flooding','Invio di un frame a tutte le porte quando il MAC di destinazione non è in tabella.'],
      ['Frame','Unità dati del livello 2 (Data Link), contiene MAC sorgente, destinazione, payload e CRC.'],
      ['Full-duplex','Comunicazione bidirezionale simultanea su un collegamento.'],
      ['Grafo','Struttura matematica con nodi e archi, usata per rappresentare reti.'],
      ['Hop count','Metrica di RIP: numero di router attraversati per raggiungere la destinazione.'],
      ['HTTP','HyperText Transfer Protocol - protocollo web, porta 80.'],
      ['HTTPS','HTTP Secure - versione crittografata di HTTP, porta 443.'],
      ['Hub','Apparato di rete livello 1 che ripete il segnale a tutte le porte (obsoleto).'],
      ['IEEE 802.3','Standard che definisce Ethernet.'],
      ['IP','Internet Protocol - protocollo di livello 3 per l\'indirizzamento e instradamento.'],
      ['IPv4','Internet Protocol versione 4 - indirizzi a 32 bit (4 ottetti).'],
      ['ISO/OSI','Modello di riferimento a 7 livelli per le reti di comunicazione.'],
      ['LAN','Local Area Network - rete locale che copre un\'area limitata.'],
      ['Link State','Tipo di protocollo di routing dove ogni router ha la mappa completa della topologia.'],
      ['Longest prefix match','Regola di routing: si sceglie la rotta con la subnet mask più lunga.'],
      ['LSA','Link State Advertisement - messaggio OSPF con informazioni sulla topologia.'],
      ['MAC address','Media Access Control address - identificatore univoco a 48 bit della scheda di rete.'],
      ['Modem','Modulatore/demodulatore - converte segnale digitale in analogico per la linea del provider.'],
      ['NAT','Network Address Translation - traduce indirizzi IP privati in pubblici.'],
      ['NIC','Network Interface Card - scheda di rete di un dispositivo.'],
      ['OSPF','Open Shortest Path First - protocollo di routing link state basato su Dijkstra.'],
      ['Ottetto','Gruppo di 8 bit, un byte. Un indirizzo IPv4 ha 4 ottetti.'],
      ['OUI','Organizationally Unique Identifier - primi 3 byte del MAC, identificano il produttore.'],
      ['Pacchetto','Unità dati del livello 3 (Rete), contiene indirizzi IP.'],
      ['Patch cord','Cavo corto per collegare dispositivi a prese di rete o patch panel a switch.'],
      ['Patch panel','Pannello di permutazione dove terminano i cavi dagli uffici.'],
      ['Payload','Dati utili trasportati all\'interno di un frame o pacchetto.'],
      ['Porta (networking)','Numero che identifica un\'applicazione specifica su un host (0-65535).'],
      ['QUIC','Quick UDP Internet Connections - protocollo Google su UDP, base di HTTP/3.'],
      ['RIP','Routing Information Protocol - protocollo distance vector con metrica hop count.'],
      ['RJ45','Connettore standard per cavi Ethernet (doppino intrecciato).'],
      ['Router','Apparato di rete livello 3 che collega reti diverse e instrada pacchetti IP.'],
      ['Routing','Processo di determinazione del percorso migliore per i pacchetti.'],
      ['Routing statico','Routing con percorsi configurati manualmente dall\'amministratore.'],
      ['Routing dinamico','Routing con aggiornamento automatico delle rotte tramite protocolli.'],
      ['Segmento','Unità dati del livello 4 (Trasporto) in TCP.'],
      ['Socket','Combinazione di indirizzo IP e porta che identifica un endpoint di comunicazione.'],
      ['STP (cavo)','Shielded Twisted Pair - doppino con schermatura metallica.'],
      ['Subnet mask','Maschera che separa la parte rete dalla parte host di un indirizzo IP.'],
      ['Subnetting','Tecnica di divisione di una rete in sottoreti più piccole.'],
      ['Switch','Apparato di rete livello 2 che commuta frame usando la tabella MAC.'],
      ['SYN','Synchronize - primo messaggio del three-way handshake TCP.'],
      ['Tabella di routing','Database del router con le rotte verso le reti di destinazione.'],
      ['Tabella MAC','Database dello switch con associazioni MAC address - porta fisica.'],
      ['TCP','Transmission Control Protocol - protocollo di trasporto affidabile e orientato alla connessione.'],
      ['TCP/IP','Modello di rete a 4 livelli usato da Internet.'],
      ['Three-way handshake','Processo in 3 passi (SYN, SYN-ACK, ACK) per stabilire una connessione TCP.'],
      ['TLS','Transport Layer Security - protocollo di crittografia per comunicazioni sicure.'],
      ['Topologia a stella','Configurazione in cui tutti i dispositivi sono collegati a un nodo centrale (switch).'],
      ['UDP','User Datagram Protocol - protocollo di trasporto veloce senza garanzie di consegna.'],
      ['UTP','Unshielded Twisted Pair - doppino senza schermatura, economico.'],
      ['VLSM','Variable Length Subnet Mask - subnetting con mask diverse per ogni sottorete.'],
      ['Wi-Fi','Tecnologia wireless per reti locali basata su standard IEEE 802.11.'],
    ];
    for (const g of glossaryTerms) insertGlossary.run(...g);
  });

  txn();
}
