const codeMessage = {
  200: "Success",
  201: "Created",
  204: "Deleted",
  400: "Your request data is not correct, please check your input",
  401: "Unauthorized, Your session maybe expired, please login again",
  403: "Forbidden",
  404: "Resource not found",
  500: "Server problem, please contact our support",
  502: "Bad gateway",
  503: "Service unavailable",
  504: "Gateway timeout"
};
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    // credentials: "include"
  };
  const newOptions = {
    ...defaultOptions,
    ...options,
  };
  if (newOptions.method === "POST" || newOptions.method === "PUT") {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        ...newOptions.headers
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: "application/json",
        ...newOptions.headers
      };
    }
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => {
      if (newOptions.method === "DELETE" || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .catch(e => {
      console.log(e)
    });
}
