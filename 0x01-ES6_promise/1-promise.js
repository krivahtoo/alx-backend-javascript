export default function getFullResponseFromAPI(success) {
  let promise;

  if (success) {
    promise = Promise.resolve({
      status: 200,
      body: 'Success',
    });
  } else {
    promise = Promise.reject(new Error('The fake API is not working currently'));
  }
  return promise;
}
