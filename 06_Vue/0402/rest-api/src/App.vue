<template>
  <div>
    <button type="button" @click="postData">POST</button><br />
    <button type="button" @click="getData">GET</button> <br />
    <button type="button">PUT</button> <br />
    <button type="button">PATCH</button> <br />
  </div>
</template>

<script setup>
import axios from 'axios';
const getData = () => {
  axios
    .get('/api')
    .then((response) => {
      console.log(response.data);
    })
    .catch(() => {
      console.log(`데이터 가져오다가 에러:`, error);
    });
};

const postData = () => {
  axios
    .post('/api/data', { name: `new Data`, description: `sample` })
    .then(() => {})
    .catch((error) => {
      console.log(`ㅎㅇ ERROR: `, error);
    });
};

const putData = () => {
  axios
    .put('/api/data', { name: `new Data_PUT`, description: `sample` })
    .then(() => {})
    .catch(() => {
      console.log(`ㅎㅇ ERROR: `, error);
    });
};

const patchData = () => {
  axios
    .patch('/api/data', { name: `new Data_PATCH`, description: `sample` })
    .then(() => {})
    .catch((error) => {
      console.log(`ㅎㅇ ERROR: `, error);
    });
};
</script>
