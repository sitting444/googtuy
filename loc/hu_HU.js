module.exports = {
  _: {
    storage_is_encrypted: 'A Tárhely titkosítva. Jelszó szükséges a dekódoláshoz',
    enter_password: 'Írd be a jelszót',
    bad_password: 'Hibás jelszó, próbáld újra',
    never: 'soha',
    continue: 'Folytat',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Válassz tárcát',
    options: 'beállítások',
    createBitcoinWallet:
      'Jelenleg még nincsen Bitcoin tárcád. Lightning tárca létrehozásához először készíts egy Bitcoin tárcát, vagy importálj egy már meglévő tárcát. Mindenképp folytatod?',
    list: {
      app_name: 'BlueWallet',
      title: 'tárcák',
      header: 'Egy tárca nem más, mint egy kulcspár, és egy cím. A cím nyilvános, és megoszhatod másokkal, ha szeretnél Bitcoint fogadni',
      add: 'Új Tárca',
      create_a_wallet: 'Új tárca',
      create_a_wallet1: 'Ingyenes, és annyit hozhatsz létre',
      create_a_wallet2: 'amennyit szeretnél',
      create_a_button: 'add hozzá',
      latest_transaction: 'utolsó tranzakció',
      empty_txs1: 'A tranzakcióid itt fognak megjelenni',
      empty_txs2: 'de még nem volt tranzakciód!',
      empty_txs1_lightning:
        'A Lightning tárcát a mindennapi tranzakcióidhoz használhatod. A tranzakciók azonnal végrehajtódnak, minimális átutalási díjjal.',
      empty_txs2_lightning: '\nA kezdéshez kattints a "Kezelés"-re, és töltsd fel az egyenleged.',
      tap_here_to_buy: 'Bitcoin vásárláshoz kattints ide',
    },
    reorder: {
      title: 'Tárcák rendezése',
    },
    add: {
      title: 'új tárca',
      description:
        'Beszkennelhetsz egy már meglévő tárcát (WIF formátumban - Wallet Import Format) vagy készíthetsz egy új tárcát. A Segwit tárcák alapból támogatottak.',
      scan: 'Scan',
      create: 'Létrehoz',
      label_new_segwit: 'Új SegWit',
      label_new_lightning: 'Új Lightning',
      wallet_name: 'név',
      wallet_type: 'típus',
      or: 'vagy',
      import_wallet: 'Tárca importálása',
      imported: 'Importálva',
      coming_soon: 'Hamarosan',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Tárca',
      address: 'Cím',
      master_fingerprint: 'Master fingerprint',
      type: 'Típus',
      label: 'Cimke',
      destination: 'destination',
      description: 'leírás',
      are_you_sure: 'Biztos vagy benne?',
      yes_delete: 'Igen, töröld',
      no_cancel: 'Nem, megszakít',
      delete: 'Törlés',
      save: 'Ment',
      delete_this_wallet: 'Töröld ezt a tárcát',
      export_backup: 'Exportálás / Biztonsági mentés',
      buy_bitcoin: 'Bitcoin vásáslás',
      show_xpub: 'Mutasd a tárca XPUB kulcsát',
      connected_to: 'Connected to',
      advanced: 'Advanced',
      use_with_hardware_wallet: 'Use with hardware wallet',
    },
    export: {
      title: 'tárca exportálása',
    },
    xpub: {
      title: 'a tárca XPUB kulcsa',
      copiedToClipboard: 'Vágólapra másolva',
    },
    import: {
      title: 'importálás',
      explanation:
        'Írd be a kulcsszavaidat, a titkos kulcsodat, WIF-et, vagy bármi mást. A BlueWallet megpróbálja kitalálni a helyes formátumot, és importálja a tárcádat',
      imported: 'Importálva',
      error: 'Importálás sikertelen. Ellenőrizd, hogy helyes adatokat adtál-e meg.',
      success: 'Sikeres importálás!',
      do_import: 'Importálás',
      scan_qr: 'vagy QR-kód szkennelése?',
    },
    scanQrWif: {
      go_back: 'Vissza',
      cancel: 'Megszakít',
      decoding: 'Dekódolás',
      input_password: 'Add meg a jelszavad',
      password_explain: 'Ez egy BIP38-titkosított titkos kulcs',
      bad_password: 'Hibás jelszó',
      wallet_already_exists: 'Egy ilyen tárca már létezik',
      bad_wif: 'Hibás WIF',
      imported_wif: 'Importált WIF ',
      with_address: ' címmel ',
      imported_segwit: 'Importált SegWit',
      imported_legacy: 'Importált Legacy',
      imported_watchonly: 'Importált Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Tranzakciók',
      title: 'tranzakciók',
      description: 'Lista a tárcáid bejövő és kimenő tranzakcióiról',
      conf: 'jóvá',
    },
    details: {
      title: 'Tranzakció',
      from: 'Input',
      to: 'Output',
      copy: 'Másolás',
      transaction_details: 'Tranzakció részletei',
      show_in_block_explorer: 'Mutasd a block explorerben',
    },
  },
  send: {
    header: 'Küldés',
    details: {
      title: 'tranzakció létrehozása',
      amount_field_is_not_valid: 'Érvénytelen összeg',
      fee_field_is_not_valid: 'Èrvénytelen tranzakciós díj',
      address_field_is_not_valid: 'Érvénytelen cím',
      total_exceeds_balance: 'A megadott összeg nagyobb, mint a tárca elérhető egyenlege',
      create_tx_error: 'Hiba történt a tranzakció létrehozásakor. Ellenőrizd a megadott cím érvényességét.',
      address: 'cím',
      amount_placeholder: 'küldendő összeg (BTC)',
      fee_placeholder: 'tranzakciós díj (BTC)',
      note_placeholder: 'saját megjegyzés',
      cancel: 'Megszakít',
      scan: 'Scan',
      send: 'Küldés',
      create: 'Létrehoz',
      remaining_balance: 'Fennmaradó egyenleg',
    },
    confirm: {
      header: 'Megerősítés',
      sendNow: 'Küldés most',
    },
    success: {
      done: 'Kész!',
    },
    create: {
      details: 'Részletek',
      title: 'tranzakció létrehozása',
      error: 'Hiba történt a tranzakció létrehozásakor. Hibás cím vagy összeg?',
      go_back: 'Vissza',
      this_is_hex: 'Tranzakció hexadecimális formátumban, aláírva és küldésre készen.',
      to: 'Címzett',
      amount: 'Összeg',
      fee: 'Díj',
      tx_size: 'Tranzakció mérete',
      satoshi_per_byte: 'Satoshi per byte',
      memo: 'Memo',
      broadcast: 'Küldés',
      not_enough_fee: 'Díj túl alacsony. Növeld a megadott díjat',
    },
  },
  receive: {
    header: 'Fogadás',
    details: {
      title: 'Cím megosztása a fizető féllel',
      share: 'megosztás',
      copiedToClipboard: 'Vágólapra másolva.',
      label: 'Leírás',
      create: 'Létrehoz',
      setAmount: 'Fogadandó összeg',
    },
    scan_lnurl: 'Scan to receive',
  },
  buyBitcoin: {
    header: 'Bitcoin vásárlása',
    tap_your_address: 'Kattints a címre a vágólapra másoláshoz:',
    copied: 'Vágólapra másolva!',
  },
  settings: {
    header: 'beállítások',
    plausible_deniability: 'Elfogadható tagadhatóság...',
    storage_not_encrypted: 'Tárhely: nincs titkosítva',
    storage_encrypted: 'Tárhely: titkosítva',
    password: 'Jelszó',
    password_explain: 'Add meg a jelszót, amivel majd dekódolhatod a tárhelyet',
    retype_password: 'Jelszó megerősítése',
    passwords_do_not_match: 'A megadott jelszavak különböznek!',
    encrypt_storage: 'Tárhely titkosítása',
    lightning_settings: 'Lightning Beállítások',
    lightning_settings_explain:
      'Saját LND-csomóponthoz való csatlakozáshoz telepítsd az LndHub-ot' +
      ' és írd be az URL-ét alul. Hagyd üresen, ha a BlueWallet saját LNDHub-jához (lndhub.io) szeretnél csatlakozni.' +
      ' A beállítások mentése után, minden újonnan létrehozott tárca a megadott LDNHubot fogja használni.',
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'Ment',
    about: 'Egyéb',
    language: 'Nyelv',
    currency: 'Valuta',
    advanced_options: 'Haladó Beállítások',
    enable_advanced_mode: 'Halandó mód bekapcsolása',
  },
  plausibledeniability: {
    title: 'Elfogadható tagadhatóság',
    help:
      'Bizonyos körülmények között arra kényszerülhetsz, hogy megadd' +
      'a jelszavadat. A pénzed biztonsága érdekében a BlueWallettel létrehozhatsz egy ' +
      'alternatív titkosított tárhelyet, alternatív jelszóval. Kényszer hatása alatt ' +
      'megadhatod az alternatív jelszavadat, ami után a BlueWallet az alternatív ' +
      'tárhelyedet fogja megnyitni. Ez ugyanúgy fog kinézni, mint egy igazi tárhely, ' +
      'azzal a különbséggel, hogy a pénzed teljes biztonságban lesz az elsődleges ' +
      'tárhelyen.',
    help2: 'Az alternatív tárhely teljesen működőképes, és akár egy kisebb összeget is elhelyezhetsz rajta, hogy hitelesebbnek tűnjön.',
    create_fake_storage: 'Hamis tárhely létrehozása',
    go_back: 'Vissza',
    create_password: 'Jelszó létrehozása',
    create_password_explanation: 'A hamis tárhely jelszava nem lehet ugyanaz, mint az igazi tárhelyé',
    password_should_not_match: 'A hamis tárhely jelszava nem lehet ugyanaz, mint az igazi tárhelyé',
    retype_password: 'Jelszó megerősítése',
    passwords_do_not_match: 'A megadott jelszavak különböznek!',
    success: 'Hamis tárhely létrehozva!',
  },
  lnd: {
    title: 'kezelés',
    choose_source_wallet: 'Válassz forrás tárcát',
    refill_lnd_balance: 'Lightning egyenleg feltöltése',
    refill: 'Feltölt',
    withdraw: 'Pénzkivétel',
    expired: 'Lejárt',
    placeholder: 'Számla',
    sameWalletAsInvoiceError: 'Számlát nem fizethesz be ugyanarról a tárcáról, mint amellyel létrehoztad.',
  },
  pleasebackup: {
    title: 'A tárcád elkészült...',
    text:
      'Kérlek írd le az alábbi emlékeztető szavakat egy papírlapra, és tedd el egy biztonságos helyre. ' +
      'Ez egy biztonsági mentés, amellyel helyreállíthatod a tárcádat egy másik eszközön.',
    ok: 'Rendben, leírtam!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'Ezt a számlát nem fizették ki és lejárt',
    has_been_paid: 'Ezt a számlát kifizették',
    please_pay: 'Kérlek fizess',
    sats: 'sats',
    for: 'Cím:',
    additional_info: 'További információk',
    open_direct_channel: 'Közvetlen csatorna nyitása erre a csomópontra:',
  },
};
