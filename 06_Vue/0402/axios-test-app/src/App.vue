<template>
  <div>
    <h2>콘솔 확인</h2>
  </div>
</template>

<script setup>
import axios from 'axios';

const requestApi = () => {
  const url = 'http://localhost:3000/todos/1';
  axios.get(url).then((response) => {
    console.log('# 응답객체: ', response);
    console.log(typeof response.data);
  });
};

requestApi();
</script>
