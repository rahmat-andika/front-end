<template>
  <div class="profile">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-6">
                  <div class="media text-left">
                    <img class="user-pic mr-3" src="../assets/logo.png">
                    <div class="media-body">
                        <h5 class="mt-0">{{ name }}</h5>
                        <p>{{ body }}</p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';

export default {
    name: 'Profile',
    data: function() {
        return {
            name: 'andika laksana',
            body: 'lorem ipsum dolor sit amet bang jamet makan kupat di pagi hari dan rasa nya anjim banget'
        }
    },
    components: {

    }
}
</script>

<style scoped>
.user-pic{
    border-radius: 200%;
    height: 80px;
    width: 80px;
}
</style>