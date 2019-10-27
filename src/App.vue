<template>
  <div id="app">
    <countDown :startTime="startTime" :endTime="endTime"></countDown>
  </div>
</template>

<script>
import countDown from './pages/countDown.vue'
import moment from 'moment'

export default {
  name: 'app',
  components:{
   countDown
  },
  data(){
   return{
    endTime:moment(new Date('2019/11/11 00:00:00')),
    startTime:moment(new Date('2019/10/28 00:00:00'))
   }
  },
  created() { 
    console.log(new Date('2019/10/28 00:00:00').getTime())
  }, 
  methods: {
    
  }
}
</script>

<style lang="scss">
#app {
  color: #333;
}
</style>
