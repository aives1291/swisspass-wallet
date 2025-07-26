/* Include CryptoJS via CDN in production */
function encryptPdf(pdfBase64, key) {
  return CryptoJS.AES.encrypt(pdfBase64, key).toString();
}
function decryptPdf(encrypted, key) {
  let bytes = CryptoJS.AES.decrypt(encrypted, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}
