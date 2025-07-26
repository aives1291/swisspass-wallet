// CryptoJS is loaded via CDN in index.html
function encryptPdf(pdfBase64, key) {
  return CryptoJS.AES.encrypt(pdfBase64, key).toString();
}
function decryptPdf(encrypted, key) {
  let bytes = CryptoJS.AES.decrypt(encrypted, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}
