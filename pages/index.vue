<template>
  <div class="container">
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){ 
    return{
      message: ''
    }
  },
  asyncData: async function(){
    return axios.post('https://cryptic-ridge-63036.herokuapp.com/api/').then(response => {
      console.log(response.data);
      return {
        message: response.data
      }
    }).catch(console.error);
  },
}
</script>

<style> 
</style>
