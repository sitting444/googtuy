module.exports = {
  _: {
    storage_is_encrypted: 'Lagringen är krypterad. Lösenords krävs för att dekryptera',
    enter_password: 'Ange lösenord',
    bad_password: 'Felaktigt lösenord, försök igen',
    never: 'aldrig',
    continue: 'Fortsätt',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Välj plånbok',
    options: 'inställningar',
    createBitcoinWallet:
      'Du har ännu ingen Bitcoinplånbok. För att kunna sätta in pengar i en Lightningplånbok behöver en Bitcoinplånbok skapas eller importeras. Vill du fortsätta ändå?',
    list: {
      app_name: 'BlueWallet',
      title: 'plånböcker',
      header: 'En plånbok representerar ett par av en privat nyckel samt en adress' + 'som du kan dela med andra för att ta emot coins',
      add: 'Ny Plånbok',
      create_a_wallet: 'Ny plånbok',
      create_a_wallet1: 'Det är gratis och du kan skapa',
      create_a_wallet2: 'hur många du vill',
      latest_transaction: 'senaste transaktion',
      empty_txs1: 'Dina transaktioner kommer att visas här',
      empty_txs2: 'men än så länge finns inga!',
      empty_txs1_lightning:
        'Lightningplånboken ska användas för dagliga småtransaktioner. Avgifterna är minimala och transaktioner sker direkt.',
      empty_txs2_lightning: '\nFör att komma igång klicka på "sätt in / ta ut" ovan och sätt in dina första bitcoin.',
      tap_here_to_buy: 'Tryck här för att köpa bitcoin',
    },
    reorder: {
      title: 'Sortera plånböcker',
    },
    add: {
      title: 'ny plånbok',
      description:
        'Du kan antingen skanna in en backup (i WIF - Wallet Import Format) eller skapa en ny plånbok. Segwit-plånböcker stöds som standard.',
      scan: 'Skanna',
      create: 'Skapa',
      label_new_segwit: 'Ny SegWit',
      label_new_lightning: 'Ny Lightning',
      wallet_name: 'namn',
      wallet_type: 'typ',
      or: 'eller',
      import_wallet: 'Importera plånbok',
      imported: 'Importerad',
      coming_soon: 'Kommer snart',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Plånbok',
      address: 'Adress',
      type: 'Typ',
      label: 'Etikett',
      description: 'beskrivning',
      are_you_sure: 'Är du säker?',
      yes_delete: 'Ja, ta bort',
      no_cancel: 'Nej, avbryt',
      delete: 'Radera',
      save: 'Spara',
      delete_this_wallet: 'Radera denna plånbok',
      export_backup: 'Exportera / ta backup',
      buy_bitcoin: 'Köp bitcoin',
      show_xpub: 'Visa plånbokens XPUB',
    },
    export: {
      title: 'exportera plånbok',
    },
    xpub: {
      title: 'plånbokens XPUB',
      copiedToClipboard: 'Kopierad till urklipp',
    },
    import: {
      title: 'import',
      explanation:
        'Skriv in dina ord, din privata nyckel, WIF, eller vad du kan tänkas ha. BlueWallet kommer att göra sitt bästa för att gissa formatet och importera plånboken',
      imported: 'Importerad',
      error: 'Import misslyckades. Kontrollera att informationen du matade in är korrekt.',
      success: 'Import lyckad!',
      do_import: 'Importera',
      scan_qr: 'eller skanna QR-kod istället?',
    },
    scanQrWif: {
      go_back: 'Tillbaka',
      cancel: 'Avbryt',
      decoding: 'Avkodar',
      input_password: 'Ange lösenord',
      password_explain: 'Detta är BIP38-krypterad privat nyckel',
      bad_password: 'Felaktigt lösenord',
      wallet_already_exists: 'En sådan plånbok existerar redan',
      bad_wif: 'Felaktigt WIF',
      imported_wif: 'Importerade WIF ',
      with_address: ' med adress ',
      imported_segwit: 'Importerade SegWit',
      imported_legacy: 'Importerade Legacy',
      imported_watchonly: 'Importerade Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transaktioner',
      title: 'transaktioner',
      description: 'Lista över dina plånböckers inkommande och utgående transaktioner',
      conf: 'konf',
    },
    details: {
      title: 'Transaktion',
      from: 'Input',
      to: 'Output',
      copy: 'Kopiera',
      transaction_details: 'Transaktionsdetaljer',
      show_in_block_explorer: 'Visa i block explorer',
    },
  },
  send: {
    header: 'Skicka',
    details: {
      title: 'skapa transaktion',
      amount_field_is_not_valid: 'Angivet belopp är inte giltigt',
      fee_field_is_not_valid: 'Angiven avgift är inte giltig',
      address_field_is_not_valid: 'Angiven adress är inte giltig',
      total_exceeds_balance: 'Beloppet överstiger plånbokens tillgängliga belopp',
      create_tx_error: 'Något gick fel när transaktionen skulle skapas. Kontrollera att adressen är giltig.',
      address: 'adress',
      amount_placeholder: 'belopp att skicka (i BTC)',
      fee_placeholder: 'plus avgift (i BTC)',
      note_placeholder: 'egen notering',
      cancel: 'Avbryt',
      scan: 'Skanna',
      send: 'Skicka',
      create: 'Skapa',
      remaining_balance: 'Återstående saldo',
    },
    confirm: {
      header: 'Bekräfta',
      sendNow: 'Skicka nu',
    },
    success: {
      done: 'Klart!',
    },
    create: {
      details: 'Detaljer',
      title: 'skapa transaktion',
      error: 'Något gick fel när transaktionen skulle skapas. Felaktig adress eller belopp?',
      go_back: 'Tillbaka',
      this_is_hex: 'Detta är transaktionens hex, signerad och redo att skickas ut på nätverket.',
      to: 'Till',
      amount: 'Belopp',
      fee: 'Avgift',
      tx_size: 'Transaktionsstorlek',
      satoshi_per_byte: 'Satoshi per byte',
      memo: 'Memo',
      broadcast: 'Publicera',
      not_enough_fee: 'För låg avgift. Öka avgiften',
    },
  },
  receive: {
    header: 'Ta emot',
    details: {
      title: 'Dela den här adressen med betalaren',
      share: 'dela',
      copiedToClipboard: 'Kopierad till urklipp.',
      label: 'Beskrivning',
      create: 'Skapa',
      setAmount: 'Ta emot med belopp',
    },
    scan_lnurl: 'Scan to receive',
  },
  buyBitcoin: {
    header: 'Köp bitcoin',
    tap_your_address: 'Tryck på adressen för att kopiera den till urklipp:',
    copied: 'Kopierad till urklipp!',
  },
  settings: {
    header: 'inställningar',
    plausible_deniability: 'Trovärdigt förnekande...',
    storage_not_encrypted: 'Lagring: ej krypterad',
    storage_encrypted: 'Lagring: krypterad',
    password: 'Lösenord',
    password_explain: 'Skapa ett lösenord som du kommer att använda vid dekryptering',
    retype_password: 'Ange lösenord igen',
    passwords_do_not_match: 'Lösenorden är olika!',
    security: 'Kryptera lagring',
    lightning_settings: 'Lightning Network',
    lightning_settings_explain:
      'För att ansluta till din egen LND-nod, installera LndHub' +
      " och mata in dess URL nedan. Lämna blankt för att använda BlueWallet's LNDHub (lndhub.io). Plånböcker skapade efter att inställningarna sparats kommer att använda den angivna LNDHub:en",
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'Spara',
    about: 'Om',
    language: 'Språk',
    currency: 'Valuta',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Trovärdigt förnekande',
    help:
      'Under vissa omständigheter kan du bli tvingad att uppge ditt ' +
      'lösenord. För att se till att dina pengar är säkra kan BlueWallet skapa ytterligare en ' +
      'krypterad lagringsyta, med ett annat lösenord. Vid tvång ' +
      'kan du uppge detta alternativa lösenord. När det matas in i ' +
      "BlueWallet så kommer det att låsa upp din 'fejkade' lagringsyta. Det kommer att se " +
      'ut precis som vanligt men i själva verket är dina pengar i säkert förvar på din ' +
      'primära lagringsyta.',
    help2:
      'Den alternativa lagringsytan kommer att vara fullt fungerade och du kan eventuellt spara en mindre summa där för att den ska verka mer trovärdig.',
    create_fake_storage: 'Skapa fejkad lagringsyta',
    go_back: 'Tillbaka',
    create_password: 'Skapa ett lösenord',
    create_password_explanation: 'Lösenordet för den fejkade lagringsytan får inte vara samma som ditt huvudlösenord',
    password_should_not_match: 'Lösenordet för den fejkade lagringsytan får inte vara samma som ditt huvudlösenord',
    retype_password: 'Ange lösenord igen',
    passwords_do_not_match: 'Lösenorden är olika!',
    success: 'Fejkad lagringsyta skapad!',
  },
  lnd: {
    title: 'sätt in / ta ut',
    choose_source_wallet: 'Välj en plånbok',
    refill_lnd_balance: 'Fyll på Lightning-plånbok',
    refill: 'Sätt in',
    withdraw: 'Ta ut',
    expired: 'Förfallen',
    placeholder: 'Faktura',
    sameWalletAsInvoiceError: 'Du kan inte betala en faktura från samma plånbok som användes för att skapa den.',
  },
  pleasebackup: {
    title: 'Din plånbok har skapats...',
    text:
      'Innan du går vidare, var snäll och skriv ned dessa ord på ett papper och förvara på ett säkert ställe. De är din backup och säkerställer att du kan återställa din plånbok igen om något händer. Den går att återställa även i andra plånböcker såsom t.ex. Electrum (https://electrum.org/).',
    ok: 'OK, jag har skrivit ned orden!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'Denna faktura har ej betalats och är nu utgången',
    has_been_paid: 'Denna faktura är betald',
    please_pay: 'Var god betala',
    sats: 'sats',
    for: 'För:',
    additional_info: 'Ytterligare information',
    open_direct_channel: 'Öppna en direkt kanal med denna nod:',
  },
};
