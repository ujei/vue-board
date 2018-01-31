<template>

  <ul>
    <li  v-for="board in boards" v-on:click="goToDetail">
      <router-link to="/detail"><span>{{ board.seq }}</span><span>{{ board.title }}</span></router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      boards: [
        { seq: 1, title: 'Title1' },
        { seq: 2, title: 'Title2' },
      ]
    }
  },
  methods: {
    goToDetail: function(e) {
      console.log("tt");
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
  display: block;
  margin: 0 10px;
  float: left;
  width: 100%;
  border: 2px solid #efefef;
  border-radius: 3px;

}

li span {
  line-height: 10px;
}
a {
  color: #42b983;
}
</style>
