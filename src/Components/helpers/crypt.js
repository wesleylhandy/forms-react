const NodeRSA = require('node-rsa');

/**
 * Takes in a cookie value and returns either decrypted text or null
 * @param {String} cookie - stringified JSON with structure {k: String, formData: Object, expires: Number}
 * @returns {Object|null}
 */
export function readCookie(cookie) {
    const parsed = JSON.parse(cookie)
    const {k, formData, expires} = parsed;
    const rsa = new NodeRSA(k);
    const decrypted = JSON.parse(rsa.decrypt(formData, 'utf8'))
    const present = Date.now();
    return present > +expires ? null : decrypted
}

/**
 * Encrypts Data for storing in browser memory
 * @param {Object} formData - Object representing the "Cart"
 * @param {Number} lifetime - number of milliseconds in the future to set expiration
 * @returns {String} value of the cookie, encrtyped and stringified
 */
export function cryptCookie({formData, lifetime}) {
    const rsa = new NodeRSA({b: 512});
    const stringyFormData = JSON.stringify(formData)
    const encrypted = rsa.encrypt(stringyFormData, 'base64')
    const pubKey = rsa.exportKey()
    const expires = Date.now() + lifetime;
    return JSON.stringify({k: pubKey, formData: encrypted, expires: expires })
}