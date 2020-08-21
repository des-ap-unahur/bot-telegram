import Confidence from 'confidence';

const criteria = {
  env: process.env.NODE_ENV
}

const constants = {
  endpoints: {
    server: 'http://localhost:5000/api',
  },
}

const store = new Confidence.Store(constants)

export default {
  get: (key: any) => store.get(key, criteria)
}