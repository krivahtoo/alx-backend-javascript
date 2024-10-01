export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise.then(() => {
      resolve({
        status: 200,
        body: 'Success'
      });
    }).catch(() => {
      reject(new Error());
    }).finally(() => {
      console.log('Got a response from the API');
    })
  })
}
