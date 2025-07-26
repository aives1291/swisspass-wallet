// encryptionKey is provided via config.js
function viewPdf(type) {
  const encrypted = localStorage.getItem(type);
  if (!encrypted) return alert("Kein PDF vorhanden");
  if (typeof encryptionKey === 'undefined') {
    return alert('Verschlüsselungsschlüssel fehlt');
  }
  const decryptedBase64 = decryptPdf(encrypted, encryptionKey);
  const blob = base64ToBlob(decryptedBase64, 'application/pdf');
  const url = URL.createObjectURL(blob);
  window.open(url);
}
function base64ToBlob(base64, mime) {
  const byteChars = atob(base64);
  const byteNums = new Array(byteChars.length).fill().map((_, i) => byteChars.charCodeAt(i));
  return new Blob([new Uint8Array(byteNums)], { type: mime });
}
