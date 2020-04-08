<template>
  <div class="home">
    <h1>Home</h1>
    <message></message>
    <children :parentMessage="message"></children>
    <button @click="changeMessage">메세지를 바꿔볼게요</button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import message from '@/components/message.vue';
  import children from '@/components/children.vue';

  @Component({
    components: {
      message,
      children
    }
  })
  export default class Home extends Vue {
    message: string = 'hello world!';

    changeMessage () {
      this.message = 'changed!';
    }
  }
</script>

<style scoped lang="scss">
  @import 'Home';
</style>
