/**
 * Logs Errors from XHR via Axios
 * @param {Object} error - Error Object Returned by Axios
 */
export default function logError({error}) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.status);
        console.error(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
    }
    console.error({error})

}

export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
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