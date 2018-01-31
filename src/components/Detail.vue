<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ content }}</h2>
    <router-link to="/"><span>뒤로가라</span></router-link>
  </div>

</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      title: 'Title',
      content: 'Show Detail'
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
