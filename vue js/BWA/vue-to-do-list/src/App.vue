<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
            <h3 class="header">To Do List App</h3>
            <div class="pekerjaan-rumah text-left">

              <div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id" class="tugas">
                  <ItemList v-bind:tugasSaya="tugasSaya"/>
              </div>

            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from './components/ItemList.vue';

export default {
  name: 'App',
  data: function() {
    return {
      tugas: [
        {
          id: 1,
          namaTugas: 'Ngocok Peler',
          isTrue: true,
          isFalse: false
        },
        {
          id: 2,
          namaTugas: 'Sodok Belakang',
          isTrue: true,
          isFalse: false
        },
        {
          id: 3,
          namaTugas: 'Anal Sex',
          isTrue: true,
          isFalse: false
        },
        {
          id: 4,
          namaTugas: 'Blow Job',
          isTrue: true,
          isFalse: false
        },
        {
          id: 5,
          namaTugas: 'Women On Top',
          isTrue: true,
          isFalse: false
        },
      ]
    }
  },
  components: {
    ItemList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header{
  background-color: aquamarine;
  padding: 20px;
  margin-bottom: 30px;
}
.tugas{
  font-size: 20px;
  margin-bottom: 12px;
}
</style>
