<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input type="text" v-model="newItem" @keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <p>Child tells me: {{ childWords }}</p>
    <component-a msgfromfather="you die!" v-on:child-tell-me-sth="listenToMyBoy"></component-a> 
    <p>来自child的分发：{{ child }}</p> 
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/componentsA'
// console.log(Store)
export default {
  data () {
    return {
      title: 'this is a todo list',
      items: [],
      newItem: '',
      childWords: '',     //初始化变量
      child: ''
    }
  },
  components: { ComponentA },
  watch: {
    items: {
      handler: function(items){
        // console.log(val, oldVal)
        Store.save(items)
      },
      deep: true
    } 
  },
  events: {
    'child-event': function(msg){
      this.child = msg;
    }
  },
  methods: {
    toggleFinish: function(item){
      item.isFinished = !item.isFinished;
    },
    addNew: function(){
      // console.log(this.newItem);
      this.items.unshift({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = '';
    },
    listenToMyBoy: function(msg){
      console.log(arguments);
      this.childWords = msg;
      // console.log(msg)
    }
  }
}
</script>

<style>
.finished {
  text-decoration: line-through;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
