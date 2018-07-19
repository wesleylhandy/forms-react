const NodeRSA = require('node-rsa');

/**
 * Takes in a cookie value and returns either decrypted text or null
 * @param {String} cookie - stringified JSON with structure
 * @returns {Object|null}
 */
export function readCookie(cookie) {
    const parsed = JSON.parse(cookie)
    let {f, d, q} = parsed;
    const k = '-----BEGIN RSA PRIVATE KEY-----\n' + f.replace(/\^/g, '/').replace(/%/g, '9') + '\n-----END RSA PRIVATE KEY-----';
    const rsa = new NodeRSA(k);
    const decrypted = JSON.parse(rsa.decrypt(d.replace(/\^/g, '/'), 'utf8'))
    const expiration = JSON.parse(rsa.decrypt(q.replace(/\^/g, '/'), 'utf8'))
    const present = Date.now();
    return present > +expiration ? null : decrypted
}

/**
 * Encrypts Data for storing in browser memory
 * @param {Object} formData - Object representing the data stored
 * @param {Number} lifetime - number of milliseconds in the future to set expiration
 * @returns {String} value of the cookie, encrtyped and stringified
 */
export function cryptCookie({formData, lifetime}) {
    const expires = Date.now() + lifetime;
    const rsa = new NodeRSA({b: 512});
    const stringyFormData = JSON.stringify(formData)
    const encrypted = rsa.encrypt(stringyFormData, 'base64').replace(/\//g, '^')
    const expiration = rsa.encrypt(expires, 'base64').replace(/\//g, '^')
    let pubKey = rsa.exportKey()
    //remove explicit identification of this as an encription key
    const parts = pubKey.split('\n')
    parts.pop()
    parts.shift()
    pubKey = parts.join("\n").replace(/\//g, '^').replace(/9/g, '%')
    // using replace function to mask key and encrypted data
    return JSON.stringify({f: pubKey, d: encrypted, q: expiration })
}