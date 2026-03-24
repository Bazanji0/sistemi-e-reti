// Auto-generated from backend/db/seed.js — DO NOT EDIT MANUALLY
export const sections = [
  {
    "id": "A",
    "code": "A",
    "name": "Mezzi Trasmissivi",
    "description": "Supporti fisici e canali per il trasporto dei segnali nelle reti",
    "sort_order": 1
  },
  {
    "id": "B",
    "code": "B",
    "name": "Apparati di Rete",
    "description": "Dispositivi hardware per la comunicazione in rete",
    "sort_order": 2
  },
  {
    "id": "C",
    "code": "C",
    "name": "Cablaggio Strutturato",
    "description": "Sistema standardizzato di cavi e componenti in edifici",
    "sort_order": 3
  },
  {
    "id": "D",
    "code": "D",
    "name": "Ethernet",
    "description": "Tecnologia LAN più diffusa per reti cablate",
    "sort_order": 4
  },
  {
    "id": "E",
    "code": "E",
    "name": "Modelli di Riferimento",
    "description": "Modelli a livelli ISO/OSI e TCP/IP",
    "sort_order": 5
  },
  {
    "id": "F",
    "code": "F",
    "name": "Indirizzi IP",
    "description": "Identificatori numerici per host e instradamento",
    "sort_order": 6
  },
  {
    "id": "G",
    "code": "G",
    "name": "Subnetting FLSM",
    "description": "Divisione reti con Fixed Length Subnet Mask",
    "sort_order": 7
  },
  {
    "id": "H",
    "code": "H",
    "name": "VLSM",
    "description": "Variable Length Subnet Mask per efficienza",
    "sort_order": 8
  },
  {
    "id": "I",
    "code": "I",
    "name": "Routing",
    "description": "Processo di instradamento dei pacchetti",
    "sort_order": 9
  },
  {
    "id": "J",
    "code": "J",
    "name": "Routing Statico",
    "description": "Configurazione manuale dei percorsi di rete",
    "sort_order": 10
  },
  {
    "id": "K",
    "code": "K",
    "name": "Grafi",
    "description": "Rappresentazione matematica delle reti",
    "sort_order": 11
  },
  {
    "id": "L",
    "code": "L",
    "name": "RIP e OSPF",
    "description": "Protocolli di routing dinamico",
    "sort_order": 12
  },
  {
    "id": "M",
    "code": "M",
    "name": "Trasporto",
    "description": "Comunicazione end-to-end tra applicazioni",
    "sort_order": 13
  },
  {
    "id": "N",
    "code": "N",
    "name": "Applicazioni e QUIC",
    "description": "Protocolli applicativi e QUIC di Google",
    "sort_order": 14
  },
  {
    "id": "O",
    "code": "O",
    "name": "Firewall",
    "description": "Sistemi di sicurezza per il filtraggio del traffico di rete",
    "sort_order": 15
  },
  {
    "id": "P",
    "code": "P",
    "name": "Crittografia",
    "description": "Tecniche di cifratura per proteggere i dati nelle comunicazioni",
    "sort_order": 16
  },
  {
    "id": "Q",
    "code": "Q",
    "name": "VPN",
    "description": "Reti private virtuali per connessioni sicure su reti pubbliche",
    "sort_order": 17
  },
  {
    "id": "R",
    "code": "R",
    "name": "VLAN",
    "description": "Reti locali virtuali per la segmentazione logica della rete",
    "sort_order": 18
  },
  {
    "id": "S",
    "code": "S",
    "name": "Malware",
    "description": "Software malevolo e tecniche di difesa informatica",
    "sort_order": 19
  },
  {
    "id": "T",
    "code": "T",
    "name": "Packet Tracer",
    "description": "Simulatore Cisco per progettare e configurare reti",
    "sort_order": 20
  },
  {
    "id": "U",
    "code": "U",
    "name": "Tracce Maturità",
    "description": "Prove d'esame svolte con soluzione completa passo passo",
    "sort_order": 21
  }
];

export const topics = [
  {
    "id": 1,
    "section_id": "A",
    "number": 1,
    "title": "Mezzo trasmissivo",
    "content": "Il **mezzo trasmissivo** è il supporto fisico o il canale attraverso cui vengono trasportati i segnali (elettrici, ottici o elettromagnetici) da un dispositivo all'altro in una rete.\n\nÈ il componente fondamentale che determina:\n- **Velocità** di trasmissione dei dati\n- **Distanza** massima raggiungibile\n- **Affidabilità** della comunicazione\n\nSenza un mezzo trasmissivo, non è possibile alcuna comunicazione di rete.",
    "keywords": "mezzo trasmissivo,segnale,velocità,distanza,affidabilità"
  },
  {
    "id": 2,
    "section_id": "A",
    "number": 2,
    "title": "Mezzi guidati vs non guidati",
    "content": "I mezzi trasmissivi si dividono in due categorie:\n\n### Mezzi guidati\n- Il segnale viaggia lungo un percorso fisico definito (cavo)\n- Esempi: **doppino intrecciato**, **fibra ottica**, cavo coassiale\n- Segnale più stabile e meno soggetto a interferenze\n\n### Mezzi non guidati\n- Il segnale si propaga nello spazio libero tramite **onde elettromagnetiche**\n- Esempi: **Wi-Fi**, **Bluetooth**, **satellite**, onde radio\n- Maggiore flessibilità e mobilità\n- Più soggetti a **interferenze** e attenuazione",
    "keywords": "mezzi guidati,mezzi non guidati,onde elettromagnetiche,Wi-Fi,Bluetooth"
  },
  {
    "id": 3,
    "section_id": "A",
    "number": 3,
    "title": "Doppino intrecciato",
    "content": "Il **doppino intrecciato** (twisted pair) è composto da **2 fili di rame isolati e intrecciati** tra loro.\n\n### Caratteristiche:\n- L'intreccio **riduce le interferenze elettromagnetiche** e la **diafonia** (crosstalk)\n- Utilizza il connettore **RJ45**\n- È il cavo più utilizzato nelle reti **Ethernet**\n- Economico e facile da installare\n- Distanza massima tipica: **100 metri** per segmento",
    "keywords": "doppino intrecciato,rame,RJ45,Ethernet,diafonia,interferenze"
  },
  {
    "id": 4,
    "section_id": "A",
    "number": 4,
    "title": "UTP vs STP",
    "content": "Due varianti del doppino intrecciato:\n\n### UTP (Unshielded Twisted Pair)\n- **Senza schermatura** metallica\n- Più **economico** e flessibile\n- Ideale per **uffici** e ambienti domestici\n- Più soggetto a interferenze esterne\n\n### STP (Shielded Twisted Pair)\n- Con **schermatura metallica** (foglio o calza)\n- Migliore protezione contro interferenze\n- Usato in **ambienti industriali** con molte interferenze\n- Più costoso e rigido",
    "keywords": "UTP,STP,schermatura,interferenze"
  },
  {
    "id": 5,
    "section_id": "A",
    "number": 5,
    "title": "Fibra monomodale vs multimodale",
    "content": "Due tipi di fibra ottica:\n\n### Fibra monomodale (Single-mode)\n- Usa sorgente **laser**\n- Il segnale segue **un solo percorso** (modo)\n- Raggiunge **centinaia di km** di distanza\n- Usata per **dorsali Internet** e collegamenti a lunga distanza\n\n### Fibra multimodale (Multi-mode)\n- Usa sorgente **LED**\n- Il segnale segue **più percorsi** contemporaneamente\n- Raggiunge **centinaia di metri**\n- Usata per **reti campus** e data center",
    "keywords": "fibra monomodale,fibra multimodale,laser,LED,dorsali"
  },
  {
    "id": 6,
    "section_id": "A",
    "number": 6,
    "title": "Vantaggi fibra ottica",
    "content": "La **fibra ottica** trasmette dati sotto forma di impulsi luminosi.\n\n### Vantaggi:\n- **Velocità elevata**: capacità di banda molto superiore al rame\n- **Lunga distanza**: segnale si attenua molto meno\n- **Immune alle interferenze** elettromagnetiche\n- **Sicura**: difficile da intercettare (no emissioni EM)\n- Leggera e sottile\n\n### Svantaggi:\n- **Costo elevato** di materiali e installazione\n- Richiede competenze specializzate per giunzione\n- Più fragile del rame",
    "keywords": "fibra ottica,velocità,interferenze,sicurezza,costo"
  },
  {
    "id": 7,
    "section_id": "A",
    "number": 7,
    "title": "Wireless",
    "content": "La comunicazione **wireless** utilizza **onde radio e microonde** per trasmettere dati senza cavi.\n\n### Tecnologie principali:\n- **Wi-Fi**: reti locali wireless (IEEE 802.11)\n- **Bluetooth**: connessioni a corto raggio\n- **Cellulare**: 4G, 5G per comunicazioni mobili\n- **Satellite**: copertura globale\n\n### Caratteristiche:\n- Grande **mobilità** e flessibilità\n- Nessun cablaggio necessario\n- Più soggetto a **interferenze** e ostacoli\n- Sicurezza richiede crittografia (WPA2/WPA3)",
    "keywords": "wireless,Wi-Fi,Bluetooth,cellulare,onde radio"
  },
  {
    "id": 8,
    "section_id": "B",
    "number": 1,
    "title": "Apparato di rete",
    "content": "Un **apparato di rete** è un dispositivo hardware che permette la comunicazione tra dispositivi in una rete.\n\n### Principali apparati:\n- **Switch**: commutatore di rete locale\n- **Router**: instradatore tra reti diverse\n- **Hub**: ripetitore multiporta (obsoleto)\n- **Modem**: modulatore/demodulatore\n- **Access Point (AP)**: punto di accesso wireless\n\nOgni apparato opera a un livello specifico del modello OSI e svolge funzioni precise.",
    "keywords": "apparato di rete,switch,router,hub,modem,access point"
  },
  {
    "id": 9,
    "section_id": "B",
    "number": 2,
    "title": "Hub vs Switch",
    "content": "### Hub\n- Opera al **livello 1** (Fisico) del modello OSI\n- **Ripete il segnale a tutte le porte**\n- Non distingue i destinatari\n- Causa **collisioni** (dominio di collisione unico)\n- Oggi **obsoleto**\n\n### Switch\n- Opera al **livello 2** (Data Link) del modello OSI\n- **Legge l'indirizzo MAC** di destinazione\n- Invia il frame **solo alla porta corretta**\n- Ogni porta è un dominio di collisione separato\n- Molto più efficiente dell'hub",
    "keywords": "hub,switch,collisioni,MAC,livello 1,livello 2"
  },
  {
    "id": 10,
    "section_id": "B",
    "number": 3,
    "title": "Switch Ethernet",
    "content": "Lo **switch Ethernet** è il dispositivo centrale delle reti locali moderne.\n\n### Funzionamento:\n- Mantiene una **tabella MAC** (MAC address table)\n- **Associa** ogni indirizzo MAC alla porta fisica corrispondente\n- Quando riceve un frame, consulta la tabella e **inoltra solo alla porta** del destinatario\n- Se il MAC non è in tabella, fa **flooding** (invia a tutte le porte)\n- Apprende automaticamente i MAC dai frame in ingresso",
    "keywords": "switch Ethernet,tabella MAC,porta,frame,flooding"
  },
  {
    "id": 11,
    "section_id": "B",
    "number": 4,
    "title": "Router",
    "content": "Il **router** è il dispositivo che collega **reti diverse** tra loro.\n\n### Funzioni principali:\n- Opera al **livello 3** (Rete) del modello OSI\n- Instrada i pacchetti usando gli **indirizzi IP**\n- Funzioni aggiuntive: **NAT** (traduzione indirizzi), **firewall**, **DHCP**\n- Mantiene una **tabella di routing** con i percorsi verso le reti\n- Separa i **domini di broadcast**\n\nÈ il dispositivo fondamentale per la connessione a Internet.",
    "keywords": "router,IP,NAT,firewall,DHCP,instradamento,livello 3"
  },
  {
    "id": 12,
    "section_id": "B",
    "number": 5,
    "title": "Modem vs Router",
    "content": "### Modem\n- **Converte il segnale** digitale in analogico (e viceversa)\n- Collega la rete domestica alla **linea del provider** (DSL, fibra, cavo)\n- Opera al livello fisico\n\n### Router\n- **Gestisce il traffico** tra LAN e Internet\n- Assegna indirizzi IP (DHCP)\n- Applica regole di sicurezza\n\n### Dispositivo combinato\n- Spesso modem e router sono **combinati in un unico dispositivo** fornito dall'ISP\n- Include anche funzionalità switch e access point Wi-Fi",
    "keywords": "modem,router,provider,ISP,segnale"
  },
  {
    "id": 13,
    "section_id": "B",
    "number": 6,
    "title": "Access Point",
    "content": "L'**Access Point (AP)** funge da **ponte tra rete cablata e wireless**.\n\n### Caratteristiche:\n- Permette ai dispositivi wireless di connettersi alla rete LAN\n- Trasmette e riceve segnali Wi-Fi\n- Connesso via cavo Ethernet alla rete cablata\n\n### Router Wi-Fi\nUn tipico **router Wi-Fi** domestico è in realtà un dispositivo che combina:\n- **Router** (instradamento)\n- **Switch** (porte Ethernet)\n- **Access Point** (Wi-Fi)\n- Spesso anche **modem**",
    "keywords": "access point,wireless,Wi-Fi,ponte,LAN"
  },
  {
    "id": 14,
    "section_id": "B",
    "number": 7,
    "title": "Livelli OSI degli apparati",
    "content": "Ogni apparato di rete opera a un livello specifico del modello **OSI**:\n\n| Apparato | Livello OSI | Funzione |\n|----------|-------------|----------|\n| **Hub** | Livello 1 - Fisico | Ripete segnali elettrici |\n| **Switch** | Livello 2 - Data Link | Commuta frame tramite MAC |\n| **Router** | Livello 3 - Rete | Instrada pacchetti tramite IP |\n\n### Regola pratica:\n- **Hub** = lavora con segnali (bit)\n- **Switch** = lavora con frame (MAC address)\n- **Router** = lavora con pacchetti (IP address)",
    "keywords": "OSI,hub,switch,router,livello 1,livello 2,livello 3"
  },
  {
    "id": 15,
    "section_id": "C",
    "number": 1,
    "title": "Introduzione al cablaggio strutturato",
    "content": "Il **cablaggio strutturato** è un sistema standardizzato di cavi, connettori e apparati installati in un edificio per supportare le comunicazioni.\n\n### Obiettivi:\n- **Ordine**: organizzazione sistematica dei cablaggi\n- **Flessibilità**: facile aggiunta/modifica di postazioni\n- **Manutenzione**: interventi rapidi e semplici\n- **Scalabilità**: crescita senza ristrutturazione\n\nSostituisce il cablaggio \"spaghetti\" disorganizzato con un sistema progettato secondo standard precisi.",
    "keywords": "cablaggio strutturato,ordine,flessibilità,manutenzione,scalabilità"
  },
  {
    "id": 16,
    "section_id": "C",
    "number": 2,
    "title": "Vantaggi del cablaggio strutturato",
    "content": "### Vantaggi principali:\n- **Universale**: supporta dati, voce, video sullo stesso cablaggio\n- **Standardizzato**: segue norme internazionali\n- **Indipendente** dalla tecnologia: funziona con diversi protocolli\n- **Affidabile**: componenti certificati e testati\n- **Economico** nel lungo termine: riduce costi di gestione\n- **Documentato**: ogni componente è identificato e mappato",
    "keywords": "vantaggi,universale,standardizzato,affidabile"
  },
  {
    "id": 17,
    "section_id": "C",
    "number": 3,
    "title": "Componenti del cablaggio",
    "content": "I componenti principali del cablaggio strutturato:\n\n- **Cavi**: doppino UTP/STP cat. 5e, 6, 6a; fibra ottica\n- **Prese di rete** (outlet): punti di connessione a muro negli uffici\n- **Patch panel**: pannello di permutazione nell'armadio rack\n- **Armadio rack**: struttura che ospita gli apparati\n- **Patch cord**: cavi corti per collegare presa↔PC e patch panel↔switch\n- **Canalizzazioni**: tubi e canaline per il passaggio dei cavi",
    "keywords": "cavi,prese,patch panel,armadio rack,patch cord"
  },
  {
    "id": 18,
    "section_id": "C",
    "number": 4,
    "title": "Cablaggio orizzontale vs dorsale",
    "content": "### Cablaggio orizzontale\n- Collega le **prese ufficio** all'**armadio di piano** (floor distributor)\n- Usa tipicamente cavo in rame (UTP cat. 6)\n- Distanza massima: **90 metri** (+ 10m patch cord)\n- Topologia a **stella**\n\n### Cablaggio dorsale (backbone)\n- Collega gli **armadi di piano** tra loro e al **centro stella** principale\n- Collega edifici diversi nel campus\n- Usa spesso **fibra ottica** per prestazioni e distanza\n- È la \"spina dorsale\" della rete",
    "keywords": "orizzontale,dorsale,backbone,stella,fibra ottica"
  },
  {
    "id": 19,
    "section_id": "C",
    "number": 5,
    "title": "Armadio rack",
    "content": "L'**armadio rack** è una struttura metallica standardizzata da **19 pollici** di larghezza.\n\n### Contenuto tipico:\n- **Switch** di rete\n- **Patch panel**\n- **Router**\n- **Server**\n- Gruppi di continuità (UPS)\n- Sistemi di raffreddamento\n\n### Caratteristiche:\n- Misurato in **unità rack (U)** = 1.75 pollici di altezza\n- Armadi comuni: 12U, 24U, 42U\n- Garantisce ordine e accessibilità",
    "keywords": "armadio rack,19 pollici,unità rack,switch,server"
  },
  {
    "id": 20,
    "section_id": "C",
    "number": 6,
    "title": "Patch panel",
    "content": "Il **patch panel** è un pannello con molteplici porte dove vengono **terminati i cavi** provenienti dalle prese ufficio.\n\n### Funzionamento:\n- Sul retro: collegamento permanente dei cavi dagli uffici\n- Sul fronte: porte numerate per collegamento con **patch cord** allo switch\n\n### Vantaggi:\n- **Flessibilità**: cambiare connessioni senza toccare i cavi nel muro\n- **Ordine**: gestione pulita dei collegamenti\n- **Manutenzione**: facile identificazione e sostituzione",
    "keywords": "patch panel,porte,patch cord,switch,flessibilità"
  },
  {
    "id": 21,
    "section_id": "C",
    "number": 7,
    "title": "Standard di cablaggio",
    "content": "### EIA/TIA-568 (standard americano)\n- Definisce specifiche per cablaggio in edifici commerciali\n- Due schemi di cablaggio: **T568A** e **T568B**\n- Regole su cavi, connettori, distanze, topologie\n\n### ISO/IEC 11801 (standard internazionale)\n- Equivalente internazionale del TIA-568\n- Definisce **classi** di collegamento e **categorie** di cavi\n- Applicabile a livello globale\n\n### Categorie cavi comuni:\n- **Cat 5e**: fino a 1 Gbps\n- **Cat 6**: fino a 10 Gbps (55m)\n- **Cat 6a**: fino a 10 Gbps (100m)",
    "keywords": "EIA/TIA-568,ISO/IEC 11801,T568A,T568B,categorie"
  },
  {
    "id": 22,
    "section_id": "D",
    "number": 1,
    "title": "Cos'è Ethernet",
    "content": "**Ethernet** è la tecnologia **LAN più diffusa** al mondo. Definisce le regole per la trasmissione dei dati nelle reti locali cablate.\n\n### Caratteristiche:\n- Standard **IEEE 802.3**\n- Utilizzata nella stragrande maggioranza delle reti locali\n- Economica e affidabile\n- In continua evoluzione (velocità sempre maggiori)",
    "keywords": "Ethernet,LAN,IEEE 802.3,standard"
  },
  {
    "id": 23,
    "section_id": "D",
    "number": 2,
    "title": "Ethernet e il modello OSI",
    "content": "Ethernet opera al **livello 2 (Data Link)** del modello OSI.\n\n### Funzioni al livello 2:\n- Gestione dei **frame** (unità dati del livello 2)\n- Indirizzamento tramite **MAC address**\n- Rilevamento errori con **CRC**\n- Controllo accesso al mezzo (MAC sublayer)\n\nEthernet definisce anche specifiche per il livello 1 (cavi, connettori, segnali).",
    "keywords": "livello 2,Data Link,frame,MAC,CRC"
  },
  {
    "id": 24,
    "section_id": "D",
    "number": 3,
    "title": "Struttura rete Ethernet",
    "content": "Una rete Ethernet è composta da:\n\n### Componenti fisici:\n- **Cavi**: rame (UTP) o fibra ottica\n- **Switch**: dispositivo centrale di commutazione\n- **Router**: per connessione ad altre reti\n- **NIC** (Network Interface Card): scheda di rete nei dispositivi\n\n### Topologia:\n- **Stella**: tutti i dispositivi collegati a uno switch centrale\n- Oggi è la topologia standard per Ethernet",
    "keywords": "cavi,switch,router,NIC,stella"
  },
  {
    "id": 25,
    "section_id": "D",
    "number": 4,
    "title": "Frame Ethernet",
    "content": "Il **frame** è l'unità dati del livello 2. Struttura:\n\n| Campo | Dimensione | Funzione |\n|-------|-----------|----------|\n| Preambolo | 7 byte | Sincronizzazione |\n| SFD | 1 byte | Inizio frame |\n| **MAC destinazione** | 6 byte | Chi deve ricevere |\n| **MAC sorgente** | 6 byte | Chi ha inviato |\n| **Tipo/Lunghezza** | 2 byte | Protocollo superiore (es. IPv4=0x0800) |\n| **Payload** | 46-1500 byte | Dati trasportati |\n| **CRC/FCS** | 4 byte | Controllo errori |",
    "keywords": "frame,MAC,payload,CRC,preambolo"
  },
  {
    "id": 26,
    "section_id": "D",
    "number": 5,
    "title": "MAC Address",
    "content": "Il **MAC Address** (Media Access Control) identifica in modo **univoco** ogni scheda di rete.\n\n### Caratteristiche:\n- Lungo **48 bit** (6 byte)\n- Scritto in formato **esadecimale** (es. `AA:BB:CC:11:22:33`)\n- I primi 3 byte: **OUI** (identifica il produttore)\n- Gli ultimi 3 byte: identificatore unico del dispositivo\n- **Assegnato in fabbrica** (burned-in), ma può essere modificato via software\n- Usato per comunicazioni al livello 2 (locale)",
    "keywords": "MAC address,48 bit,esadecimale,OUI,univoco"
  },
  {
    "id": 27,
    "section_id": "D",
    "number": 6,
    "title": "Ruolo dello switch",
    "content": "Lo **switch** è l'elemento centrale in una rete Ethernet moderna.\n\n### Funzionamento:\n1. Riceve un frame su una porta\n2. Legge il **MAC di destinazione**\n3. Consulta la **tabella MAC**\n4. **Inoltra il frame solo alla porta** corretta\n\n### Vantaggi rispetto all'hub:\n- **No collisioni**: ogni porta è un dominio separato\n- **Full-duplex**: invio e ricezione simultanei\n- **Maggiore sicurezza**: i dati non raggiungono tutti\n- **Prestazioni superiori**: banda dedicata per porta",
    "keywords": "switch,tabella MAC,full-duplex,porta"
  },
  {
    "id": 28,
    "section_id": "D",
    "number": 7,
    "title": "Velocità Ethernet",
    "content": "L'evoluzione delle velocità Ethernet:\n\n| Standard | Velocità | Nome |\n|----------|----------|------|\n| 802.3 | **10 Mbps** | Ethernet |\n| 802.3u | **100 Mbps** | Fast Ethernet |\n| 802.3ab | **1 Gbps** | Gigabit Ethernet |\n| 802.3an | **10 Gbps** | 10 Gigabit Ethernet |\n| 802.3bs | **200/400 Gbps** | Ultra-high speed |\n\nLa retrocompatibilità è garantita: dispositivi di velocità diverse possono coesistere (autonegotiation).",
    "keywords": "velocità,Mbps,Gbps,Fast Ethernet,Gigabit"
  },
  {
    "id": 29,
    "section_id": "D",
    "number": 8,
    "title": "Ethernet e cablaggio strutturato",
    "content": "Ethernet è **pienamente compatibile** con il cablaggio strutturato.\n\n### Integrazione:\n- I cavi UTP cat. 5e/6/6a sono progettati per Ethernet\n- Le prese RJ45 a muro si collegano direttamente a dispositivi Ethernet\n- Gli switch Ethernet si installano negli armadi rack\n- I patch panel facilitano la gestione delle connessioni\n\nIl cablaggio strutturato fornisce l'infrastruttura fisica su cui Ethernet opera.",
    "keywords": "cablaggio strutturato,UTP,RJ45,rack"
  },
  {
    "id": 30,
    "section_id": "D",
    "number": 9,
    "title": "CSMA/CD",
    "content": "**CSMA/CD** (Carrier Sense Multiple Access with Collision Detection):\n\n### Funzionamento:\n1. **Carrier Sense**: ascolta se il canale è libero\n2. **Multiple Access**: più dispositivi condividono il mezzo\n3. **Collision Detection**: rileva collisioni durante la trasmissione\n4. In caso di collisione → attesa casuale (backoff) → ritrasmissione\n\n### Oggi:\n- **Meno rilevante** nelle reti moderne\n- Gli switch full-duplex eliminano le collisioni\n- Ogni porta dello switch è un dominio di collisione isolato\n- Rimane importante per la teoria e la storia di Ethernet",
    "keywords": "CSMA/CD,collisione,full-duplex,backoff"
  },
  {
    "id": 31,
    "section_id": "D",
    "number": 10,
    "title": "Topologie di rete",
    "content": "La **topologia di rete** descrive come i dispositivi sono collegati tra loro. Può essere **fisica** (disposizione reale dei cavi) o **logica** (percorso dei dati).\n\n---\n\n## ⭐ Stella (Star)\n\n```\n        [PC1]\n          |\n[PC4]---[SWITCH]---[PC2]\n          |\n        [PC3]\n```\n\nTutti i dispositivi sono collegati a un **nodo centrale** (switch o hub).\n\n| Aspetto | Dettaglio |\n|---------|----------|\n| **Pro** | Facile da gestire, un guasto a un cavo non blocca la rete |\n| **Contro** | Se il nodo centrale si guasta, tutta la rete cade |\n| **Quando usarla** | Reti LAN aziendali e domestiche — è lo **standard attuale** |\n| **Dispositivo centrale** | Switch (moderno) o Hub (obsoleto) |\n\n---\n\n## 🔄 Anello (Ring)\n\n```\n[PC1]---[PC2]\n  |       |\n[PC4]---[PC3]\n```\n\nOgni dispositivo è collegato al **successivo** in un circuito chiuso. I dati viaggiano in **una direzione** (o due nel doppio anello).\n\n| Aspetto | Dettaglio |\n|---------|----------|\n| **Pro** | Traffico ordinato, nessuna collisione (token passing) |\n| **Contro** | Un guasto a un cavo interrompe tutto l'anello |\n| **Quando usarla** | Reti Token Ring (IBM) — oggi **quasi obsoleta** |\n| **Variante** | Doppio anello (FDDI) per ridondanza |\n\n---\n\n## 🚌 Bus\n\n```\n---[PC1]---[PC2]---[PC3]---[PC4]---\n            (cavo unico)\n```\n\nTutti i dispositivi condividono un **unico cavo** (backbone). I dati viaggiano in entrambe le direzioni.\n\n| Aspetto | Dettaglio |\n|---------|----------|\n| **Pro** | Semplice ed economica, poco cavo |\n| **Contro** | Se il cavo si interrompe, tutta la rete cade. Collisioni frequenti |\n| **Quando usarla** | Ethernet classica (10BASE2/10BASE5) — oggi **obsoleta** |\n| **Terminatori** | Necessari alle estremità per evitare riflessioni del segnale |\n\n---\n\n## 🕸️ Maglia (Mesh)\n\n```\n[PC1]---[PC2]\n  |\\   /|\n  | \\ / |\n  | / \\ |\n  |/   \\|\n[PC3]---[PC4]\n```\n\nOgni dispositivo è collegato a **tutti** (o quasi) gli altri.\n\n| Aspetto | Dettaglio |\n|---------|----------|\n| **Pro** | Massima ridondanza, se un link cade ci sono percorsi alternativi |\n| **Contro** | Molto costosa, tanti cavi e porte necessari |\n| **Maglia completa** | Ogni nodo collegato a tutti → cavi = n(n-1)/2 |\n| **Maglia parziale** | Solo alcuni nodi collegati tra loro (più pratica) |\n| **Quando usarla** | Backbone di ISP, data center, reti critiche |\n\n---\n\n## 🌳 Albero (Tree)\n\n```\n        [ROOT Switch]\n        /           \\\n  [Switch1]      [Switch2]\n   /    \\         /    \\\n[PC1] [PC2]   [PC3] [PC4]\n```\n\nÈ una **stella gerarchica**: più stelle collegate tra loro in livelli.\n\n| Aspetto | Dettaglio |\n|---------|----------|\n| **Pro** | Scalabile, organizzata per livelli, adatta a edifici grandi |\n| **Contro** | Dipende dal nodo radice, più cablaggio |\n| **Quando usarla** | **Cablaggio strutturato** di campus e grandi aziende |\n| **Relazione** | Il cablaggio dorsale (backbone) crea una topologia ad albero |\n\n---\n\n## Tabella di confronto\n\n| Topologia | Ridondanza | Costo | Scalabilità | Uso oggi |\n|-----------|-----------|-------|-------------|----------|\n| **Stella** | Media | Medio | ✅ Alta | ✅ Standard LAN |\n| **Anello** | Bassa | Medio | ❌ Bassa | ❌ Obsoleta |\n| **Bus** | Nessuna | Basso | ❌ Bassa | ❌ Obsoleta |\n| **Maglia** | ✅ Alta | Alto | Media | ✅ Backbone/WAN |\n| **Albero** | Media | Medio | ✅ Alta | ✅ Campus/edifici |\n\n> **All'esame**: Ethernet moderna usa la topologia a **stella** con switch centrale. Il cablaggio strutturato di un campus usa la topologia ad **albero** (stella gerarchica). Le dorsali Internet usano la **maglia**.",
    "keywords": "topologia,stella,anello,bus,maglia,albero,ring,mesh,tree,star"
  },
  {
    "id": 32,
    "section_id": "E",
    "number": 1,
    "title": "Perché i modelli a livelli",
    "content": "I **modelli a livelli** organizzano le funzioni di rete in strati separati.\n\n### Vantaggi:\n- **Modularità**: ogni livello ha una funzione specifica\n- **Interoperabilità**: produttori diversi possono collaborare\n- **Manutenzione**: problemi isolati a un livello\n- **Sviluppo indipendente**: modificare un livello senza toccare gli altri\n- **Astrazione**: nasconde la complessità\n\nI due modelli principali sono **ISO/OSI** e **TCP/IP**.",
    "keywords": "modelli a livelli,modularità,interoperabilità,astrazione"
  },
  {
    "id": 33,
    "section_id": "E",
    "number": 2,
    "title": "Modello ISO/OSI",
    "content": "Il modello **ISO/OSI** (Open Systems Interconnection) ha **7 livelli**. Immaginalo come una **scala**: i dati partono dall'alto (livello 7) e scendono fino al cavo (livello 1), poi risalgono dal destinatario.\n\n### Tabella riassuntiva:\n\n| # | Livello | Cosa fa | PDU | Dispositivo |\n|---|---------|---------|-----|-------------|\n| 7 | **Applicazione** | Interfaccia utente (browser, email) | Dati | - |\n| 6 | **Presentazione** | Formato, compressione, crittografia | Dati | - |\n| 5 | **Sessione** | Apre/chiude sessioni di comunicazione | Dati | - |\n| 4 | **Trasporto** | Comunicazione end-to-end (TCP/UDP) | Segmento | - |\n| 3 | **Rete** | Instradamento con indirizzi IP | Pacchetto | Router |\n| 2 | **Collegamento dati** | Frame e indirizzi MAC | Frame | Switch |\n| 1 | **Fisico** | Trasmissione bit sul mezzo fisico | Bit | Hub, cavo |\n\n### Spiegati uno per uno:\n\n**Livello 1 — Fisico:** È il cavo, la fibra, il Wi-Fi. Si occupa di trasmettere **bit** (0 e 1) sul mezzo fisico. Non sa cosa significano quei bit.\n\n**Livello 2 — Collegamento dati:** Organizza i bit in **frame** e usa gli indirizzi **MAC** per comunicare nella rete locale. È il livello dello **switch**.\n\n**Livello 3 — Rete:** Si occupa dell'**instradamento** dei **pacchetti** usando gli indirizzi **IP**. È il livello del **router**.\n\n**Livello 4 — Trasporto:** Garantisce la comunicazione **end-to-end** tra applicazioni. Qui lavorano **TCP** (affidabile) e **UDP** (veloce).\n\n**Livello 5 — Sessione:** Apre, gestisce e chiude le **sessioni** di comunicazione tra due host.\n\n**Livello 6 — Presentazione:** Si occupa del **formato** dei dati: conversione, compressione, crittografia.\n\n**Livello 7 — Applicazione:** È quello che **vedi tu**: il browser, l'email, la chat.\n\n### Come ricordarli (dal 7 al 1):\n**A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing",
    "keywords": "ISO/OSI,7 livelli,applicazione,trasporto,rete,fisico"
  },
  {
    "id": 34,
    "section_id": "E",
    "number": 3,
    "title": "Modello TCP/IP",
    "content": "Il modello **TCP/IP** è quello che **Internet usa davvero**. Ha solo **4 livelli** perché è più pratico e diretto.\n\n### Tabella riassuntiva:\n\n| # | Livello | Cosa fa | Protocolli principali |\n|---|---------|---------|----------------------|\n| 4 | **Application** | Servizi all'utente | HTTP, FTP, DNS, SMTP |\n| 3 | **Transport** | Comunicazione end-to-end | TCP, UDP |\n| 2 | **Internet** | Instradamento pacchetti | IP, ICMP, ARP |\n| 1 | **Network Access** | Accesso fisico alla rete | Ethernet, Wi-Fi |\n\n### Spiegati uno per uno:\n\n**Livello 1 — Network Access (Accesso alla rete):**\nTutto ciò che riguarda il collegamento fisico: cavi, Wi-Fi, Ethernet, MAC address. Unisce i livelli 1 e 2 dell'OSI.\n\n**Livello 2 — Internet:**\nSi occupa dell'**instradamento** dei pacchetti. Il protocollo principale è **IP**. Qui lavora il **router**.\n\n**Livello 3 — Transport (Trasporto):**\nGestisce la comunicazione tra applicazioni:\n- **TCP**: affidabile, conferma la ricezione (web, email)\n- **UDP**: veloce, senza garanzie (streaming, gaming)\n\n**Livello 4 — Application (Applicazione):**\nTutto ciò che l'utente usa: **HTTP** (siti web), **DNS** (nomi di dominio), **SMTP** (email), **FTP** (file). Accorpa i livelli 5, 6 e 7 dell'OSI.\n\n### Perché solo 4 livelli?\nTCP/IP è nato per **funzionare**, non per essere bello sulla carta. Raggruppa le funzioni che nella pratica vanno insieme.",
    "keywords": "TCP/IP,4 livelli,Application,Transport,Internet,Network Access"
  },
  {
    "id": 35,
    "section_id": "E",
    "number": 4,
    "title": "Corrispondenza OSI ↔ TCP/IP",
    "content": "I due modelli descrivono le **stesse cose** ma con una granularità diversa.\n\n### Tabella di corrispondenza:\n\n| Livelli OSI | Livello TCP/IP | Protocolli |\n|-------------|---------------|------------|\n| 7 — Applicazione | **Application** | HTTP, DNS, FTP, SMTP |\n| 6 — Presentazione | **Application** | (stessa riga sopra) |\n| 5 — Sessione | **Application** | (stessa riga sopra) |\n| 4 — Trasporto | **Transport** | TCP, UDP |\n| 3 — Rete | **Internet** | IP, ICMP, ARP |\n| 2 — Collegamento dati | **Network Access** | Ethernet, Wi-Fi |\n| 1 — Fisico | **Network Access** | (stessa riga sopra) |\n\n### Cosa significa:\n\n**I 3 livelli alti dell'OSI** (7+6+5) diventano un unico **Application** nel TCP/IP. Perché? Nella pratica, un protocollo come HTTP si occupa di tutto: sessione, formato e interfaccia.\n\n**Il Trasporto** è uguale in entrambi: TCP e UDP.\n\n**La Rete** (OSI) corrisponde a **Internet** (TCP/IP): entrambi fanno instradamento con IP.\n\n**I 2 livelli bassi dell'OSI** (2+1) diventano **Network Access**: Ethernet gestisce sia i frame sia il mezzo fisico come un tutt'uno.\n\n### In sintesi:\n- **OSI** = 7 livelli, **teorico**, perfetto per **studiare e capire**\n- **TCP/IP** = 4 livelli, **pratico**, è quello che **Internet usa davvero**",
    "keywords": "corrispondenza,OSI,TCP/IP,mapping"
  },
  {
    "id": 36,
    "section_id": "E",
    "number": 5,
    "title": "Incapsulamento",
    "content": "L'**incapsulamento** è il meccanismo fondamentale dei modelli a livelli. Quando invii un dato (es. una pagina web), ogni livello **aggiunge il proprio header** al pacchetto.\n\n### Come funziona (esempio: apri un sito web):\n\n```\nTu scrivi \"google.com\" nel browser\n         ↓\nLivello 7 (Applicazione): crea la richiesta HTTP\n  [HTTP: GET /index.html]\n         ↓\nLivello 4 (Trasporto): aggiunge porta sorgente e destinazione\n  [TCP: porta 443] [HTTP: GET /index.html]\n         ↓\nLivello 3 (Rete): aggiunge IP sorgente e destinazione\n  [IP: 192.168.1.10 → 142.250.180.46] [TCP] [HTTP]\n         ↓\nLivello 2 (Collegamento): aggiunge MAC sorgente e destinazione\n  [MAC: aa:bb → cc:dd] [IP] [TCP] [HTTP]\n         ↓\nLivello 1 (Fisico): converte tutto in bit e li manda sul cavo\n  0110110101010101...\n```\n\n### Ogni livello ha un nome diverso per i dati:\n- Livello 7-5: **Dati**\n- Livello 4: **Segmento** (TCP) o **Datagram** (UDP)\n- Livello 3: **Pacchetto**\n- Livello 2: **Frame**\n- Livello 1: **Bit**\n\nIl destinatario fa il processo inverso: **de-incapsula** livello per livello fino a leggere i dati originali.",
    "keywords": "incapsulamento,header,PDU,segmento,pacchetto,frame"
  },
  {
    "id": 37,
    "section_id": "E",
    "number": 6,
    "title": "Perché Internet usa TCP/IP",
    "content": "Internet utilizza il modello **TCP/IP** per ragioni storiche e pratiche.\n\n### La storia:\nNegli **anni '70**, il Dipartimento della Difesa americano creò **ARPANET**, la prima rete a pacchetti. Per far funzionare ARPANET servivano dei protocolli, e vennero creati **TCP e IP**.\n\nNegli **anni '80**, l'ISO propose il modello OSI come standard universale. Ma ormai TCP/IP era già **ovunque**: università, governi e aziende lo usavano da anni.\n\n### Perché TCP/IP ha vinto:\n- Era **già funzionante** quando l'OSI era ancora sulla carta\n- Era **gratuito e aperto** (non proprietario)\n- Era **più semplice** (4 livelli vs 7)\n- ARPANET (poi Internet) lo aveva già adottato\n\n### Allora a cosa serve l'OSI?\nL'OSI è il modello perfetto per **studiare e capire** le reti. Quando dici \"opera al livello 2\" o \"è un protocollo di livello 3\", stai usando il linguaggio dell'OSI. È il **vocabolario comune** del networking.\n\n> **OSI** = come **studiamo** le reti\n> **TCP/IP** = come le reti **funzionano davvero**",
    "keywords": "Internet,TCP/IP,ARPANET,storico,pratico"
  },
  {
    "id": 38,
    "section_id": "E",
    "number": 7,
    "title": "RFC da ricordare",
    "content": "Le **RFC** (Request for Comments) sono i documenti ufficiali che definiscono gli standard di Internet. Conoscerne alcune fa **bella figura** all'esame e dimostra che sai da dove vengono i protocolli.\n\n---\n\n## RFC fondamentali\n\n| RFC | Anno | Titolo | Cosa definisce |\n|-----|------|--------|----------------|\n| **RFC 791** | 1981 | Internet Protocol (IPv4) | Il protocollo IP versione 4: formato del pacchetto, indirizzamento a 32 bit, frammentazione, TTL. È la **base di Internet**. |\n| **RFC 793** | 1981 | Transmission Control Protocol | TCP: three-way handshake, numeri di sequenza, controllo di flusso, affidabilità end-to-end. |\n| **RFC 768** | 1980 | User Datagram Protocol | UDP: solo 1 pagina! Il protocollo più semplice possibile — nessuna garanzia, massima velocità. |\n| **RFC 826** | 1982 | Address Resolution Protocol | ARP: come si scopre il MAC address a partire dall'IP nella rete locale. |\n| **RFC 1918** | 1996 | Private Address Space | Definisce gli indirizzi **IP privati** che usiamo ogni giorno: `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`. |\n| **RFC 2131** | 1997 | DHCP | Come un host ottiene automaticamente IP, mask, gateway e DNS. |\n\n---\n\n## RFC di livello applicativo\n\n| RFC | Anno | Titolo | Cosa definisce |\n|-----|------|--------|----------------|\n| **RFC 2616** | 1999 | HTTP/1.1 | Il protocollo del web: GET, POST, codici di stato (200, 404, 500). Aggiornato poi da RFC 7230-7235. |\n| **RFC 5321** | 2008 | SMTP | Simple Mail Transfer Protocol: come si inviano le email tra server. |\n| **RFC 1034 / 1035** | 1987 | DNS | Domain Name System: la \"rubrica di Internet\" che traduce nomi in IP. |\n\n---\n\n## RFC per fare colpo alla maturità 🎯\n\n| RFC | Perché citarla |\n|-----|----------------|\n| **RFC 791** (IP) | Quando parli di indirizzamento e routing: \"come definito nella RFC 791, il pacchetto IP contiene TTL, indirizzo sorgente e destinazione...\" |\n| **RFC 1918** (IP privati) | Quando parli di NAT e indirizzi privati: \"gli indirizzi 192.168.x.x sono privati secondo la RFC 1918, non instradabili su Internet...\" |\n| **RFC 793** (TCP) | Quando parli del three-way handshake: \"il meccanismo SYN/SYN-ACK/ACK è definito nella RFC 793...\" |\n| **RFC 2131** (DHCP) | Quando parli di configurazione automatica: \"il processo DORA (Discover, Offer, Request, Ack) è descritto nella RFC 2131...\" |\n\n---\n\n### Cos'è una RFC in breve?\n- Pubblicate dalla **IETF** (Internet Engineering Task Force)\n- Sono **numerate progressivamente** (RFC 1, RFC 2, ... RFC 9000+)\n- Una volta pubblicate **non cambiano mai** — se serve un aggiornamento, si pubblica una nuova RFC\n- Chiunque può leggerle gratuitamente su **rfc-editor.org**\n- Il nome \"Request for Comments\" risale al 1969 — un tono volutamente informale per incoraggiare la discussione\n\n> **Consiglio esame**: Non devi memorizzare i numeri di tutte le RFC, ma citare almeno **RFC 791** (IP), **RFC 1918** (IP privati) e **RFC 793** (TCP) dimostra preparazione e padronanza.",
    "keywords": "RFC,Request for Comments,IETF,standard,RFC 791,RFC 793,RFC 1918,RFC 2131"
  },
  {
    "id": 39,
    "section_id": "F",
    "number": 1,
    "title": "Indirizzo IP",
    "content": "L'**indirizzo IP** è un identificatore numerico assegnato a ogni dispositivo (host) connesso a una rete.\n\n### Funzioni:\n- **Identifica** univocamente un host nella rete\n- Permette l'**instradamento** dei pacchetti verso la destinazione corretta\n- È l'equivalente dell'\"indirizzo postale\" nel mondo delle reti\n\n### Versioni:\n- **IPv4**: versione attuale più usata\n- **IPv6**: nuova versione con più indirizzi disponibili",
    "keywords": "indirizzo IP,host,instradamento,IPv4,IPv6"
  },
  {
    "id": 40,
    "section_id": "F",
    "number": 2,
    "title": "IPv4",
    "content": "**IPv4** (Internet Protocol versione 4):\n\n### Formato:\n- Lungo **32 bit** (4 byte)\n- Scritto in **4 ottetti** separati da punti\n- Esempio: `192.168.1.10`\n- Ogni ottetto va da 0 a 255\n\n### Struttura:\n- **Net ID** (parte rete): identifica la rete di appartenenza\n- **Host ID** (parte host): identifica il dispositivo nella rete\n\n### Spazio indirizzamento:\n- 2³² = circa **4,3 miliardi** di indirizzi\n- Oggi insufficienti → si usa NAT e IPv6",
    "keywords": "IPv4,32 bit,ottetti,Net ID,Host ID"
  },
  {
    "id": 41,
    "section_id": "F",
    "number": 3,
    "title": "Indirizzi speciali",
    "content": "Nella notazione IPv4 ci sono indirizzi con significato speciale:\n\n### Indirizzo di rete\n- Host ID tutto a **0** (es. `192.168.1.0`)\n- Identifica la **rete stessa**, non un host\n- Non assegnabile a nessun dispositivo\n\n### Indirizzo host\n- Qualsiasi indirizzo valido (es. `192.168.1.15`)\n- Assegnato a un dispositivo specifico\n\n### Indirizzo di broadcast\n- Host ID tutto a **1** / **255** (es. `192.168.1.255`)\n- Invia il pacchetto a **tutti gli host** della rete\n- Non assegnabile a nessun dispositivo",
    "keywords": "indirizzo di rete,host,broadcast,.0,.255"
  },
  {
    "id": 42,
    "section_id": "F",
    "number": 4,
    "title": "Subnet mask",
    "content": "La **subnet mask** (maschera di sottorete) separa la parte **rete** dalla parte **host** di un indirizzo IP.\n\n### Funzionamento:\n- I bit a **1** indicano la parte di **rete**\n- I bit a **0** indicano la parte **host**\n\n### Esempio:\n- Subnet mask: `255.255.255.0`\n- In binario: `11111111.11111111.11111111.00000000`\n- 24 bit per la rete, 8 bit per gli host\n\n### Operazione AND:\n- IP AND subnet mask = **indirizzo di rete**\n- `192.168.1.10 AND 255.255.255.0 = 192.168.1.0`",
    "keywords": "subnet mask,rete,host,AND,bit"
  },
  {
    "id": 43,
    "section_id": "F",
    "number": 5,
    "title": "Notazione CIDR",
    "content": "**CIDR** (Classless Inter-Domain Routing) è una notazione compatta per indicare la subnet mask.\n\n### Formato:\n- Si scrive dopo l'IP con uno **slash**: `192.168.1.0/24`\n- Il numero indica quanti bit sono dedicati alla **rete**\n\n### Esempi:\n| CIDR | Subnet Mask | Host disponibili |\n|------|-------------|------------------|\n| /8 | 255.0.0.0 | 16.777.214 |\n| /16 | 255.255.0.0 | 65.534 |\n| /24 | 255.255.255.0 | 254 |\n| /26 | 255.255.255.192 | 62 |\n| /28 | 255.255.255.240 | 14 |\n\nCIDR è più **flessibile** delle vecchie classi A, B, C.",
    "keywords": "CIDR,slash,notazione,flessibile,classi"
  },
  {
    "id": 44,
    "section_id": "F",
    "number": 6,
    "title": "Default gateway",
    "content": "Il **default gateway** è l'indirizzo del **router** che un host utilizza per raggiungere reti esterne alla propria.\n\n### Funzionamento:\n1. L'host vuole comunicare con un IP\n2. Confronta l'IP con la propria rete (tramite subnet mask)\n3. Se è nella **stessa rete**: comunicazione diretta\n4. Se è in una **rete diversa**: invia al default gateway\n5. Il router instrada verso la destinazione\n\n### Configurazione:\n- Deve essere un IP nella **stessa rete** dell'host\n- Tipicamente il **primo** (.1) o l'**ultimo** (.254) indirizzo utile",
    "keywords": "default gateway,router,rete esterna,instradamento"
  },
  {
    "id": 45,
    "section_id": "G",
    "number": 1,
    "title": "Cos'è il subnetting",
    "content": "Il **subnetting** è la tecnica di dividere una rete IP in **sottoreti** (subnet) più piccole.\n\n### Motivazioni:\n- **Gestione**: reti più piccole sono più facili da amministrare\n- **Traffico**: riduce il dominio di broadcast\n- **Sicurezza**: isola segmenti di rete\n- **Efficienza**: migliore utilizzo degli indirizzi IP\n\nSi realizza \"prendendo in prestito\" bit dalla parte host per creare la parte sottorete.",
    "keywords": "subnetting,sottoreti,gestione,sicurezza,broadcast"
  },
  {
    "id": 46,
    "section_id": "G",
    "number": 2,
    "title": "FLSM",
    "content": "**FLSM** (Fixed Length Subnet Mask) = tutte le sottoreti hanno la **stessa subnet mask**.\n\n### Caratteristiche:\n- Ogni sottorete ha lo **stesso numero** di host disponibili\n- Semplice da calcolare e configurare\n- Non ottimale per reti con esigenze diverse\n\n### Esempio:\n- Rete: `192.168.1.0/24`\n- Servono 4 sottoreti\n- Tutte avranno mask `/26` (255.255.255.192)\n- Ogni sottorete: 62 host disponibili",
    "keywords": "FLSM,Fixed Length,stessa mask,sottoreti"
  },
  {
    "id": 47,
    "section_id": "G",
    "number": 3,
    "title": "Procedimento FLSM",
    "content": "### Passi per il subnetting FLSM:\n\n1. **Determinare** il numero di sottoreti necessarie\n2. **Calcolare** i bit da prendere dalla parte host: 2ⁿ ≥ numero sottoreti\n3. **Nuova subnet mask**: aggiungere n bit alla mask originale\n4. **Calcolare** gli indirizzi per ogni sottorete:\n   - Indirizzo di rete\n   - Range host utilizzabili\n   - Indirizzo di broadcast\n   - Host disponibili = 2^(bit host rimanenti) - 2\n\n### Formula host:\n**Host utilizzabili = 2^h - 2** (si sottraggono rete e broadcast)",
    "keywords": "procedimento,FLSM,bit,calcolo,formula"
  },
  {
    "id": 48,
    "section_id": "G",
    "number": 4,
    "title": "Esempio FLSM",
    "content": "### Esempio pratico:\n\n**Rete**: `192.168.1.0/24` → servono **4 sottoreti**\n\n**Calcolo**: 2² = 4 → prendiamo **2 bit** → nuova mask: **/26** (255.255.255.192)\n\nHost per sottorete: 2⁶ - 2 = **62**\n\n| Sottorete | Rete | Primo host | Ultimo host | Broadcast |\n|-----------|------|------------|-------------|-----------|\n| 1 | 192.168.1.0/26 | .1 | .62 | .63 |\n| 2 | 192.168.1.64/26 | .65 | .126 | .127 |\n| 3 | 192.168.1.128/26 | .129 | .190 | .191 |\n| 4 | 192.168.1.192/26 | .193 | .254 | .255 |",
    "keywords": "esempio,FLSM,/26,sottoreti,calcolo"
  },
  {
    "id": 49,
    "section_id": "G",
    "number": 5,
    "title": "Limiti FLSM",
    "content": "### Svantaggi di FLSM:\n\n- **Spreco di indirizzi**: se una sottorete ha 10 host ma la mask ne prevede 62, si sprecano 52 indirizzi\n- **Poca flessibilità**: non si adatta a reti con esigenze diverse\n- **Non ottimale**: in reti reali le dimensioni delle sottoreti variano molto\n\n### Esempio di spreco:\n- Sottorete A: 100 host necessari\n- Sottorete B: 5 host necessari\n- Con FLSM entrambe avrebbero la stessa dimensione\n- → Si spreca spazio nella sottorete B\n\nPer risolvere questo problema si usa il **VLSM**.",
    "keywords": "limiti,spreco,flessibilità,VLSM"
  },
  {
    "id": 50,
    "section_id": "G",
    "number": 6,
    "title": "Esercizio FLSM — 8 sottoreti",
    "content": "Facciamo un esercizio di subnetting FLSM **passo per passo**.\n\n### Traccia:\nHai la rete **172.16.0.0/16**. Devi creare **8 sottoreti** uguali.\n\n---\n\n### Passo 1 — Quanti bit servono?\nDobbiamo trovare quanti bit \"prendere in prestito\" dalla parte host.\n\nFormula: **2ⁿ ≥ numero sottoreti**\n- 2¹ = 2 → troppo pochi\n- 2² = 4 → troppo pochi\n- 2³ = **8** → perfetto! ✓\n\nServono **3 bit**.\n\n---\n\n### Passo 2 — Calcola la nuova mask\nLa mask originale è **/16** (255.255.0.0).\nAggiungiamo 3 bit: /16 + 3 = **/19**\n\nIn decimale: **255.255.224.0**\n\nCome si calcola? I 3 bit aggiunti nel terzo ottetto:\n`11100000` in binario = 128+64+32 = **224**\n\n---\n\n### Passo 3 — Quanti host per sottorete?\nBit host rimasti: 32 - 19 = **13 bit**\nHost utilizzabili: 2¹³ - 2 = **8190 host** per sottorete\n\n---\n\n### Passo 4 — Calcola il \"salto\"\nIl salto tra una sottorete e l'altra:\n256 - 224 = **32** (nel terzo ottetto)\n\nQuindi le sottoreti partono a intervalli di 32:\n0, 32, 64, 96, 128, 160, 192, 224\n\n---\n\n### Passo 5 — Tabella completa\n\n| # | Indirizzo di rete | Primo host | Ultimo host | Broadcast |\n|---|-------------------|------------|-------------|----------|\n| 1 | 172.16.0.0/19 | 172.16.0.1 | 172.16.31.254 | 172.16.31.255 |\n| 2 | 172.16.32.0/19 | 172.16.32.1 | 172.16.63.254 | 172.16.63.255 |\n| 3 | 172.16.64.0/19 | 172.16.64.1 | 172.16.95.254 | 172.16.95.255 |\n| 4 | 172.16.96.0/19 | 172.16.96.1 | 172.16.127.254 | 172.16.127.255 |\n| 5 | 172.16.128.0/19 | 172.16.128.1 | 172.16.159.254 | 172.16.159.255 |\n| 6 | 172.16.160.0/19 | 172.16.160.1 | 172.16.191.254 | 172.16.191.255 |\n| 7 | 172.16.192.0/19 | 172.16.192.1 | 172.16.223.254 | 172.16.223.255 |\n| 8 | 172.16.224.0/19 | 172.16.224.1 | 172.16.255.254 | 172.16.255.255 |\n\n### Come si calcolano primo host, ultimo host e broadcast?\n- **Primo host** = indirizzo di rete + 1\n- **Broadcast** = prossima sottorete - 1\n- **Ultimo host** = broadcast - 1",
    "keywords": "esercizio,FLSM,sottoreti,passo passo,/19"
  },
  {
    "id": 51,
    "section_id": "G",
    "number": 7,
    "title": "Esercizio FLSM — da host richiesti",
    "content": "Un altro tipo di esercizio: ti danno il **numero minimo di host** per sottorete.\n\n### Traccia:\nHai la rete **10.0.0.0/8**. Ogni sottorete deve avere **almeno 500 host**.\nQuante sottoreti puoi creare?\n\n---\n\n### Passo 1 — Quanti bit per gli host?\nFormula: **2ʰ - 2 ≥ 500**\n- 2⁸ - 2 = 254 → troppo pochi\n- 2⁹ - 2 = 510 → **basta!** ✓\n- 2¹⁰ - 2 = 1022 → più del necessario\n\nServono **9 bit** per la parte host.\n\n---\n\n### Passo 2 — Calcola la nuova mask\nSe servono 9 bit per gli host: 32 - 9 = **23 bit** per la rete.\nNuova mask: **/23** (255.255.254.0)\n\nCome si calcola il terzo ottetto?\n`11111110` in binario = **254**\n\n---\n\n### Passo 3 — Quante sottoreti?\nBit presi dalla parte host: 23 - 8 = **15 bit**\nSottoreti: 2¹⁵ = **32.768 sottoreti**!\nOgnuna con 510 host utilizzabili.\n\n---\n\n### Passo 4 — Prime sottoreti\nIl salto è 2 nel terzo ottetto (256 - 254 = 2):\n\n| # | Rete | Range host | Broadcast |\n|---|------|-----------|----------|\n| 1 | 10.0.0.0/23 | 10.0.0.1 — 10.0.1.254 | 10.0.1.255 |\n| 2 | 10.0.2.0/23 | 10.0.2.1 — 10.0.3.254 | 10.0.3.255 |\n| 3 | 10.0.4.0/23 | 10.0.4.1 — 10.0.5.254 | 10.0.5.255 |\n| ... | ... | ... | ... |\n\n### Trucco importante:\nQuando la mask \"cade\" nel terzo ottetto, il broadcast ha l'ottetto prima del salto. Es: /23 → il broadcast di 10.0.0.0 è 10.0.**1**.255 (non 10.0.0.255!).",
    "keywords": "esercizio,FLSM,host,mask,calcolo"
  },
  {
    "id": 52,
    "section_id": "H",
    "number": 1,
    "title": "VLSM",
    "content": "**VLSM** (Variable Length Subnet Mask) permette di usare **subnet mask diverse** per ogni sottorete.\n\n### Vantaggi:\n- Ogni sottorete ha la dimensione **adatta** alle sue esigenze\n- **Efficienza** nell'uso degli indirizzi IP\n- Riduce drasticamente lo spreco\n\n### Differenza con FLSM:\n- FLSM: tutte le sottoreti uguali\n- VLSM: sottoreti di **dimensioni diverse**",
    "keywords": "VLSM,Variable Length,subnet mask diverse,efficienza"
  },
  {
    "id": 53,
    "section_id": "H",
    "number": 2,
    "title": "Efficienza VLSM",
    "content": "VLSM è più **efficiente** perché assegna solo gli indirizzi necessari.\n\n### Confronto:\n| Scenario | FLSM | VLSM |\n|----------|------|------|\n| LAN 100 host | /25 (126 host) | /25 (126 host) |\n| LAN 30 host | /25 (126 host) | /27 (30 host) |\n| LAN 10 host | /25 (126 host) | /28 (14 host) |\n| **Totale usati** | 378 | 170 |\n| **Sprecati** | 238 | 30 |\n\nVLSM risparmia **oltre l'80%** degli indirizzi sprecati!",
    "keywords": "efficienza,confronto,FLSM,spreco,risparmio"
  },
  {
    "id": 54,
    "section_id": "H",
    "number": 3,
    "title": "Metodo VLSM",
    "content": "### Procedimento VLSM:\n\n1. **Elencare** tutte le sottoreti necessarie con il numero di host\n2. **Ordinare** dalla più grande alla più piccola\n3. **Assegnare prima** le sottoreti più grandi\n4. Per ogni sottorete:\n   - Calcolare la mask adatta: 2^h - 2 ≥ host richiesti\n   - Assegnare il prossimo blocco disponibile\n5. **Verificare** che non ci siano sovrapposizioni\n\n### Regola fondamentale:\nSempre **partire dalla sottorete più grande** per evitare frammentazione dello spazio indirizzi.",
    "keywords": "metodo,procedimento,ordinare,assegnare"
  },
  {
    "id": 55,
    "section_id": "H",
    "number": 4,
    "title": "Esempio VLSM",
    "content": "### Esempio pratico:\n\n**Rete**: `192.168.10.0/24`\n\n| LAN | Host necessari | Mask | Host disponibili |\n|-----|---------------|------|------------------|\n| A | 100 | **/25** | 126 |\n| B | 30 | **/27** | 30 |\n| C | 10 | **/28** | 14 |\n\n### Assegnazione (dalla più grande):\n\n| LAN | Rete | Range | Broadcast |\n|-----|------|-------|-----------|\n| A | 192.168.10.0/25 | .1 - .126 | .127 |\n| B | 192.168.10.128/27 | .129 - .158 | .159 |\n| C | 192.168.10.160/28 | .161 - .174 | .175 |\n\nSpazio rimanente: .176 - .255 disponibile per future espansioni!",
    "keywords": "esempio,VLSM,/25,/27,/28,assegnazione"
  },
  {
    "id": 56,
    "section_id": "H",
    "number": 5,
    "title": "Uso del VLSM",
    "content": "### Dove si usa VLSM:\n\n- **Reti aziendali**: dipartimenti con dimensioni diverse\n- **ISP** (Internet Service Provider): assegnazione efficiente ai clienti\n- **Grandi infrastrutture**: data center, campus universitari\n- **Link punto-punto**: tra router bastano /30 (2 host)\n\n### Requisiti:\n- I router devono supportare **routing classless** (CIDR)\n- Protocolli di routing compatibili: **OSPF**, **EIGRP**, **RIPv2**\n- RIPv1 **non** supporta VLSM\n\nVLSM è lo standard nelle reti moderne.",
    "keywords": "aziendali,ISP,infrastrutture,CIDR,OSPF"
  },
  {
    "id": 57,
    "section_id": "H",
    "number": 6,
    "title": "Esercizio VLSM — Azienda con 4 reparti",
    "content": "Esercizio VLSM completo, passo per passo.\n\n### Traccia:\nRete disponibile: **192.168.50.0/24**\nDevi creare sottoreti per:\n- **Reparto A**: 60 host\n- **Reparto B**: 28 host\n- **Reparto C**: 12 host\n- **Link WAN** tra 2 router: 2 host\n\n---\n\n### Passo 1 — Ordina dal più grande al più piccolo\nSempre! Se non lo fai, rischi di \"bucare\" lo spazio indirizzi.\n\n| Sottorete | Host richiesti |\n|-----------|---------------|\n| Reparto A | 60 |\n| Reparto B | 28 |\n| Reparto C | 12 |\n| Link WAN | 2 |\n\n---\n\n### Passo 2 — Calcola la mask per ogni sottorete\nPer ogni sottorete, trova il più piccolo blocco che contiene abbastanza host:\n\n**Reparto A (60 host):**\n2⁶ - 2 = 62 ≥ 60 ✓ → **/26** (255.255.255.192)\n\n**Reparto B (28 host):**\n2⁵ - 2 = 30 ≥ 28 ✓ → **/27** (255.255.255.224)\n\n**Reparto C (12 host):**\n2⁴ - 2 = 14 ≥ 12 ✓ → **/28** (255.255.255.240)\n\n**Link WAN (2 host):**\n2² - 2 = 2 ≥ 2 ✓ → **/30** (255.255.255.252)\n\n---\n\n### Passo 3 — Assegna gli indirizzi in ordine\nParti sempre dal primo indirizzo disponibile:\n\n**Reparto A — /26 (blocco di 64 indirizzi):**\n- Rete: **192.168.50.0/26**\n- Primo host: 192.168.50.1\n- Ultimo host: 192.168.50.62\n- Broadcast: 192.168.50.63\n- Gateway: 192.168.50.1\n\nProssimo indirizzo disponibile: **192.168.50.64**\n\n**Reparto B — /27 (blocco di 32 indirizzi):**\n- Rete: **192.168.50.64/27**\n- Primo host: 192.168.50.65\n- Ultimo host: 192.168.50.94\n- Broadcast: 192.168.50.95\n- Gateway: 192.168.50.65\n\nProssimo disponibile: **192.168.50.96**\n\n**Reparto C — /28 (blocco di 16 indirizzi):**\n- Rete: **192.168.50.96/28**\n- Primo host: 192.168.50.97\n- Ultimo host: 192.168.50.110\n- Broadcast: 192.168.50.111\n- Gateway: 192.168.50.97\n\nProssimo disponibile: **192.168.50.112**\n\n**Link WAN — /30 (blocco di 4 indirizzi):**\n- Rete: **192.168.50.112/30**\n- Router 1: 192.168.50.113\n- Router 2: 192.168.50.114\n- Broadcast: 192.168.50.115\n\n---\n\n### Passo 4 — Tabella riassuntiva\n\n| Sottorete | Rete | Mask | Range host | Broadcast | Host |\n|-----------|------|------|-----------|-----------|------|\n| Reparto A | 192.168.50.0/26 | 255.255.255.192 | .1 — .62 | .63 | 62 |\n| Reparto B | 192.168.50.64/27 | 255.255.255.224 | .65 — .94 | .95 | 30 |\n| Reparto C | 192.168.50.96/28 | 255.255.255.240 | .97 — .110 | .111 | 14 |\n| Link WAN | 192.168.50.112/30 | 255.255.255.252 | .113 — .114 | .115 | 2 |\n\n**Spazio usato**: 116 indirizzi su 256 → rimangono .116 — .255 per espansioni future!",
    "keywords": "esercizio,VLSM,passo passo,azienda,/26,/27,/28,/30"
  },
  {
    "id": 58,
    "section_id": "H",
    "number": 7,
    "title": "Esercizio VLSM — Scuola con 3 piani",
    "content": "Un esercizio tipo maturità con VLSM.\n\n### Traccia:\nRete: **10.10.0.0/16**. Progetta le sottoreti per una scuola:\n- **Piano Terra** (Segreteria): 200 host\n- **Primo Piano** (Aule informatica): 100 host\n- **Secondo Piano** (Laboratori): 50 host\n- **Wi-Fi Studenti**: 400 host\n- **3 link WAN** tra i router dei piani: 2 host ciascuno\n\n---\n\n### Passo 1 — Ordina e calcola le mask\n\n| Sottorete | Host | Mask | Dimensione blocco |\n|-----------|------|------|------------------|\n| Wi-Fi Studenti | 400 | **/23** (2⁹-2=510) | 512 indirizzi |\n| Piano Terra | 200 | **/24** (2⁸-2=254) | 256 indirizzi |\n| Primo Piano | 100 | **/25** (2⁷-2=126) | 128 indirizzi |\n| Secondo Piano | 50 | **/26** (2⁶-2=62) | 64 indirizzi |\n| WAN 1 | 2 | **/30** (2²-2=2) | 4 indirizzi |\n| WAN 2 | 2 | **/30** | 4 indirizzi |\n| WAN 3 | 2 | **/30** | 4 indirizzi |\n\n---\n\n### Passo 2 — Assegna in ordine\n\n**Wi-Fi Studenti — /23 (512 indirizzi):**\n- Rete: 10.10.0.0/23\n- Host: 10.10.0.1 — 10.10.1.254\n- Broadcast: 10.10.1.255\n\n> Attenzione: con /23 il blocco copre **2 ottetti** (10.10.0.x e 10.10.1.x)!\n\n**Piano Terra — /24 (256 indirizzi):**\n- Rete: 10.10.2.0/24\n- Host: 10.10.2.1 — 10.10.2.254\n- Broadcast: 10.10.2.255\n\n**Primo Piano — /25 (128 indirizzi):**\n- Rete: 10.10.3.0/25\n- Host: 10.10.3.1 — 10.10.3.126\n- Broadcast: 10.10.3.127\n\n**Secondo Piano — /26 (64 indirizzi):**\n- Rete: 10.10.3.128/26\n- Host: 10.10.3.129 — 10.10.3.190\n- Broadcast: 10.10.3.191\n\n**WAN 1 — /30:**\n- Rete: 10.10.3.192/30\n- Host: .193, .194\n\n**WAN 2 — /30:**\n- Rete: 10.10.3.196/30\n- Host: .197, .198\n\n**WAN 3 — /30:**\n- Rete: 10.10.3.200/30\n- Host: .201, .202\n\n---\n\n### Tabella finale\n\n| Sottorete | Rete | Mask | Host disponibili |\n|-----------|------|------|------------------|\n| Wi-Fi | 10.10.0.0/23 | 255.255.254.0 | 510 |\n| Piano Terra | 10.10.2.0/24 | 255.255.255.0 | 254 |\n| 1° Piano | 10.10.3.0/25 | 255.255.255.128 | 126 |\n| 2° Piano | 10.10.3.128/26 | 255.255.255.192 | 62 |\n| WAN 1 | 10.10.3.192/30 | 255.255.255.252 | 2 |\n| WAN 2 | 10.10.3.196/30 | 255.255.255.252 | 2 |\n| WAN 3 | 10.10.3.200/30 | 255.255.255.252 | 2 |\n\n### Consigli per l'esame:\n- Scrivi **sempre** la tabella con rete, primo host, ultimo host e broadcast\n- Controlla che le sottoreti **non si sovrappongano**\n- Il link WAN tra router usa sempre **/30** (solo 2 host)\n- Ricorda: la rete Wi-Fi /23 occupa **due** valori del terzo ottetto",
    "keywords": "esercizio,VLSM,scuola,maturità,passo passo"
  },
  {
    "id": 59,
    "section_id": "I",
    "number": 1,
    "title": "Cos'è il routing",
    "content": "Il **routing** (instradamento) è il processo con cui un router determina il **percorso migliore** per inoltrare un pacchetto verso la destinazione.\n\n### Processo:\n1. Il router riceve un pacchetto\n2. Legge l'**IP di destinazione**\n3. Consulta la **tabella di routing**\n4. Determina l'**interfaccia di uscita** e il **next hop**\n5. Inoltra il pacchetto\n\nIl routing avviene al **livello 3** (Rete) del modello OSI.",
    "keywords": "routing,instradamento,percorso,router,livello 3"
  },
  {
    "id": 60,
    "section_id": "I",
    "number": 2,
    "title": "Tabella di routing",
    "content": "La **tabella di routing** è il database che il router consulta per prendere decisioni di instradamento.\n\n### Contenuto di ogni entry:\n- **Rete di destinazione**: la rete da raggiungere\n- **Subnet mask**: dimensione della rete\n- **Next hop**: IP del prossimo router\n- **Interfaccia di uscita**: porta da cui inviare il pacchetto\n- **Metrica**: costo del percorso\n- **Tipo**: come è stata appresa la rotta (statica, dinamica, direttamente connessa)\n\nIl router sceglie sempre la rotta **più specifica** (longest prefix match).",
    "keywords": "tabella di routing,next hop,interfaccia,metrica,entry"
  },
  {
    "id": 61,
    "section_id": "I",
    "number": 3,
    "title": "Routing diretto vs indiretto",
    "content": "### Routing diretto\n- Mittente e destinatario sono nella **stessa rete**\n- Il pacchetto viene consegnato **direttamente**\n- Non serve passare per un router\n- Si usa ARP per trovare il MAC del destinatario\n\n### Routing indiretto\n- Mittente e destinatario sono in **reti diverse**\n- Il pacchetto deve attraversare **uno o più router**\n- L'host invia al **default gateway**\n- Ogni router inoltra al next hop fino alla destinazione\n\nIl confronto IP + subnet mask determina se è diretto o indiretto.",
    "keywords": "diretto,indiretto,stessa rete,reti diverse,ARP"
  },
  {
    "id": 62,
    "section_id": "I",
    "number": 4,
    "title": "Longest prefix match",
    "content": "Il **longest prefix match** è la regola usata dal router per scegliere la rotta quando più entry corrispondono.\n\n### Principio:\n- Si sceglie la rotta con la **subnet mask più lunga** (più specifica)\n- Più bit nella mask = corrispondenza più precisa\n\n### Esempio:\nDestinazione: `10.1.1.100`\n\n| Rotta | Match? |\n|-------|--------|\n| 10.0.0.0/8 | Sì (generico) |\n| 10.1.0.0/16 | Sì (più specifico) |\n| 10.1.1.0/24 | Sì (**più specifico** ✓) |\n\nVince la rotta `/24` perché è la più specifica.",
    "keywords": "longest prefix match,rotta più specifica,subnet mask"
  },
  {
    "id": 63,
    "section_id": "I",
    "number": 5,
    "title": "Router di default",
    "content": "Il **router di default** (default route) è il percorso utilizzato quando **non esiste una rotta specifica** per la destinazione.\n\n### Caratteristiche:\n- Indicato come `0.0.0.0/0` nella tabella di routing\n- Corrisponde a **qualsiasi** destinazione\n- Ha la mask più corta possibile (/0)\n- Viene scelta **solo** se nessun'altra rotta è più specifica\n- Tipicamente punta verso il router di **uscita verso Internet**\n\n### Analogia:\nÈ come il cartello \"tutte le direzioni\" in un incrocio.",
    "keywords": "default route,0.0.0.0,rotta predefinita,Internet"
  },
  {
    "id": 64,
    "section_id": "J",
    "number": 1,
    "title": "Routing statico",
    "content": "Il **routing statico** prevede che i percorsi di rete vengano **configurati manualmente** dall'amministratore.\n\n### Caratteristiche:\n- Le rotte vengono inserite **a mano** nella tabella di routing\n- **Non si aggiornano automaticamente** in caso di cambiamenti\n- Il router segue sempre le rotte configurate\n- Se un link cade, la rotta statica rimane (e il traffico viene perso)\n\n### Comando tipico (Cisco):\n```\nip route [rete] [mask] [next-hop]\nip route 192.168.2.0 255.255.255.0 10.0.0.2\n```",
    "keywords": "routing statico,manuale,configurazione,rotte"
  },
  {
    "id": 65,
    "section_id": "J",
    "number": 2,
    "title": "Vantaggi e svantaggi routing statico",
    "content": "### Vantaggi:\n- **Semplice** da configurare in reti piccole\n- **Sicuro**: l'amministratore ha controllo totale\n- **Nessun overhead**: non genera traffico di routing\n- **Prevedibile**: il percorso è sempre noto\n- Basso consumo di CPU e memoria\n\n### Svantaggi:\n- **Non scalabile**: impraticabile con molte reti\n- **Gestione complessa**: ogni modifica va fatta manualmente su ogni router\n- **Nessun failover automatico**: se un link cade, serve intervento manuale\n- Non adatto a reti dinamiche e in evoluzione\n\n### Uso ideale:\nReti piccole, link punto-punto, default route.",
    "keywords": "vantaggi,svantaggi,scalabilità,sicurezza,overhead"
  },
  {
    "id": 66,
    "section_id": "K",
    "number": 1,
    "title": "Rete come grafo",
    "content": "Una rete può essere rappresentata come un **grafo matematico**.\n\n### Corrispondenze:\n- **Router** → **nodi** (vertici) del grafo\n- **Link** (collegamenti) → **archi** del grafo\n- **Costo del link** → **peso** dell'arco\n\n### Vantaggi della rappresentazione:\n- Permette di applicare **algoritmi** matematici\n- Calcolo del **percorso più efficiente**\n- Analisi della **topologia** di rete\n- Base per i protocolli di routing dinamico",
    "keywords": "grafo,nodi,archi,router,link"
  },
  {
    "id": 67,
    "section_id": "K",
    "number": 2,
    "title": "Elementi del grafo",
    "content": "### Terminologia dei grafi applicata alle reti:\n\n- **Nodo** (vertice): punto di interconnessione (router, switch)\n- **Arco** (edge): collegamento tra due nodi\n- **Cammino** (path): sequenza di nodi e archi che connette due punti\n- **Costo** (peso): valore numerico associato a un arco (banda, latenza, hop)\n\n### Tipi di grafo:\n- **Non orientato**: link bidirezionali (caso comune)\n- **Orientato**: link con direzione specifica\n- **Pesato**: archi con costi diversi\n- **Connesso**: ogni nodo è raggiungibile da ogni altro",
    "keywords": "nodo,arco,cammino,costo,peso"
  },
  {
    "id": 68,
    "section_id": "K",
    "number": 3,
    "title": "Cammino minimo",
    "content": "Il **cammino minimo** (shortest path) è il percorso tra due nodi con il **costo totale minore**.\n\n### Definizione:\n- Somma dei pesi degli archi attraversati\n- Non necessariamente il percorso con meno hop\n- Dipende dalla metrica usata (banda, latenza, costo)\n\n### Algoritmi:\n- **Dijkstra**: trova il cammino minimo da un nodo a tutti gli altri (usato da OSPF)\n- **Bellman-Ford**: approccio distribuito (usato da RIP)\n\n### Importanza:\nI protocolli di routing usano questi algoritmi per determinare il percorso migliore.",
    "keywords": "cammino minimo,shortest path,Dijkstra,Bellman-Ford,costo"
  },
  {
    "id": 69,
    "section_id": "K",
    "number": 4,
    "title": "Algoritmo di Dijkstra",
    "content": "L'algoritmo di **Dijkstra** trova il cammino minimo da un nodo sorgente a **tutti gli altri nodi** del grafo.\n\n### Requisito:\n- I pesi degli archi devono essere **non negativi**\n\n### Come funziona (passo-passo):\n1. Assegna **distanza 0** al nodo sorgente, **infinito** a tutti gli altri\n2. Inserisci tutti i nodi nell'insieme dei **non visitati**\n3. Seleziona il nodo non visitato con **distanza minima** (nodo corrente)\n4. Per ogni vicino del nodo corrente:\n   - Calcola: `nuova_distanza = distanza_corrente + peso_arco`\n   - Se `nuova_distanza < distanza_attuale_vicino` → aggiorna\n5. Segna il nodo corrente come **visitato**\n6. Ripeti dal passo 3 finché tutti i nodi sono visitati\n\n### Esempio pratico:\n```\nRete:  A---2---B---3---D\n       |       |       |\n       4       1       2\n       |       |       |\n       C---5---E---1---F\n\nSorgente: A\n\nPasso 1: A=0, B=∞, C=∞, D=∞, E=∞, F=∞\nPasso 2: Visito A → B=2, C=4\nPasso 3: Visito B (min=2) → D=2+3=5, E=2+1=3\nPasso 4: Visito E (min=3) → C=min(4,3+5)=4, F=3+1=4\nPasso 5: Visito C (min=4)\nPasso 6: Visito F (min=4) → D=min(5,4+2)=5\nPasso 7: Visito D (min=5)\n\nRisultato: A→B=2, A→C=4, A→D=5, A→E=3, A→F=4\n```\n\n### Complessità:\n- Con lista semplice: **O(V²)** dove V = numero di nodi\n- Con min-heap: **O((V + E) log V)**\n\n### Uso nel networking:\n- **OSPF** usa Dijkstra per calcolare il percorso più breve\n- Ogni router OSPF esegue Dijkstra sul database topologico completo\n- Il risultato è l'**albero SPF** (Shortest Path First)",
    "keywords": "Dijkstra,cammino minimo,SPF,OSPF,grafo pesato,algoritmo"
  },
  {
    "id": 70,
    "section_id": "K",
    "number": 5,
    "title": "Algoritmo di Bellman-Ford",
    "content": "L'algoritmo di **Bellman-Ford** calcola i cammini minimi da un nodo sorgente a tutti gli altri, anche con **pesi negativi**.\n\n### Come funziona (passo-passo):\n1. Assegna **distanza 0** al nodo sorgente, **infinito** a tutti gli altri\n2. Ripeti **(V-1) volte** (V = numero di nodi):\n   - Per **ogni arco (u, v)** con peso w:\n     - Se `distanza[u] + w < distanza[v]` → aggiorna `distanza[v]`\n3. (Opzionale) Fai un'altra iterazione per rilevare **cicli negativi**\n\n### Esempio pratico:\n```\nRete:  A---3---B---2---C\n       |               |\n       7               1\n       |               |\n       D-------4-------E\n\nSorgente: A\n\nIterazione 1:\n  Arco A→B: A=0, B=min(∞, 0+3)=3\n  Arco A→D: A=0, D=min(∞, 0+7)=7\n  Arco B→C: B=3, C=min(∞, 3+2)=5\n  Arco C→E: C=5, E=min(∞, 5+1)=6\n  Arco D→E: D=7, E=min(6, 7+4)=6 (non cambia)\n\nIterazione 2:\n  Arco D→E: nessun miglioramento → CONVERGENZA\n\nRisultato: A→B=3, A→C=5, A→D=7, A→E=6\n```\n\n### Versione distribuita (Distance Vector):\nNel routing, ogni router:\n1. Conosce solo la distanza verso i suoi **vicini diretti**\n2. Riceve le **tabelle di routing** dai vicini\n3. Aggiorna le proprie distanze: `D(x,y) = min[c(x,v) + D(v,y)]`\n4. Se cambia qualcosa, **informa i vicini**\n5. Ripete finché le tabelle si **stabilizzano** (convergenza)\n\n### Problema del count-to-infinity:\n```\nA---1---B---1---C\n\nSe il link B-C cade:\n- B pensa: \"C irraggiungibile, ma A dice distanza 2 verso C\"\n- B aggiorna: D(B,C) = 1 + 2 = 3\n- A aggiorna: D(A,C) = 1 + 3 = 4\n- Continuano ad incrementare... all'infinito!\n```\n\n### Soluzioni al count-to-infinity:\n- **Split Horizon**: non inviare una rotta al vicino da cui l'hai appresa\n- **Poison Reverse**: annuncia distanza infinita al vicino da cui l'hai appresa\n- **Triggered Update**: invia aggiornamenti immediati quando cambia qualcosa\n- **Hold-down Timer**: ignora aggiornamenti per un certo periodo dopo un cambio\n\n### Dijkstra vs Bellman-Ford:\n\n| | Dijkstra | Bellman-Ford |\n|--|----------|-------------|\n| Tipo | Centralizzato | Distribuito |\n| Pesi negativi | No | Sì |\n| Complessità | O(V²) | O(V × E) |\n| Convergenza | Veloce | Lenta |\n| Usato da | **OSPF** | **RIP** |\n| Ogni router sa | Tutta la topologia | Solo i vicini |\n\n### Uso nel networking:\n- **RIP** è basato su Bellman-Ford distribuito\n- Ogni router scambia tabelle con i vicini ogni 30 secondi\n- Metrica: **hop count** (ogni arco ha peso 1)",
    "keywords": "Bellman-Ford,distance vector,RIP,count-to-infinity,split horizon,convergenza"
  },
  {
    "id": 71,
    "section_id": "L",
    "number": 1,
    "title": "Routing dinamico",
    "content": "Il **routing dinamico** permette ai router di **scambiarsi informazioni** e aggiornare automaticamente le tabelle di routing.\n\n### Vantaggi rispetto allo statico:\n- **Adattamento automatico** a cambiamenti di topologia\n- **Scalabile**: funziona con reti grandi e complesse\n- **Failover**: ricalcola percorsi se un link cade\n- **Meno errori**: riduce configurazione manuale\n\n### Categorie:\n- **Distance Vector**: RIP, EIGRP\n- **Link State**: OSPF, IS-IS\n- **Path Vector**: BGP (inter-AS)",
    "keywords": "routing dinamico,automatico,scalabile,failover"
  },
  {
    "id": 72,
    "section_id": "L",
    "number": 2,
    "title": "RIP",
    "content": "**RIP** (Routing Information Protocol) è un protocollo di tipo **distance vector**.\n\n### Caratteristiche:\n- Metrica: **hop count** (numero di router attraversati)\n- Massimo **15 hop** (16 = irraggiungibile)\n- Aggiornamenti ogni **30 secondi** (broadcast/multicast)\n- Convergenza **lenta**\n- Versioni: RIPv1 (classful), RIPv2 (classless, supporta VLSM)\n\n### Algoritmo:\n- Basato su **Bellman-Ford**\n- Ogni router invia la sua tabella ai vicini\n- I vicini aggiornano le proprie tabelle\n\n### Uso: reti **piccole e semplici**",
    "keywords": "RIP,distance vector,hop count,15 hop,Bellman-Ford"
  },
  {
    "id": 73,
    "section_id": "L",
    "number": 3,
    "title": "OSPF",
    "content": "**OSPF** (Open Shortest Path First) è un protocollo di tipo **link state**.\n\n### Caratteristiche:\n- Usa l'algoritmo di **Dijkstra** (SPF)\n- Metrica: **costo** basato sulla banda del link\n- Convergenza **veloce**\n- Struttura **gerarchica** con aree (Area 0 = backbone)\n- Ogni router ha una **mappa completa** della topologia\n\n### Funzionamento:\n1. Ogni router invia **LSA** (Link State Advertisement) ai vicini\n2. Tutti costruiscono un **database topologico** identico\n3. Ogni router calcola l'albero dei cammini minimi\n\n### Uso: reti **medie e grandi**",
    "keywords": "OSPF,link state,Dijkstra,costo,gerarchico,LSA"
  },
  {
    "id": 74,
    "section_id": "L",
    "number": 4,
    "title": "RIP vs OSPF",
    "content": "### Confronto:\n\n| Caratteristica | RIP | OSPF |\n|---------------|-----|------|\n| Tipo | Distance Vector | Link State |\n| Algoritmo | Bellman-Ford | Dijkstra |\n| Metrica | Hop count | Costo (banda) |\n| Limite | 15 hop | Nessuno |\n| Convergenza | Lenta | Veloce |\n| Complessità | Semplice | Complesso |\n| Scalabilità | Bassa | Alta |\n| Uso risorse | Basso | Alto (CPU/RAM) |\n| Ideale per | Reti piccole | Reti grandi |\n\n### Regola pratica:\n- Poche reti, pochi router → **RIP**\n- Rete aziendale/enterprise → **OSPF**",
    "keywords": "RIP,OSPF,confronto,distance vector,link state"
  },
  {
    "id": 75,
    "section_id": "M",
    "number": 1,
    "title": "Livello trasporto",
    "content": "Il **livello trasporto** (livello 4 OSI / livello 3 TCP/IP) gestisce la comunicazione **end-to-end** tra applicazioni.\n\n### Funzioni:\n- **Multiplexing**: più applicazioni usano la rete contemporaneamente (tramite porte)\n- **Segmentazione**: divide i dati in segmenti\n- **Riassemblaggio**: ricostruisce i dati in ordine\n- Due protocolli principali: **TCP** e **UDP**",
    "keywords": "livello trasporto,end-to-end,multiplexing,segmentazione"
  },
  {
    "id": 76,
    "section_id": "M",
    "number": 2,
    "title": "TCP vs UDP overview",
    "content": "### Due approcci diversi:\n\n**TCP** (Transmission Control Protocol):\n- **Affidabile**: garantisce consegna e ordine\n- Connection-oriented: richiede connessione prima dell'invio\n- Più lento ma sicuro\n\n**UDP** (User Datagram Protocol):\n- **Non affidabile**: nessuna garanzia di consegna\n- Connectionless: invia senza stabilire connessione\n- Più veloce ma senza garanzie\n\nLa scelta dipende dall'applicazione.",
    "keywords": "TCP,UDP,affidabile,non affidabile"
  },
  {
    "id": 77,
    "section_id": "M",
    "number": 3,
    "title": "TCP in dettaglio",
    "content": "**TCP** fornisce un trasporto **affidabile** e orientato alla connessione.\n\n### Caratteristiche:\n- **Connection-oriented**: stabilisce connessione prima di trasmettere\n- **Affidabilità**: conferma ricezione di ogni segmento\n- **Ordinamento**: riordina pacchetti arrivati fuori sequenza\n- **Controllo di flusso**: adatta la velocità al ricevitore\n- **Controllo di congestione**: riduce velocità se la rete è congestionata\n- **Full-duplex**: comunicazione bidirezionale simultanea\n\n### Uso:\n- Web (HTTP/HTTPS), email (SMTP), file transfer (FTP), SSH",
    "keywords": "TCP,affidabile,connessione,flusso,congestione"
  },
  {
    "id": 78,
    "section_id": "M",
    "number": 4,
    "title": "Three-way handshake",
    "content": "Il **three-way handshake** è il processo con cui TCP stabilisce una connessione.\n\n### I tre passi:\n\n```\nClient                    Server\n  |                         |\n  |──── SYN ───────────────>|  1. \"Voglio connettermi\"\n  |                         |\n  |<──── SYN-ACK ──────────|  2. \"Ok, accetto\"\n  |                         |\n  |──── ACK ───────────────>|  3. \"Confermo, iniziamo\"\n  |                         |\n  |<════ CONNESSIONE ══════>|\n```\n\n### Dettagli:\n- **SYN**: client invia numero di sequenza iniziale\n- **SYN-ACK**: server conferma e invia il suo numero\n- **ACK**: client conferma, connessione stabilita\n\nLa chiusura usa un processo simile con **FIN**.",
    "keywords": "three-way handshake,SYN,SYN-ACK,ACK,connessione"
  },
  {
    "id": 79,
    "section_id": "M",
    "number": 5,
    "title": "Sequence e ACK number",
    "content": "I numeri di **sequenza** e **acknowledgment** garantiscono ordine e affidabilità.\n\n### Sequence Number:\n- Identifica la **posizione** di ogni byte nel flusso dati\n- Permette al ricevitore di **riordinare** i segmenti\n\n### Acknowledgment Number:\n- Indica il **prossimo byte atteso** dal ricevitore\n- Conferma tutti i byte precedenti (acknowledgment cumulativo)\n\n### Rilevamento perdite:\n- Se un ACK non arriva entro il **timeout** → ritrasmissione\n- **ACK duplicati**: 3 ACK uguali → fast retransmit\n\nQuesto meccanismo rende TCP resistente a perdite e disordine.",
    "keywords": "sequence number,acknowledgment,ritrasmissione,timeout"
  },
  {
    "id": 80,
    "section_id": "M",
    "number": 6,
    "title": "UDP in dettaglio",
    "content": "**UDP** (User Datagram Protocol) è un protocollo di trasporto **semplice e veloce**.\n\n### Caratteristiche:\n- **Connectionless**: nessuna connessione preliminare\n- **Nessuna garanzia** di consegna, ordine o integrità\n- **Header minimo**: solo 8 byte (vs 20+ di TCP)\n- **Nessun controllo** di flusso o congestione\n- Ogni messaggio è un **datagram** indipendente\n\n### Vantaggi:\n- **Veloce**: nessun overhead di connessione\n- **Leggero**: meno elaborazione\n- **Real-time**: adatto a dati sensibili al ritardo\n\n### Uso:\n- DNS, streaming, VoIP, gaming online",
    "keywords": "UDP,connectionless,datagram,veloce,leggero"
  },
  {
    "id": 81,
    "section_id": "M",
    "number": 7,
    "title": "TCP vs UDP confronto",
    "content": "### Tabella comparativa:\n\n| Caratteristica | TCP | UDP |\n|---------------|-----|-----|\n| Connessione | Sì (3-way handshake) | No |\n| Affidabilità | Sì (ACK, ritrasmissione) | No |\n| Ordinamento | Sì (sequence number) | No |\n| Controllo flusso | Sì | No |\n| Velocità | Più lento | Più veloce |\n| Header | 20+ byte | 8 byte |\n| Uso tipico | Web, email, file | Streaming, DNS, VoIP |\n\n### Regola:\n- Servono **dati corretti** → TCP\n- Serve **velocità** → UDP",
    "keywords": "TCP,UDP,confronto,affidabile,veloce"
  },
  {
    "id": 82,
    "section_id": "M",
    "number": 8,
    "title": "Porte",
    "content": "Le **porte** identificano le applicazioni specifiche su un host.\n\n### Porte note (well-known):\n| Porta | Protocollo | Servizio |\n|-------|-----------|----------|\n| 20-21 | TCP | FTP |\n| 22 | TCP | SSH |\n| 25 | TCP | SMTP (email) |\n| 53 | TCP/UDP | DNS |\n| 80 | TCP | **HTTP** |\n| 443 | TCP | **HTTPS** |\n\n### Range porte:\n- **0-1023**: Well-known (servizi standard)\n- **1024-49151**: Registered (applicazioni)\n- **49152-65535**: Dynamic/Private (temporanee)",
    "keywords": "porte,HTTP,HTTPS,80,443,well-known"
  },
  {
    "id": 83,
    "section_id": "M",
    "number": 9,
    "title": "Socket",
    "content": "Un **socket** è la combinazione di **indirizzo IP + numero di porta**.\n\n### Formato:\n`IP:porta` → es. `192.168.1.10:443`\n\n### Funzione:\n- Identifica univocamente un **endpoint** di comunicazione\n- Permette a più applicazioni di comunicare contemporaneamente\n\n### Connessione TCP:\nDefinita da una **coppia di socket**:\n- Socket sorgente: `192.168.1.10:52431`\n- Socket destinazione: `93.184.216.34:443`\n\nQuesta coppia identifica univocamente la connessione nella rete.",
    "keywords": "socket,IP,porta,endpoint,connessione"
  },
  {
    "id": 84,
    "section_id": "N",
    "number": 1,
    "title": "Scelta del protocollo",
    "content": "### Quando usare TCP o UDP:\n\n**TCP** (dati corretti > velocità):\n- **Web** (HTTP/HTTPS): pagine devono arrivare complete\n- **File transfer** (FTP): nessun byte può mancare\n- **Email** (SMTP/IMAP): messaggi integri\n- **Database**: transazioni affidabili\n\n**UDP** (velocità > completezza):\n- **Streaming video/audio**: perdere un frame è ok\n- **Videoconferenza**: ritardo è peggio di perdita\n- **Gaming online**: stato aggiornato in tempo reale\n- **DNS**: query/risposta veloci\n- **VoIP**: conversazione fluida",
    "keywords": "TCP,UDP,scelta,web,streaming"
  },
  {
    "id": 85,
    "section_id": "N",
    "number": 2,
    "title": "Perdita vs ritardo",
    "content": "### Perché lo streaming usa UDP:\n\nIn applicazioni real-time come le **videochiamate**:\n\n- **Perdere qualche dato** → piccolo glitch visivo/audio, quasi impercettibile\n- **Ritardare i dati** (per ritrasmettere) → conversazione a singhiozzo, inutilizzabile\n\n### Principio:\n> È meglio **perdere** qualche dato che **ritardare** tutto il flusso\n\n### Perché:\n- TCP ritrasmette i pacchetti persi → introduce **latenza**\n- Il dato ritrasmesso arriva **troppo tardi** per essere utile\n- UDP ignora la perdita e va avanti → esperienza più **fluida**",
    "keywords": "perdita,ritardo,real-time,latenza,streaming"
  },
  {
    "id": 86,
    "section_id": "N",
    "number": 3,
    "title": "QUIC introduzione",
    "content": "**QUIC** (Quick UDP Internet Connections) è un protocollo sviluppato da **Google**.\n\n### Caratteristiche principali:\n- Basato su **UDP** (non TCP)\n- **Connessione veloce**: 0-RTT o 1-RTT (vs 3-RTT di TCP+TLS)\n- **Sicurezza integrata**: TLS 1.3 incluso nel protocollo\n- **Multiplexing** senza head-of-line blocking\n- Usato da **HTTP/3**\n\n### Motivazione:\n- TCP è lento nell'handshake (specialmente con TLS)\n- TCP soffre di head-of-line blocking\n- QUIC combina il meglio di TCP (affidabilità) e UDP (velocità)",
    "keywords": "QUIC,Google,UDP,veloce,sicurezza,HTTP/3"
  },
  {
    "id": 87,
    "section_id": "N",
    "number": 4,
    "title": "QUIC vantaggi",
    "content": "### Vantaggi di QUIC:\n\n1. **Connessione rapida**:\n   - TCP+TLS: 3 RTT prima di inviare dati\n   - QUIC: 1 RTT (o 0 se già connesso prima)\n\n2. **Sicurezza integrata**:\n   - Crittografia TLS 1.3 di default\n   - Non è possibile comunicare in chiaro\n\n3. **Migliore su reti instabili**:\n   - Gestisce meglio cambio di rete (es. Wi-Fi → 4G)\n   - Connection migration: la connessione sopravvive al cambio IP\n\n4. **Caricamento web rapido**:\n   - Riduce latenza percepita\n   - Già usato da Google, YouTube, Gmail\n   - Base di **HTTP/3**",
    "keywords": "QUIC,vantaggi,0-RTT,TLS,connection migration,HTTP/3"
  },
  {
    "id": 88,
    "section_id": "O",
    "number": 1,
    "title": "Cos'è un Firewall",
    "content": "Il **firewall** è un sistema di sicurezza che **controlla e filtra il traffico** di rete in entrata e in uscita in base a regole predefinite.\n\n### Funzioni principali:\n- **Protezione** della rete interna da accessi non autorizzati\n- **Filtraggio** dei pacchetti secondo regole (ACL)\n- **Monitoraggio** del traffico di rete\n- **Blocco** di connessioni sospette o pericolose\n\n### Posizionamento:\n- Tra la rete **interna** (trusted) e **Internet** (untrusted)\n- Può essere **hardware** (appliance dedicata) o **software** (installato su un host)\n\n### Principio base:\n> **Default deny**: tutto ciò che non è esplicitamente permesso viene bloccato.",
    "keywords": "firewall,filtraggio,sicurezza,protezione,ACL"
  },
  {
    "id": 89,
    "section_id": "O",
    "number": 2,
    "title": "Tipi di Firewall",
    "content": "Esistono diversi tipi di firewall in base al livello OSI a cui operano:\n\n### Packet Filter (Livello 3-4)\n- Filtra pacchetti in base a **IP sorgente/destinazione**, **porta**, **protocollo**\n- Veloce ma limitato: non analizza il contenuto\n- Esempio: ACL su un router Cisco\n\n### Stateful Inspection (Livello 3-4)\n- Tiene traccia dello **stato delle connessioni**\n- Riconosce pacchetti appartenenti a connessioni già stabilite\n- Più sicuro del packet filter\n\n### Application Gateway / Proxy (Livello 7)\n- Analizza il **contenuto** dei pacchetti\n- Può filtrare URL, parole chiave, tipi di file\n- Più lento ma molto più preciso\n\n### Next-Generation Firewall (NGFW)\n- Combina tutte le funzionalità precedenti\n- Aggiunge **IPS**, analisi SSL, controllo applicazioni",
    "keywords": "packet filter,stateful,proxy,NGFW,livelli OSI"
  },
  {
    "id": 90,
    "section_id": "O",
    "number": 3,
    "title": "Stateless vs Stateful",
    "content": "### Firewall Stateless (Packet Filter)\n- Analizza **ogni pacchetto singolarmente**\n- Non ricorda le connessioni precedenti\n- Regole basate solo su: IP, porta, protocollo\n- **Veloce** ma facilmente aggirabile\n- Non distingue una risposta legittima da un attacco\n\n### Firewall Stateful\n- Mantiene una **tabella delle connessioni attive** (state table)\n- Traccia lo stato: NEW, ESTABLISHED, RELATED\n- Permette automaticamente i pacchetti di **risposta** a connessioni già autorizzate\n- **Più sicuro**: riconosce il contesto\n\n### Esempio:\n```\n1. PC invia richiesta HTTP → firewall registra connessione\n2. Server risponde → firewall riconosce la risposta → la lascia passare\n3. Pacchetto non richiesto dall'esterno → BLOCCATO\n```",
    "keywords": "stateless,stateful,state table,connessioni,pacchetto"
  },
  {
    "id": 91,
    "section_id": "O",
    "number": 4,
    "title": "ACL — Access Control List",
    "content": "Le **ACL** sono liste di regole che il firewall usa per decidere se **permettere o bloccare** il traffico.\n\n### Struttura di una regola ACL:\n```\n[AZIONE] [PROTOCOLLO] [IP SORGENTE] [IP DESTINAZIONE] [PORTA]\n```\n\n### Esempio:\n```\npermit tcp 192.168.1.0/24 any eq 443     → permetti HTTPS dalla LAN\npermit tcp 192.168.1.0/24 any eq 80      → permetti HTTP dalla LAN\ndeny   tcp any 192.168.1.0/24 eq 22       → blocca SSH dall'esterno\npermit udp any any eq 53                   → permetti DNS\ndeny   ip any any                          → blocca tutto il resto\n```\n\n### Regole importanti:\n- Le regole sono valutate **dall'alto verso il basso**\n- La **prima regola** che corrisponde viene applicata\n- L'ultima regola è sempre un **deny all** implicito\n- L'ordine delle regole è **fondamentale**",
    "keywords": "ACL,regole,permit,deny,filtraggio"
  },
  {
    "id": 92,
    "section_id": "O",
    "number": 5,
    "title": "DMZ — Zona Demilitarizzata",
    "content": "La **DMZ** è una sottorete isolata che ospita servizi accessibili da Internet, proteggendo la rete interna.\n\n### Architettura:\n```\nInternet ←→ [Firewall esterno] ←→ DMZ ←→ [Firewall interno] ←→ LAN\n```\n\n### Nella DMZ si collocano:\n- **Web server** pubblici\n- **Mail server**\n- **DNS server** pubblico\n- **Proxy server**\n\n### Vantaggi:\n- Se un server nella DMZ viene compromesso, l'attaccante **non accede alla LAN**\n- Doppio livello di protezione con due firewall\n- I server interni restano invisibili dall'esterno\n\n### Regole tipiche:\n- Internet → DMZ: permesso solo su porte specifiche (80, 443)\n- DMZ → LAN: molto limitato\n- LAN → DMZ: permesso\n- LAN → Internet: permesso con restrizioni",
    "keywords": "DMZ,zona demilitarizzata,web server,sicurezza,doppio firewall"
  },
  {
    "id": 93,
    "section_id": "O",
    "number": 6,
    "title": "Firewall in pratica",
    "content": "### Configurazione base di un firewall:\n\n**1. Policy di default:**\n- Input: **DROP** (blocca tutto in ingresso)\n- Output: **ACCEPT** (permetti uscita)\n- Forward: **DROP** (blocca attraversamento)\n\n**2. Regole specifiche (whitelist):**\n- Permetti HTTP/HTTPS in uscita\n- Permetti DNS in uscita\n- Permetti risposte a connessioni stabilite\n- Permetti SSH solo dalla rete di gestione\n\n### Firewall personale vs aziendale:\n| Caratteristica | Personale | Aziendale |\n|---|---|---|\n| Tipo | Software | Hardware/Appliance |\n| Utenti | 1 | Centinaia/migliaia |\n| Gestione | Automatica | Amministratore |\n| Costo | Gratuito/incluso | Elevato |\n| Esempi | Windows Firewall, iptables | Cisco ASA, Fortinet, pfSense |",
    "keywords": "configurazione,policy,DROP,ACCEPT,whitelist"
  },
  {
    "id": 94,
    "section_id": "P",
    "number": 1,
    "title": "Introduzione alla Crittografia",
    "content": "La **crittografia** è la scienza che studia le tecniche per rendere un messaggio **incomprensibile** a chi non possiede la chiave per decifrarlo.\n\n### Terminologia:\n- **Testo in chiaro** (plaintext): il messaggio originale\n- **Testo cifrato** (ciphertext): il messaggio crittografato\n- **Cifratura** (encryption): plaintext → ciphertext\n- **Decifratura** (decryption): ciphertext → plaintext\n- **Chiave**: parametro segreto usato per cifrare/decifrare\n\n### Obiettivi della crittografia:\n- **Confidenzialità**: solo il destinatario legge il messaggio\n- **Integrità**: il messaggio non è stato alterato\n- **Autenticazione**: il mittente è chi dice di essere\n- **Non ripudio**: il mittente non può negare di aver inviato il messaggio",
    "keywords": "crittografia,cifratura,chiave,confidenzialità,integrità"
  },
  {
    "id": 95,
    "section_id": "P",
    "number": 2,
    "title": "Crittografia simmetrica",
    "content": "Nella crittografia **simmetrica** si usa la **stessa chiave** per cifrare e decifrare.\n\n### Come funziona:\n```\nAlice: plaintext + chiave K → ciphertext\nBob:   ciphertext + chiave K → plaintext\n```\n\n### Algoritmi principali:\n| Algoritmo | Lunghezza chiave | Note |\n|-----------|-----------------|------|\n| **AES** | 128/192/256 bit | Standard attuale, molto sicuro |\n| DES | 56 bit | Obsoleto, chiave troppo corta |\n| 3DES | 168 bit | DES applicato 3 volte, lento |\n| ChaCha20 | 256 bit | Veloce su dispositivi mobili |\n\n### Vantaggi:\n- **Veloce**: ideale per cifrare grandi quantità di dati\n- Algoritmi efficienti\n\n### Svantaggi:\n- **Problema della distribuzione della chiave**: come inviare la chiave in modo sicuro?\n- Con N utenti servono N×(N-1)/2 chiavi",
    "keywords": "simmetrica,AES,DES,chiave condivisa,veloce"
  },
  {
    "id": 96,
    "section_id": "P",
    "number": 3,
    "title": "Crittografia asimmetrica",
    "content": "Nella crittografia **asimmetrica** si usano **due chiavi diverse**: una **pubblica** e una **privata**.\n\n### Come funziona:\n- **Chiave pubblica**: nota a tutti, usata per **cifrare**\n- **Chiave privata**: segreta, usata per **decifrare**\n- Ciò che viene cifrato con la pubblica si decifra SOLO con la privata\n\n### Esempio:\n```\nAlice vuole inviare un messaggio a Bob:\n1. Alice cifra con la chiave PUBBLICA di Bob\n2. Solo Bob può decifrare con la sua chiave PRIVATA\n```\n\n### Algoritmi principali:\n- **RSA**: il più diffuso, basato su fattorizzazione di numeri primi\n- **Diffie-Hellman**: scambio sicuro di chiavi\n- **ECC** (Elliptic Curve): chiavi più corte, stessa sicurezza\n\n### Vantaggi:\n- Risolve il problema della distribuzione delle chiavi\n- Permette la **firma digitale**\n\n### Svantaggi:\n- **Molto più lenta** della simmetrica (100-1000x)\n\n### In pratica: si usa la crittografia **ibrida** (asimmetrica per scambiare la chiave, simmetrica per i dati).",
    "keywords": "asimmetrica,chiave pubblica,chiave privata,RSA,Diffie-Hellman"
  },
  {
    "id": 97,
    "section_id": "P",
    "number": 4,
    "title": "Funzioni Hash",
    "content": "Una **funzione hash** produce un'impronta digitale (**digest**) di lunghezza fissa da un input di qualsiasi dimensione.\n\n### Proprietà:\n- **Deterministica**: stesso input → stesso output\n- **Irreversibile**: dal digest non si risale all'input\n- **Effetto valanga**: minima modifica → output completamente diverso\n- **Resistenza alle collisioni**: difficile trovare due input con lo stesso hash\n\n### Algoritmi:\n| Algoritmo | Output | Sicurezza |\n|-----------|--------|----------|\n| MD5 | 128 bit | ❌ Non sicuro |\n| SHA-1 | 160 bit | ❌ Deprecato |\n| **SHA-256** | 256 bit | ✅ Standard attuale |\n| SHA-3 | Variabile | ✅ Più recente |\n\n### Usi:\n- **Verifica integrità** dei file (checksum)\n- **Archiviazione password** (hash + salt)\n- **Firma digitale**: si firma l'hash del documento\n- **Blockchain**: catena di hash",
    "keywords": "hash,digest,SHA-256,integrità,irreversibile"
  },
  {
    "id": 98,
    "section_id": "P",
    "number": 5,
    "title": "Certificati digitali e PKI",
    "content": "Un **certificato digitale** associa una chiave pubblica all'identità del suo proprietario.\n\n### Contenuto di un certificato X.509:\n- **Nome** del proprietario (Common Name)\n- **Chiave pubblica** del proprietario\n- **Firma digitale** della CA (Certification Authority)\n- **Validità** (date di inizio e fine)\n- **Numero seriale** univoco\n\n### PKI (Public Key Infrastructure):\nSistema di gestione dei certificati:\n- **CA** (Certification Authority): emette e firma i certificati\n- **RA** (Registration Authority): verifica le identità\n- **CRL** (Certificate Revocation List): lista certificati revocati\n\n### Come funziona HTTPS:\n```\n1. Browser richiede il certificato al server\n2. Browser verifica la firma della CA\n3. Browser estrae la chiave pubblica del server\n4. Scambio chiave simmetrica (TLS handshake)\n5. Comunicazione cifrata con chiave simmetrica\n```",
    "keywords": "certificato digitale,CA,PKI,X.509,HTTPS"
  },
  {
    "id": 99,
    "section_id": "P",
    "number": 6,
    "title": "TLS e HTTPS",
    "content": "**TLS** (Transport Layer Security) è il protocollo che protegge le comunicazioni su Internet (HTTPS = HTTP + TLS).\n\n### TLS Handshake (semplificato):\n```\nClient                         Server\n  |── ClientHello ────────────>|  (versione TLS, cipher supportati)\n  |<── ServerHello ────────────|  (cipher scelto, certificato)\n  |── Verifica certificato     |\n  |── Scambio chiave ────────->|  (con crittografia asimmetrica)\n  |<════ Dati cifrati ════════>|  (con crittografia simmetrica)\n```\n\n### Versioni:\n- SSL 2.0/3.0: **obsoleto**, vulnerabile\n- TLS 1.0/1.1: **deprecato**\n- TLS 1.2: ancora usato, sicuro\n- **TLS 1.3**: versione attuale, più veloce (1-RTT)\n\n### Cosa protegge:\n- **Confidenzialità**: dati cifrati (AES)\n- **Integrità**: HMAC verifica le alterazioni\n- **Autenticazione**: certificato del server\n\nIl lucchetto nel browser indica una connessione HTTPS con TLS.",
    "keywords": "TLS,SSL,HTTPS,handshake,cifratura"
  },
  {
    "id": 100,
    "section_id": "Q",
    "number": 1,
    "title": "Cos'è una VPN",
    "content": "Una **VPN** (Virtual Private Network) è una rete privata virtuale che crea un **tunnel cifrato** attraverso una rete pubblica (Internet).\n\n### Funzioni:\n- **Riservatezza**: i dati viaggiano cifrati, nessuno può leggerli\n- **Autenticazione**: verifica l'identità degli endpoint\n- **Integrità**: i dati non possono essere alterati\n\n### Analogia:\n> La VPN è come un **tubo sigillato** dentro un fiume pubblico: l'acqua (dati) scorre protetta, invisibile a chi è fuori.\n\n### Usi comuni:\n- **Lavoro remoto**: dipendenti accedono alla rete aziendale da casa\n- **Collegamento sedi**: unire filiali di un'azienda\n- **Privacy**: nascondere il traffico dal proprio ISP\n- **Geolocalizzazione**: apparire da un'altra nazione",
    "keywords": "VPN,tunnel,cifratura,rete privata,sicurezza"
  },
  {
    "id": 101,
    "section_id": "Q",
    "number": 2,
    "title": "Tipi di VPN",
    "content": "### VPN Site-to-Site\n- Collega **due reti** (es. sede centrale e filiale)\n- Configurata sui **router/firewall** ai bordi delle reti\n- Sempre attiva (tunnel permanente)\n- Trasparente per gli utenti\n\n### VPN Remote Access (Client-to-Site)\n- Un **singolo utente** si collega alla rete aziendale\n- Richiede un **client VPN** sul dispositivo\n- Attivata on-demand dall'utente\n- Usata per **smart working**\n\n### Confronto:\n| Caratteristica | Site-to-Site | Remote Access |\n|---|---|---|\n| Endpoint | Router ↔ Router | Client ↔ Router |\n| Utenti | Intere reti | Singolo utente |\n| Connessione | Permanente | On-demand |\n| Esempio | Sede ↔ Filiale | Dipendente da casa |",
    "keywords": "site-to-site,remote access,client VPN,smart working"
  },
  {
    "id": 102,
    "section_id": "Q",
    "number": 3,
    "title": "Tunneling",
    "content": "Il **tunneling** è la tecnica con cui la VPN incapsula i pacchetti originali dentro nuovi pacchetti cifrati.\n\n### Come funziona:\n```\n[Pacchetto originale: IP_LAN | Dati]\n         ↓ cifratura + incapsulamento\n[Nuovo pacchetto: IP_pubblico | Header VPN | ██ Dati cifrati ██]\n```\n\n### Il pacchetto originale:\n- Mantiene gli **indirizzi IP privati** della LAN\n- Viene **cifrato** completamente\n- Viene **incapsulato** in un nuovo pacchetto con IP pubblici\n\n### Fasi:\n1. **Incapsulamento**: il pacchetto originale diventa il payload del nuovo pacchetto\n2. **Cifratura**: il payload viene cifrato\n3. **Trasporto**: il nuovo pacchetto viaggia su Internet\n4. **Decifratura**: l'endpoint VPN decifra e recupera il pacchetto originale\n5. **De-incapsulamento**: il pacchetto originale viene consegnato alla LAN",
    "keywords": "tunneling,incapsulamento,cifratura,pacchetto,VPN"
  },
  {
    "id": 103,
    "section_id": "Q",
    "number": 4,
    "title": "Protocolli VPN",
    "content": "### IPsec (Internet Protocol Security)\n- Opera a **livello 3** (Rete)\n- Due modalità: **Transport** (cifra solo payload) e **Tunnel** (cifra tutto)\n- Usa **AH** (autenticazione) e **ESP** (cifratura + autenticazione)\n- Standard per VPN **site-to-site**\n- Integrato in molti router\n\n### OpenVPN\n- Basato su **TLS/SSL**\n- Open source e molto configurabile\n- Opera su **TCP o UDP** (tipicamente porta 1194)\n- Molto usato per **remote access**\n\n### WireGuard\n- Protocollo **moderno e leggero**\n- Codice molto piccolo (~4000 righe vs 100.000+ di OpenVPN)\n- Prestazioni eccellenti\n- Usa crittografia moderna (ChaCha20, Curve25519)\n\n### L2TP/IPsec\n- **L2TP** per il tunnel + **IPsec** per la cifratura\n- Supportato nativamente da molti SO\n- Meno performante di WireGuard",
    "keywords": "IPsec,OpenVPN,WireGuard,L2TP,protocolli VPN"
  },
  {
    "id": 104,
    "section_id": "Q",
    "number": 5,
    "title": "VPN e sicurezza aziendale",
    "content": "### Architettura VPN aziendale:\n```\nDipendente remoto\n    ↓ [Client VPN]\n    ↓ tunnel cifrato su Internet\n    ↓\n[VPN Gateway / Concentrator] → Rete aziendale\n```\n\n### Split tunneling vs Full tunneling:\n- **Full tunneling**: TUTTO il traffico passa dalla VPN → più sicuro\n- **Split tunneling**: solo il traffico aziendale passa dalla VPN → più veloce\n\n### Autenticazione VPN:\n- **Username + Password**\n- **Certificati digitali**\n- **Multi-Factor Authentication (MFA)**: password + codice OTP\n- **Token hardware**: chiavette con codici\n\n### VPN e firewall:\n- Il firewall protegge la rete, la VPN protegge il **canale**\n- Spesso il VPN gateway è integrato nel firewall\n- Le regole ACL si applicano anche al traffico VPN",
    "keywords": "VPN aziendale,split tunneling,MFA,concentrator,sicurezza"
  },
  {
    "id": 105,
    "section_id": "R",
    "number": 1,
    "title": "Cos'è una VLAN",
    "content": "Una **VLAN** (Virtual Local Area Network) è una rete locale **virtuale** che permette di segmentare una rete fisica in più reti logiche **indipendenti**.\n\n### Senza VLAN:\n- Tutti i dispositivi collegati allo stesso switch sono nella **stessa rete**\n- Il traffico broadcast raggiunge **tutti** i dispositivi\n\n### Con VLAN:\n- I dispositivi sullo stesso switch possono appartenere a **reti diverse**\n- Il traffico broadcast è **limitato** alla propria VLAN\n- Le VLAN sono **isolate**: non comunicano tra loro senza un router\n\n### Analogia:\n> È come avere **più switch virtuali** dentro un unico switch fisico.\n\n### Identificazione:\n- Ogni VLAN ha un **VLAN ID** (1-4094)\n- VLAN 1 è la VLAN **di default**",
    "keywords": "VLAN,rete virtuale,segmentazione,broadcast,VLAN ID"
  },
  {
    "id": 106,
    "section_id": "R",
    "number": 2,
    "title": "VLAN basate su porte",
    "content": "Il tipo più comune di VLAN è quella **basata su porte** (port-based).\n\n### Come funziona:\n- L'amministratore **assegna** ogni porta dello switch a una VLAN\n- Tutto il traffico su quella porta appartiene a quella VLAN\n\n### Esempio:\n```\nSwitch 24 porte:\n├─ Porte 1-8:   VLAN 10 (Ufficio amministrazione)\n├─ Porte 9-16:  VLAN 20 (Ufficio tecnico)\n└─ Porte 17-24: VLAN 30 (Ospiti/Wi-Fi)\n```\n\n### Tipi di VLAN:\n| Tipo | Assegnazione | Uso |\n|------|-------------|-----|\n| **Port-based** | Porta fisica | Più comune |\n| MAC-based | Indirizzo MAC | Mobilità |\n| Protocol-based | Protocollo (IP, IPX) | Legacy |\n| Policy-based | Regole complesse | Avanzato |\n\n### Porte Access:\n- Una porta **access** appartiene a **una sola VLAN**\n- Il dispositivo collegato non sa di essere in una VLAN",
    "keywords": "port-based,access port,assegnazione,switch,configurazione"
  },
  {
    "id": 107,
    "section_id": "R",
    "number": 3,
    "title": "Trunk e 802.1Q",
    "content": "Un **trunk** è un collegamento che trasporta traffico di **più VLAN** contemporaneamente tra switch.\n\n### Problema:\n- Se ho la stessa VLAN su **due switch diversi**, come collego i dispositivi?\n- Servirebbero tanti cavi quante VLAN → spreco!\n\n### Soluzione: trunk\n- Un **singolo cavo** trasporta traffico di **tutte le VLAN**\n- Usa il protocollo **IEEE 802.1Q** per identificare la VLAN\n\n### Come funziona 802.1Q:\n```\nFrame Ethernet normale:\n[MAC dst | MAC src | Tipo | Payload | CRC]\n\nFrame con tag 802.1Q:\n[MAC dst | MAC src | Tag 802.1Q | Tipo | Payload | CRC]\n                      ↑\n                 4 byte aggiunti\n                 contiene VLAN ID\n```\n\n### Il tag 802.1Q contiene:\n- **TPID**: identificatore del tag (0x8100)\n- **VLAN ID**: numero della VLAN (12 bit → 1-4094)\n- **Priority**: priorità del frame (QoS)\n\n### Native VLAN:\n- I frame della native VLAN viaggiano **senza tag** sul trunk\n- Di default è la VLAN 1",
    "keywords": "trunk,802.1Q,tag,VLAN ID,native VLAN"
  },
  {
    "id": 108,
    "section_id": "R",
    "number": 4,
    "title": "Inter-VLAN Routing",
    "content": "Le VLAN sono **isolate** tra loro. Per farle comunicare serve un **router** (inter-VLAN routing).\n\n### Metodo 1: Router-on-a-Stick\n- Un singolo collegamento **trunk** tra switch e router\n- Il router crea **subinterface** virtuali, una per VLAN\n- Ogni subinterface ha un IP che funge da **gateway** per la VLAN\n\n```\nSwitch (trunk) ←→ Router\n                   ├─ subint .10 → 192.168.10.1 (VLAN 10)\n                   ├─ subint .20 → 192.168.20.1 (VLAN 20)\n                   └─ subint .30 → 192.168.30.1 (VLAN 30)\n```\n\n### Metodo 2: Switch Layer 3\n- Uno switch **multilayer** (livello 3) fa anche routing\n- Più veloce del router-on-a-stick\n- Crea **SVI** (Switch Virtual Interface) per ogni VLAN\n- Usato nelle reti aziendali moderne\n\n### Ogni VLAN ha la propria sottorete IP:\n- VLAN 10 → 192.168.10.0/24\n- VLAN 20 → 192.168.20.0/24\n- VLAN 30 → 192.168.30.0/24",
    "keywords": "inter-VLAN,router-on-a-stick,subinterface,SVI,Layer 3"
  },
  {
    "id": 109,
    "section_id": "R",
    "number": 5,
    "title": "Vantaggi delle VLAN",
    "content": "### Perché usare le VLAN?\n\n**1. Sicurezza:**\n- Separazione del traffico tra dipartimenti\n- I dati sensibili (contabilità, HR) sono isolati\n- Si possono applicare ACL tra VLAN\n\n**2. Riduzione broadcast:**\n- Il broadcast è limitato alla propria VLAN\n- Meno traffico inutile → migliori prestazioni\n\n**3. Flessibilità:**\n- Spostare un utente di reparto = cambiare VLAN sulla porta\n- Non serve ricablare fisicamente\n\n**4. Gestione semplificata:**\n- Politiche di rete per gruppi logici\n- QoS differenziata per VLAN (es. priorità al VoIP)\n\n### Esempio aziendale:\n```\nVLAN 10: Amministrazione (192.168.10.0/24)\nVLAN 20: Sviluppo        (192.168.20.0/24)\nVLAN 30: Ospiti          (192.168.30.0/24) → solo Internet\nVLAN 40: VoIP            (192.168.40.0/24) → priorità QoS\nVLAN 99: Management      (192.168.99.0/24) → gestione switch\n```",
    "keywords": "vantaggi,sicurezza,broadcast,flessibilità,gestione"
  },
  {
    "id": 110,
    "section_id": "S",
    "number": 1,
    "title": "Cos'è il Malware",
    "content": "Il **malware** (malicious software) è qualsiasi software creato con l'intento di **danneggiare**, **rubare dati** o **compromettere** un sistema informatico.\n\n### Categorie principali:\n- **Virus**: si replica allegandosi ad altri file\n- **Worm**: si replica autonomamente via rete\n- **Trojan**: si maschera da programma legittimo\n- **Ransomware**: cifra i dati e chiede un riscatto\n- **Spyware**: spia le attività dell'utente\n- **Adware**: mostra pubblicità indesiderata\n- **Rootkit**: si nasconde nel sistema operativo\n- **Keylogger**: registra i tasti premuti\n\n### Vettori di infezione:\n- **Email** con allegati malevoli\n- **Download** da siti non sicuri\n- **USB** infette\n- **Vulnerabilità** software non aggiornato\n- **Social engineering**",
    "keywords": "malware,virus,worm,trojan,ransomware"
  },
  {
    "id": 111,
    "section_id": "S",
    "number": 2,
    "title": "Virus, Worm e Trojan",
    "content": "### Virus\n- **Si attacca** a un file eseguibile o documento\n- Si replica quando l'utente **esegue il file** infetto\n- Richiede un'**azione umana** per diffondersi\n- Può corrompere file, rallentare il sistema\n\n### Worm\n- Si replica **autonomamente** attraverso la rete\n- **Non ha bisogno** di un file ospite\n- Sfrutta **vulnerabilità** di rete per propagarsi\n- Può consumare banda e risorse\n- Esempio famoso: **WannaCry** (2017)\n\n### Trojan (Cavallo di Troia)\n- Si presenta come un **programma utile** o legittimo\n- Una volta installato, esegue azioni **malevole** in background\n- **Non si replica** da solo\n- Può aprire una **backdoor** per l'attaccante\n- Spesso distribuito tramite download ingannevoli\n\n### Confronto:\n| | Replica | Azione umana | File ospite |\n|---|---|---|---|\n| Virus | Sì | Sì | Sì |\n| Worm | Sì | No | No |\n| Trojan | No | Sì | No |",
    "keywords": "virus,worm,trojan,backdoor,WannaCry"
  },
  {
    "id": 112,
    "section_id": "S",
    "number": 3,
    "title": "Ransomware e Spyware",
    "content": "### Ransomware\nMalware che **cifra i file** della vittima e chiede un **riscatto** (ransom) per la chiave di decifratura.\n\n#### Come funziona:\n1. Infetta il sistema (email, vulnerabilità)\n2. **Cifra** tutti i file importanti con crittografia forte\n3. Mostra un messaggio di riscatto (spesso in Bitcoin)\n4. Se si paga, *forse* si riceve la chiave\n\n#### Esempi noti:\n- **WannaCry** (2017): sfruttava vulnerabilità Windows, colpì ospedali e aziende mondiali\n- **NotPetya** (2017): mascherato da ransomware, in realtà distruttivo\n\n#### Difesa: **backup regolari** su dispositivi scollegati\n\n### Spyware\nSoftware che **spia** le attività dell'utente senza consenso.\n\n#### Cosa raccoglie:\n- **Cronologia** di navigazione\n- **Credenziali** e password\n- **Dati bancari**\n- Screenshot e registrazioni\n\n#### Keylogger:\nTipo di spyware che **registra ogni tasto premuto** sulla tastiera.",
    "keywords": "ransomware,spyware,keylogger,riscatto,WannaCry"
  },
  {
    "id": 113,
    "section_id": "S",
    "number": 4,
    "title": "Attacchi di rete",
    "content": "### Attacchi comuni nelle reti:\n\n**1. Phishing:**\n- Email/siti web **falsi** che imitano quelli legittimi\n- Scopo: rubare credenziali o dati personali\n- Varianti: **spear phishing** (mirato), **whaling** (dirigenti)\n\n**2. Man-in-the-Middle (MitM):**\n- L'attaccante si inserisce **tra due comunicanti**\n- Intercetta e può modificare i dati\n- Difesa: **HTTPS** e certificati TLS\n\n**3. DDoS (Distributed Denial of Service):**\n- **Inondare** un server con traffico per renderlo inaccessibile\n- Usa una rete di dispositivi infetti (**botnet**)\n- Difesa: CDN, firewall, servizi anti-DDoS\n\n**4. ARP Spoofing:**\n- Falsifica le risposte **ARP** nella rete locale\n- Permette MitM in LAN\n- Difesa: ARP statico, port security\n\n**5. DNS Spoofing:**\n- Falsifica le risposte DNS\n- Reindirizza verso siti malevoli\n- Difesa: DNSSEC",
    "keywords": "phishing,MitM,DDoS,ARP spoofing,botnet"
  },
  {
    "id": 114,
    "section_id": "S",
    "number": 5,
    "title": "Social Engineering",
    "content": "Il **social engineering** sfrutta la **psicologia umana** per ottenere informazioni o accesso ai sistemi.\n\n### Tecniche principali:\n\n**1. Phishing** (già visto):\n- Email fraudolente\n- Siti web clonati\n\n**2. Pretexting:**\n- L'attaccante **inventa una storia** credibile\n- Es: finge di essere il supporto IT e chiede la password\n\n**3. Baiting:**\n- Lascia una **USB infetta** in un luogo frequentato\n- La curiosità spinge qualcuno a inserirla nel PC\n\n**4. Tailgating/Piggybacking:**\n- Seguire qualcuno attraverso una **porta protetta** senza badge\n- Accesso fisico non autorizzato\n\n**5. Quid pro quo:**\n- Offre qualcosa in cambio di informazioni\n- Es: \"assistenza tecnica gratuita\" in cambio di credenziali\n\n### Difesa:\n- **Formazione** e consapevolezza degli utenti\n- Verificare sempre l'identità di chi chiede informazioni\n- Non cliccare link sospetti\n- Politiche aziendali di sicurezza",
    "keywords": "social engineering,phishing,pretexting,baiting,tailgating"
  },
  {
    "id": 115,
    "section_id": "S",
    "number": 6,
    "title": "Difese e prevenzione",
    "content": "### Strumenti di difesa:\n\n**1. Antivirus/Antimalware:**\n- Scansiona file alla ricerca di **firme** note di malware\n- Protezione in tempo reale\n- Richiede **aggiornamenti** costanti delle definizioni\n\n**2. Firewall** (vedi sezione dedicata):\n- Filtra il traffico di rete\n- Blocca connessioni sospette\n\n**3. IDS/IPS:**\n- **IDS** (Intrusion Detection System): **rileva** intrusioni e avvisa\n- **IPS** (Intrusion Prevention System): rileva e **blocca** automaticamente\n\n**4. Aggiornamenti (Patch):**\n- Applicare sempre gli aggiornamenti di sicurezza\n- Le vulnerabilità note sono le più sfruttate\n\n**5. Backup:**\n- Regola **3-2-1**: 3 copie, 2 supporti diversi, 1 off-site\n- Unica vera difesa contro il ransomware\n\n### Best practice:\n- **Password forti** e uniche\n- **MFA** (Multi-Factor Authentication)\n- **Principio del minimo privilegio**: ogni utente ha solo i permessi necessari\n- **Formazione** continua del personale\n- **Segmentazione** della rete (VLAN)",
    "keywords": "antivirus,IDS,IPS,backup,patch,best practice"
  },
  {
    "id": 116,
    "section_id": "T",
    "number": 1,
    "title": "Cos'è Packet Tracer",
    "content": "**Cisco Packet Tracer** è un simulatore di rete gratuito sviluppato da **Cisco Systems** per scopi didattici.\n\n### Cosa permette di fare:\n- **Progettare** topologie di rete virtuali\n- **Configurare** router, switch, PC e altri dispositivi\n- **Simulare** il traffico di rete e verificarne il funzionamento\n- **Testare** configurazioni prima di applicarle su reti reali\n\n### Caratteristiche:\n- Interfaccia grafica **drag-and-drop** per posizionare dispositivi\n- Due modalità: **Realtime** (tempo reale) e **Simulation** (passo passo)\n- Supporta protocolli reali: IP, DHCP, DNS, HTTP, OSPF, RIP, ecc.\n- Include dispositivi Cisco: router, switch L2/L3, access point\n\n### Perché è importante:\n- Usato nei corsi **Cisco Networking Academy**\n- Strumento fondamentale per l'esame di **maturità** in Sistemi e Reti\n- Permette di sperimentare senza hardware fisico",
    "keywords": "Packet Tracer,Cisco,simulatore,topologia,configurazione"
  },
  {
    "id": 117,
    "section_id": "T",
    "number": 2,
    "title": "L'interfaccia di Packet Tracer",
    "content": "### Area di lavoro:\n- **Logical workspace**: vista logica della rete (default)\n- **Physical workspace**: vista fisica con edifici e rack\n\n### Pannello dispositivi (in basso):\n| Categoria | Dispositivi |\n|-----------|------------|\n| Network Devices | Router, Switch, Hub |\n| End Devices | PC, Laptop, Server, Printer |\n| Connections | Cavo rame, fibra, seriale, console |\n| Wireless | Access Point |\n\n### Tipi di cavo:\n- **Cavo dritto** (straight-through): PC ↔ Switch, Router ↔ Switch\n- **Cavo incrociato** (crossover): Switch ↔ Switch, PC ↔ PC\n- **Cavo console** (azzurro): PC ↔ porta Console del router/switch\n- **Cavo seriale** (DCE/DTE): Router ↔ Router (WAN)\n\n### Modalità Simulation:\n- Permette di vedere i **pacchetti** che viaggiano nella rete\n- Si può analizzare ogni **PDU** (Protocol Data Unit) livello per livello\n- Utile per capire il funzionamento dei protocolli",
    "keywords": "interfaccia,workspace,cavi,simulation,PDU"
  },
  {
    "id": 118,
    "section_id": "T",
    "number": 3,
    "title": "Configurazione base di un router",
    "content": "### Accesso alla CLI:\n- Click sul router → scheda **CLI** (Command Line Interface)\n\n### Modalità CLI:\n```\nRouter>                    ← User EXEC mode (limitato)\nRouter> enable\nRouter#                    ← Privileged EXEC mode\nRouter# configure terminal\nRouter(config)#            ← Global Configuration mode\nRouter(config-if)#         ← Interface Configuration mode\n```\n\n### Comandi essenziali:\n```\n! Impostare hostname\nRouter(config)# hostname R1\n\n! Configurare un'interfaccia\nR1(config)# interface GigabitEthernet0/0\nR1(config-if)# ip address 192.168.1.1 255.255.255.0\nR1(config-if)# no shutdown\n\n! Salvare la configurazione\nR1# copy running-config startup-config\n\n! Mostrare configurazione attuale\nR1# show running-config\n\n! Mostrare tabella di routing\nR1# show ip route\n\n! Mostrare interfacce\nR1# show ip interface brief\n```",
    "keywords": "CLI,router,configurazione,hostname,interfaccia"
  },
  {
    "id": 119,
    "section_id": "T",
    "number": 4,
    "title": "Configurazione base di uno switch",
    "content": "### Lo switch Cisco in Packet Tracer:\n\n### Comandi base (simili al router):\n```\nSwitch> enable\nSwitch# configure terminal\n\n! Impostare hostname\nSwitch(config)# hostname SW1\n\n! Configurare VLAN\nSW1(config)# vlan 10\nSW1(config-vlan)# name Ufficio\n\n! Assegnare porta a VLAN\nSW1(config)# interface FastEthernet0/1\nSW1(config-if)# switchport mode access\nSW1(config-if)# switchport access vlan 10\n\n! Configurare trunk\nSW1(config)# interface GigabitEthernet0/1\nSW1(config-if)# switchport mode trunk\n\n! Mostrare VLAN\nSW1# show vlan brief\n\n! Mostrare tabella MAC\nSW1# show mac-address-table\n```\n\n### Differenza da router:\n- Lo switch opera a **livello 2** (MAC)\n- Ha porte **access** (1 VLAN) e **trunk** (più VLAN)\n- Non ha interfacce IP di default (solo SVI per gestione)",
    "keywords": "switch,VLAN,trunk,access,configurazione"
  },
  {
    "id": 120,
    "section_id": "T",
    "number": 5,
    "title": "Configurare IP su PC e test di connettività",
    "content": "### Configurare IP su un PC:\n1. Click sul PC → scheda **Desktop** → **IP Configuration**\n2. Inserire:\n   - **IP Address**: es. 192.168.1.10\n   - **Subnet Mask**: es. 255.255.255.0\n   - **Default Gateway**: es. 192.168.1.1 (IP del router)\n   - **DNS Server**: es. 8.8.8.8 (opzionale)\n\n### Oppure via DHCP:\n- Selezionare **DHCP** invece di Static\n- Il PC ottiene automaticamente IP dal server DHCP\n\n### Test di connettività:\n```\n! Da PC Desktop → Command Prompt\n\n! Ping: verifica raggiungibilità\nC:\\> ping 192.168.1.1\n\n! Tracert: mostra il percorso dei pacchetti\nC:\\> tracert 192.168.2.10\n\n! Ipconfig: mostra configurazione IP\nC:\\> ipconfig\n```\n\n### Icona busta (PDU):\n- Nella toolbar, selezionare la **busta** (Simple PDU)\n- Click sul PC sorgente, poi sul PC destinazione\n- In basso appare: **Successful** ✓ o **Failed** ✗",
    "keywords": "IP,configurazione PC,ping,tracert,DHCP"
  },
  {
    "id": 121,
    "section_id": "T",
    "number": 6,
    "title": "Esercizio tipo maturità",
    "content": "### Esempio di esercizio classico:\n\n**Traccia**: Progettare una rete per un'azienda con 3 reparti.\n\n### Requisiti:\n- Reparto A: 50 host\n- Reparto B: 25 host\n- Reparto C: 10 host\n- Ogni reparto in una VLAN separata\n- Accesso a Internet tramite un router\n\n### Procedura:\n\n**1. Indirizzamento (VLSM):**\n- Rete: 192.168.10.0/24\n- Reparto A: 192.168.10.0/26 (62 host) → VLAN 10\n- Reparto B: 192.168.10.64/27 (30 host) → VLAN 20\n- Reparto C: 192.168.10.96/28 (14 host) → VLAN 30\n\n**2. In Packet Tracer:**\n- Posizionare: 1 router, 1 switch L2, PC per ogni reparto\n- Creare VLAN 10, 20, 30 sullo switch\n- Configurare trunk tra switch e router\n- Router-on-a-stick con subinterface\n- Assegnare IP ai PC con gateway corretto\n\n**3. Verifica:**\n- Ping tra PC della stessa VLAN ✓\n- Ping tra VLAN diverse (tramite router) ✓\n- `show vlan brief`, `show ip route`\n\n### Consigli per l'esame:\n- Disegnare la topologia **prima** di configurare\n- Calcolare gli indirizzi su carta\n- Testare la connettività con **ping** dopo ogni configurazione",
    "keywords": "esercizio,maturità,VLSM,VLAN,progetto rete"
  },
  {
    "id": 122,
    "section_id": "T",
    "number": 7,
    "title": "Comandi show e debug",
    "content": "### Comandi `show` più importanti:\n\n```\n! Mostra configurazione attiva\nshow running-config\n\n! Mostra configurazione salvata\nshow startup-config\n\n! Mostra stato delle interfacce\nshow ip interface brief\n\n! Mostra tabella di routing\nshow ip route\n\n! Mostra VLAN configurate (switch)\nshow vlan brief\n\n! Mostra tabella MAC (switch)\nshow mac-address-table\n\n! Mostra vicini CDP\nshow cdp neighbors\n\n! Mostra protocolli di routing attivi\nshow ip protocols\n\n! Mostra dettagli OSPF\nshow ip ospf neighbor\n```\n\n### Comandi di verifica da PC:\n```\nping <IP>            → verifica raggiungibilità\ntracert <IP>         → mostra percorso\nipconfig             → mostra IP del PC\nipconfig /all        → mostra dettagli completi\nnslookup <dominio>   → risoluzione DNS\n```\n\n### Trucchi utili:\n- **Tab**: completa il comando\n- **?**: mostra comandi disponibili\n- **do show**: esegue show da config mode",
    "keywords": "show,comandi,running-config,ip route,verifica"
  },
  {
    "id": 123,
    "section_id": "T",
    "number": 8,
    "title": "Configurare un server DNS in Packet Tracer",
    "content": "### Cos'è il DNS?\nIl **DNS** (Domain Name System) traduce i nomi di dominio (es. `www.azienda.com`) in indirizzi IP (es. `192.168.1.100`). Senza DNS dovremmo ricordare a memoria tutti gli IP!\n\n### Topologia necessaria:\n- 1 **Server** (farà da DNS server)\n- 1 o più **PC** client\n- 1 **Switch** per collegarli\n- Cavi dritti (straight-through)\n\n### Passo 1 — Configurare gli IP:\n| Dispositivo | IP | Subnet Mask | Gateway | DNS Server |\n|---|---|---|---|---|\n| Server DNS | 192.168.1.2 | 255.255.255.0 | 192.168.1.1 | 192.168.1.2 |\n| PC0 | 192.168.1.10 | 255.255.255.0 | 192.168.1.1 | 192.168.1.2 |\n| PC1 | 192.168.1.11 | 255.255.255.0 | 192.168.1.1 | 192.168.1.2 |\n\n> **Importante**: nei PC il campo **DNS Server** deve puntare all'IP del server DNS (192.168.1.2).\n\n### Passo 2 — Configurare il servizio DNS sul Server:\n1. Click sul Server → scheda **Services** → **DNS**\n2. Attivare il servizio: **ON**\n3. Aggiungere i record:\n\n| Name | Type | Address |\n|---|---|---|\n| www.azienda.com | A Record | 192.168.1.100 |\n| www.scuola.it | A Record | 192.168.1.101 |\n| mail.azienda.com | A Record | 192.168.1.50 |\n\n4. Per ogni record: compilare **Name**, scegliere **Type** = A Record, inserire l'**Address** e premere **Add**\n\n### Passo 3 — Verifica dal PC:\nAprire **Desktop** → **Command Prompt** sul PC:\n```\nC:\\> nslookup www.azienda.com\nServer: 192.168.1.2\nAddress: 192.168.1.100\n```\n\nSe hai anche un server HTTP attivo all'IP 192.168.1.100, puoi aprire il **Web Browser** dal Desktop del PC e digitare `www.azienda.com` → vedrai la pagina web!\n\n### Errori comuni:\n- ❌ Dimenticare di mettere il DNS Server nell'IP Configuration dei PC\n- ❌ Non attivare il servizio DNS (lasciarlo su OFF)\n- ❌ Sbagliare l'IP nel record A (deve corrispondere al server di destinazione)",
    "keywords": "DNS,server,risoluzione nomi,A Record,nslookup"
  },
  {
    "id": 124,
    "section_id": "T",
    "number": 9,
    "title": "Configurare un server Email (SMTP/POP3) in Packet Tracer",
    "content": "### Come funziona la posta in Packet Tracer?\nPacket Tracer simula un sistema di posta completo con:\n- **SMTP** (Simple Mail Transfer Protocol) — per **inviare** le email\n- **POP3** (Post Office Protocol v3) — per **ricevere/scaricare** le email\n\nIl server email gestisce entrambi i protocolli e contiene le **caselle di posta** degli utenti.\n\n### Topologia necessaria:\n- 1 **Server** (mail server)\n- 1 **Server DNS** (per risolvere il dominio di posta)\n- 2+ **PC** (utenti che si scrivono)\n- 1 **Switch**\n- Cavi dritti\n\n### Passo 1 — Indirizzi IP:\n| Dispositivo | IP | DNS Server |\n|---|---|---|\n| Server Mail | 192.168.1.50 | 192.168.1.2 |\n| Server DNS | 192.168.1.2 | 192.168.1.2 |\n| PC-Mario | 192.168.1.10 | 192.168.1.2 |\n| PC-Luigi | 192.168.1.11 | 192.168.1.2 |\n\n(Tutti con Subnet 255.255.255.0 e Gateway 192.168.1.1)\n\n### Passo 2 — Configurare il DNS:\n1. Sul Server DNS → **Services** → **DNS** → ON\n2. Aggiungere il record:\n   - **Name**: `mail.azienda.com`\n   - **Type**: A Record\n   - **Address**: `192.168.1.50`\n   - Click **Add**\n\n> Questo è fondamentale: i PC useranno il nome `mail.azienda.com` come server di posta, e il DNS deve saperlo tradurre!\n\n### Passo 3 — Configurare il servizio Email sul Server:\n1. Click sul Server Mail → **Services** → **EMAIL**\n2. Impostare:\n   - **Domain Name**: `azienda.com`\n   - **SMTP Service**: ON\n   - **POP3 Service**: ON\n3. Creare gli utenti:\n\n| User | Password |\n|---|---|\n| mario | mario123 |\n| luigi | luigi123 |\n\n4. Per ogni utente: inserire **User**, **Password** e premere il pulsante **+** (Add User)\n\n### Passo 4 — Configurare il client email su ogni PC:\n1. Click sul PC → **Desktop** → **Email**\n2. Configurare (esempio per Mario):\n\n| Campo | Valore |\n|---|---|\n| Your Name | Mario |\n| Email Address | mario@azienda.com |\n| Incoming Mail Server (POP3) | mail.azienda.com |\n| Outgoing Mail Server (SMTP) | mail.azienda.com |\n| User Name | mario |\n| Password | mario123 |\n\n3. Click **Save** per salvare la configurazione\n4. Ripetere per Luigi con i suoi dati\n\n### Passo 5 — Inviare e ricevere email:\n1. Sul PC di Mario: click **Compose**\n   - **To**: `luigi@azienda.com`\n   - **Subject**: `Ciao Luigi`\n   - **Body**: `Questo è un test!`\n   - Click **Send**\n2. Sul PC di Luigi: click **Receive**\n   - Appare l'email di Mario nella inbox!\n\n### Schema riassuntivo del flusso:\n```\nMario (SMTP) → Server Mail → Luigi (POP3)\n     invio          casella       scarica\n```\n\n### Errori comuni:\n- ❌ Non configurare il DNS → il PC non trova `mail.azienda.com`\n- ❌ Sbagliare il domain name sul server (deve corrispondere a `@azienda.com`)\n- ❌ Non creare l'utente sul server prima di configurare il client\n- ❌ Dimenticare di premere **Receive** sul PC destinatario",
    "keywords": "Email,SMTP,POP3,posta,mail server,configurazione"
  },
  {
    "id": 125,
    "section_id": "T",
    "number": 10,
    "title": "Configurare NAT in Packet Tracer",
    "content": "### Cos'è il NAT?\nIl **NAT** (Network Address Translation) traduce gli indirizzi IP **privati** della LAN in un indirizzo IP **pubblico** per uscire su Internet.\n\n### Perché serve?\n- Gli IP privati (192.168.x.x, 10.x.x.x) **non sono raggiungibili** da Internet\n- Il NAT permette a tanti dispositivi interni di **condividere un unico IP pubblico**\n- È presente su ogni router domestico e aziendale\n\n### Topologia in Packet Tracer:\n```\n[PC0] ──┐\n        ├── [Switch] ── [Router] ── [Server Internet]\n[PC1] ──┘\n     LAN privata        WAN pubblica\n     192.168.1.0/24     200.0.0.0/30\n```\n\nDispositivi necessari:\n- 2 **PC** (rete interna)\n- 1 **Switch** (2960)\n- 1 **Router** (1941 o 2911)\n- 1 **Server** (simula Internet)\n- Cavi dritti\n\n### Passo 1 — Indirizzi IP (tramite interfaccia grafica):\n\n**PC0 e PC1** (Desktop → IP Configuration):\n| Campo | Valore |\n|---|---|\n| IP Address | 192.168.1.10 / .11 |\n| Subnet Mask | 255.255.255.0 |\n| Default Gateway | 192.168.1.1 |\n\n**Server Internet** (Desktop → IP Configuration):\n| Campo | Valore |\n|---|---|\n| IP Address | 200.0.0.2 |\n| Subnet Mask | 255.255.255.252 |\n| Default Gateway | 200.0.0.1 |\n\n### Passo 2 — Configurare le interfacce del Router:\nClick sul Router → scheda **Config**:\n\n**Interfaccia GigabitEthernet0/0** (lato LAN):\n- **IPv4 Address**: `192.168.1.1`\n- **Subnet Mask**: `255.255.255.0`\n- **Port Status**: ✅ ON\n\n**Interfaccia GigabitEthernet0/1** (lato WAN/Internet):\n- **IPv4 Address**: `200.0.0.1`\n- **Subnet Mask**: `255.255.255.252`\n- **Port Status**: ✅ ON\n\n### Passo 3 — Configurare il NAT (dalla CLI del router):\nClick sul Router → scheda **CLI**:\n```\nenable\nconfigure terminal\n\n! Definire le interfacce inside/outside\ninterface GigabitEthernet0/0\n ip nat inside\n exit\n\ninterface GigabitEthernet0/1\n ip nat outside\n exit\n\n! Creare la lista degli IP che possono uscire\naccess-list 1 permit 192.168.1.0 0.0.0.255\n\n! Attivare il NAT\nip nat inside source list 1 interface GigabitEthernet0/1 overload\n\nexit\ncopy running-config startup-config\n```\n\n### Passo 4 — Verifica:\nDal PC0 → **Desktop** → **Command Prompt**:\n```\nC:\\> ping 200.0.0.2\n```\nSe risponde → il NAT funziona! I PC con IP privato riescono a raggiungere il server \"Internet\".\n\nDal router:\n```\nR1# show ip nat translations\n```\nVedrai le traduzioni attive: IP privato → IP pubblico.\n\n### Riepilogo:\n| Rete | IP Range | Tipo |\n|---|---|---|\n| LAN (inside) | 192.168.1.0/24 | Privato |\n| WAN (outside) | 200.0.0.0/30 | Pubblico |\n| NAT | 192.168.1.x → 200.0.0.1 | Traduzione |\n\n### Errori comuni:\n- ❌ Dimenticare `ip nat inside` o `ip nat outside` sulle interfacce\n- ❌ Sbagliare la wildcard mask nella access-list (0.0.0.255, NON 255.255.255.0)\n- ❌ Non mettere il Default Gateway sui PC",
    "keywords": "NAT,traduzione indirizzi,inside,outside,overload,IP pubblico"
  },
  {
    "id": 126,
    "section_id": "T",
    "number": 11,
    "title": "Configurare DHCP in Packet Tracer",
    "content": "### Cos'è il DHCP?\nIl **DHCP** (Dynamic Host Configuration Protocol) assegna **automaticamente** gli indirizzi IP ai dispositivi della rete.\n\n### Senza DHCP:\n- Devi configurare **a mano** IP, subnet mask, gateway e DNS su ogni PC\n- Errori facili (IP duplicati, gateway sbagliato)\n\n### Con DHCP:\n- I PC selezionano \"DHCP\" e ricevono **tutto automaticamente**\n- Il server gestisce un **pool** di indirizzi\n\n### Metodo 1 — DHCP su un Server in Packet Tracer:\n\n### Topologia:\n```\n[PC0] ── [Switch] ── [Server DHCP]\n[PC1] ──┘          └── [Router] (gateway)\n```\n\n### Passo 1 — IP del Server e del Router:\n\n**Server DHCP** (Desktop → IP Configuration → Static):\n| Campo | Valore |\n|---|---|\n| IP Address | 192.168.1.2 |\n| Subnet Mask | 255.255.255.0 |\n| Default Gateway | 192.168.1.1 |\n\n**Router** (Config → GigabitEthernet0/0):\n- IP: `192.168.1.1`, Mask: `255.255.255.0`, Port Status: ON\n\n### Passo 2 — Configurare il servizio DHCP sul Server:\n1. Click sul Server → **Services** → **DHCP**\n2. Impostare:\n\n| Campo | Valore | Significato |\n|---|---|---|\n| Service | ON | Attiva il DHCP |\n| Pool Name | serverPool | Nome del pool |\n| Default Gateway | 192.168.1.1 | Gateway per i PC |\n| DNS Server | 192.168.1.2 | Server DNS (opzionale) |\n| Start IP Address | 192.168.1.100 | Primo IP da assegnare |\n| Subnet Mask | 255.255.255.0 | Mask della rete |\n| Max Users | 50 | Numero massimo di IP |\n\n3. Click **Save** per salvare il pool\n\n### Passo 3 — Configurare i PC per DHCP:\n1. Click sul PC → **Desktop** → **IP Configuration**\n2. Selezionare **DHCP** (invece di Static)\n3. Dopo qualche secondo il PC riceve automaticamente:\n   - IP Address (es. 192.168.1.100)\n   - Subnet Mask (255.255.255.0)\n   - Default Gateway (192.168.1.1)\n   - DNS Server (192.168.1.2)\n\n### Passo 4 — Verifica:\nSul PC → **Desktop** → **Command Prompt**:\n```\nC:\\> ipconfig\n\nIP Address: 192.168.1.100\nSubnet Mask: 255.255.255.0\nDefault Gateway: 192.168.1.1\n```\n\n### Metodo 2 — DHCP direttamente sul Router (CLI):\nSe non hai un server dedicato, il router può fare da DHCP:\n```\nRouter(config)# ip dhcp pool LAN\nRouter(dhcp-config)# network 192.168.1.0 255.255.255.0\nRouter(dhcp-config)# default-router 192.168.1.1\nRouter(dhcp-config)# dns-server 8.8.8.8\nRouter(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10\n```\nL'ultimo comando esclude gli IP da .1 a .10 (riservati a server e router).\n\n### Errori comuni:\n- ❌ Dimenticare di mettere il Default Gateway nel pool DHCP\n- ❌ Lasciare i PC su \"Static\" invece di selezionare \"DHCP\"\n- ❌ Il server DHCP non è nella stessa rete dei PC (serve DHCP relay)\n- ❌ Start IP Address che parte dalla stessa rete del server",
    "keywords": "DHCP,assegnazione automatica,pool,gateway,DNS,IP Configuration"
  },
  {
    "id": 127,
    "section_id": "T",
    "number": 12,
    "title": "Sicurezza dello Switch in Packet Tracer",
    "content": "### Perché proteggere lo switch?\nLo switch è un bersaglio di attacchi perché è il punto centrale della rete LAN:\n- **MAC Flooding**: l'attaccante inonda la tabella MAC facendo diventare lo switch un hub\n- **DHCP Spoofing**: un server DHCP falso assegna gateway/DNS malevoli\n- **Accesso non autorizzato**: qualcuno collega un dispositivo a una porta libera\n\n### 1. Port Security — Limitare i MAC per porta\n\nLa **Port Security** limita quanti (e quali) indirizzi MAC possono usare una porta.\n\n#### Configurazione in Packet Tracer (CLI dello switch):\n```\nSW1(config)# interface FastEthernet0/1\nSW1(config-if)# switchport mode access\nSW1(config-if)# switchport port-security\nSW1(config-if)# switchport port-security maximum 1\nSW1(config-if)# switchport port-security mac-address sticky\nSW1(config-if)# switchport port-security violation shutdown\n```\n\n#### Cosa significa ogni comando:\n| Comando | Effetto |\n|---|---|\n| `port-security` | Attiva la sicurezza sulla porta |\n| `maximum 1` | Solo **1 MAC** ammesso sulla porta |\n| `mac-address sticky` | Impara il primo MAC e lo salva nella configurazione |\n| `violation shutdown` | Se un MAC diverso prova a collegarsi → **la porta si spegne** |\n\n#### Modalità di violazione:\n| Modalità | Comportamento |\n|---|---|\n| **shutdown** | Disattiva la porta (err-disabled). Va riattivata a mano |\n| **restrict** | Scarta i frame del MAC non autorizzato e logga l'evento |\n| **protect** | Scarta silenziosamente i frame del MAC non autorizzato |\n\n#### Verificare la port security:\n```\nSW1# show port-security interface FastEthernet0/1\n```\n\n#### Riattivare una porta in err-disabled:\n```\nSW1(config)# interface FastEthernet0/1\nSW1(config-if)# shutdown\nSW1(config-if)# no shutdown\n```\n\n### 2. Disabilitare le porte non utilizzate\nLe porte libere sono un rischio: chiunque può collegare un dispositivo.\n```\nSW1(config)# interface range FastEthernet0/10 - 24\nSW1(config-if-range)# shutdown\n```\nQuesto spegne le porte dalla 10 alla 24 se non sono in uso.\n\n### 3. DHCP Snooping\nProtegge dalla presenza di **server DHCP falsi** nella rete.\n\n#### Concetto:\n- Le porte sono divise in **trusted** (dove sta il DHCP vero) e **untrusted** (tutte le altre)\n- I pacchetti DHCP Offer/Reply sono permessi **solo dalle porte trusted**\n\n```\nSW1(config)# ip dhcp snooping\nSW1(config)# ip dhcp snooping vlan 1\nSW1(config)# interface GigabitEthernet0/1\nSW1(config-if)# ip dhcp snooping trust\n```\n\n### 4. Password sullo switch\nProteggere l'accesso alla CLI:\n```\nSW1(config)# enable secret CiscoPassword\nSW1(config)# line console 0\nSW1(config-line)# password ConPass\nSW1(config-line)# login\nSW1(config)# line vty 0 15\nSW1(config-line)# password VtyPass\nSW1(config-line)# login\n```\n\n### Riepilogo difese:\n| Minaccia | Difesa |\n|---|---|\n| MAC Flooding | Port Security (max MAC) |\n| Dispositivo non autorizzato | Port Security + shutdown porte libere |\n| DHCP falso | DHCP Snooping |\n| Accesso non autorizzato alla CLI | Password enable + console + vty |\n\n### Errori comuni:\n- ❌ Non mettere `switchport mode access` prima di `port-security`\n- ❌ Dimenticare di salvare con `copy running-config startup-config`\n- ❌ Non riattivare la porta dopo un err-disabled (sembra \"rotta\" ma è solo bloccata)",
    "keywords": "port security,MAC flooding,DHCP snooping,shutdown,sicurezza switch"
  },
  {
    "id": 128,
    "section_id": "T",
    "number": 13,
    "title": "Configurare un server FTP in Packet Tracer",
    "content": "### Cos'è FTP?\n**FTP** (File Transfer Protocol) permette di trasferire file tra client e server. È usato per:\n- **Upload**: caricare file dal PC al server\n- **Download**: scaricare file dal server al PC\n- Gestire backup, aggiornamenti firmware, configurazioni\n\nFTP usa **due porte**:\n- Porta **21**: canale di controllo (comandi)\n- Porta **20**: canale dati (trasferimento file)\n\n### Topologia necessaria:\n- 1 **Server** (FTP server)\n- 1+ **PC** client\n- 1 **Switch**\n- Cavi dritti\n\n### Passo 1 — Indirizzi IP:\n| Dispositivo | IP | Subnet Mask |\n|---|---|---|\n| Server FTP | 192.168.1.100 | 255.255.255.0 |\n| PC0 | 192.168.1.10 | 255.255.255.0 |\n\n### Passo 2 — Configurare il servizio FTP sul Server:\n1. Click sul Server → **Services** → **FTP**\n2. Il servizio è attivo di default (ON)\n3. Creare un account utente:\n\n| Campo | Valore |\n|---|---|\n| Username | admin |\n| Password | admin123 |\n| Write | ✅ (spuntare) |\n| Read | ✅ (spuntare) |\n| Delete | ✅ (spuntare) |\n| Rename | ✅ (spuntare) |\n| List | ✅ (spuntare) |\n\n4. Click **Add** per aggiungere l'utente\n\n> I permessi determinano cosa può fare l'utente: **Read** = scaricare, **Write** = caricare, **Delete** = cancellare file, ecc.\n\n### Passo 3 — Accesso FTP dal PC (Command Prompt):\nDal PC → **Desktop** → **Command Prompt**:\n```\nC:\\> ftp 192.168.1.100\nUsername: admin\nPassword: admin123\n\nftp> dir                    ← mostra i file sul server\nftp> get sampleFile.txt     ← scarica un file\nftp> put nuovoFile.txt      ← carica un file\nftp> quit                   ← esce dalla sessione FTP\n```\n\n### Comandi FTP principali:\n| Comando | Descrizione |\n|---|---|\n| `dir` | Elenca i file sul server |\n| `get <file>` | Scarica un file dal server |\n| `put <file>` | Carica un file sul server |\n| `delete <file>` | Elimina un file dal server |\n| `rename <old> <new>` | Rinomina un file |\n| `quit` | Chiude la connessione |\n\n### Passo 4 — Accesso FTP dal browser (GUI):\n1. Sul PC → **Desktop** → **Web Browser**\n2. Nella barra URL digitare: `ftp://admin:admin123@192.168.1.100`\n3. Si aprirà l'interfaccia con i file, si possono scaricare con un click\n\n### Caso pratico — Backup configurazione router via FTP:\nDal router, si può salvare la configurazione sul server FTP:\n```\nR1# copy running-config ftp:\nAddress of remote host []: 192.168.1.100\nDestination filename [R1-confg]: backup-config.txt\n```\n\n### Errori comuni:\n- ❌ Non creare l'utente FTP sul server\n- ❌ Non dare i permessi giusti (es. Write mancante → non si può fare upload)\n- ❌ Sbagliare IP del server nel comando `ftp`\n- ❌ Dimenticare username/password al login",
    "keywords": "FTP,file transfer,upload,download,porta 21,backup"
  },
  {
    "id": 129,
    "section_id": "U",
    "number": 1,
    "title": "Maturità 2024 — Testo e analisi",
    "content": "### Sessione ordinaria 2024 — Sistemi e Reti\n**Indirizzo**: ITIA - Informatica e Telecomunicazioni\n\n---\n\n### Scenario:\nUna **Regione italiana** ha creato una rete in **fibra ottica** che connette Enti locali, scuole e strutture sanitarie pubbliche. Gestisce anche un **data-center** con il **fascicolo sanitario elettronico** dei cittadini.\n\nOra vuole **estendere la rete** alle **strutture sanitarie private convenzionate** per integrare i loro dati nel fascicolo sanitario elettronico.\n\n### Dati chiave del problema:\n| Dato | Valore |\n|---|---|\n| Rete principale | 10.0.0.0/8 |\n| Sottorete assegnata | **10.100.0.0/16** |\n| Strutture da connettere | ~**2000** (con crescita futura) |\n| IP minimi per struttura | **8 indirizzi** complessivi |\n| Accesso a Internet | **NO** — solo verso il data-center |\n| Isolamento | Ogni struttura **non** deve vedere le altre |\n| Dati trattati | **Sensibili** (dati sanitari) |\n\n### Cosa ci chiedono (Prima parte):\n1. Schema dell'infrastruttura + piano di indirizzamento\n2. Dispositivo da fornire alle strutture private\n3. Come collegare la LAN esistente della struttura\n4. Sicurezza dei dati sanitari\n\n### Cosa ci chiedono (Seconda parte — 2 a scelta su 4):\nI. Strategie contro perdita dati\nII. Autenticazione multi-fattore per il fascicolo\nIII. NAT/port forwarding per web server aziendale\nIV. Troubleshooting \"non navigo su Internet\"\n\n### Approccio consigliato:\n- Leggi **tutto** il testo prima di scrivere\n- Fai i **calcoli di subnetting** su carta\n- Disegna lo **schema di rete** prima della spiegazione\n- Nella seconda parte, scegli i 2 quesiti dove sei più preparato",
    "keywords": "maturità 2024,traccia,analisi,fascicolo sanitario,fibra ottica"
  },
  {
    "id": 130,
    "section_id": "U",
    "number": 2,
    "title": "Maturità 2024 — Punto 1: Infrastruttura e indirizzamento",
    "content": "### Punto 1 — Schema dell'infrastruttura e piano di indirizzamento IP\n\n---\n\n### Schema della rete pre-esistente:\n\n| Livello | Elemento | Rete |\n|---|---|---|\n| Centro | **DATA-CENTER REGIONALE** (Fascicolo Sanitario) | 10.0.0.0/8 |\n| Backbone | Fibra ottica regionale | — |\n| Periferia | Enti Locali | 10.1.0.0/16 |\n| Periferia | Scuole | 10.2.0.0/16 |\n| Periferia | Sanità Pubblica | 10.3.0.0/16 |\n\nStruttura a **stella**: il data-center è il nodo centrale, le sedi periferiche si collegano tramite il backbone in fibra ottica.\n\n### Evoluzione — Aggiunta strutture private convenzionate:\n\nIl data-center ora serve anche le strutture sanitarie private:\n\n| Ramo | Tipo | Rete |\n|---|---|---|\n| Enti Locali | Pubblico (esistente) | 10.1.0.0/16 |\n| Scuole | Pubblico (esistente) | 10.2.0.0/16 |\n| Sanità Pubblica | Pubblico (esistente) | 10.3.0.0/16 |\n| **Sanità PRIVATA** | **Nuovo** | **10.100.0.0/16** |\n| (Espansione futura) | Riservato | — |\n\nOgni ramo si collega al data-center tramite backbone in fibra. Le strutture private ottengono ciascuna una sottorete /28 dalla rete 10.100.0.0/16.\n\n---\n\n### Piano di indirizzamento per le strutture private\n\n**Rete assegnata**: `10.100.0.0/16` (65.536 indirizzi disponibili)\n\n**Requisiti**:\n- ~2000 strutture con crescita futura\n- Minimo 8 indirizzi per struttura\n\n**Calcolo della subnet mask**:\n\n8 indirizzi complessivi → la più piccola sottorete che contiene almeno 8 indirizzi è la **/29** (2³ = 8 indirizzi, 6 host utilizzabili).\n\nPerò il testo dice \"con possibili incrementi futuri\", quindi scegliamo **/28** (2⁴ = **16 indirizzi, 14 host**) per dare margine.\n\n**Verifica capacità**:\n- Con /28: 65.536 / 16 = **4.096 sottoreti** possibili\n- Servono ~2000 → **abbondantemente sufficiente** con margine per raddoppiare\n\n**Subnet mask**: 255.255.255.240 (**/28**)\n\n### Esempio di assegnazione delle prime strutture:\n\n| # Struttura | Rete | Primo host | Ultimo host | Broadcast | Gateway |\n|---|---|---|---|---|---|\n| 1 | 10.100.0.0/28 | 10.100.0.1 | 10.100.0.14 | 10.100.0.15 | 10.100.0.1 |\n| 2 | 10.100.0.16/28 | 10.100.0.17 | 10.100.0.30 | 10.100.0.31 | 10.100.0.17 |\n| 3 | 10.100.0.32/28 | 10.100.0.33 | 10.100.0.46 | 10.100.0.47 | 10.100.0.33 |\n| 4 | 10.100.0.48/28 | 10.100.0.49 | 10.100.0.62 | 10.100.0.63 | 10.100.0.49 |\n| ... | ... | ... | ... | ... | ... |\n| 16 | 10.100.0.240/28 | 10.100.0.241 | 10.100.0.254 | 10.100.0.255 | 10.100.0.241 |\n| 17 | 10.100.1.0/28 | 10.100.1.1 | 10.100.1.14 | 10.100.1.15 | 10.100.1.1 |\n| ... | ... | ... | ... | ... | ... |\n\nCon il salto di 16 (256 - 240), si riempiono 16 sottoreti per ogni valore del 4° ottetto, poi si passa al 3° ottetto successivo.\n\n### Tecnologia di trasporto:\n- Backbone in **fibra ottica monomodale** (lunga distanza tra i nodi regionali)\n- Ultimo miglio verso le strutture: **fibra FTTH** o **FTTC + VDSL** dove la fibra non arriva\n- Protocollo: **MPLS** o **VPN IPsec site-to-site** sul backbone regionale",
    "keywords": "infrastruttura,piano indirizzamento,/28,VLSM,fibra ottica,schema rete"
  },
  {
    "id": 131,
    "section_id": "U",
    "number": 3,
    "title": "Maturità 2024 — Punto 2: Dispositivo per le strutture",
    "content": "### Punto 2 — Dispositivo fornito a ogni struttura sanitaria privata\n\n---\n\n### Tipo di dispositivo: Router/Firewall gestito (CPE)\n\nLa società regionale fornisce un **CPE** (Customer Premises Equipment) — un router con funzioni di firewall, gestibile da remoto.\n\n### Caratteristiche hardware:\n\n| Componente | Specifica |\n|---|---|\n| Tipo | Router con firewall integrato |\n| Porta WAN | 1x **SFP** (fibra ottica) per la rete regionale |\n| Porte LAN | 4x **RJ45 Gigabit Ethernet** per la rete interna |\n| Porta Console | 1x RJ45 per configurazione locale |\n| Gestione remota | Supporto **SSH** e **SNMP** |\n| Esempio modello | Cisco ISR 1100, MikroTik, pfSense |\n\n### Configurazione delle porte:\n\n**Porta WAN (lato rete regionale):**\n| Campo | Valore (es. struttura #1) |\n|---|---|\n| IP Address | 10.100.0.1 |\n| Subnet Mask | 255.255.255.240 (/28) |\n| Gateway | IP del router regionale a monte |\n\n**Porte LAN (lato rete interna struttura):**\n| Campo | Valore |\n|---|---|\n| IP Address | 192.168.1.1 (rete privata interna) |\n| Subnet Mask | 255.255.255.0 |\n| DHCP | Pool per i dispositivi interni |\n\n### Servizi configurati sul dispositivo:\n\n| Servizio | Funzione |\n|---|---|\n| **NAT** | Traduce gli IP interni (192.168.x.x) nell'IP della rete regionale (10.100.x.x) |\n| **Firewall/ACL** | Permette SOLO il traffico verso il data-center regionale. Blocca tutto il resto |\n| **VPN IPsec** | Tunnel cifrato verso il data-center per proteggere i dati sanitari |\n| **DHCP** | Assegna automaticamente IP alla rete interna (opzionale) |\n| **SSH** | Accesso remoto sicuro per la gestione da parte della società regionale |\n| **SNMP** | Monitoraggio remoto dello stato del dispositivo |\n| **NTP** | Sincronizzazione dell'ora (importante per i log) |\n| **Logging/Syslog** | Log degli eventi inviati al centro di gestione regionale |\n\n### ACL di esempio (isolamento tra strutture):\n```\n! Permetti solo traffico verso il data-center\npermit ip 10.100.0.0 0.0.0.15 host 10.0.0.10\n! Blocca comunicazione verso altre strutture\ndeny ip 10.100.0.0 0.0.0.15 10.100.0.0 0.0.255.255\n! Blocca accesso a Internet\ndeny ip any any\n```\n\nQueste ACL garantiscono che ogni struttura può comunicare **solo con il data-center** e non con le altre 2000 strutture collegate.",
    "keywords": "CPE,router,firewall,porte,NAT,VPN,ACL,isolamento"
  },
  {
    "id": 132,
    "section_id": "U",
    "number": 4,
    "title": "Maturità 2024 — Punto 3: Connessione LAN esistente",
    "content": "### Punto 3 — Collegamento della LAN pre-esistente alla rete regionale\n\n---\n\n### Situazione tipica di una struttura sanitaria privata:\n\nLa clinica ha già una rete locale funzionante:\n\n| Dispositivo | Collegamento |\n|---|---|\n| PC medici | → Switch LAN |\n| PC accettazione | → Switch LAN |\n| Server locale | → Switch LAN |\n| Stampanti | → Switch LAN |\n| Switch LAN | → Router Internet → ISP |\n\nTutti i dispositivi sono collegati allo **switch LAN centrale**, che a sua volta è connesso al **router Internet** (ISP).\n\nI dispositivi usano indirizzi privati (es. 192.168.1.0/24) con il router ISP come gateway.\n\n### Come si aggiunge il collegamento regionale:\n\nLo switch LAN viene collegato a **due gateway**:\n\n| Dispositivo | IP | Ruolo |\n|---|---|---|\n| PC medici, accettazione, server, stampanti | 192.168.1.x | Rete interna esistente |\n| **Switch LAN** | — | Nodo centrale |\n| Router ISP | 192.168.1.1 | Gateway per **Internet** |\n| **CPE Regionale** | 192.168.1.254 | Gateway per **rete regionale** (10.100.0.x via fibra) |\n\nIl CPE si collega allo switch con un cavo UTP e alla rete regionale tramite fibra ottica. Il traffico verso 10.x.x.x passa dal CPE, il resto continua via ISP.\n\n### Modifiche necessarie:\n\n**1. Collegamento fisico:**\n- Il CPE regionale viene collegato allo **switch esistente** tramite una porta LAN\n- Il CPE si collega alla fibra regionale tramite la porta WAN (SFP)\n- **Nessun nuovo cablaggio** interno necessario\n\n**2. Configurazione di rete:**\n\n| Elemento | Prima | Dopo |\n|---|---|---|\n| Gateway per Internet | Router ISP (192.168.1.1) | Router ISP (192.168.1.1) — invariato |\n| Gateway per data-center | Nessuno | CPE regionale (192.168.1.254) |\n| Routing | Tutto via ISP | **Static route** per 10.0.0.0/8 via CPE |\n\n**3. Rotta statica sul router ISP (o CPE):**\nSul router ISP della struttura si aggiunge:\n```\nip route 10.0.0.0 255.0.0.0 192.168.1.254\n```\nCosì il traffico verso la rete regionale (10.x.x.x) passa dal CPE, mentre il traffico Internet continua a passare dall'ISP.\n\n**4. Alternativa — CPE come gateway unico:**\nSe si vuole semplificare, il CPE può diventare il **gateway principale** dei PC:\n- CPE: 192.168.1.1 (prende il ruolo di gateway)\n- Il CPE instrada verso il data-center via fibra\n- Per Internet: il CPE non fa forwarding (la traccia dice \"no Internet via rete regionale\")\n- Si mantiene il router ISP per Internet su una rotta separata\n\n### Apparati aggiuntivi necessari:\n| Apparato | Quantità | Ruolo |\n|---|---|---|\n| CPE regionale | 1 (fornito dalla regione) | Connessione fibra + firewall |\n| Cavo UTP/patch cord | 1 | Collega CPE allo switch |\n| Switch (se porte esaurite) | 0 o 1 | Solo se lo switch attuale non ha porte libere |\n\n### Importante:\n- La rete interna della struttura **non cambia** (stessi IP, stessi PC)\n- Si aggiunge solo il CPE e una rotta statica\n- I dati sanitari passano per il **tunnel VPN cifrato** sul CPE",
    "keywords": "LAN esistente,collegamento,CPE,rotta statica,switch,cablaggio"
  },
  {
    "id": 133,
    "section_id": "U",
    "number": 5,
    "title": "Maturità 2024 — Punto 4: Sicurezza dati sanitari",
    "content": "### Punto 4 — Sicurezza dei dati sanitari\n\n---\n\nI dati sanitari sono **dati sensibili** (categoria particolare secondo il GDPR). Richiedono il massimo livello di protezione.\n\n### Sicurezza in transito (durante il trasferimento):\n\n| Misura | Dettaglio |\n|---|---|\n| **VPN IPsec** | Tunnel cifrato tra ogni struttura e il data-center. Usa AES-256 per la cifratura e SHA-256 per l'integrità |\n| **TLS 1.3** | Per le applicazioni web (portale fascicolo sanitario) |\n| **Certificati digitali** | Ogni CPE ha un certificato per autenticarsi con il data-center (mutua autenticazione) |\n| **Isolamento** | ACL sul CPE impediscono comunicazioni tra strutture diverse |\n\n### Sicurezza nell'archiviazione (data-center):\n\n| Misura | Dettaglio |\n|---|---|\n| **Crittografia at rest** | I dati nel data-center sono cifrati su disco (AES-256) |\n| **Controllo accessi** | RBAC (Role-Based Access Control): ogni medico accede solo ai propri pazienti |\n| **Autenticazione forte** | MFA per gli operatori sanitari (password + OTP o smart card) |\n| **Log e audit trail** | Ogni accesso ai dati è registrato (chi, quando, cosa) — obbligatorio per legge |\n| **Backup** | Regola 3-2-1: 3 copie, 2 supporti diversi, 1 off-site (altra sede) |\n| **Firewall e IPS** | Protezione perimetrale del data-center |\n| **Ridondanza** | Server in cluster, storage RAID, alimentazione doppia con UPS |\n\n### Modalità di trasferimento dati al data-center:\n\n**Trasferimento programmato (batch):**\n- Ogni struttura invia i dati delle prestazioni giornaliere al data-center in una **finestra temporale notturna** (es. 01:00 - 05:00)\n- I dati vengono compressi e cifrati prima dell'invio\n- Protocollo: **SFTP** (FTP su SSH) o **HTTPS** (API REST)\n- Il data-center conferma la ricezione con un **hash di verifica** (SHA-256)\n\n**Trasferimento in tempo reale (opzionale):**\n- Per dati urgenti (es. pronto soccorso): invio immediato tramite API HTTPS\n- Il portale web del fascicolo sanitario mostra i dati in tempo reale\n\n### Schedulazione temporale:\n```\n00:00-01:00  → Preparazione: il sistema locale raccoglie i dati del giorno\n01:00-05:00  → Finestra di trasferimento: invio batch via VPN al data-center\n05:00-06:00  → Verifica: il data-center controlla integrità (hash) e conferma\n06:00        → Report: la struttura riceve il log di conferma\n```\n\n### Conformità normativa:\n- **GDPR** (Regolamento UE 2016/679): dati sanitari = dati particolari, richiedono valutazione d'impatto (DPIA)\n- **CAD** (Codice Amministrazione Digitale): fascicolo sanitario elettronico regolamentato\n- **Data Protection Officer** (DPO) obbligatorio nel data-center",
    "keywords": "sicurezza,VPN,cifratura,GDPR,backup,SFTP,trasferimento,data-center"
  },
  {
    "id": 134,
    "section_id": "U",
    "number": 6,
    "title": "Maturità 2024 — Quesito I: Tolleranza ai guasti",
    "content": "### Seconda parte — Quesito I\n**Strategie contro malfunzionamenti e perdita dati**\n\n---\n\n### Guasti alla connessione durante il trasferimento:\n\n**1. Protocollo di trasferimento affidabile:**\n- Usare **TCP** (non UDP) per garantire la consegna dei dati\n- Il protocollo applicativo (SFTP o HTTPS) verifica automaticamente l'integrità\n\n**2. Meccanismo di ripresa (resume):**\n- Se la connessione cade durante un trasferimento, il sistema **riprende da dove si era fermato** (non ricomincia da zero)\n- I file vengono inviati in **blocchi** numerati; il data-center comunica l'ultimo blocco ricevuto\n\n**3. Retry automatico:**\n- Se il trasferimento fallisce, il sistema ritenta automaticamente dopo un intervallo crescente (es. 1 min, 5 min, 15 min)\n- Dopo N tentativi falliti → allarme all'amministratore\n\n**4. Connessione di backup:**\n- Se la fibra è guasta, il CPE può avere una connessione **4G/LTE di backup** per i dati urgenti\n- Switchover automatico o manuale\n\n### Guasti ai sistemi di archiviazione:\n\n**1. Storage ridondante:**\n- Dischi in **RAID 5** o **RAID 6** nel data-center: il guasto di 1-2 dischi non causa perdita dati\n- Hot spare: disco pronto a sostituire automaticamente quello guasto\n\n**2. Backup stratificato:**\n| Tipo | Frequenza | Dove |\n|---|---|---|\n| Snapshot | Ogni ora | Stesso data-center |\n| Backup incrementale | Ogni notte | Storage separato |\n| Backup completo | Settimanale | **Sito remoto** (disaster recovery) |\n\n**3. Replica geografica:**\n- Il data-center ha un **sito di disaster recovery** in un'altra città\n- Replica **sincrona** (tempo reale) o **asincrona** (con leggero ritardo)\n- In caso di disastro (incendio, alluvione) i dati sono salvi\n\n**4. Verifica integrità:**\n- Dopo ogni trasferimento, il data-center calcola l'hash SHA-256 dei dati ricevuti\n- Lo confronta con l'hash calcolato dalla struttura mittente\n- Se non corrispondono → il file è corrotto → si richiede il reinvio",
    "keywords": "tolleranza guasti,backup,RAID,disaster recovery,retry,ridondanza"
  },
  {
    "id": 135,
    "section_id": "U",
    "number": 7,
    "title": "Maturità 2024 — Quesito II: Autenticazione multi-fattore",
    "content": "### Seconda parte — Quesito II\n**Autenticazione qualificata per il fascicolo sanitario elettronico**\n\n---\n\n### Il problema:\nIl cittadino deve poter consultare via web i propri dati sanitari (referti, visite, immagini). Serve un sistema di autenticazione **forte** perché i dati sono sensibili.\n\n### Multi-Factor Authentication (MFA):\nL'MFA richiede **almeno 2 fattori** di categorie diverse:\n\n| Categoria | Fattore | Esempio |\n|---|---|---|\n| **Qualcosa che sai** | Password, PIN | Password personale |\n| **Qualcosa che hai** | Dispositivo fisico | Smartphone, smart card, token |\n| **Qualcosa che sei** | Biometria | Impronta, riconoscimento facciale |\n\n### Implementazione proposta:\n\n**Metodo 1 — SPID (Sistema Pubblico Identità Digitale):**\n- Il cittadino accede con le credenziali SPID di livello 2 o 3\n- Livello 2: username + password + **OTP via app** (es. PosteID, LepidaID)\n- Livello 3: **smart card** o dispositivo certificato\n- Già adottato dalla PA italiana per i servizi sanitari\n\n**Metodo 2 — CIE (Carta d'Identità Elettronica):**\n- Il cittadino usa la **CIE** con chip NFC + PIN\n- Lettore NFC sul PC o smartphone\n- Garantisce autenticazione di livello 3\n\n**Metodo 3 — Credenziali regionali + OTP:**\n- Username e password scelte dal cittadino\n- Ad ogni accesso: codice **OTP** (One-Time Password) inviato via:\n  - **App authenticator** (Google Authenticator, Authy)\n  - **SMS** (meno sicuro ma più semplice)\n  - **Email** (fallback)\n\n### Flusso di accesso tipico:\n```\n1. Cittadino → portale web fascicolo sanitario\n2. Inserisce username e password (fattore 1: qualcosa che sa)\n3. Il sistema invia un codice OTP all'app sullo smartphone\n4. Il cittadino inserisce il codice OTP (fattore 2: qualcosa che ha)\n5. Accesso autorizzato → visualizza i propri dati\n```\n\n### Misure aggiuntive:\n- **Sessione a tempo**: scadenza automatica dopo 15 minuti di inattività\n- **HTTPS obbligatorio**: tutta la comunicazione è cifrata con TLS 1.3\n- **Rate limiting**: massimo 5 tentativi di login falliti → blocco temporaneo\n- **Log degli accessi**: il cittadino può vedere chi ha consultato i suoi dati",
    "keywords": "MFA,SPID,CIE,OTP,autenticazione,fascicolo sanitario"
  },
  {
    "id": 136,
    "section_id": "U",
    "number": 8,
    "title": "Maturità 2024 — Quesito III: NAT e port forwarding",
    "content": "### Seconda parte — Quesito III\n**Rendere accessibile un web server locale da Internet**\n\n---\n\n### Scenario:\n- Piccola azienda con **un solo IP pubblico statico** sul router\n- Web server interno (rete privata) da rendere raggiungibile da Internet\n- Servizi: **HTTP** (porta 80), **HTTPS** (porta 443), **SSH** (porta 22)\n\n### Soluzione: Static NAT / Port Forwarding\n\nIl router deve fare **port forwarding**: quando arriva traffico sull'IP pubblico su certe porte, lo inoltra al web server interno.\n\n### Schema di rete:\n\n| Posizione | Dispositivo | IP |\n|---|---|---|\n| Esterno | Internet | — |\n| WAN | Router (ip nat outside) | 203.0.113.1 (IP pubblico) |\n| LAN | Switch | rete 192.168.1.0/24 |\n| LAN | Web Server | 192.168.1.100 |\n\nIl router separa la rete pubblica (Internet) dalla rete privata (LAN). Con il port forwarding, le richieste che arrivano sull'IP pubblico vengono inoltrate al web server interno.\n\n### Configurazione del router:\n\n**1. Interfacce:**\n```\n! Interfaccia WAN (verso Internet)\ninterface GigabitEthernet0/0\n ip address 203.0.113.1 255.255.255.252\n ip nat outside\n no shutdown\n\n! Interfaccia LAN (verso rete interna)\ninterface GigabitEthernet0/1\n ip address 192.168.1.1 255.255.255.0\n ip nat inside\n no shutdown\n```\n\n**2. Port forwarding (Static NAT con porte):**\n```\n! HTTP: porta 80 dall'esterno → web server interno\nip nat inside source static tcp 192.168.1.100 80 203.0.113.1 80\n\n! HTTPS: porta 443 dall'esterno → web server interno\nip nat inside source static tcp 192.168.1.100 443 203.0.113.1 443\n\n! SSH: porta 22 dall'esterno → web server interno\nip nat inside source static tcp 192.168.1.100 22 203.0.113.1 22\n```\n\n**3. ACL per filtrare il traffico (sicurezza):**\n```\n! Permetti HTTP e HTTPS da qualsiasi sorgente\naccess-list 101 permit tcp any host 203.0.113.1 eq 80\naccess-list 101 permit tcp any host 203.0.113.1 eq 443\n\n! SSH solo da IP fidati (es. casa dell'amministratore)\naccess-list 101 permit tcp host 85.42.100.50 host 203.0.113.1 eq 22\n\n! Permetti risposte a connessioni già stabilite\naccess-list 101 permit tcp any any established\n\n! Blocca tutto il resto\naccess-list 101 deny ip any any\n\n! Applica alla WAN\ninterface GigabitEthernet0/0\n ip access-group 101 in\n```\n\n### Motivazioni delle scelte:\n- **Static NAT con porte**: perché abbiamo un solo IP pubblico e più servizi\n- **ACL restrittiva su SSH**: SSH è critico per la sicurezza, limitiamo a IP noti\n- **HTTPS**: il web server dovrebbe avere un **certificato TLS** valido\n- **Porta SSH standard (22)**: in produzione si potrebbe cambiare (es. 2222) per ridurre gli attacchi automatici",
    "keywords": "NAT,port forwarding,ACL,static NAT,HTTP,HTTPS,SSH,IP pubblico"
  },
  {
    "id": 137,
    "section_id": "U",
    "number": 9,
    "title": "Maturità 2024 — Quesito IV: Troubleshooting rete",
    "content": "### Seconda parte — Quesito IV\n**Diagnostica: un utente non riesce a navigare su Internet**\n\n---\n\n### Approccio sistematico (dal basso verso l'alto del modello OSI):\n\n### Fase 1 — Verifiche sul PC dell'utente:\n\n**Comando: `ipconfig`**\n```\nC:\\> ipconfig\nIP Address: 192.168.1.50\nSubnet Mask: 255.255.255.0\nDefault Gateway: 192.168.1.1\nDNS Server: 8.8.8.8\n```\n\nControlla:\n- L'IP è nella rete corretta? (non 169.254.x.x che indica DHCP fallito)\n- Il gateway è configurato?\n- Il DNS è configurato?\n\n---\n\n### Tre possibili cause e relative diagnosi:\n\n### Causa 1 — Problema fisico / Livello 1-2\n**Sintomo**: `ipconfig` mostra 169.254.x.x (APIPA) o \"Media disconnected\"\n\n**Diagnosi**:\n```\nC:\\> ping 192.168.1.1     → fallisce (gateway non raggiungibile)\n```\n- Controllare il **cavo di rete** (scollegato? danneggiato?)\n- Controllare la **spia LED** sulla porta dello switch e sul PC\n- Provare a **cambiare porta** sullo switch o **cambiare cavo**\n- Verificare che la scheda di rete sia abilitata\n\n**Strumenti**: ispezione visiva, test cavo, `ipconfig`, LED porte\n\n---\n\n### Causa 2 — Problema di routing / Gateway / Livello 3\n**Sintomo**: il PC ha un IP corretto, raggiunge il gateway, ma non Internet\n\n**Diagnosi**:\n```\nC:\\> ping 192.168.1.1     → OK (gateway raggiungibile)\nC:\\> ping 8.8.8.8         → FALLISCE (Internet non raggiungibile)\nC:\\> tracert 8.8.8.8      → si ferma al gateway o al router\n```\n\nPossibili problemi:\n- Il **router/gateway** ha perso la connessione Internet (link WAN down)\n- Configurazione **NAT** errata sul router\n- **Default route** mancante sul router\n- **Firewall** sul router blocca il traffico in uscita\n\n**Strumenti**: `ping`, `tracert`, verifica configurazione router\n\n---\n\n### Causa 3 — Problema DNS / Livello 7\n**Sintomo**: il PC raggiunge Internet per IP ma non per nome\n\n**Diagnosi**:\n```\nC:\\> ping 8.8.8.8         → OK (Internet raggiungibile)\nC:\\> ping www.google.com  → FALLISCE (\"could not find host\")\nC:\\> nslookup google.com  → \"Server: UnKnown\" o timeout\n```\n\nPossibili problemi:\n- **Server DNS** non configurato o non raggiungibile\n- Server DNS del provider **guasto**\n- DNS **bloccato** dal firewall\n\n**Soluzione rapida**: cambiare DNS con 8.8.8.8 (Google) o 1.1.1.1 (Cloudflare)\n\n**Strumenti**: `nslookup`, `ping` verso IP vs nome\n\n---\n\n### Riepilogo diagnostica:\n| Step | Comando | Se fallisce → causa |\n|---|---|---|\n| 1 | `ipconfig` | Configurazione IP / DHCP |\n| 2 | `ping gateway` | Cavo / switch / livello fisico |\n| 3 | `ping 8.8.8.8` | Router / NAT / connessione ISP |\n| 4 | `ping www.google.com` | DNS |\n| 5 | `tracert 8.8.8.8` | Identifica il punto esatto del blocco |",
    "keywords": "troubleshooting,diagnosi,ping,tracert,nslookup,gateway,DNS,cavo"
  }
];

export const quizQuestions = [
  {
    "id": 1,
    "section_id": "A",
    "topic_id": null,
    "question": "Qual è la funzione principale di un mezzo trasmissivo?",
    "option_a": "Generare segnali elettrici",
    "option_b": "Elaborare dati",
    "option_c": "Trasportare segnali da un dispositivo all'altro",
    "option_d": "Memorizzare informazioni",
    "correct_answer": "C",
    "explanation": "Il mezzo trasmissivo è il supporto fisico o canale che trasporta i segnali tra dispositivi."
  },
  {
    "id": 2,
    "section_id": "A",
    "topic_id": null,
    "question": "Quale tra questi è un mezzo trasmissivo guidato?",
    "option_a": "Wi-Fi",
    "option_b": "Bluetooth",
    "option_c": "Satellite",
    "option_d": "Fibra ottica",
    "correct_answer": "D",
    "explanation": "I mezzi guidati hanno un percorso fisico definito: doppino, fibra ottica, cavo coassiale."
  },
  {
    "id": 3,
    "section_id": "A",
    "topic_id": null,
    "question": "Perché i fili del doppino intrecciato sono intrecciati?",
    "option_a": "Per aumentare la velocità",
    "option_b": "Per ridurre interferenze e diafonia",
    "option_c": "Per ridurre il costo",
    "option_d": "Per aumentare la distanza",
    "correct_answer": "B",
    "explanation": "L'intreccio riduce le interferenze elettromagnetiche e la diafonia tra i cavi."
  },
  {
    "id": 4,
    "section_id": "A",
    "topic_id": null,
    "question": "Quale connettore usa il doppino intrecciato?",
    "option_a": "RJ11",
    "option_b": "USB-C",
    "option_c": "RJ45",
    "option_d": "LC",
    "correct_answer": "C",
    "explanation": "Il doppino intrecciato utilizza il connettore RJ45 per le reti Ethernet."
  },
  {
    "id": 5,
    "section_id": "A",
    "topic_id": null,
    "question": "Qual è la differenza principale tra UTP e STP?",
    "option_a": "La velocità",
    "option_b": "La schermatura metallica",
    "option_c": "Il numero di fili",
    "option_d": "Il tipo di connettore",
    "correct_answer": "B",
    "explanation": "STP ha una schermatura metallica che protegge dalle interferenze, UTP no."
  },
  {
    "id": 6,
    "section_id": "A",
    "topic_id": null,
    "question": "Quale tipo di fibra usa il laser e raggiunge centinaia di km?",
    "option_a": "Multimodale",
    "option_b": "Monomodale",
    "option_c": "Bifibra",
    "option_d": "Coassiale",
    "correct_answer": "B",
    "explanation": "La fibra monomodale usa laser, un solo percorso di luce, e copre centinaia di km."
  },
  {
    "id": 7,
    "section_id": "A",
    "topic_id": null,
    "question": "Quale NON è un vantaggio della fibra ottica?",
    "option_a": "Costo basso",
    "option_b": "Velocità elevata",
    "option_c": "Immunità alle interferenze",
    "option_d": "Sicurezza",
    "correct_answer": "A",
    "explanation": "La fibra ottica ha un costo elevato, che è il suo principale svantaggio."
  },
  {
    "id": 8,
    "section_id": "A",
    "topic_id": null,
    "question": "Quale tecnologia wireless è usata per connessioni a corto raggio?",
    "option_a": "Wi-Fi",
    "option_b": "5G",
    "option_c": "Bluetooth",
    "option_d": "Satellite",
    "correct_answer": "C",
    "explanation": "Bluetooth è progettato per connessioni a corto raggio (pochi metri)."
  },
  {
    "id": 9,
    "section_id": "B",
    "topic_id": null,
    "question": "Quale apparato ripete il segnale a tutte le porte?",
    "option_a": "Switch",
    "option_b": "Router",
    "option_c": "Hub",
    "option_d": "Access Point",
    "correct_answer": "C",
    "explanation": "L'hub opera al livello 1 e ripete il segnale a tutte le porte, causando collisioni."
  },
  {
    "id": 10,
    "section_id": "B",
    "topic_id": null,
    "question": "A quale livello OSI opera uno switch?",
    "option_a": "Livello 1",
    "option_b": "Livello 2",
    "option_c": "Livello 3",
    "option_d": "Livello 4",
    "correct_answer": "B",
    "explanation": "Lo switch opera al livello 2 (Data Link), leggendo gli indirizzi MAC."
  },
  {
    "id": 11,
    "section_id": "B",
    "topic_id": null,
    "question": "Cosa contiene la tabella MAC di uno switch?",
    "option_a": "Indirizzi IP",
    "option_b": "Associazioni MAC-porta",
    "option_c": "Nomi host",
    "option_d": "Rotte di rete",
    "correct_answer": "B",
    "explanation": "La tabella MAC associa ogni indirizzo MAC alla porta fisica corrispondente."
  },
  {
    "id": 12,
    "section_id": "B",
    "topic_id": null,
    "question": "Quale funzione NON è tipica di un router?",
    "option_a": "NAT",
    "option_b": "DHCP",
    "option_c": "Commutazione frame via MAC",
    "option_d": "Firewall",
    "correct_answer": "C",
    "explanation": "La commutazione dei frame tramite MAC è funzione dello switch, non del router."
  },
  {
    "id": 13,
    "section_id": "B",
    "topic_id": null,
    "question": "Cosa fa un Access Point?",
    "option_a": "Instrada pacchetti IP",
    "option_b": "Converte segnale analogico-digitale",
    "option_c": "Funge da ponte tra rete cablata e wireless",
    "option_d": "Ripete segnali a tutte le porte",
    "correct_answer": "C",
    "explanation": "L'AP permette ai dispositivi wireless di connettersi alla rete LAN cablata."
  },
  {
    "id": 14,
    "section_id": "B",
    "topic_id": null,
    "question": "Un router Wi-Fi domestico combina:",
    "option_a": "Solo router e modem",
    "option_b": "Router, switch e access point",
    "option_c": "Solo switch e hub",
    "option_d": "Hub e access point",
    "correct_answer": "B",
    "explanation": "Un router Wi-Fi è la combinazione di router + switch + access point."
  },
  {
    "id": 15,
    "section_id": "B",
    "topic_id": null,
    "question": "A quale livello OSI opera un router?",
    "option_a": "Livello 1",
    "option_b": "Livello 2",
    "option_c": "Livello 3",
    "option_d": "Livello 7",
    "correct_answer": "C",
    "explanation": "Il router opera al livello 3 (Rete) e instrada pacchetti tramite indirizzi IP."
  },
  {
    "id": 16,
    "section_id": "B",
    "topic_id": null,
    "question": "Cosa fa il modem?",
    "option_a": "Gestisce il traffico LAN",
    "option_b": "Converte il segnale per la linea del provider",
    "option_c": "Assegna indirizzi IP",
    "option_d": "Filtra il traffico di rete",
    "correct_answer": "B",
    "explanation": "Il modem converte il segnale digitale in analogico e viceversa per il provider."
  },
  {
    "id": 17,
    "section_id": "C",
    "topic_id": null,
    "question": "Qual è il vantaggio principale del cablaggio strutturato?",
    "option_a": "Costo minimo",
    "option_b": "Ordine, flessibilità e scalabilità",
    "option_c": "Velocità massima",
    "option_d": "Nessuna manutenzione",
    "correct_answer": "B",
    "explanation": "Il cablaggio strutturato garantisce ordine, flessibilità, facilità di manutenzione e scalabilità."
  },
  {
    "id": 18,
    "section_id": "C",
    "topic_id": null,
    "question": "Quale componente termina i cavi provenienti dagli uffici?",
    "option_a": "Switch",
    "option_b": "Hub",
    "option_c": "Patch panel",
    "option_d": "Router",
    "correct_answer": "C",
    "explanation": "Il patch panel è il pannello dove vengono terminati i cavi che arrivano dalle prese ufficio."
  },
  {
    "id": 19,
    "section_id": "C",
    "topic_id": null,
    "question": "Qual è la larghezza standard di un armadio rack?",
    "option_a": "12 pollici",
    "option_b": "15 pollici",
    "option_c": "19 pollici",
    "option_d": "24 pollici",
    "correct_answer": "C",
    "explanation": "L'armadio rack ha una larghezza standardizzata di 19 pollici."
  },
  {
    "id": 20,
    "section_id": "C",
    "topic_id": null,
    "question": "Il cablaggio dorsale (backbone) collega:",
    "option_a": "PC alle prese a muro",
    "option_b": "Armadi di piano tra loro",
    "option_c": "Switch alle stampanti",
    "option_d": "Monitor ai server",
    "correct_answer": "B",
    "explanation": "Il backbone collega gli armadi di piano tra loro e al centro stella principale."
  },
  {
    "id": 21,
    "section_id": "C",
    "topic_id": null,
    "question": "Quale standard americano regola il cablaggio strutturato?",
    "option_a": "ISO 9001",
    "option_b": "IEEE 802.3",
    "option_c": "EIA/TIA-568",
    "option_d": "RFC 2549",
    "correct_answer": "C",
    "explanation": "Lo standard EIA/TIA-568 definisce le specifiche per il cablaggio in edifici commerciali."
  },
  {
    "id": 22,
    "section_id": "C",
    "topic_id": null,
    "question": "Qual è la distanza massima del cablaggio orizzontale?",
    "option_a": "50 metri",
    "option_b": "90 metri (+10m patch cord)",
    "option_c": "200 metri",
    "option_d": "1 km",
    "correct_answer": "B",
    "explanation": "Il cablaggio orizzontale ha un limite di 90 metri più 10 metri di patch cord."
  },
  {
    "id": 23,
    "section_id": "D",
    "topic_id": null,
    "question": "Ethernet è una tecnologia per reti:",
    "option_a": "WAN",
    "option_b": "MAN",
    "option_c": "LAN",
    "option_d": "PAN",
    "correct_answer": "C",
    "explanation": "Ethernet è la tecnologia LAN (Local Area Network) più diffusa al mondo."
  },
  {
    "id": 24,
    "section_id": "D",
    "topic_id": null,
    "question": "A quale livello OSI opera principalmente Ethernet?",
    "option_a": "Livello 1",
    "option_b": "Livello 2",
    "option_c": "Livello 3",
    "option_d": "Livello 4",
    "correct_answer": "B",
    "explanation": "Ethernet opera al livello 2 (Data Link), gestendo frame e indirizzi MAC."
  },
  {
    "id": 25,
    "section_id": "D",
    "topic_id": null,
    "question": "Quanti bit ha un MAC address?",
    "option_a": "32",
    "option_b": "48",
    "option_c": "64",
    "option_d": "128",
    "correct_answer": "B",
    "explanation": "Il MAC address è lungo 48 bit (6 byte), scritto in formato esadecimale."
  },
  {
    "id": 26,
    "section_id": "D",
    "topic_id": null,
    "question": "Cosa contiene il campo CRC/FCS di un frame Ethernet?",
    "option_a": "Indirizzo sorgente",
    "option_b": "Dati utente",
    "option_c": "Controllo errori",
    "option_d": "Tipo di protocollo",
    "correct_answer": "C",
    "explanation": "Il CRC (Cyclic Redundancy Check) serve per il controllo degli errori nel frame."
  },
  {
    "id": 27,
    "section_id": "D",
    "topic_id": null,
    "question": "Quale velocità corrisponde a Gigabit Ethernet?",
    "option_a": "10 Mbps",
    "option_b": "100 Mbps",
    "option_c": "1 Gbps",
    "option_d": "10 Gbps",
    "correct_answer": "C",
    "explanation": "Gigabit Ethernet (802.3ab) opera a 1 Gbps."
  },
  {
    "id": 28,
    "section_id": "D",
    "topic_id": null,
    "question": "Cosa significa CSMA/CD?",
    "option_a": "Carrier Sense Multiple Access with Collision Detection",
    "option_b": "Central Switch MAC Address / Collision Direction",
    "option_c": "Cable Standard for Metropolitan Area / Circuit Design",
    "option_d": "Common Standard Multiple Access / Connection Delivery",
    "correct_answer": "A",
    "explanation": "CSMA/CD sta per Carrier Sense Multiple Access with Collision Detection."
  },
  {
    "id": 29,
    "section_id": "D",
    "topic_id": null,
    "question": "Perché CSMA/CD è meno rilevante oggi?",
    "option_a": "Perché si usa il wireless",
    "option_b": "Perché gli switch full-duplex eliminano le collisioni",
    "option_c": "Perché non funziona con IPv6",
    "option_d": "Perché è stato sostituito da CSMA/CA",
    "correct_answer": "B",
    "explanation": "Gli switch moderni operano in full-duplex, eliminando le collisioni."
  },
  {
    "id": 30,
    "section_id": "D",
    "topic_id": null,
    "question": "Qual è la topologia standard di Ethernet moderna?",
    "option_a": "Bus",
    "option_b": "Anello",
    "option_c": "Stella",
    "option_d": "Mesh",
    "correct_answer": "C",
    "explanation": "Ethernet moderna usa topologia a stella con switch centrale."
  },
  {
    "id": 31,
    "section_id": "D",
    "topic_id": null,
    "question": "Quale topologia collega ogni dispositivo a un nodo centrale?",
    "option_a": "Bus",
    "option_b": "Maglia",
    "option_c": "Anello",
    "option_d": "Stella",
    "correct_answer": "D",
    "explanation": "Nella topologia a stella tutti i dispositivi si collegano a uno switch o hub centrale."
  },
  {
    "id": 32,
    "section_id": "D",
    "topic_id": null,
    "question": "Quale topologia offre la massima ridondanza?",
    "option_a": "Stella",
    "option_b": "Bus",
    "option_c": "Maglia (Mesh)",
    "option_d": "Anello",
    "correct_answer": "C",
    "explanation": "La topologia a maglia collega ogni nodo a tutti (o quasi) gli altri, garantendo percorsi alternativi."
  },
  {
    "id": 33,
    "section_id": "D",
    "topic_id": null,
    "question": "Quanti cavi servono per una maglia completa di 6 nodi?",
    "option_a": "6",
    "option_b": "10",
    "option_c": "15",
    "option_d": "30",
    "correct_answer": "C",
    "explanation": "Formula: n(n-1)/2 = 6×5/2 = 15 cavi per collegare tutti i nodi."
  },
  {
    "id": 34,
    "section_id": "D",
    "topic_id": null,
    "question": "Quale topologia è una \"stella gerarchica\"?",
    "option_a": "Anello",
    "option_b": "Bus",
    "option_c": "Maglia",
    "option_d": "Albero (Tree)",
    "correct_answer": "D",
    "explanation": "L'albero è composto da più stelle collegate in livelli gerarchici, tipica del cablaggio strutturato."
  },
  {
    "id": 35,
    "section_id": "D",
    "topic_id": null,
    "question": "In quale topologia i dati viaggiano in un circuito chiuso?",
    "option_a": "Stella",
    "option_b": "Bus",
    "option_c": "Anello (Ring)",
    "option_d": "Albero",
    "correct_answer": "C",
    "explanation": "Nella topologia ad anello ogni dispositivo è collegato al successivo in un circuito chiuso."
  },
  {
    "id": 36,
    "section_id": "E",
    "topic_id": null,
    "question": "Quanti livelli ha il modello ISO/OSI?",
    "option_a": "4",
    "option_b": "5",
    "option_c": "7",
    "option_d": "8",
    "correct_answer": "C",
    "explanation": "Il modello ISO/OSI è composto da 7 livelli."
  },
  {
    "id": 37,
    "section_id": "E",
    "topic_id": null,
    "question": "Quanti livelli ha il modello TCP/IP?",
    "option_a": "4",
    "option_b": "5",
    "option_c": "7",
    "option_d": "3",
    "correct_answer": "A",
    "explanation": "Il modello TCP/IP ha 4 livelli: Application, Transport, Internet, Network Access."
  },
  {
    "id": 38,
    "section_id": "E",
    "topic_id": null,
    "question": "Quale livello OSI corrisponde a \"Internet\" in TCP/IP?",
    "option_a": "Livello 2",
    "option_b": "Livello 3 (Rete)",
    "option_c": "Livello 4",
    "option_d": "Livello 7",
    "correct_answer": "B",
    "explanation": "Il livello Internet di TCP/IP corrisponde al livello 3 (Rete) dell'OSI."
  },
  {
    "id": 39,
    "section_id": "E",
    "topic_id": null,
    "question": "Perché Internet usa TCP/IP e non OSI?",
    "option_a": "OSI è più veloce",
    "option_b": "TCP/IP è nato prima e adottato nella pratica",
    "option_c": "OSI non supporta IP",
    "option_d": "TCP/IP ha più livelli",
    "correct_answer": "B",
    "explanation": "TCP/IP è stato sviluppato prima dell'OSI ed era già adottato da ARPANET."
  },
  {
    "id": 40,
    "section_id": "E",
    "topic_id": null,
    "question": "I livelli 5, 6, 7 dell'OSI corrispondono a quale livello TCP/IP?",
    "option_a": "Transport",
    "option_b": "Internet",
    "option_c": "Application",
    "option_d": "Network Access",
    "correct_answer": "C",
    "explanation": "Applicazione, Presentazione e Sessione dell'OSI corrispondono ad Application in TCP/IP."
  },
  {
    "id": 41,
    "section_id": "E",
    "topic_id": null,
    "question": "Quale livello OSI gestisce il formato dei dati e la crittografia?",
    "option_a": "Applicazione",
    "option_b": "Presentazione",
    "option_c": "Sessione",
    "option_d": "Trasporto",
    "correct_answer": "B",
    "explanation": "Il livello 6 (Presentazione) gestisce formato dati, compressione e crittografia."
  },
  {
    "id": 42,
    "section_id": "E",
    "topic_id": null,
    "question": "Cosa sono le RFC?",
    "option_a": "Regole interne Cisco",
    "option_b": "Documenti standard di Internet pubblicati dalla IETF",
    "option_c": "File di configurazione Linux",
    "option_d": "Protocolli proprietari Microsoft",
    "correct_answer": "B",
    "explanation": "RFC = Request for Comments, documenti ufficiali che definiscono gli standard di Internet."
  },
  {
    "id": 43,
    "section_id": "E",
    "topic_id": null,
    "question": "Quale RFC definisce gli indirizzi IP privati?",
    "option_a": "RFC 791",
    "option_b": "RFC 793",
    "option_c": "RFC 1918",
    "option_d": "RFC 2616",
    "correct_answer": "C",
    "explanation": "RFC 1918 definisce gli spazi di indirizzi privati: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16."
  },
  {
    "id": 44,
    "section_id": "E",
    "topic_id": null,
    "question": "Quale RFC definisce il protocollo IP versione 4?",
    "option_a": "RFC 768",
    "option_b": "RFC 791",
    "option_c": "RFC 1918",
    "option_d": "RFC 2131",
    "correct_answer": "B",
    "explanation": "RFC 791 (1981) definisce IPv4: formato pacchetto, indirizzamento 32 bit, TTL."
  },
  {
    "id": 45,
    "section_id": "E",
    "topic_id": null,
    "question": "Quale RFC è lunga solo 1 pagina e definisce UDP?",
    "option_a": "RFC 791",
    "option_b": "RFC 793",
    "option_c": "RFC 768",
    "option_d": "RFC 826",
    "correct_answer": "C",
    "explanation": "RFC 768 è famosa per la sua brevità — UDP è il protocollo più semplice."
  },
  {
    "id": 46,
    "section_id": "F",
    "topic_id": null,
    "question": "Quanti bit ha un indirizzo IPv4?",
    "option_a": "16",
    "option_b": "32",
    "option_c": "64",
    "option_d": "128",
    "correct_answer": "B",
    "explanation": "IPv4 usa indirizzi a 32 bit, scritti come 4 ottetti decimali."
  },
  {
    "id": 47,
    "section_id": "F",
    "topic_id": null,
    "question": "Cosa indica l'indirizzo .255 in una rete /24?",
    "option_a": "Indirizzo di rete",
    "option_b": "Indirizzo host",
    "option_c": "Indirizzo di broadcast",
    "option_d": "Default gateway",
    "correct_answer": "C",
    "explanation": "In una rete /24, l'ultimo indirizzo (.255) è l'indirizzo di broadcast."
  },
  {
    "id": 48,
    "section_id": "F",
    "topic_id": null,
    "question": "Cosa fa la subnet mask?",
    "option_a": "Cripta i dati",
    "option_b": "Separa parte rete da parte host",
    "option_c": "Identifica il MAC address",
    "option_d": "Assegna porte TCP",
    "correct_answer": "B",
    "explanation": "La subnet mask separa la parte rete dalla parte host di un indirizzo IP."
  },
  {
    "id": 49,
    "section_id": "F",
    "topic_id": null,
    "question": "Cosa significa /24 in notazione CIDR?",
    "option_a": "24 host disponibili",
    "option_b": "24 bit per la rete",
    "option_c": "24 byte di dati",
    "option_d": "24 sottoreti",
    "correct_answer": "B",
    "explanation": "CIDR /24 significa che 24 bit sono dedicati alla parte rete."
  },
  {
    "id": 50,
    "section_id": "F",
    "topic_id": null,
    "question": "A cosa serve il default gateway?",
    "option_a": "Assegnare indirizzi IP",
    "option_b": "Filtrare il traffico",
    "option_c": "Raggiungere reti esterne",
    "option_d": "Risolvere nomi DNS",
    "correct_answer": "C",
    "explanation": "Il default gateway è il router usato per raggiungere reti esterne alla propria."
  },
  {
    "id": 51,
    "section_id": "F",
    "topic_id": null,
    "question": "Quale operazione si usa per calcolare l'indirizzo di rete?",
    "option_a": "OR",
    "option_b": "XOR",
    "option_c": "AND",
    "option_d": "NOT",
    "correct_answer": "C",
    "explanation": "IP AND subnet mask = indirizzo di rete."
  },
  {
    "id": 52,
    "section_id": "G",
    "topic_id": null,
    "question": "Cosa significa FLSM?",
    "option_a": "Fixed Length Subnet Mask",
    "option_b": "Flexible LAN Subnet Mode",
    "option_c": "Fast Link State Metric",
    "option_d": "Frame Level Security Mode",
    "correct_answer": "A",
    "explanation": "FLSM = Fixed Length Subnet Mask, tutte le sottoreti con la stessa mask."
  },
  {
    "id": 53,
    "section_id": "G",
    "topic_id": null,
    "question": "Quanti host utilizzabili ci sono in una rete /26?",
    "option_a": "64",
    "option_b": "62",
    "option_c": "30",
    "option_d": "126",
    "correct_answer": "B",
    "explanation": "2^6 - 2 = 62 host utilizzabili (si sottraggono rete e broadcast)."
  },
  {
    "id": 54,
    "section_id": "G",
    "topic_id": null,
    "question": "Qual è il principale limite di FLSM?",
    "option_a": "Troppo veloce",
    "option_b": "Spreco di indirizzi IP",
    "option_c": "Non supporta IPv4",
    "option_d": "Richiede fibra ottica",
    "correct_answer": "B",
    "explanation": "FLSM spreca indirizzi perché tutte le sottoreti hanno la stessa dimensione."
  },
  {
    "id": 55,
    "section_id": "G",
    "topic_id": null,
    "question": "Per dividere una /24 in 4 sottoreti FLSM, quanti bit servono?",
    "option_a": "1",
    "option_b": "2",
    "option_c": "3",
    "option_d": "4",
    "correct_answer": "B",
    "explanation": "2² = 4, servono 2 bit in prestito dalla parte host."
  },
  {
    "id": 56,
    "section_id": "G",
    "topic_id": null,
    "question": "Quale sarà la nuova mask dividendo una /24 in 4 sottoreti?",
    "option_a": "/25",
    "option_b": "/26",
    "option_c": "/27",
    "option_d": "/28",
    "correct_answer": "B",
    "explanation": "24 + 2 bit = /26 (255.255.255.192)."
  },
  {
    "id": 57,
    "section_id": "G",
    "topic_id": null,
    "question": "La formula per gli host utilizzabili è:",
    "option_a": "2^n",
    "option_b": "2^n + 2",
    "option_c": "2^n - 2",
    "option_d": "2^n - 1",
    "correct_answer": "C",
    "explanation": "Host utilizzabili = 2^h - 2, dove si sottraggono indirizzo di rete e broadcast."
  },
  {
    "id": 58,
    "section_id": "H",
    "topic_id": null,
    "question": "Cosa permette VLSM?",
    "option_a": "Sottoreti con la stessa mask",
    "option_b": "Sottoreti con mask diverse",
    "option_c": "Solo 2 sottoreti",
    "option_d": "Solo reti /24",
    "correct_answer": "B",
    "explanation": "VLSM permette di usare subnet mask diverse per ogni sottorete."
  },
  {
    "id": 59,
    "section_id": "H",
    "topic_id": null,
    "question": "Nel metodo VLSM, da quale sottorete si parte?",
    "option_a": "La più piccola",
    "option_b": "La più grande",
    "option_c": "Quella centrale",
    "option_d": "Non importa l'ordine",
    "correct_answer": "B",
    "explanation": "Si assegnano prima le sottoreti più grandi per evitare frammentazione."
  },
  {
    "id": 60,
    "section_id": "H",
    "topic_id": null,
    "question": "Quale protocollo NON supporta VLSM?",
    "option_a": "OSPF",
    "option_b": "RIPv2",
    "option_c": "RIPv1",
    "option_d": "EIGRP",
    "correct_answer": "C",
    "explanation": "RIPv1 è classful e non supporta VLSM, a differenza di RIPv2."
  },
  {
    "id": 61,
    "section_id": "H",
    "topic_id": null,
    "question": "VLSM è più efficiente di FLSM perché:",
    "option_a": "Usa meno router",
    "option_b": "Assegna solo gli indirizzi necessari",
    "option_c": "Non richiede subnet mask",
    "option_d": "Funziona solo con IPv6",
    "correct_answer": "B",
    "explanation": "VLSM assegna la dimensione adatta a ogni sottorete, riducendo sprechi."
  },
  {
    "id": 62,
    "section_id": "H",
    "topic_id": null,
    "question": "Per una LAN con 100 host, quale mask VLSM è adatta?",
    "option_a": "/25 (126 host)",
    "option_b": "/26 (62 host)",
    "option_c": "/27 (30 host)",
    "option_d": "/28 (14 host)",
    "correct_answer": "A",
    "explanation": "Con /25 si hanno 126 host disponibili, sufficienti per 100 host."
  },
  {
    "id": 63,
    "section_id": "I",
    "topic_id": null,
    "question": "A quale livello OSI avviene il routing?",
    "option_a": "Livello 1",
    "option_b": "Livello 2",
    "option_c": "Livello 3",
    "option_d": "Livello 4",
    "correct_answer": "C",
    "explanation": "Il routing avviene al livello 3 (Rete) del modello OSI."
  },
  {
    "id": 64,
    "section_id": "I",
    "topic_id": null,
    "question": "Cosa contiene una entry della tabella di routing?",
    "option_a": "Solo l'IP di destinazione",
    "option_b": "Rete destinazione, mask, next hop, interfaccia",
    "option_c": "Solo il MAC address",
    "option_d": "Nome host e password",
    "correct_answer": "B",
    "explanation": "Ogni entry contiene rete di destinazione, subnet mask, next hop e interfaccia."
  },
  {
    "id": 65,
    "section_id": "I",
    "topic_id": null,
    "question": "Quando si usa il routing diretto?",
    "option_a": "Quando mittente e destinatario sono in reti diverse",
    "option_b": "Quando mittente e destinatario sono nella stessa rete",
    "option_c": "Quando si usa un firewall",
    "option_d": "Quando si usa il wireless",
    "correct_answer": "B",
    "explanation": "Il routing diretto avviene quando i dispositivi sono nella stessa rete."
  },
  {
    "id": 66,
    "section_id": "I",
    "topic_id": null,
    "question": "Il longest prefix match sceglie:",
    "option_a": "La rotta con la mask più corta",
    "option_b": "La rotta con la mask più lunga (più specifica)",
    "option_c": "La prima rotta nella tabella",
    "option_d": "La rotta con meno hop",
    "correct_answer": "B",
    "explanation": "Il longest prefix match seleziona la rotta più specifica (mask più lunga)."
  },
  {
    "id": 67,
    "section_id": "I",
    "topic_id": null,
    "question": "Come si rappresenta la default route?",
    "option_a": "255.255.255.255/32",
    "option_b": "127.0.0.1/8",
    "option_c": "0.0.0.0/0",
    "option_d": "192.168.0.0/16",
    "correct_answer": "C",
    "explanation": "La default route è 0.0.0.0/0, corrisponde a qualsiasi destinazione."
  },
  {
    "id": 68,
    "section_id": "J",
    "topic_id": null,
    "question": "Nel routing statico, chi configura le rotte?",
    "option_a": "Il protocollo OSPF",
    "option_b": "L'amministratore manualmente",
    "option_c": "Il router automaticamente",
    "option_d": "Il DNS",
    "correct_answer": "B",
    "explanation": "Nel routing statico le rotte sono configurate manualmente dall'amministratore."
  },
  {
    "id": 69,
    "section_id": "J",
    "topic_id": null,
    "question": "Quale NON è un vantaggio del routing statico?",
    "option_a": "Semplicità",
    "option_b": "Sicurezza",
    "option_c": "Adattamento automatico ai guasti",
    "option_d": "Nessun overhead",
    "correct_answer": "C",
    "explanation": "Il routing statico non si adatta automaticamente: se un link cade, serve intervento manuale."
  },
  {
    "id": 70,
    "section_id": "J",
    "topic_id": null,
    "question": "In quale scenario è ideale il routing statico?",
    "option_a": "Reti enterprise con 100+ router",
    "option_b": "Reti piccole e link punto-punto",
    "option_c": "Data center con migliaia di server",
    "option_d": "ISP con milioni di utenti",
    "correct_answer": "B",
    "explanation": "Il routing statico è ideale per reti piccole, link punto-punto e default route."
  },
  {
    "id": 71,
    "section_id": "J",
    "topic_id": null,
    "question": "Cosa succede se un link cade con routing statico?",
    "option_a": "Il router trova un percorso alternativo",
    "option_b": "Il traffico viene perso finché non si interviene",
    "option_c": "Il protocollo ricalcola la rotta",
    "option_d": "Il link si ripristina automaticamente",
    "correct_answer": "B",
    "explanation": "Con routing statico, la rotta rimane anche se il link è giù, causando perdita di traffico."
  },
  {
    "id": 72,
    "section_id": "J",
    "topic_id": null,
    "question": "Il routing statico genera traffico di routing aggiuntivo?",
    "option_a": "Sì, molto",
    "option_b": "Sì, poco",
    "option_c": "No, nessuno",
    "option_d": "Solo con OSPF",
    "correct_answer": "C",
    "explanation": "Il routing statico non genera nessun traffico di routing (nessun overhead)."
  },
  {
    "id": 73,
    "section_id": "K",
    "topic_id": null,
    "question": "In un grafo di rete, i router corrispondono a:",
    "option_a": "Archi",
    "option_b": "Nodi",
    "option_c": "Pesi",
    "option_d": "Cammini",
    "correct_answer": "B",
    "explanation": "I router corrispondono ai nodi (vertici) del grafo."
  },
  {
    "id": 74,
    "section_id": "K",
    "topic_id": null,
    "question": "Quale algoritmo è usato da OSPF per il cammino minimo?",
    "option_a": "Bellman-Ford",
    "option_b": "Dijkstra",
    "option_c": "Floyd-Warshall",
    "option_d": "A*",
    "correct_answer": "B",
    "explanation": "OSPF usa l'algoritmo di Dijkstra (Shortest Path First)."
  },
  {
    "id": 75,
    "section_id": "K",
    "topic_id": null,
    "question": "Il cammino minimo è sempre quello con meno hop?",
    "option_a": "Sì, sempre",
    "option_b": "No, dipende dalla metrica (costo)",
    "option_c": "Solo con RIP",
    "option_d": "Solo con routing statico",
    "correct_answer": "B",
    "explanation": "Il cammino minimo dipende dalla metrica usata: può essere banda, latenza, costo."
  },
  {
    "id": 76,
    "section_id": "K",
    "topic_id": null,
    "question": "I link di rete corrispondono a quali elementi del grafo?",
    "option_a": "Nodi",
    "option_b": "Archi",
    "option_c": "Vertici",
    "option_d": "Sottoreti",
    "correct_answer": "B",
    "explanation": "I link (collegamenti fisici) corrispondono agli archi del grafo."
  },
  {
    "id": 77,
    "section_id": "K",
    "topic_id": null,
    "question": "Quale algoritmo è usato da RIP?",
    "option_a": "Dijkstra",
    "option_b": "Kruskal",
    "option_c": "Bellman-Ford",
    "option_d": "Prim",
    "correct_answer": "C",
    "explanation": "RIP usa l'algoritmo distribuito di Bellman-Ford."
  },
  {
    "id": 78,
    "section_id": "K",
    "topic_id": null,
    "question": "Quale è il primo passo dell'algoritmo di Dijkstra?",
    "option_a": "Visitare tutti i nodi",
    "option_b": "Assegnare distanza 0 alla sorgente e infinito agli altri",
    "option_c": "Calcolare i pesi negativi",
    "option_d": "Inviare le tabelle ai vicini",
    "correct_answer": "B",
    "explanation": "Dijkstra inizia assegnando distanza 0 al nodo sorgente e infinito a tutti gli altri."
  },
  {
    "id": 79,
    "section_id": "K",
    "topic_id": null,
    "question": "Dijkstra funziona con pesi negativi?",
    "option_a": "Sì, sempre",
    "option_b": "No, richiede pesi non negativi",
    "option_c": "Solo con pesi pari",
    "option_d": "Solo con grafi orientati",
    "correct_answer": "B",
    "explanation": "Dijkstra richiede pesi non negativi. Per pesi negativi si usa Bellman-Ford."
  },
  {
    "id": 80,
    "section_id": "K",
    "topic_id": null,
    "question": "Quante iterazioni servono a Bellman-Ford nel caso peggiore?",
    "option_a": "V",
    "option_b": "V-1",
    "option_c": "E",
    "option_d": "V+E",
    "correct_answer": "B",
    "explanation": "Bellman-Ford esegue V-1 iterazioni, dove V è il numero di nodi."
  },
  {
    "id": 81,
    "section_id": "K",
    "topic_id": null,
    "question": "Cos'è il problema del count-to-infinity?",
    "option_a": "I router contano i pacchetti all'infinito",
    "option_b": "Le distanze crescono senza limite dopo un guasto",
    "option_c": "Il timer scade e il router si resetta",
    "option_d": "I pacchetti girano in loop infinito",
    "correct_answer": "B",
    "explanation": "Il count-to-infinity si verifica quando, dopo un guasto, i router continuano ad incrementare la distanza senza convergere."
  },
  {
    "id": 82,
    "section_id": "K",
    "topic_id": null,
    "question": "Split Horizon è una soluzione a quale problema?",
    "option_a": "Congestione",
    "option_b": "Count-to-infinity",
    "option_c": "Pesi negativi",
    "option_d": "Loop a livello 2",
    "correct_answer": "B",
    "explanation": "Split Horizon risolve il count-to-infinity: non invii una rotta al vicino da cui l'hai appresa."
  },
  {
    "id": 83,
    "section_id": "K",
    "topic_id": null,
    "question": "In Dijkstra, quale nodo viene visitato per primo?",
    "option_a": "Quello con distanza maggiore",
    "option_b": "Quello con distanza minima tra i non visitati",
    "option_c": "Il primo in ordine alfabetico",
    "option_d": "Un nodo casuale",
    "correct_answer": "B",
    "explanation": "Ad ogni passo Dijkstra seleziona il nodo non visitato con la distanza minima corrente."
  },
  {
    "id": 84,
    "section_id": "K",
    "topic_id": null,
    "question": "Nella versione distribuita di Bellman-Ford, ogni router conosce:",
    "option_a": "Tutta la topologia della rete",
    "option_b": "Solo i suoi vicini diretti",
    "option_c": "Solo il nodo sorgente",
    "option_d": "Tutti i router del mondo",
    "correct_answer": "B",
    "explanation": "Nella versione distribuita (distance vector), ogni router conosce solo le distanze verso i vicini diretti e le informazioni ricevute da essi."
  },
  {
    "id": 85,
    "section_id": "K",
    "topic_id": null,
    "question": "La complessità di Dijkstra con lista semplice è:",
    "option_a": "O(V)",
    "option_b": "O(V²)",
    "option_c": "O(V × E)",
    "option_d": "O(E²)",
    "correct_answer": "B",
    "explanation": "Con lista semplice Dijkstra ha complessità O(V²), migliorabile con min-heap."
  },
  {
    "id": 86,
    "section_id": "L",
    "topic_id": null,
    "question": "RIP è un protocollo di tipo:",
    "option_a": "Link State",
    "option_b": "Distance Vector",
    "option_c": "Path Vector",
    "option_d": "Hybrid",
    "correct_answer": "B",
    "explanation": "RIP è un protocollo distance vector basato sull'algoritmo Bellman-Ford."
  },
  {
    "id": 87,
    "section_id": "L",
    "topic_id": null,
    "question": "Qual è il limite massimo di hop in RIP?",
    "option_a": "10",
    "option_b": "15",
    "option_c": "20",
    "option_d": "255",
    "correct_answer": "B",
    "explanation": "RIP ha un limite massimo di 15 hop; 16 significa rete irraggiungibile."
  },
  {
    "id": 88,
    "section_id": "L",
    "topic_id": null,
    "question": "OSPF usa quale algoritmo?",
    "option_a": "Bellman-Ford",
    "option_b": "Dijkstra",
    "option_c": "RIP",
    "option_d": "BGP",
    "correct_answer": "B",
    "explanation": "OSPF usa l'algoritmo di Dijkstra (SPF - Shortest Path First)."
  },
  {
    "id": 89,
    "section_id": "L",
    "topic_id": null,
    "question": "Quale protocollo è più adatto a reti grandi?",
    "option_a": "RIP",
    "option_b": "RIPv1",
    "option_c": "OSPF",
    "option_d": "Nessuno",
    "correct_answer": "C",
    "explanation": "OSPF è progettato per reti medie e grandi grazie alla sua struttura gerarchica."
  },
  {
    "id": 90,
    "section_id": "L",
    "topic_id": null,
    "question": "La metrica di OSPF è basata su:",
    "option_a": "Hop count",
    "option_b": "Costo (banda del link)",
    "option_c": "Numero di router",
    "option_d": "Tempo di attività",
    "correct_answer": "B",
    "explanation": "OSPF usa il costo basato sulla banda del collegamento come metrica."
  },
  {
    "id": 91,
    "section_id": "L",
    "topic_id": null,
    "question": "Ogni quanti secondi RIP invia aggiornamenti?",
    "option_a": "10",
    "option_b": "30",
    "option_c": "60",
    "option_d": "120",
    "correct_answer": "B",
    "explanation": "RIP invia aggiornamenti della tabella di routing ogni 30 secondi."
  },
  {
    "id": 92,
    "section_id": "M",
    "topic_id": null,
    "question": "Il livello trasporto gestisce la comunicazione:",
    "option_a": "Hop-by-hop",
    "option_b": "End-to-end",
    "option_c": "Solo locale",
    "option_d": "Solo wireless",
    "correct_answer": "B",
    "explanation": "Il livello trasporto gestisce la comunicazione end-to-end tra applicazioni."
  },
  {
    "id": 93,
    "section_id": "M",
    "topic_id": null,
    "question": "Quale sequenza descrive il three-way handshake?",
    "option_a": "ACK → SYN → FIN",
    "option_b": "SYN → SYN-ACK → ACK",
    "option_c": "FIN → ACK → RST",
    "option_d": "PUSH → ACK → SYN",
    "correct_answer": "B",
    "explanation": "Il three-way handshake TCP è: SYN → SYN-ACK → ACK."
  },
  {
    "id": 94,
    "section_id": "M",
    "topic_id": null,
    "question": "Quanti byte ha l'header UDP?",
    "option_a": "4",
    "option_b": "8",
    "option_c": "20",
    "option_d": "32",
    "correct_answer": "B",
    "explanation": "L'header UDP è minimo: solo 8 byte (vs 20+ di TCP)."
  },
  {
    "id": 95,
    "section_id": "M",
    "topic_id": null,
    "question": "Quale porta usa HTTPS?",
    "option_a": "80",
    "option_b": "8080",
    "option_c": "443",
    "option_d": "22",
    "correct_answer": "C",
    "explanation": "HTTPS usa la porta 443, mentre HTTP usa la porta 80."
  },
  {
    "id": 96,
    "section_id": "M",
    "topic_id": null,
    "question": "Un socket è composto da:",
    "option_a": "MAC + porta",
    "option_b": "IP + porta",
    "option_c": "IP + MAC",
    "option_d": "Porta + protocollo",
    "correct_answer": "B",
    "explanation": "Un socket è la combinazione di indirizzo IP e numero di porta."
  },
  {
    "id": 97,
    "section_id": "M",
    "topic_id": null,
    "question": "TCP garantisce la consegna tramite:",
    "option_a": "Flooding",
    "option_b": "ACK e ritrasmissione",
    "option_c": "Broadcast",
    "option_d": "Multicast",
    "correct_answer": "B",
    "explanation": "TCP usa acknowledgment e ritrasmissione per garantire la consegna affidabile."
  },
  {
    "id": 98,
    "section_id": "M",
    "topic_id": null,
    "question": "Quale protocollo è connectionless?",
    "option_a": "TCP",
    "option_b": "HTTP",
    "option_c": "UDP",
    "option_d": "FTP",
    "correct_answer": "C",
    "explanation": "UDP è connectionless: invia datagram senza stabilire connessione."
  },
  {
    "id": 99,
    "section_id": "N",
    "topic_id": null,
    "question": "Perché le videochiamate usano UDP?",
    "option_a": "Perché è più sicuro",
    "option_b": "Perché perdere dati è meglio che ritardare",
    "option_c": "Perché TCP non esiste per video",
    "option_d": "Perché UDP è più affidabile",
    "correct_answer": "B",
    "explanation": "Nelle videochiamate, il ritardo è peggiore della perdita: UDP evita la latenza da ritrasmissione."
  },
  {
    "id": 100,
    "section_id": "N",
    "topic_id": null,
    "question": "QUIC è stato sviluppato da:",
    "option_a": "Microsoft",
    "option_b": "Apple",
    "option_c": "Google",
    "option_d": "Mozilla",
    "correct_answer": "C",
    "explanation": "QUIC è stato sviluppato da Google per migliorare le prestazioni web."
  },
  {
    "id": 101,
    "section_id": "N",
    "topic_id": null,
    "question": "QUIC si basa su quale protocollo di trasporto?",
    "option_a": "TCP",
    "option_b": "UDP",
    "option_c": "SCTP",
    "option_d": "DCCP",
    "correct_answer": "B",
    "explanation": "QUIC utilizza UDP come protocollo di trasporto sottostante."
  },
  {
    "id": 102,
    "section_id": "N",
    "topic_id": null,
    "question": "Quale versione di HTTP usa QUIC?",
    "option_a": "HTTP/1.1",
    "option_b": "HTTP/2",
    "option_c": "HTTP/3",
    "option_d": "HTTP/4",
    "correct_answer": "C",
    "explanation": "HTTP/3 è basato su QUIC invece che su TCP."
  },
  {
    "id": 103,
    "section_id": "N",
    "topic_id": null,
    "question": "Quanti RTT servono a QUIC per una connessione già nota?",
    "option_a": "0 RTT",
    "option_b": "1 RTT",
    "option_c": "2 RTT",
    "option_d": "3 RTT",
    "correct_answer": "A",
    "explanation": "QUIC supporta 0-RTT per connessioni già stabilite in precedenza."
  },
  {
    "id": 104,
    "section_id": "N",
    "topic_id": null,
    "question": "Quale vantaggio ha QUIC su reti instabili?",
    "option_a": "Nessuno",
    "option_b": "Connection migration: sopravvive al cambio IP",
    "option_c": "Velocità dimezzata",
    "option_d": "Usa più banda",
    "correct_answer": "B",
    "explanation": "QUIC gestisce il cambio di rete (es. Wi-Fi → 4G) senza interrompere la connessione."
  },
  {
    "id": 105,
    "section_id": "O",
    "topic_id": null,
    "question": "Qual è il principio base di un firewall?",
    "option_a": "Default allow",
    "option_b": "Default deny",
    "option_c": "Default forward",
    "option_d": "Default route",
    "correct_answer": "B",
    "explanation": "Il principio base è \"default deny\": tutto ciò che non è esplicitamente permesso viene bloccato."
  },
  {
    "id": 106,
    "section_id": "O",
    "topic_id": null,
    "question": "Un firewall stateful tiene traccia di:",
    "option_a": "Solo indirizzi IP",
    "option_b": "Stato delle connessioni attive",
    "option_c": "Solo porte",
    "option_d": "Nomi di dominio",
    "correct_answer": "B",
    "explanation": "Il firewall stateful mantiene una tabella delle connessioni attive (state table)."
  },
  {
    "id": 107,
    "section_id": "O",
    "topic_id": null,
    "question": "Le regole ACL vengono valutate:",
    "option_a": "In ordine casuale",
    "option_b": "Dall'alto verso il basso",
    "option_c": "Dal basso verso l'alto",
    "option_d": "Per priorità numerica",
    "correct_answer": "B",
    "explanation": "Le regole ACL sono valutate dall'alto verso il basso, la prima corrispondente viene applicata."
  },
  {
    "id": 108,
    "section_id": "O",
    "topic_id": null,
    "question": "La DMZ si colloca:",
    "option_a": "Nella rete interna",
    "option_b": "Tra rete interna e Internet",
    "option_c": "Solo su Internet",
    "option_d": "Sul router principale",
    "correct_answer": "B",
    "explanation": "La DMZ è una sottorete tra la rete interna e Internet che ospita servizi pubblici."
  },
  {
    "id": 109,
    "section_id": "O",
    "topic_id": null,
    "question": "Quale tipo di firewall analizza il contenuto dei pacchetti a livello 7?",
    "option_a": "Packet filter",
    "option_b": "Stateful",
    "option_c": "Application Gateway / Proxy",
    "option_d": "Hub",
    "correct_answer": "C",
    "explanation": "L'Application Gateway/Proxy opera al livello 7 e può analizzare il contenuto applicativo."
  },
  {
    "id": 110,
    "section_id": "O",
    "topic_id": null,
    "question": "Un firewall packet filter opera a quali livelli OSI?",
    "option_a": "1-2",
    "option_b": "3-4",
    "option_c": "5-6",
    "option_d": "7",
    "correct_answer": "B",
    "explanation": "Il packet filter filtra in base a IP, porta e protocollo (livelli 3 e 4)."
  },
  {
    "id": 111,
    "section_id": "P",
    "topic_id": null,
    "question": "Nella crittografia simmetrica si usano:",
    "option_a": "Due chiavi diverse",
    "option_b": "La stessa chiave per cifrare e decifrare",
    "option_c": "Solo la chiave pubblica",
    "option_d": "Nessuna chiave",
    "correct_answer": "B",
    "explanation": "Nella crittografia simmetrica si usa una sola chiave condivisa per cifratura e decifratura."
  },
  {
    "id": 112,
    "section_id": "P",
    "topic_id": null,
    "question": "Qual è l'algoritmo simmetrico standard attuale?",
    "option_a": "DES",
    "option_b": "3DES",
    "option_c": "AES",
    "option_d": "RSA",
    "correct_answer": "C",
    "explanation": "AES (Advanced Encryption Standard) è lo standard attuale con chiavi da 128/192/256 bit."
  },
  {
    "id": 113,
    "section_id": "P",
    "topic_id": null,
    "question": "La crittografia asimmetrica usa:",
    "option_a": "Una chiave condivisa",
    "option_b": "Due chiavi: pubblica e privata",
    "option_c": "Solo password",
    "option_d": "Nessuna cifratura",
    "correct_answer": "B",
    "explanation": "La crittografia asimmetrica usa una coppia di chiavi: pubblica (per cifrare) e privata (per decifrare)."
  },
  {
    "id": 114,
    "section_id": "P",
    "topic_id": null,
    "question": "Quale algoritmo asimmetrico è il più diffuso?",
    "option_a": "AES",
    "option_b": "DES",
    "option_c": "RSA",
    "option_d": "MD5",
    "correct_answer": "C",
    "explanation": "RSA è l'algoritmo asimmetrico più diffuso, basato sulla fattorizzazione di numeri primi."
  },
  {
    "id": 115,
    "section_id": "P",
    "topic_id": null,
    "question": "Una funzione hash è:",
    "option_a": "Reversibile",
    "option_b": "Irreversibile",
    "option_c": "Cifratura simmetrica",
    "option_d": "Un protocollo di rete",
    "correct_answer": "B",
    "explanation": "Le funzioni hash sono irreversibili: dal digest non si può risalire all'input originale."
  },
  {
    "id": 116,
    "section_id": "P",
    "topic_id": null,
    "question": "Quale algoritmo di hash è considerato sicuro oggi?",
    "option_a": "MD5",
    "option_b": "SHA-1",
    "option_c": "SHA-256",
    "option_d": "DES",
    "correct_answer": "C",
    "explanation": "SHA-256 è lo standard attuale sicuro. MD5 e SHA-1 sono considerati non più sicuri."
  },
  {
    "id": 117,
    "section_id": "P",
    "topic_id": null,
    "question": "Chi emette i certificati digitali?",
    "option_a": "Il router",
    "option_b": "La CA (Certification Authority)",
    "option_c": "L'ISP",
    "option_d": "Il browser",
    "correct_answer": "B",
    "explanation": "La CA (Certification Authority) emette e firma i certificati digitali."
  },
  {
    "id": 118,
    "section_id": "P",
    "topic_id": null,
    "question": "TLS 1.3 richiede quanti RTT per stabilire la connessione?",
    "option_a": "0",
    "option_b": "1",
    "option_c": "2",
    "option_d": "3",
    "correct_answer": "B",
    "explanation": "TLS 1.3 richiede 1 RTT (o 0-RTT per connessioni già note), più veloce delle versioni precedenti."
  },
  {
    "id": 119,
    "section_id": "Q",
    "topic_id": null,
    "question": "Cosa crea una VPN?",
    "option_a": "Una rete fisica",
    "option_b": "Un tunnel cifrato su rete pubblica",
    "option_c": "Un nuovo cavo",
    "option_d": "Una VLAN",
    "correct_answer": "B",
    "explanation": "La VPN crea un tunnel cifrato attraverso una rete pubblica come Internet."
  },
  {
    "id": 120,
    "section_id": "Q",
    "topic_id": null,
    "question": "Una VPN site-to-site collega:",
    "option_a": "Un utente a un server",
    "option_b": "Due reti tra loro",
    "option_c": "Due PC",
    "option_d": "Due VLAN",
    "correct_answer": "B",
    "explanation": "La VPN site-to-site collega due reti (es. sede centrale e filiale) in modo permanente."
  },
  {
    "id": 121,
    "section_id": "Q",
    "topic_id": null,
    "question": "Il tunneling VPN consiste nel:",
    "option_a": "Eliminare i pacchetti",
    "option_b": "Incapsulare e cifrare i pacchetti originali",
    "option_c": "Duplicare i pacchetti",
    "option_d": "Comprimere i pacchetti",
    "correct_answer": "B",
    "explanation": "Il tunneling incapsula i pacchetti originali (con IP privati) in nuovi pacchetti cifrati."
  },
  {
    "id": 122,
    "section_id": "Q",
    "topic_id": null,
    "question": "Quale protocollo VPN opera a livello 3?",
    "option_a": "OpenVPN",
    "option_b": "WireGuard",
    "option_c": "IPsec",
    "option_d": "TLS",
    "correct_answer": "C",
    "explanation": "IPsec opera al livello 3 (Rete) del modello OSI."
  },
  {
    "id": 123,
    "section_id": "Q",
    "topic_id": null,
    "question": "WireGuard è caratterizzato da:",
    "option_a": "Codice molto grande",
    "option_b": "Codice molto piccolo e prestazioni elevate",
    "option_c": "Nessuna cifratura",
    "option_d": "Solo uso enterprise",
    "correct_answer": "B",
    "explanation": "WireGuard ha circa 4000 righe di codice (vs 100.000+ di OpenVPN) con prestazioni eccellenti."
  },
  {
    "id": 124,
    "section_id": "Q",
    "topic_id": null,
    "question": "Lo split tunneling significa che:",
    "option_a": "Tutto il traffico passa dalla VPN",
    "option_b": "Solo il traffico aziendale passa dalla VPN",
    "option_c": "La VPN è disattivata",
    "option_d": "Il tunnel è diviso in due",
    "correct_answer": "B",
    "explanation": "Con split tunneling solo il traffico destinato alla rete aziendale passa dalla VPN."
  },
  {
    "id": 125,
    "section_id": "R",
    "topic_id": null,
    "question": "Una VLAN permette di:",
    "option_a": "Aumentare la velocità",
    "option_b": "Segmentare logicamente una rete fisica",
    "option_c": "Eliminare gli switch",
    "option_d": "Creare nuovi cavi",
    "correct_answer": "B",
    "explanation": "Le VLAN permettono di segmentare una rete fisica in più reti logiche indipendenti."
  },
  {
    "id": 126,
    "section_id": "R",
    "topic_id": null,
    "question": "Il protocollo per taggare i frame su un trunk è:",
    "option_a": "ARP",
    "option_b": "802.1Q",
    "option_c": "HTTP",
    "option_d": "RIP",
    "correct_answer": "B",
    "explanation": "IEEE 802.1Q aggiunge un tag di 4 byte al frame Ethernet per identificare la VLAN."
  },
  {
    "id": 127,
    "section_id": "R",
    "topic_id": null,
    "question": "Una porta access appartiene a:",
    "option_a": "Tutte le VLAN",
    "option_b": "Una sola VLAN",
    "option_c": "Nessuna VLAN",
    "option_d": "Due VLAN",
    "correct_answer": "B",
    "explanation": "Una porta access è assegnata a una sola VLAN; il dispositivo collegato non sa di essere in una VLAN."
  },
  {
    "id": 128,
    "section_id": "R",
    "topic_id": null,
    "question": "Per far comunicare due VLAN serve:",
    "option_a": "Uno switch",
    "option_b": "Un hub",
    "option_c": "Un router o switch Layer 3",
    "option_d": "Un access point",
    "correct_answer": "C",
    "explanation": "Le VLAN sono isolate: serve un router o switch Layer 3 per l'inter-VLAN routing."
  },
  {
    "id": 129,
    "section_id": "R",
    "topic_id": null,
    "question": "Il router-on-a-stick usa:",
    "option_a": "Un cavo per ogni VLAN",
    "option_b": "Un solo collegamento trunk con subinterface",
    "option_c": "Solo Wi-Fi",
    "option_d": "Nessun cavo",
    "correct_answer": "B",
    "explanation": "Il router-on-a-stick usa un singolo trunk e crea subinterface virtuali per ogni VLAN."
  },
  {
    "id": 130,
    "section_id": "R",
    "topic_id": null,
    "question": "La native VLAN su un trunk:",
    "option_a": "Non esiste",
    "option_b": "I suoi frame viaggiano senza tag",
    "option_c": "È sempre la VLAN 10",
    "option_d": "Blocca il traffico",
    "correct_answer": "B",
    "explanation": "I frame della native VLAN (di default VLAN 1) viaggiano senza tag 802.1Q sul trunk."
  },
  {
    "id": 131,
    "section_id": "S",
    "topic_id": null,
    "question": "Quale malware si replica autonomamente via rete?",
    "option_a": "Virus",
    "option_b": "Worm",
    "option_c": "Trojan",
    "option_d": "Adware",
    "correct_answer": "B",
    "explanation": "Il worm si replica autonomamente attraverso la rete senza bisogno di azione umana."
  },
  {
    "id": 132,
    "section_id": "S",
    "topic_id": null,
    "question": "Il ransomware:",
    "option_a": "Rallenta il PC",
    "option_b": "Cifra i file e chiede un riscatto",
    "option_c": "Mostra pubblicità",
    "option_d": "Registra i tasti",
    "correct_answer": "B",
    "explanation": "Il ransomware cifra i file della vittima e chiede un pagamento (riscatto) per la chiave."
  },
  {
    "id": 133,
    "section_id": "S",
    "topic_id": null,
    "question": "Il phishing è:",
    "option_a": "Un virus",
    "option_b": "Una tecnica di social engineering con email/siti falsi",
    "option_c": "Un tipo di firewall",
    "option_d": "Un protocollo di rete",
    "correct_answer": "B",
    "explanation": "Il phishing usa email e siti web falsi per rubare credenziali e dati personali."
  },
  {
    "id": 134,
    "section_id": "S",
    "topic_id": null,
    "question": "Un attacco DDoS mira a:",
    "option_a": "Rubare dati",
    "option_b": "Rendere un servizio inaccessibile",
    "option_c": "Cifrare i file",
    "option_d": "Spiare l'utente",
    "correct_answer": "B",
    "explanation": "Il DDoS inonda un server di traffico per renderlo inaccessibile, spesso usando una botnet."
  },
  {
    "id": 135,
    "section_id": "S",
    "topic_id": null,
    "question": "La regola di backup 3-2-1 significa:",
    "option_a": "3 PC, 2 server, 1 cloud",
    "option_b": "3 copie, 2 supporti diversi, 1 off-site",
    "option_c": "3 password, 2 email, 1 token",
    "option_d": "3 firewall, 2 router, 1 switch",
    "correct_answer": "B",
    "explanation": "La regola 3-2-1: 3 copie dei dati, su 2 supporti diversi, 1 copia off-site (fuori sede)."
  },
  {
    "id": 136,
    "section_id": "S",
    "topic_id": null,
    "question": "Quale è la differenza tra IDS e IPS?",
    "option_a": "Nessuna",
    "option_b": "IDS rileva, IPS rileva e blocca",
    "option_c": "IDS blocca, IPS rileva",
    "option_d": "Sono protocolli di routing",
    "correct_answer": "B",
    "explanation": "IDS (Intrusion Detection) rileva e avvisa; IPS (Intrusion Prevention) rileva e blocca automaticamente."
  },
  {
    "id": 137,
    "section_id": "S",
    "topic_id": null,
    "question": "Un trojan si differenzia dal virus perché:",
    "option_a": "Si replica da solo",
    "option_b": "Non si replica ma si maschera da programma legittimo",
    "option_c": "È più veloce",
    "option_d": "Opera solo in rete",
    "correct_answer": "B",
    "explanation": "Il trojan non si replica ma si presenta come software utile, eseguendo azioni malevole in background."
  },
  {
    "id": 138,
    "section_id": "T",
    "topic_id": null,
    "question": "Packet Tracer è sviluppato da:",
    "option_a": "Microsoft",
    "option_b": "Cisco",
    "option_c": "Google",
    "option_d": "Juniper",
    "correct_answer": "B",
    "explanation": "Cisco Packet Tracer è un simulatore di rete gratuito sviluppato da Cisco Systems."
  },
  {
    "id": 139,
    "section_id": "T",
    "topic_id": null,
    "question": "Quale cavo si usa per collegare PC a Switch?",
    "option_a": "Crossover",
    "option_b": "Seriale",
    "option_c": "Console",
    "option_d": "Straight-through (dritto)",
    "correct_answer": "D",
    "explanation": "Il cavo dritto (straight-through) si usa per collegare dispositivi diversi: PC ↔ Switch, Router ↔ Switch."
  },
  {
    "id": 140,
    "section_id": "T",
    "topic_id": null,
    "question": "Il comando \"enable\" porta alla modalità:",
    "option_a": "User EXEC",
    "option_b": "Privileged EXEC",
    "option_c": "Global Configuration",
    "option_d": "Interface",
    "correct_answer": "B",
    "explanation": "Il comando enable porta dalla modalità User EXEC (>) alla Privileged EXEC (#)."
  },
  {
    "id": 141,
    "section_id": "T",
    "topic_id": null,
    "question": "Quale comando mostra la tabella di routing?",
    "option_a": "show vlan brief",
    "option_b": "show mac-address-table",
    "option_c": "show ip route",
    "option_d": "show running-config",
    "correct_answer": "C",
    "explanation": "Il comando show ip route mostra la tabella di routing del router."
  },
  {
    "id": 142,
    "section_id": "T",
    "topic_id": null,
    "question": "Per salvare la configurazione su un router Cisco si usa:",
    "option_a": "save config",
    "option_b": "copy running-config startup-config",
    "option_c": "write memory",
    "option_d": "ctrl+s",
    "correct_answer": "B",
    "explanation": "Il comando copy running-config startup-config salva la configurazione attiva nella memoria permanente."
  },
  {
    "id": 143,
    "section_id": "T",
    "topic_id": null,
    "question": "Il cavo console serve per:",
    "option_a": "Collegare PC a Internet",
    "option_b": "Collegare PC alla porta Console di router/switch per la gestione",
    "option_c": "Collegare due switch",
    "option_d": "Collegare alla fibra ottica",
    "correct_answer": "B",
    "explanation": "Il cavo console (azzurro) collega un PC alla porta Console del router o switch per la configurazione via CLI."
  },
  {
    "id": 144,
    "section_id": "T",
    "topic_id": null,
    "question": "Quale comando attiva un'interfaccia spenta?",
    "option_a": "enable interface",
    "option_b": "no shutdown",
    "option_c": "start interface",
    "option_d": "activate",
    "correct_answer": "B",
    "explanation": "Il comando no shutdown attiva un'interfaccia che è in stato administratively down."
  },
  {
    "id": 145,
    "section_id": "T",
    "topic_id": null,
    "question": "Per verificare la connettività da un PC si usa:",
    "option_a": "show ip route",
    "option_b": "tracert",
    "option_c": "ping",
    "option_d": "show vlan",
    "correct_answer": "C",
    "explanation": "Il comando ping verifica la raggiungibilità di un host inviando pacchetti ICMP."
  },
  {
    "id": 146,
    "section_id": "T",
    "topic_id": null,
    "question": "Quale tipo di record DNS mappa un nome a un indirizzo IP?",
    "option_a": "MX Record",
    "option_b": "A Record",
    "option_c": "CNAME",
    "option_d": "PTR Record",
    "correct_answer": "B",
    "explanation": "Il record A (Address) associa un nome di dominio al suo indirizzo IPv4."
  },
  {
    "id": 147,
    "section_id": "T",
    "topic_id": null,
    "question": "Per verificare la risoluzione DNS da un PC si usa il comando:",
    "option_a": "ping",
    "option_b": "tracert",
    "option_c": "nslookup",
    "option_d": "ipconfig",
    "correct_answer": "C",
    "explanation": "Il comando nslookup interroga il server DNS e mostra l'IP associato a un nome."
  },
  {
    "id": 148,
    "section_id": "T",
    "topic_id": null,
    "question": "Quale protocollo si usa per INVIARE email?",
    "option_a": "POP3",
    "option_b": "IMAP",
    "option_c": "SMTP",
    "option_d": "FTP",
    "correct_answer": "C",
    "explanation": "SMTP (Simple Mail Transfer Protocol) è il protocollo standard per l'invio delle email."
  },
  {
    "id": 149,
    "section_id": "T",
    "topic_id": null,
    "question": "Quale protocollo si usa per SCARICARE email dal server?",
    "option_a": "SMTP",
    "option_b": "HTTP",
    "option_c": "DNS",
    "option_d": "POP3",
    "correct_answer": "D",
    "explanation": "POP3 (Post Office Protocol v3) permette al client di scaricare le email dal server di posta."
  },
  {
    "id": 150,
    "section_id": "T",
    "topic_id": null,
    "question": "In Packet Tracer, dove si configura il servizio DNS sul server?",
    "option_a": "Desktop → IP Configuration",
    "option_b": "CLI → configure terminal",
    "option_c": "Services → DNS",
    "option_d": "Physical → Modules",
    "correct_answer": "C",
    "explanation": "Il servizio DNS si configura dalla scheda Services → DNS del server in Packet Tracer."
  },
  {
    "id": 151,
    "section_id": "T",
    "topic_id": null,
    "question": "FTP utilizza quale porta per il canale di controllo?",
    "option_a": "Porta 20",
    "option_b": "Porta 21",
    "option_c": "Porta 25",
    "option_d": "Porta 80",
    "correct_answer": "B",
    "explanation": "FTP usa la porta 21 per il canale di controllo (comandi) e la porta 20 per i dati."
  },
  {
    "id": 152,
    "section_id": "T",
    "topic_id": null,
    "question": "Quale comando FTP si usa per scaricare un file dal server?",
    "option_a": "put",
    "option_b": "dir",
    "option_c": "get",
    "option_d": "download",
    "correct_answer": "C",
    "explanation": "Il comando get scarica un file dal server FTP al client."
  },
  {
    "id": 153,
    "section_id": "T",
    "topic_id": null,
    "question": "Per configurare la mail su un PC in Packet Tracer si va in:",
    "option_a": "Desktop → Command Prompt",
    "option_b": "Desktop → Email",
    "option_c": "Services → EMAIL",
    "option_d": "CLI → mail setup",
    "correct_answer": "B",
    "explanation": "La configurazione del client email si trova in Desktop → Email sul PC in Packet Tracer."
  },
  {
    "id": 154,
    "section_id": "T",
    "topic_id": null,
    "question": "Il NAT traduce:",
    "option_a": "MAC in IP",
    "option_b": "IP privati in IP pubblici",
    "option_c": "DNS in IP",
    "option_d": "VLAN in sottoreti",
    "correct_answer": "B",
    "explanation": "Il NAT (Network Address Translation) traduce gli indirizzi IP privati della LAN in IP pubblici per uscire su Internet."
  },
  {
    "id": 155,
    "section_id": "T",
    "topic_id": null,
    "question": "Nel NAT, l'interfaccia lato LAN è configurata come:",
    "option_a": "ip nat outside",
    "option_b": "ip nat inside",
    "option_c": "ip nat private",
    "option_d": "ip nat local",
    "correct_answer": "B",
    "explanation": "L'interfaccia verso la rete interna è configurata come ip nat inside, quella verso Internet come ip nat outside."
  },
  {
    "id": 156,
    "section_id": "T",
    "topic_id": null,
    "question": "Il DHCP assegna automaticamente ai PC:",
    "option_a": "Solo l'IP",
    "option_b": "IP, subnet mask, gateway e DNS",
    "option_c": "Solo il gateway",
    "option_d": "Solo il MAC",
    "correct_answer": "B",
    "explanation": "Il DHCP assegna automaticamente IP Address, Subnet Mask, Default Gateway e DNS Server."
  },
  {
    "id": 157,
    "section_id": "T",
    "topic_id": null,
    "question": "In Packet Tracer, per attivare DHCP su un PC si va in:",
    "option_a": "CLI → dhcp enable",
    "option_b": "Desktop → IP Configuration → DHCP",
    "option_c": "Services → DHCP",
    "option_d": "Config → DHCP",
    "correct_answer": "B",
    "explanation": "Sul PC si va in Desktop → IP Configuration e si seleziona DHCP al posto di Static."
  },
  {
    "id": 158,
    "section_id": "T",
    "topic_id": null,
    "question": "La Port Security sullo switch serve a:",
    "option_a": "Velocizzare le porte",
    "option_b": "Limitare i MAC ammessi su una porta",
    "option_c": "Cifrare il traffico",
    "option_d": "Configurare le VLAN",
    "correct_answer": "B",
    "explanation": "La Port Security limita quanti e quali indirizzi MAC possono utilizzare una porta dello switch."
  },
  {
    "id": 159,
    "section_id": "T",
    "topic_id": null,
    "question": "Con violation shutdown, se un MAC non autorizzato si collega:",
    "option_a": "La porta rallenta",
    "option_b": "La porta si spegne (err-disabled)",
    "option_c": "Il frame viene ignorato",
    "option_d": "Lo switch si riavvia",
    "correct_answer": "B",
    "explanation": "In modalità shutdown, la porta va in stato err-disabled e deve essere riattivata manualmente."
  }
];

export const flashcards = [
  {
    "id": 1,
    "section_id": "A",
    "topic_id": null,
    "front": "Cos'è un mezzo trasmissivo?",
    "back": "Supporto fisico o canale che trasporta segnali (elettrici, ottici, elettromagnetici) tra dispositivi. Determina velocità, distanza e affidabilità."
  },
  {
    "id": 2,
    "section_id": "A",
    "topic_id": null,
    "front": "Differenza tra mezzi guidati e non guidati?",
    "back": "Guidati: segnale viaggia su un percorso fisico (cavo). Non guidati: onde elettromagnetiche nello spazio (Wi-Fi, Bluetooth)."
  },
  {
    "id": 3,
    "section_id": "A",
    "topic_id": null,
    "front": "Cos'è il doppino intrecciato?",
    "back": "2 fili di rame isolati e intrecciati. L'intreccio riduce interferenze e diafonia. Usa connettore RJ45. Usato in Ethernet."
  },
  {
    "id": 4,
    "section_id": "A",
    "topic_id": null,
    "front": "UTP vs STP?",
    "back": "UTP: senza schermatura, economico, uffici. STP: con schermatura metallica, ambienti industriali."
  },
  {
    "id": 5,
    "section_id": "A",
    "topic_id": null,
    "front": "Fibra monomodale vs multimodale?",
    "back": "Monomodale: laser, 1 percorso, centinaia km, dorsali. Multimodale: LED, più percorsi, centinaia metri, campus."
  },
  {
    "id": 6,
    "section_id": "B",
    "topic_id": null,
    "front": "Hub vs Switch?",
    "back": "Hub: livello 1, ripete a tutte le porte, collisioni. Switch: livello 2, legge MAC, invia solo alla porta corretta."
  },
  {
    "id": 7,
    "section_id": "B",
    "topic_id": null,
    "front": "Cosa fa un router?",
    "back": "Collega reti diverse, instrada con IP (livello 3), funzioni NAT/firewall/DHCP."
  },
  {
    "id": 8,
    "section_id": "B",
    "topic_id": null,
    "front": "Cos'è un Access Point?",
    "back": "Ponte tra rete cablata e wireless. Router Wi-Fi = router + switch + AP."
  },
  {
    "id": 9,
    "section_id": "C",
    "topic_id": null,
    "front": "Cos'è il cablaggio strutturato?",
    "back": "Sistema standardizzato di cavi in edifici: ordine, flessibilità, manutenzione, scalabilità."
  },
  {
    "id": 10,
    "section_id": "C",
    "topic_id": null,
    "front": "Cablaggio orizzontale vs dorsale?",
    "back": "Orizzontale: prese ufficio → armadio piano (rame). Dorsale: collega armadi/piani (fibra)."
  },
  {
    "id": 11,
    "section_id": "C",
    "topic_id": null,
    "front": "Cos'è un patch panel?",
    "back": "Pannello porte per terminare cavi uffici, collegamento a switch tramite patch cord."
  },
  {
    "id": 12,
    "section_id": "D",
    "topic_id": null,
    "front": "Cos'è Ethernet?",
    "back": "Tecnologia LAN più diffusa, standard IEEE 802.3, opera a livello 2, gestisce frame e MAC."
  },
  {
    "id": 13,
    "section_id": "D",
    "topic_id": null,
    "front": "Struttura del frame Ethernet?",
    "back": "MAC destinazione + MAC sorgente + Tipo protocollo + Payload (46-1500 byte) + CRC."
  },
  {
    "id": 14,
    "section_id": "D",
    "topic_id": null,
    "front": "Cos'è il MAC address?",
    "back": "Identificatore univoco di 48 bit in esadecimale della scheda di rete."
  },
  {
    "id": 15,
    "section_id": "D",
    "topic_id": null,
    "front": "Cos'è CSMA/CD?",
    "back": "Carrier Sense Multiple Access with Collision Detection. Rileva collisioni, oggi meno rilevante con switch full-duplex."
  },
  {
    "id": 16,
    "section_id": "D",
    "topic_id": null,
    "front": "5 topologie di rete?",
    "back": "Stella (nodo centrale, standard LAN), Anello (circuito chiuso, obsoleta), Bus (cavo unico, obsoleta), Maglia (tutti con tutti, backbone), Albero (stella gerarchica, campus)."
  },
  {
    "id": 17,
    "section_id": "D",
    "topic_id": null,
    "front": "Formula cavi maglia completa?",
    "back": "n(n-1)/2 dove n = numero di nodi. Es: 6 nodi = 6×5/2 = 15 cavi."
  },
  {
    "id": 18,
    "section_id": "E",
    "topic_id": null,
    "front": "7 livelli OSI?",
    "back": "Applicazione, Presentazione, Sessione, Trasporto, Rete, Collegamento dati, Fisico."
  },
  {
    "id": 19,
    "section_id": "E",
    "topic_id": null,
    "front": "4 livelli TCP/IP?",
    "back": "Application, Transport, Internet, Network Access."
  },
  {
    "id": 20,
    "section_id": "E",
    "topic_id": null,
    "front": "Perché Internet usa TCP/IP?",
    "back": "Nato prima dell'OSI, adottato nella pratica da ARPANET, più semplice e pragmatico."
  },
  {
    "id": 21,
    "section_id": "E",
    "topic_id": null,
    "front": "RFC importanti da ricordare?",
    "back": "RFC 791 = IPv4, RFC 793 = TCP, RFC 768 = UDP, RFC 1918 = IP privati, RFC 2131 = DHCP, RFC 826 = ARP. Pubblicate dalla IETF, gratuite, immutabili."
  },
  {
    "id": 22,
    "section_id": "F",
    "topic_id": null,
    "front": "Cos'è un indirizzo IP?",
    "back": "Identificatore numerico per host. IPv4: 32 bit, 4 ottetti, Net ID + Host ID."
  },
  {
    "id": 23,
    "section_id": "F",
    "topic_id": null,
    "front": "Cos'è la subnet mask?",
    "back": "Separa parte rete da parte host. Es: 255.255.255.0 = /24 = 24 bit rete."
  },
  {
    "id": 24,
    "section_id": "F",
    "topic_id": null,
    "front": "Cos'è il CIDR?",
    "back": "Notazione /N che indica i bit di rete. Es: /24 = 24 bit rete, 8 host. Più flessibile delle classi."
  },
  {
    "id": 25,
    "section_id": "F",
    "topic_id": null,
    "front": "Cos'è il default gateway?",
    "back": "IP del router per raggiungere reti esterne. Deve essere nella stessa rete dell'host."
  },
  {
    "id": 26,
    "section_id": "G",
    "topic_id": null,
    "front": "Cos'è il subnetting?",
    "back": "Dividere una rete in sottoreti per gestione, traffico e sicurezza."
  },
  {
    "id": 27,
    "section_id": "G",
    "topic_id": null,
    "front": "FLSM: formula host utilizzabili?",
    "back": "2^h - 2 (si sottraggono indirizzo di rete e broadcast)."
  },
  {
    "id": 28,
    "section_id": "H",
    "topic_id": null,
    "front": "VLSM vs FLSM?",
    "back": "VLSM: mask diverse per sottorete, più efficiente. FLSM: stessa mask, spreco indirizzi."
  },
  {
    "id": 29,
    "section_id": "I",
    "topic_id": null,
    "front": "Cos'è il routing?",
    "back": "Processo per determinare il percorso dei pacchetti. Il router consulta la tabella di routing."
  },
  {
    "id": 30,
    "section_id": "I",
    "topic_id": null,
    "front": "Longest prefix match?",
    "back": "Il router sceglie la rotta con la subnet mask più lunga (più specifica)."
  },
  {
    "id": 31,
    "section_id": "J",
    "topic_id": null,
    "front": "Routing statico: vantaggi e svantaggi?",
    "back": "Vantaggi: semplice, sicuro, no overhead. Svantaggi: non scalabile, nessun failover automatico."
  },
  {
    "id": 32,
    "section_id": "K",
    "topic_id": null,
    "front": "Rete come grafo?",
    "back": "Router = nodi, Link = archi, Costo collegamento = peso. Dijkstra/Bellman-Ford per cammino minimo."
  },
  {
    "id": 33,
    "section_id": "K",
    "topic_id": null,
    "front": "Come funziona Dijkstra?",
    "back": "1) Distanza 0 alla sorgente, infinito agli altri. 2) Visita il nodo con distanza minima. 3) Aggiorna distanze dei vicini. 4) Ripeti. Complessità O(V²). Usato da OSPF."
  },
  {
    "id": 34,
    "section_id": "K",
    "topic_id": null,
    "front": "Come funziona Bellman-Ford?",
    "back": "Ripeti V-1 volte: per ogni arco, se distanza_sorgente + peso < distanza_destinazione, aggiorna. Versione distribuita usata da RIP."
  },
  {
    "id": 35,
    "section_id": "K",
    "topic_id": null,
    "front": "Dijkstra vs Bellman-Ford?",
    "back": "Dijkstra: centralizzato, no pesi negativi, O(V²), veloce → OSPF. Bellman-Ford: distribuito, sì pesi negativi, O(V×E), lento → RIP."
  },
  {
    "id": 36,
    "section_id": "K",
    "topic_id": null,
    "front": "Count-to-infinity?",
    "back": "Dopo un guasto, i router distance vector incrementano le distanze all'infinito. Soluzioni: Split Horizon, Poison Reverse, Triggered Update."
  },
  {
    "id": 37,
    "section_id": "L",
    "topic_id": null,
    "front": "RIP vs OSPF?",
    "back": "RIP: distance vector, hop count, max 15 hop, reti piccole. OSPF: link state, Dijkstra, costo banda, reti grandi."
  },
  {
    "id": 38,
    "section_id": "M",
    "topic_id": null,
    "front": "TCP vs UDP?",
    "back": "TCP: connessione, affidabile, controllo flusso, lento. UDP: connectionless, non affidabile, veloce."
  },
  {
    "id": 39,
    "section_id": "M",
    "topic_id": null,
    "front": "Three-way handshake?",
    "back": "SYN → SYN-ACK → ACK. Stabilisce connessione TCP."
  },
  {
    "id": 40,
    "section_id": "M",
    "topic_id": null,
    "front": "Cos'è un socket?",
    "back": "IP + porta. Identifica univocamente un endpoint di comunicazione."
  },
  {
    "id": 41,
    "section_id": "N",
    "topic_id": null,
    "front": "Cos'è QUIC?",
    "back": "Protocollo Google su UDP. Connessione veloce (0-1 RTT), sicurezza TLS 1.3 integrata, base di HTTP/3."
  },
  {
    "id": 42,
    "section_id": "N",
    "topic_id": null,
    "front": "Perché streaming usa UDP?",
    "back": "Perdere dati è meglio che ritardare. TCP ritrasmette causando latenza."
  },
  {
    "id": 43,
    "section_id": "O",
    "topic_id": null,
    "front": "Cos'è un firewall?",
    "back": "Sistema che controlla e filtra il traffico di rete. Principio: default deny (blocca tutto tranne ciò che è permesso)."
  },
  {
    "id": 44,
    "section_id": "O",
    "topic_id": null,
    "front": "Stateless vs Stateful?",
    "back": "Stateless: analizza ogni pacchetto singolarmente. Stateful: tiene traccia delle connessioni attive (state table), più sicuro."
  },
  {
    "id": 45,
    "section_id": "O",
    "topic_id": null,
    "front": "Cos'è una ACL?",
    "back": "Access Control List: lista di regole (permit/deny) valutate dall'alto al basso. Prima corrispondenza applicata."
  },
  {
    "id": 46,
    "section_id": "O",
    "topic_id": null,
    "front": "Cos'è la DMZ?",
    "back": "Zona demilitarizzata: sottorete tra Internet e LAN interna. Ospita server pubblici (web, mail). Doppia protezione."
  },
  {
    "id": 47,
    "section_id": "P",
    "topic_id": null,
    "front": "Simmetrica vs Asimmetrica?",
    "back": "Simmetrica: stessa chiave (AES), veloce. Asimmetrica: chiave pubblica + privata (RSA), lenta ma risolve distribuzione chiavi."
  },
  {
    "id": 48,
    "section_id": "P",
    "topic_id": null,
    "front": "Cos'è una funzione hash?",
    "back": "Produce un digest di lunghezza fissa, irreversibile. SHA-256 è lo standard. Usata per integrità, password, firme digitali."
  },
  {
    "id": 49,
    "section_id": "P",
    "topic_id": null,
    "front": "Cos'è un certificato digitale?",
    "back": "Associa chiave pubblica a un'identità. Emesso dalla CA. Contiene: nome, chiave pubblica, firma CA, validità. Usato in HTTPS."
  },
  {
    "id": 50,
    "section_id": "P",
    "topic_id": null,
    "front": "Come funziona TLS?",
    "back": "Handshake: ClientHello → ServerHello + certificato → scambio chiave (asimmetrica) → dati cifrati (simmetrica). TLS 1.3 = 1 RTT."
  },
  {
    "id": 51,
    "section_id": "Q",
    "topic_id": null,
    "front": "Cos'è una VPN?",
    "back": "Tunnel cifrato su rete pubblica. Garantisce riservatezza, autenticazione e integrità. Usata per lavoro remoto e collegamento sedi."
  },
  {
    "id": 52,
    "section_id": "Q",
    "topic_id": null,
    "front": "Site-to-Site vs Remote Access?",
    "back": "Site-to-Site: collega 2 reti, permanente, su router. Remote Access: singolo utente, on-demand, con client VPN."
  },
  {
    "id": 53,
    "section_id": "Q",
    "topic_id": null,
    "front": "IPsec vs OpenVPN vs WireGuard?",
    "back": "IPsec: livello 3, standard site-to-site. OpenVPN: TLS, flessibile. WireGuard: moderno, ~4000 righe, prestazioni top."
  },
  {
    "id": 54,
    "section_id": "R",
    "topic_id": null,
    "front": "Cos'è una VLAN?",
    "back": "Rete locale virtuale che segmenta una rete fisica in reti logiche indipendenti. Limita broadcast, migliora sicurezza."
  },
  {
    "id": 55,
    "section_id": "R",
    "topic_id": null,
    "front": "Cos'è un trunk 802.1Q?",
    "back": "Collegamento che trasporta più VLAN. Aggiunge tag di 4 byte al frame con VLAN ID. Native VLAN viaggia senza tag."
  },
  {
    "id": 56,
    "section_id": "R",
    "topic_id": null,
    "front": "Inter-VLAN routing?",
    "back": "VLAN sono isolate. Per comunicare: router-on-a-stick (trunk + subinterface) o switch Layer 3 (SVI). Ogni VLAN ha la sua sottorete."
  },
  {
    "id": 57,
    "section_id": "S",
    "topic_id": null,
    "front": "Virus vs Worm vs Trojan?",
    "back": "Virus: si attacca a file, azione umana. Worm: autonomo via rete. Trojan: si maschera da software legittimo, non si replica."
  },
  {
    "id": 58,
    "section_id": "S",
    "topic_id": null,
    "front": "Cos'è il ransomware?",
    "back": "Cifra i file e chiede riscatto. Difesa: backup 3-2-1. Esempio: WannaCry (2017)."
  },
  {
    "id": 59,
    "section_id": "S",
    "topic_id": null,
    "front": "Cos'è il social engineering?",
    "back": "Sfrutta la psicologia umana: phishing (email false), pretexting (storie inventate), baiting (USB infette). Difesa: formazione."
  },
  {
    "id": 60,
    "section_id": "T",
    "topic_id": null,
    "front": "Modalità CLI del router Cisco?",
    "back": "User EXEC (>) → enable → Privileged EXEC (#) → configure terminal → Global Config (config)# → interface → Interface Config (config-if)#."
  },
  {
    "id": 61,
    "section_id": "T",
    "topic_id": null,
    "front": "Tipi di cavo in Packet Tracer?",
    "back": "Dritto: PC↔Switch, Router↔Switch. Incrociato: Switch↔Switch, PC↔PC. Console: PC↔porta Console. Seriale: Router↔Router (WAN)."
  },
  {
    "id": 62,
    "section_id": "T",
    "topic_id": null,
    "front": "Comandi show essenziali?",
    "back": "show running-config (configurazione), show ip route (routing), show ip interface brief (interfacce), show vlan brief (VLAN), show mac-address-table (MAC)."
  },
  {
    "id": 63,
    "section_id": "T",
    "topic_id": null,
    "front": "Come verificare la connettività?",
    "back": "Da PC: ping (raggiungibilità), tracert (percorso), ipconfig (configurazione IP). Da router: show ip route, ping. Busta PDU per test grafico."
  },
  {
    "id": 64,
    "section_id": "T",
    "topic_id": null,
    "front": "Come si configura il DNS in Packet Tracer?",
    "back": "Server → Services → DNS → ON. Aggiungere record A: nome (es. www.azienda.com) → IP (es. 192.168.1.100). Sui PC: impostare DNS Server nell'IP Configuration. Verifica: nslookup dal Command Prompt."
  },
  {
    "id": 65,
    "section_id": "T",
    "topic_id": null,
    "front": "Come si configura la mail (SMTP/POP3) in Packet Tracer?",
    "back": "Server → Services → EMAIL: domain name, SMTP/POP3 ON, creare utenti. DNS: record A per mail.azienda.com → IP server. PC → Desktop → Email: configurare server SMTP/POP3, user e password. Compose per inviare, Receive per scaricare."
  },
  {
    "id": 66,
    "section_id": "T",
    "topic_id": null,
    "front": "Come si configura FTP in Packet Tracer?",
    "back": "Server → Services → FTP: creare utente con permessi (Read, Write, Delete, List). Dal PC: Command Prompt → ftp <IP>, login, poi dir/get/put/quit. Porta 21 (controllo), porta 20 (dati)."
  },
  {
    "id": 67,
    "section_id": "T",
    "topic_id": null,
    "front": "Come si configura il NAT in Packet Tracer?",
    "back": "Router: interfaccia LAN = ip nat inside, interfaccia WAN = ip nat outside. Access-list 1 permit rete. ip nat inside source list 1 interface <WAN> overload. Traduce IP privati in IP pubblico del router."
  },
  {
    "id": 68,
    "section_id": "T",
    "topic_id": null,
    "front": "Come si configura il DHCP in Packet Tracer?",
    "back": "Server → Services → DHCP: ON, gateway, DNS, start IP, mask. PC → Desktop → IP Configuration → selezionare DHCP. Oppure dal router: ip dhcp pool, network, default-router, dns-server."
  },
  {
    "id": 69,
    "section_id": "T",
    "topic_id": null,
    "front": "Cos'è la Port Security sullo switch?",
    "back": "Limita i MAC ammessi per porta. Comandi: switchport port-security, maximum 1, mac-address sticky, violation shutdown. Se un MAC diverso si collega → porta in err-disabled. Protegge da MAC flooding."
  }
];

export const oralQuestions = [
  {
    "id": 1,
    "section_id": "A",
    "question": "Descrivi i principali mezzi trasmissivi e le loro caratteristiche.",
    "model_answer": "I mezzi trasmissivi si dividono in guidati e non guidati. I guidati includono il doppino intrecciato (rame, RJ45, economico, usato in Ethernet) con varianti UTP e STP, e la fibra ottica (monomodale con laser per lunghe distanze, multimodale con LED per brevi). I non guidati usano onde elettromagnetiche: Wi-Fi, Bluetooth, cellulare, satellite. La scelta dipende da velocità, distanza, costo e ambiente.",
    "cross_section": 0
  },
  {
    "id": 2,
    "section_id": "B",
    "question": "Spiega il funzionamento di uno switch Ethernet e il suo ruolo nella rete.",
    "model_answer": "Lo switch opera al livello 2 OSI. Mantiene una tabella MAC che associa indirizzi MAC a porte fisiche. Quando riceve un frame, legge il MAC di destinazione, consulta la tabella e inoltra solo alla porta corretta. Se il MAC non è noto, fa flooding. A differenza dell'hub (livello 1, ripete a tutti), lo switch elimina le collisioni e permette comunicazione full-duplex.",
    "cross_section": 0
  },
  {
    "id": 3,
    "section_id": "C",
    "question": "Descrivi i componenti e la struttura di un cablaggio strutturato.",
    "model_answer": "Il cablaggio strutturato comprende: cavi (UTP/fibra), prese di rete a muro, patch panel negli armadi rack, patch cord per i collegamenti. Si divide in orizzontale (prese ufficio → armadio di piano, max 90m, rame) e dorsale/backbone (tra armadi/piani, tipicamente fibra). L'armadio rack da 19 pollici ospita switch, patch panel, router e server. Standards: EIA/TIA-568 e ISO/IEC 11801.",
    "cross_section": 0
  },
  {
    "id": 4,
    "section_id": "D",
    "question": "Spiega la struttura di un frame Ethernet e il ruolo del MAC address.",
    "model_answer": "Il frame Ethernet contiene: preambolo (sincronizzazione), MAC destinazione (6 byte), MAC sorgente (6 byte), tipo protocollo, payload (46-1500 byte) e CRC per il controllo errori. Il MAC address è un identificatore univoco di 48 bit in esadecimale assegnato a ogni scheda di rete. I primi 3 byte identificano il produttore (OUI). Lo switch usa i MAC per inoltrare i frame.",
    "cross_section": 0
  },
  {
    "id": 5,
    "section_id": "E",
    "question": "Confronta i modelli OSI e TCP/IP e spiega perché Internet usa TCP/IP.",
    "model_answer": "L'OSI ha 7 livelli (Fisico, Data Link, Rete, Trasporto, Sessione, Presentazione, Applicazione), il TCP/IP ne ha 4 (Network Access, Internet, Transport, Application). I 3 livelli superiori OSI corrispondono ad Application in TCP/IP. Internet usa TCP/IP perché è nato prima (anni 70), era già adottato da ARPANET, ed è più pragmatico. L'OSI resta il riferimento teorico per lo studio.",
    "cross_section": 0
  },
  {
    "id": 6,
    "section_id": "F",
    "question": "Spiega gli indirizzi IP, la subnet mask e il CIDR.",
    "model_answer": "Un indirizzo IPv4 è un numero di 32 bit diviso in 4 ottetti che identifica un host. È composto da Net ID (rete) e Host ID (host). La subnet mask separa le due parti: i bit a 1 = rete, bit a 0 = host. Il CIDR (/N) è la notazione compatta: /24 = 24 bit rete, 8 host = 254 host disponibili. Indirizzi speciali: .0 = rete, .255 = broadcast. Il default gateway è il router per le reti esterne.",
    "cross_section": 0
  },
  {
    "id": 7,
    "section_id": "G",
    "question": "Spiega il subnetting FLSM con un esempio.",
    "model_answer": "FLSM divide una rete in sottoreti con la stessa subnet mask. Esempio: 192.168.1.0/24, servono 4 sottoreti. 2²=4, prendiamo 2 bit → /26 (255.255.255.192). Ogni sottorete ha 62 host (2⁶-2). Sottoreti: .0/26, .64/26, .128/26, .192/26. Limite: spreco indirizzi se le sottoreti hanno esigenze diverse.",
    "cross_section": 0
  },
  {
    "id": 8,
    "section_id": "H",
    "question": "Confronta VLSM e FLSM e fai un esempio pratico di VLSM.",
    "model_answer": "FLSM usa la stessa mask per tutte le sottoreti → spreco. VLSM usa mask diverse → efficienza. Esempio: 192.168.10.0/24 con LAN da 100, 30 e 10 host. Si ordina dalla più grande: LAN 100 host → /25 (126 host, .0-.127), LAN 30 → /27 (30 host, .128-.159), LAN 10 → /28 (14 host, .160-.175). Spazio rimanente disponibile per espansioni. VLSM richiede routing classless (OSPF, RIPv2).",
    "cross_section": 0
  },
  {
    "id": 9,
    "section_id": "I",
    "question": "Spiega il processo di routing e la tabella di routing.",
    "model_answer": "Il routing è il processo con cui un router sceglie il percorso per i pacchetti. La tabella di routing contiene: rete destinazione, subnet mask, next hop, interfaccia di uscita, metrica. Il routing è diretto (stessa rete) o indiretto (reti diverse, via router). La regola del longest prefix match sceglie la rotta più specifica. La default route (0.0.0.0/0) si usa quando non esiste rotta specifica.",
    "cross_section": 0
  },
  {
    "id": 10,
    "section_id": "L",
    "question": "Confronta RIP e OSPF come protocolli di routing dinamico.",
    "model_answer": "RIP è distance vector con metrica hop count (max 15 hop), convergenza lenta, aggiornamenti ogni 30s, adatto a reti piccole, usa Bellman-Ford. OSPF è link state con metrica costo (banda), convergenza veloce, struttura gerarchica con aree, ogni router ha la mappa completa, usa Dijkstra. RIP è semplice ma non scalabile; OSPF è complesso ma adatto a reti enterprise.",
    "cross_section": 0
  },
  {
    "id": 11,
    "section_id": "M",
    "question": "Spiega TCP, UDP e il three-way handshake.",
    "model_answer": "TCP è orientato alla connessione, affidabile, con controllo flusso e congestione. Usa il three-way handshake (SYN → SYN-ACK → ACK) per stabilire la connessione. Sequence e ACK number garantiscono ordine e rilevamento perdite. UDP è connectionless, veloce, senza garanzie (header 8 byte vs 20+ TCP). TCP per web/email/file, UDP per streaming/gaming/DNS. Un socket = IP + porta (es. HTTP=80, HTTPS=443).",
    "cross_section": 0
  },
  {
    "id": 12,
    "section_id": "N",
    "question": "Spiega QUIC e perché le applicazioni real-time usano UDP.",
    "model_answer": "Le app real-time (videochiamate, streaming) usano UDP perché è meglio perdere dati che ritardarli. TCP ritrasmette i pacchetti persi introducendo latenza inaccettabile. QUIC, sviluppato da Google, è basato su UDP ma aggiunge affidabilità. Vantaggi: connessione veloce (0-1 RTT vs 3 di TCP+TLS), sicurezza TLS 1.3 integrata, connection migration (sopravvive al cambio rete). È la base di HTTP/3.",
    "cross_section": 0
  },
  {
    "id": 13,
    "section_id": "A",
    "question": "Collega il concetto di mezzo trasmissivo con il cablaggio strutturato e Ethernet.",
    "model_answer": "I mezzi trasmissivi (doppino UTP, fibra) sono i componenti fisici del cablaggio strutturato, che li organizza in modo standardizzato (orizzontale con rame, dorsale con fibra). Ethernet opera su questi mezzi al livello 2, definendo come trasmettere frame sui cavi. Il cablaggio strutturato fornisce l'infrastruttura, Ethernet il protocollo, il mezzo trasmissivo il supporto fisico.",
    "cross_section": 1
  },
  {
    "id": 14,
    "section_id": "B",
    "question": "Collega gli apparati di rete con i livelli del modello OSI.",
    "model_answer": "Hub = livello 1 (fisico, ripete bit), Switch = livello 2 (data link, commuta frame via MAC), Router = livello 3 (rete, instrada pacchetti via IP). Ogni apparato legge informazioni del proprio livello: l'hub non capisce MAC/IP, lo switch non legge IP, il router analizza tutto fino al livello 3. Questo determina le loro capacità e il loro ruolo nella rete.",
    "cross_section": 1
  },
  {
    "id": 15,
    "section_id": "E",
    "question": "Come si collega il modello OSI al funzionamento di TCP, UDP e allo switch?",
    "model_answer": "Lo switch opera al livello 2 OSI usando i MAC address (frame). TCP e UDP operano al livello 4 (trasporto): TCP offre connessione affidabile, UDP velocità senza garanzie. L'IP al livello 3 permette il routing. Ogni livello aggiunge il proprio header (incapsulamento): Ethernet aggiunge MAC, IP aggiunge indirizzi IP, TCP/UDP aggiunge le porte.",
    "cross_section": 1
  },
  {
    "id": 16,
    "section_id": "F",
    "question": "Come si collegano IP, subnet mask, routing e VLSM?",
    "model_answer": "L'IP identifica gli host, la subnet mask separa rete da host. Il subnetting (FLSM/VLSM) divide le reti in sottoreti. Il router usa la tabella di routing con IP e mask per instradare i pacchetti (longest prefix match). VLSM richiede protocolli classless (OSPF, RIPv2) che portano la mask negli aggiornamenti. Tutto è interconnesso: senza IP e mask corretti, il routing non funziona.",
    "cross_section": 1
  },
  {
    "id": 17,
    "section_id": "O",
    "question": "Spiega il funzionamento di un firewall e la differenza tra stateless e stateful.",
    "model_answer": "Il firewall filtra il traffico in base a regole (ACL). Il principio base è il default deny. Un firewall stateless analizza ogni pacchetto singolarmente (IP, porta, protocollo), senza memoria delle connessioni. Uno stateful tiene traccia delle connessioni attive nella state table: riconosce le risposte a connessioni autorizzate e blocca pacchetti non richiesti. Lo stateful è più sicuro perché capisce il contesto.",
    "cross_section": 0
  },
  {
    "id": 18,
    "section_id": "O",
    "question": "Cos'è una DMZ e perché è importante per la sicurezza?",
    "model_answer": "La DMZ è una sottorete tra Internet e la rete interna che ospita server pubblici (web, mail, DNS). È protetta da due firewall: uno esterno verso Internet e uno interno verso la LAN. Se un server in DMZ viene compromesso, l'attaccante non accede alla rete interna. Le regole limitano il traffico: Internet può raggiungere la DMZ su porte specifiche, la DMZ ha accesso limitato alla LAN.",
    "cross_section": 0
  },
  {
    "id": 19,
    "section_id": "P",
    "question": "Spiega la differenza tra crittografia simmetrica e asimmetrica e come vengono usate insieme.",
    "model_answer": "La simmetrica usa una sola chiave condivisa (AES): è veloce ma ha il problema della distribuzione della chiave. L'asimmetrica usa due chiavi (pubblica e privata, es. RSA): risolve la distribuzione ma è 100-1000x più lenta. In pratica si usa la crittografia ibrida: l'asimmetrica scambia una chiave simmetrica di sessione, poi i dati viaggiano cifrati con la simmetrica. È così che funziona TLS/HTTPS.",
    "cross_section": 0
  },
  {
    "id": 20,
    "section_id": "P",
    "question": "Spiega come funziona HTTPS e il ruolo dei certificati digitali.",
    "model_answer": "HTTPS = HTTP + TLS. Il browser richiede il certificato al server, verifica la firma della CA, estrae la chiave pubblica. Poi avviene il TLS handshake: scambio chiave simmetrica di sessione tramite crittografia asimmetrica. Da quel momento i dati viaggiano cifrati con AES. Il certificato X.509 contiene nome, chiave pubblica, firma della CA e validità. La PKI gestisce emissione e revoca dei certificati.",
    "cross_section": 0
  },
  {
    "id": 21,
    "section_id": "Q",
    "question": "Spiega cos'è una VPN, il tunneling e i principali protocolli.",
    "model_answer": "La VPN crea un tunnel cifrato su Internet per connettere reti o utenti in modo sicuro. Il tunneling incapsula il pacchetto originale (con IP privati) in un nuovo pacchetto cifrato con IP pubblici. I protocolli principali sono: IPsec (livello 3, standard per site-to-site, modi transport/tunnel), OpenVPN (basato su TLS, flessibile), WireGuard (moderno, codice minimale, prestazioni eccellenti). Le VPN sono site-to-site (tra reti) o remote access (singolo utente).",
    "cross_section": 0
  },
  {
    "id": 22,
    "section_id": "R",
    "question": "Spiega le VLAN, il protocollo 802.1Q e l'inter-VLAN routing.",
    "model_answer": "Le VLAN segmentano una rete fisica in reti logiche indipendenti, limitando il broadcast e migliorando la sicurezza. Ogni porta switch è assegnata a una VLAN. Per trasportare più VLAN tra switch si usa un trunk con 802.1Q che aggiunge un tag di 4 byte al frame contenente il VLAN ID. Le VLAN sono isolate: per farle comunicare serve inter-VLAN routing tramite router-on-a-stick (trunk + subinterface) o switch Layer 3 con SVI.",
    "cross_section": 0
  },
  {
    "id": 23,
    "section_id": "S",
    "question": "Descrivi i principali tipi di malware e le difese.",
    "model_answer": "Il malware include: virus (si attacca a file, azione umana), worm (si propaga da solo via rete, es. WannaCry), trojan (si maschera da software legittimo), ransomware (cifra i file e chiede riscatto), spyware/keylogger (spia attività). Gli attacchi di rete comuni sono phishing, MitM, DDoS. Le difese: antivirus aggiornato, firewall, IDS/IPS, patch di sicurezza, backup 3-2-1, MFA, formazione utenti, principio del minimo privilegio, segmentazione con VLAN.",
    "cross_section": 0
  },
  {
    "id": 24,
    "section_id": "O",
    "question": "Collega firewall, VPN, VLAN e crittografia in un'architettura di sicurezza.",
    "model_answer": "In un'architettura di sicurezza: il firewall filtra il traffico in ingresso/uscita con ACL e DMZ. Le VLAN segmentano la rete interna separando dipartimenti e limitando il broadcast. La VPN crea tunnel cifrati per il lavoro remoto e il collegamento tra sedi. La crittografia (TLS/HTTPS) protegge i dati in transito. Tutti questi elementi sono complementari: il firewall protegge il perimetro, le VLAN la rete interna, la VPN le connessioni remote, la crittografia i dati.",
    "cross_section": 1
  },
  {
    "id": 25,
    "section_id": "T",
    "question": "Descrivi come progetteresti una rete aziendale in Packet Tracer per l'esame di maturità.",
    "model_answer": "Prima si analizzano i requisiti: numero di reparti, host per reparto, servizi necessari. Si calcola l'indirizzamento con VLSM partendo dalla sottorete più grande. In Packet Tracer si posizionano i dispositivi: un router, uno switch L2, i PC. Si creano le VLAN sullo switch e si assegnano le porte. Si configura un trunk tra switch e router e si usa router-on-a-stick con subinterface per l'inter-VLAN routing. Si impostano gli IP sui PC con il gateway corretto. Si verifica con ping tra VLAN e con show vlan brief, show ip route.",
    "cross_section": 0
  },
  {
    "id": 26,
    "section_id": "T",
    "question": "Spiega le modalità CLI di un router Cisco e i comandi principali.",
    "model_answer": "Il router Cisco ha diverse modalità CLI: User EXEC (>) per comandi base, Privileged EXEC (#) con enable per comandi avanzati, Global Configuration (config)# con configure terminal per modifiche globali, Interface Configuration (config-if)# per configurare interfacce. I comandi principali sono: hostname per il nome, interface + ip address + no shutdown per attivare interfacce, show running-config per la configurazione, show ip route per le rotte, copy running-config startup-config per salvare.",
    "cross_section": 0
  },
  {
    "id": 27,
    "section_id": "T",
    "question": "Spiega come si implementano i servizi DNS, Email e FTP in Packet Tracer.",
    "model_answer": "Per il DNS: si configura un server con Services → DNS → ON, si aggiungono record A che mappano nomi di dominio a indirizzi IP, e sui PC si imposta il DNS Server nell'IP Configuration. Per la posta: serve un server mail con SMTP (invio) e POP3 (ricezione) attivi, si crea un dominio e gli account utente. Serve anche un record DNS per il server di posta. Sui PC si configura il client email con server SMTP/POP3, utente e password. Per FTP: si attiva il servizio FTP sul server con account e permessi (Read, Write, Delete). Dal PC si accede via Command Prompt con ftp <IP>, e si usano get per scaricare e put per caricare file. FTP usa porta 21 per i comandi e porta 20 per i dati.",
    "cross_section": 0
  }
];

export const glossary = [
  {
    "id": 1,
    "term": "Access Point (AP)",
    "definition": "Dispositivo che funge da ponte tra rete cablata e wireless, permettendo la connessione Wi-Fi."
  },
  {
    "id": 2,
    "term": "ACL",
    "definition": "Access Control List - lista di regole permit/deny per filtrare il traffico di rete sul firewall."
  },
  {
    "id": 3,
    "term": "ACK",
    "definition": "Acknowledgment - messaggio di conferma ricezione usato da TCP."
  },
  {
    "id": 4,
    "term": "Adware",
    "definition": "Malware che mostra pubblicità indesiderata sul dispositivo infetto."
  },
  {
    "id": 5,
    "term": "A Record",
    "definition": "Record DNS che mappa un nome di dominio a un indirizzo IPv4."
  },
  {
    "id": 6,
    "term": "AES",
    "definition": "Advanced Encryption Standard - algoritmo di crittografia simmetrica standard con chiavi 128/192/256 bit."
  },
  {
    "id": 7,
    "term": "ARP",
    "definition": "Address Resolution Protocol - risolve indirizzi IP in indirizzi MAC nella rete locale."
  },
  {
    "id": 8,
    "term": "ARP Spoofing",
    "definition": "Attacco che falsifica risposte ARP per intercettare traffico nella rete locale (MitM)."
  },
  {
    "id": 9,
    "term": "Armadio rack",
    "definition": "Struttura metallica standardizzata da 19 pollici che ospita apparati di rete."
  },
  {
    "id": 10,
    "term": "Backdoor",
    "definition": "Accesso nascosto a un sistema, spesso installato da un trojan."
  },
  {
    "id": 11,
    "term": "Backbone",
    "definition": "Cablaggio dorsale che collega gli armadi di piano e gli edifici, spesso in fibra ottica."
  },
  {
    "id": 12,
    "term": "Baiting",
    "definition": "Tecnica di social engineering che usa esche (es. USB infette) per compromettere un sistema."
  },
  {
    "id": 13,
    "term": "Bellman-Ford",
    "definition": "Algoritmo per il cammino minimo usato dal protocollo RIP."
  },
  {
    "id": 14,
    "term": "Bluetooth",
    "definition": "Tecnologia wireless a corto raggio per connessioni tra dispositivi."
  },
  {
    "id": 15,
    "term": "Bellman-Ford",
    "definition": "Algoritmo per il cammino minimo che funziona anche con pesi negativi. V-1 iterazioni su tutti gli archi. Versione distribuita usata da RIP."
  },
  {
    "id": 16,
    "term": "Botnet",
    "definition": "Rete di dispositivi infetti controllati da un attaccante, usata per attacchi DDoS."
  },
  {
    "id": 17,
    "term": "Broadcast",
    "definition": "Trasmissione di un messaggio a tutti i dispositivi della rete (indirizzo .255 in /24)."
  },
  {
    "id": 18,
    "term": "CA",
    "definition": "Certification Authority - ente che emette e firma i certificati digitali."
  },
  {
    "id": 19,
    "term": "Cablaggio strutturato",
    "definition": "Sistema standardizzato di cavi e componenti per le comunicazioni in edifici."
  },
  {
    "id": 20,
    "term": "Cavo console",
    "definition": "Cavo azzurro per collegare un PC alla porta Console di router/switch per la configurazione CLI."
  },
  {
    "id": 21,
    "term": "Cavo crossover",
    "definition": "Cavo incrociato per collegare dispositivi dello stesso tipo (Switch↔Switch, PC↔PC)."
  },
  {
    "id": 22,
    "term": "Cavo straight-through",
    "definition": "Cavo dritto per collegare dispositivi diversi (PC↔Switch, Router↔Switch)."
  },
  {
    "id": 23,
    "term": "Certificato digitale",
    "definition": "Documento elettronico che associa una chiave pubblica all'identità del proprietario, firmato dalla CA."
  },
  {
    "id": 24,
    "term": "Chiave privata",
    "definition": "Chiave segreta della coppia asimmetrica, usata per decifrare e firmare."
  },
  {
    "id": 25,
    "term": "Chiave pubblica",
    "definition": "Chiave nota a tutti della coppia asimmetrica, usata per cifrare e verificare firme."
  },
  {
    "id": 26,
    "term": "CIDR",
    "definition": "Classless Inter-Domain Routing - notazione /N per indicare la subnet mask."
  },
  {
    "id": 27,
    "term": "CLI",
    "definition": "Command Line Interface - interfaccia a riga di comando per configurare router e switch Cisco."
  },
  {
    "id": 28,
    "term": "Ciphertext",
    "definition": "Testo cifrato, risultato della cifratura di un messaggio in chiaro."
  },
  {
    "id": 29,
    "term": "Collisione",
    "definition": "Quando due dispositivi trasmettono contemporaneamente sullo stesso mezzo, causando corruzione dati."
  },
  {
    "id": 30,
    "term": "Count-to-infinity",
    "definition": "Problema dei protocolli distance vector: dopo un guasto, le distanze crescono all'infinito. Soluzioni: Split Horizon, Poison Reverse."
  },
  {
    "id": 31,
    "term": "CRC",
    "definition": "Cyclic Redundancy Check - campo del frame Ethernet per il controllo errori."
  },
  {
    "id": 32,
    "term": "Crittografia",
    "definition": "Scienza delle tecniche per rendere i messaggi incomprensibili a chi non ha la chiave."
  },
  {
    "id": 33,
    "term": "Crittografia asimmetrica",
    "definition": "Cifratura con coppia di chiavi (pubblica/privata). Più lenta ma risolve la distribuzione chiavi."
  },
  {
    "id": 34,
    "term": "Crittografia simmetrica",
    "definition": "Cifratura con una sola chiave condivisa (es. AES). Veloce ma richiede scambio sicuro della chiave."
  },
  {
    "id": 35,
    "term": "CSMA/CD",
    "definition": "Carrier Sense Multiple Access with Collision Detection - protocollo di accesso al mezzo."
  },
  {
    "id": 36,
    "term": "DDoS",
    "definition": "Distributed Denial of Service - attacco che inonda un server di traffico per renderlo inaccessibile."
  },
  {
    "id": 37,
    "term": "Default gateway",
    "definition": "Indirizzo del router usato per raggiungere reti esterne alla propria."
  },
  {
    "id": 38,
    "term": "Diffie-Hellman",
    "definition": "Algoritmo per lo scambio sicuro di chiavi crittografiche su un canale insicuro."
  },
  {
    "id": 39,
    "term": "DMZ",
    "definition": "Zona demilitarizzata - sottorete tra Internet e LAN che ospita server pubblici."
  },
  {
    "id": 40,
    "term": "DNS",
    "definition": "Domain Name System - sistema che traduce nomi di dominio in indirizzi IP. Usa record A, MX, CNAME ecc."
  },
  {
    "id": 41,
    "term": "DHCP",
    "definition": "Dynamic Host Configuration Protocol - assegna automaticamente indirizzi IP, subnet mask, gateway e DNS ai dispositivi."
  },
  {
    "id": 42,
    "term": "DHCP Snooping",
    "definition": "Funzione di sicurezza dello switch che filtra i pacchetti DHCP da porte non autorizzate (untrusted)."
  },
  {
    "id": 43,
    "term": "Diafonia",
    "definition": "Interferenza tra cavi adiacenti (crosstalk), ridotta dall'intreccio nel doppino."
  },
  {
    "id": 44,
    "term": "Dijkstra",
    "definition": "Algoritmo per il cammino minimo usato dal protocollo OSPF."
  },
  {
    "id": 45,
    "term": "Dijkstra",
    "definition": "Algoritmo per il cammino minimo da un nodo a tutti gli altri. Richiede pesi non negativi, complessità O(V²). Usato da OSPF."
  },
  {
    "id": 46,
    "term": "Distance Vector",
    "definition": "Categoria di protocolli di routing (es. RIP) dove ogni router conosce solo i vicini e scambia tabelle periodicamente."
  },
  {
    "id": 47,
    "term": "Doppino intrecciato",
    "definition": "Cavo di rete con due fili di rame intrecciati, usa connettore RJ45."
  },
  {
    "id": 48,
    "term": "ESP",
    "definition": "Encapsulating Security Payload - componente IPsec che fornisce cifratura e autenticazione."
  },
  {
    "id": 49,
    "term": "Ethernet",
    "definition": "Tecnologia LAN più diffusa, standard IEEE 802.3, opera al livello 2 OSI."
  },
  {
    "id": 50,
    "term": "Fibra ottica",
    "definition": "Mezzo trasmissivo che usa impulsi luminosi, immune a interferenze EM."
  },
  {
    "id": 51,
    "term": "Firewall",
    "definition": "Sistema di sicurezza che controlla e filtra il traffico di rete in base a regole."
  },
  {
    "id": 52,
    "term": "Firma digitale",
    "definition": "Meccanismo crittografico che garantisce autenticità e integrità di un documento."
  },
  {
    "id": 53,
    "term": "FLSM",
    "definition": "Fixed Length Subnet Mask - subnetting con la stessa mask per tutte le sottoreti."
  },
  {
    "id": 54,
    "term": "Flooding",
    "definition": "Invio di un frame a tutte le porte quando il MAC di destinazione non è in tabella."
  },
  {
    "id": 55,
    "term": "FTP",
    "definition": "File Transfer Protocol - protocollo per il trasferimento file. Porta 21 (controllo), porta 20 (dati). Comandi: get, put, dir."
  },
  {
    "id": 56,
    "term": "Frame",
    "definition": "Unità dati del livello 2 (Data Link), contiene MAC sorgente, destinazione, payload e CRC."
  },
  {
    "id": 57,
    "term": "Full-duplex",
    "definition": "Comunicazione bidirezionale simultanea su un collegamento."
  },
  {
    "id": 58,
    "term": "Grafo",
    "definition": "Struttura matematica con nodi e archi, usata per rappresentare reti."
  },
  {
    "id": 59,
    "term": "Hash",
    "definition": "Impronta digitale (digest) di lunghezza fissa prodotta da una funzione hash irreversibile."
  },
  {
    "id": 60,
    "term": "Hop count",
    "definition": "Metrica di RIP: numero di router attraversati per raggiungere la destinazione."
  },
  {
    "id": 61,
    "term": "HTTP",
    "definition": "HyperText Transfer Protocol - protocollo web, porta 80."
  },
  {
    "id": 62,
    "term": "HTTPS",
    "definition": "HTTP Secure - versione crittografata di HTTP con TLS, porta 443."
  },
  {
    "id": 63,
    "term": "Hub",
    "definition": "Apparato di rete livello 1 che ripete il segnale a tutte le porte (obsoleto)."
  },
  {
    "id": 64,
    "term": "IDS",
    "definition": "Intrusion Detection System - rileva intrusioni e attività sospette nella rete."
  },
  {
    "id": 65,
    "term": "IETF",
    "definition": "Internet Engineering Task Force - organismo che pubblica le RFC e definisce gli standard di Internet."
  },
  {
    "id": 66,
    "term": "IEEE 802.1Q",
    "definition": "Standard per il tagging VLAN sui trunk, aggiunge 4 byte al frame Ethernet."
  },
  {
    "id": 67,
    "term": "IEEE 802.3",
    "definition": "Standard che definisce Ethernet."
  },
  {
    "id": 68,
    "term": "Inter-VLAN routing",
    "definition": "Routing tra VLAN diverse tramite router-on-a-stick o switch Layer 3."
  },
  {
    "id": 69,
    "term": "IP",
    "definition": "Internet Protocol - protocollo di livello 3 per l'indirizzamento e instradamento."
  },
  {
    "id": 70,
    "term": "IPS",
    "definition": "Intrusion Prevention System - rileva e blocca automaticamente intrusioni nella rete."
  },
  {
    "id": 71,
    "term": "IPsec",
    "definition": "Internet Protocol Security - suite di protocolli per cifratura e autenticazione a livello 3."
  },
  {
    "id": 72,
    "term": "IPv4",
    "definition": "Internet Protocol versione 4 - indirizzi a 32 bit (4 ottetti)."
  },
  {
    "id": 73,
    "term": "ISO/OSI",
    "definition": "Modello di riferimento a 7 livelli per le reti di comunicazione."
  },
  {
    "id": 74,
    "term": "Keylogger",
    "definition": "Spyware che registra ogni tasto premuto sulla tastiera per rubare credenziali."
  },
  {
    "id": 75,
    "term": "LAN",
    "definition": "Local Area Network - rete locale che copre un'area limitata."
  },
  {
    "id": 76,
    "term": "Link State",
    "definition": "Tipo di protocollo di routing dove ogni router ha la mappa completa della topologia."
  },
  {
    "id": 77,
    "term": "Longest prefix match",
    "definition": "Regola di routing: si sceglie la rotta con la subnet mask più lunga."
  },
  {
    "id": 78,
    "term": "LSA",
    "definition": "Link State Advertisement - messaggio OSPF con informazioni sulla topologia."
  },
  {
    "id": 79,
    "term": "MAC address",
    "definition": "Media Access Control address - identificatore univoco a 48 bit della scheda di rete."
  },
  {
    "id": 80,
    "term": "MAC Flooding",
    "definition": "Attacco che inonda la tabella MAC dello switch per farlo comportare come un hub."
  },
  {
    "id": 81,
    "term": "Malware",
    "definition": "Malicious software - software malevolo creato per danneggiare o compromettere sistemi."
  },
  {
    "id": 82,
    "term": "Man-in-the-Middle",
    "definition": "Attacco in cui l'attaccante si inserisce tra due comunicanti per intercettare i dati."
  },
  {
    "id": 83,
    "term": "MFA",
    "definition": "Multi-Factor Authentication - autenticazione con più fattori (password + OTP/token)."
  },
  {
    "id": 84,
    "term": "Modem",
    "definition": "Modulatore/demodulatore - converte segnale digitale in analogico per la linea del provider."
  },
  {
    "id": 85,
    "term": "NAT",
    "definition": "Network Address Translation - traduce indirizzi IP privati in pubblici."
  },
  {
    "id": 86,
    "term": "Native VLAN",
    "definition": "VLAN i cui frame viaggiano senza tag 802.1Q sul trunk (default: VLAN 1)."
  },
  {
    "id": 87,
    "term": "NGFW",
    "definition": "Next-Generation Firewall - firewall avanzato con IPS, analisi SSL e controllo applicazioni."
  },
  {
    "id": 88,
    "term": "NIC",
    "definition": "Network Interface Card - scheda di rete di un dispositivo."
  },
  {
    "id": 89,
    "term": "OpenVPN",
    "definition": "Protocollo VPN open source basato su TLS/SSL, flessibile e molto diffuso."
  },
  {
    "id": 90,
    "term": "OSPF",
    "definition": "Open Shortest Path First - protocollo di routing link state basato su Dijkstra."
  },
  {
    "id": 91,
    "term": "Ottetto",
    "definition": "Gruppo di 8 bit, un byte. Un indirizzo IPv4 ha 4 ottetti."
  },
  {
    "id": 92,
    "term": "Packet Tracer",
    "definition": "Simulatore di rete gratuito di Cisco per progettare e configurare reti virtuali."
  },
  {
    "id": 93,
    "term": "OUI",
    "definition": "Organizationally Unique Identifier - primi 3 byte del MAC, identificano il produttore."
  },
  {
    "id": 94,
    "term": "Pacchetto",
    "definition": "Unità dati del livello 3 (Rete), contiene indirizzi IP."
  },
  {
    "id": 95,
    "term": "Patch cord",
    "definition": "Cavo corto per collegare dispositivi a prese di rete o patch panel a switch."
  },
  {
    "id": 96,
    "term": "Patch panel",
    "definition": "Pannello di permutazione dove terminano i cavi dagli uffici."
  },
  {
    "id": 97,
    "term": "Payload",
    "definition": "Dati utili trasportati all'interno di un frame o pacchetto."
  },
  {
    "id": 98,
    "term": "Phishing",
    "definition": "Attacco che usa email/siti falsi per rubare credenziali. Varianti: spear phishing, whaling."
  },
  {
    "id": 99,
    "term": "POP3",
    "definition": "Post Office Protocol v3 - protocollo per scaricare email dal server al client. Porta 110."
  },
  {
    "id": 100,
    "term": "PKI",
    "definition": "Public Key Infrastructure - sistema di gestione dei certificati digitali (CA, RA, CRL)."
  },
  {
    "id": 101,
    "term": "Plaintext",
    "definition": "Testo in chiaro, messaggio originale prima della cifratura."
  },
  {
    "id": 102,
    "term": "PDU",
    "definition": "Protocol Data Unit - unità dati di un protocollo, visibile nella modalità Simulation di Packet Tracer."
  },
  {
    "id": 103,
    "term": "Port Security",
    "definition": "Funzione di sicurezza dello switch che limita i MAC address ammessi su una porta."
  },
  {
    "id": 104,
    "term": "Porta (networking)",
    "definition": "Numero che identifica un'applicazione specifica su un host (0-65535)."
  },
  {
    "id": 105,
    "term": "QUIC",
    "definition": "Quick UDP Internet Connections - protocollo Google su UDP, base di HTTP/3."
  },
  {
    "id": 106,
    "term": "Ransomware",
    "definition": "Malware che cifra i file e chiede un riscatto per la chiave di decifratura."
  },
  {
    "id": 107,
    "term": "RFC",
    "definition": "Request for Comments - documenti ufficiali che definiscono gli standard di Internet, pubblicati dalla IETF."
  },
  {
    "id": 108,
    "term": "RIP",
    "definition": "Routing Information Protocol - protocollo distance vector con metrica hop count."
  },
  {
    "id": 109,
    "term": "RJ45",
    "definition": "Connettore standard per cavi Ethernet (doppino intrecciato)."
  },
  {
    "id": 110,
    "term": "Rootkit",
    "definition": "Malware che si nasconde nel sistema operativo per mantenere accesso privilegiato."
  },
  {
    "id": 111,
    "term": "Router",
    "definition": "Apparato di rete livello 3 che collega reti diverse e instrada pacchetti IP."
  },
  {
    "id": 112,
    "term": "Router-on-a-stick",
    "definition": "Tecnica inter-VLAN routing con un trunk e subinterface virtuali sul router."
  },
  {
    "id": 113,
    "term": "Routing",
    "definition": "Processo di determinazione del percorso migliore per i pacchetti."
  },
  {
    "id": 114,
    "term": "Routing statico",
    "definition": "Routing con percorsi configurati manualmente dall'amministratore."
  },
  {
    "id": 115,
    "term": "Routing dinamico",
    "definition": "Routing con aggiornamento automatico delle rotte tramite protocolli."
  },
  {
    "id": 116,
    "term": "RSA",
    "definition": "Algoritmo di crittografia asimmetrica basato sulla fattorizzazione di numeri primi."
  },
  {
    "id": 117,
    "term": "Segmento",
    "definition": "Unità dati del livello 4 (Trasporto) in TCP."
  },
  {
    "id": 118,
    "term": "SHA-256",
    "definition": "Secure Hash Algorithm a 256 bit - funzione hash crittografica standard attuale."
  },
  {
    "id": 119,
    "term": "SMTP",
    "definition": "Simple Mail Transfer Protocol - protocollo per l'invio di email. Porta 25 (o 587 con TLS)."
  },
  {
    "id": 120,
    "term": "Social engineering",
    "definition": "Tecniche che sfruttano la psicologia umana per ottenere informazioni o accesso ai sistemi."
  },
  {
    "id": 121,
    "term": "Socket",
    "definition": "Combinazione di indirizzo IP e porta che identifica un endpoint di comunicazione."
  },
  {
    "id": 122,
    "term": "Split Horizon",
    "definition": "Tecnica anti-loop per distance vector: non inviare una rotta al vicino da cui l'hai appresa. Previene il count-to-infinity."
  },
  {
    "id": 123,
    "term": "SPF (Shortest Path First)",
    "definition": "Altro nome dell'algoritmo di Dijkstra, usato da OSPF per calcolare l'albero dei cammini minimi."
  },
  {
    "id": 124,
    "term": "Spyware",
    "definition": "Malware che spia le attività dell'utente e raccoglie dati senza consenso."
  },
  {
    "id": 125,
    "term": "Stateful firewall",
    "definition": "Firewall che tiene traccia delle connessioni attive per decisioni di filtraggio più intelligenti."
  },
  {
    "id": 126,
    "term": "STP (cavo)",
    "definition": "Shielded Twisted Pair - doppino con schermatura metallica."
  },
  {
    "id": 127,
    "term": "Subnet mask",
    "definition": "Maschera che separa la parte rete dalla parte host di un indirizzo IP."
  },
  {
    "id": 128,
    "term": "Subnetting",
    "definition": "Tecnica di divisione di una rete in sottoreti più piccole."
  },
  {
    "id": 129,
    "term": "Switch",
    "definition": "Apparato di rete livello 2 che commuta frame usando la tabella MAC."
  },
  {
    "id": 130,
    "term": "SYN",
    "definition": "Synchronize - primo messaggio del three-way handshake TCP."
  },
  {
    "id": 131,
    "term": "Tabella di routing",
    "definition": "Database del router con le rotte verso le reti di destinazione."
  },
  {
    "id": 132,
    "term": "Tabella MAC",
    "definition": "Database dello switch con associazioni MAC address - porta fisica."
  },
  {
    "id": 133,
    "term": "TCP",
    "definition": "Transmission Control Protocol - protocollo di trasporto affidabile e orientato alla connessione."
  },
  {
    "id": 134,
    "term": "TCP/IP",
    "definition": "Modello di rete a 4 livelli usato da Internet."
  },
  {
    "id": 135,
    "term": "Three-way handshake",
    "definition": "Processo in 3 passi (SYN, SYN-ACK, ACK) per stabilire una connessione TCP."
  },
  {
    "id": 136,
    "term": "TLS",
    "definition": "Transport Layer Security - protocollo di crittografia per comunicazioni sicure."
  },
  {
    "id": 137,
    "term": "Topologia a bus",
    "definition": "Tutti i dispositivi condividono un unico cavo. Oggi obsoleta."
  },
  {
    "id": 138,
    "term": "Topologia a maglia",
    "definition": "Ogni dispositivo collegato a tutti (o quasi) gli altri. Massima ridondanza, usata nei backbone."
  },
  {
    "id": 139,
    "term": "Topologia a stella",
    "definition": "Configurazione in cui tutti i dispositivi sono collegati a un nodo centrale (switch)."
  },
  {
    "id": 140,
    "term": "Topologia ad albero",
    "definition": "Stella gerarchica su più livelli. Tipica del cablaggio strutturato di campus."
  },
  {
    "id": 141,
    "term": "Topologia ad anello",
    "definition": "Dispositivi collegati in circuito chiuso. Usata in Token Ring, oggi obsoleta."
  },
  {
    "id": 142,
    "term": "Trojan",
    "definition": "Malware mascherato da programma legittimo che esegue azioni malevole in background."
  },
  {
    "id": 143,
    "term": "Trunk",
    "definition": "Collegamento tra switch che trasporta traffico di più VLAN con tagging 802.1Q."
  },
  {
    "id": 144,
    "term": "Tunneling",
    "definition": "Tecnica VPN che incapsula e cifra pacchetti originali dentro nuovi pacchetti."
  },
  {
    "id": 145,
    "term": "UDP",
    "definition": "User Datagram Protocol - protocollo di trasporto veloce senza garanzie di consegna."
  },
  {
    "id": 146,
    "term": "UTP",
    "definition": "Unshielded Twisted Pair - doppino senza schermatura, economico."
  },
  {
    "id": 147,
    "term": "VLAN",
    "definition": "Virtual LAN - rete locale virtuale per segmentare logicamente una rete fisica."
  },
  {
    "id": 148,
    "term": "VLSM",
    "definition": "Variable Length Subnet Mask - subnetting con mask diverse per ogni sottorete."
  },
  {
    "id": 149,
    "term": "VPN",
    "definition": "Virtual Private Network - tunnel cifrato su rete pubblica per connessioni sicure."
  },
  {
    "id": 150,
    "term": "Wi-Fi",
    "definition": "Tecnologia wireless per reti locali basata su standard IEEE 802.11."
  },
  {
    "id": 151,
    "term": "WireGuard",
    "definition": "Protocollo VPN moderno con codice minimale e prestazioni elevate."
  },
  {
    "id": 152,
    "term": "Worm",
    "definition": "Malware che si replica autonomamente attraverso la rete senza azione umana."
  }
];
