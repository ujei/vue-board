<template>
  <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-card">
    <div v-bind:class="{ showProgress: isProgress }" class="mdl-layout__title mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
    <ul v-bind:class="{ showList: !isShow, hideList: isHide }" ref="afterShow">
      <li  v-for="board in boards" v-on:click="goToDetail">
        <router-link to="/detail"><span>{{ board.seq }}</span><span>{{ board.title }}</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      boards: [
        { seq: 1, title: 'Title1' },
        { seq: 2, title: 'Title2' },
      ],
      isShow: false,
      isHide: true,
      isProgress: true
    }
  },
  methods: {
    goToDetail: function(e) {
      console.log("tt")
    },
    changeAppear: function(e) {
      this.isShow = !this.isShow
      this.isHide = !this.isHide
      this.inProgress = !this.inProgress
    }
  },
  mounted: function() {
    var _this = this
    setTimeout(function() {
      _this.changeAppear()
    }, 1500)
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

.showList {
  display: block;
}

.hideList {
  display: none;
}
</style>
