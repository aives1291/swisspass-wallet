async function viewPdf(type) {
  let pdfBase64 = localStorage.getItem(type);
  if (!pdfBase64) {
    try {
      const response = await fetch(`${type}.pdf`);
      if (!response.ok) throw new Error('PDF not found');
      const blob = await response.blob();
      pdfBase64 = await blobToBase64(blob);
      try {
        localStorage.setItem(type, pdfBase64);
      } catch (storageErr) {
        console.warn('Speicher für PDFs ist voll, lade ohne Zwischenspeicherung.', storageErr);
      }
    } catch (err) {
      console.error(`Fehler beim Laden von ${type}.pdf`, err);
      return alert("Kein PDF vorhanden");
    }
  }
  const blob = base64ToBlob(pdfBase64, 'application/pdf');
  const url = URL.createObjectURL(blob);
  window.open(url);
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
function base64ToBlob(base64, mime) {
  const byteChars = atob(base64);
  const byteNums = new Array(byteChars.length).fill().map((_, i) => byteChars.charCodeAt(i));
  return new Blob([new Uint8Array(byteNums)], { type: mime });
}
