const key = 'geheim123';
function viewPdf(type) {
  const encrypted = localStorage.getItem(type);
  if (!encrypted) return alert("Kein PDF vorhanden");
  const decryptedBase64 = decryptPdf(encrypted, key);
  const blob = base64ToBlob(decryptedBase64, 'application/pdf');
  const url = URL.createObjectURL(blob);
  window.open(url);
}
function base64ToBlob(base64, mime) {
  const byteChars = atob(base64);
  const byteNums = new Array(byteChars.length).fill().map((_, i) => byteChars.charCodeAt(i));
  return new Blob([new Uint8Array(byteNums)], { type: mime });
}
