function viewPdf(type) {
  const pdfBase64 = localStorage.getItem(type);
  if (!pdfBase64) return alert("Kein PDF vorhanden");
  const blob = base64ToBlob(pdfBase64, 'application/pdf');
  const url = URL.createObjectURL(blob);
  window.open(url);
}
function base64ToBlob(base64, mime) {
  const byteChars = atob(base64);
  const byteNums = new Array(byteChars.length).fill().map((_, i) => byteChars.charCodeAt(i));
  return new Blob([new Uint8Array(byteNums)], { type: mime });
}
