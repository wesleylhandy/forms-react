import SecureLS from "secure-ls";

const alphabetSoup = "$3cr3t5";

const ls = new SecureLS({ encryptionSecret: alphabetSoup });

/**
 * Returns decrypted text or null
 * @param {String} type - either full store or just info
 * @returns {Object|null}
 */
export function readLS(type) {
	const { formData, expiration } = ls.get(type);
	// console.log({formData, expiration})
	if (formData && expiration) {
		const present = Date.now();
		return present > +expiration ? null : formData;
	} else {
		return null;
	}
}

/**
 * Encrypts Data for storing in browser memory
 * @param {Object} formData - Object representing the data stored
 * @param {Number} lifetime - number of milliseconds in the future to set expiration
 * @param {String} type - either full store or just info
 */
export function cryptLS({ formData }, lifetime, type) {
	const expiration = Date.now() + lifetime;
	ls.set(type, { formData, expiration });
}

export function removeOneLS(type) {
	ls.remove(type);
}

export function emptyLS() {
	ls.removeAll();
}
