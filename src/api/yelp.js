import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer I6SZdW4bg_cW7A5pTRw1BLG-DtUog5Yzy-iTzkYhdaPfEkGb3Y9TXFABfQPXui8i-tpTMzWnQl2Z2X9rY_zSpA4WfJfSv-fJqJoukq1Mmtdddk-9-ghTnO0TAs_9X3Yx'
  }
});
