<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msgfromfather }}</h1>
    <button v-on:click="onClickMe">Click!</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello from component A!'
    }
  },
  props: ['msgfromfather'],    //父组件向子组件传值
  methods: {
    onClickMe: function (){
      console.log(this.msgfromfather)  //this输出
      this.$emit('child-tell-me-sth', this.msg);  //直接分发   用v-on:自定义事件接收
      this.$dispatch('child-event', 'this is child event');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
