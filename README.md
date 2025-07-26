# 🇨🇭 Swiss Offline ID Wallet (PWA)

Diese App dient zur sicheren Offline-Speicherung und Vorschau von Schweizer Ausweisen (Pass, ID, Führerschein) als PDF-Vorschau.

## 🚀 Funktionen
- PDF-Anzeige mit Thumbnails
- AES-256-Verschlüsselung (CryptoJS)
- Konfigurierbarer Schlüssel in `config.js`
- Optionaler Basic-Auth-Schutz per `.htaccess`
- Offline-fähig durch PWA-Setup
- Vollständig lokal – keine Datenübertragung

## 🛠️ Installation (Apache)
1. ZIP entpacken in Apache-Ordner (z.B. /var/www/html/offline-id-wallet)
2. `.htaccess` und `.htpasswd` anlegen, um Basic Auth zu aktivieren
3. In `config.js` denselben Schlüssel wie das Login-Passwort hinterlegen
4. Apache starten / neu laden
5. Aufrufen via `http://localhost/offline-id-wallet`

## 📲 Als PWA installieren
### iOS: Safari > Teilen > Zum Home-Bildschirm
### Android: Chrome > "App installieren"
