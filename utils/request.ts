import axios from 'axios';

const request = axios.create({
  baseURL: 'https://frontend-test-api.aircall.io/',
});

const requestHandler = (request) => {
  return request;
};

const responseHandler = (response) => {
  return { status: response.status, ...response.data };
};

const errorHandler = (error) => {
  console.error('Request Failed:', error.config);
  if (error.response) {
    const { status, data, headers, config } = error.response;

    switch (status) {
      case 404:
        console.error(
          `Resource: On ${config.url} does not exist, status code 404`
        );
        return Promise.reject({
          status: error.response.status,
          data: error.response.data
        });

      case 422:
        return Promise.reject({
          status: error.response.status,
          data: error.response.data
        });
      default:
    }

    console.error('Status:', status);
    console.error('Data:', data);
    console.error('Headers:', headers);
  } else {
    // Something else happened while setting up the request
    // triggered the error
    console.error('Error Message(NO RESPONSE):', error.message);
  }

  return Promise.reject(error.response || error.message);
};

request.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

request.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default request;
