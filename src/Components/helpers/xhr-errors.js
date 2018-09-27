/**
 * Logs Errors from XHR via Axios
 * @param {Object} error - Error Object Returned by API
 */
export default function logError({error}) {
    console.error(JSON.stringify(error, null, 5))
    if (error.status >= 500 || !error.status) {
        alert('There was an internal error submitting your form. Please check your information and try again or call us at 1-800-759-0700');
    }
}

export function checkStatus(response) {
    // console.log({response})
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error()
      error.message = response.statusText
      error.status = response.status
      throw error
    }
  }
  
export function parseJSON(response) {
    return response.json()
  }

export function parseTXT(response) {
    return response.text()
}