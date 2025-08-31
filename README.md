# 🇨🇭 Swiss Offline ID Wallet (PWA)

Diese App dient zur Offline-Speicherung und Vorschau von Schweizer Ausweisen (Pass, ID, Führerschein) als PDF-Vorschau.

## 🚀 Funktionen
- PDF-Anzeige mit Thumbnails
- Optionaler Basic-Auth-Schutz per `.htaccess`
- Offline-fähig durch PWA-Setup
- Vollständig lokal – keine Datenübertragung

## 🛠️ Installation (Apache)
1. ZIP entpacken in Apache-Ordner (z.B. /var/www/html/offline-id-wallet)
2. `.htaccess` und `.htpasswd` anlegen, um Basic Auth zu aktivieren
3. Apache starten / neu laden
4. Aufrufen via `http://localhost/offline-id-wallet`
5. Apache online verfügbar machen
6. HTTPS und Zertifikat einrichten
7. DNS einrichten
8. Apache starten / neu laden

## 📲 Als App installieren
### iOS: Safari > Teilen > Zum Home-Bildschirm
### Android: Chrome > "App installieren"
