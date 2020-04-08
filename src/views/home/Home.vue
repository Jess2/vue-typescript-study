<template>
  <div class="home">
    <h1>Home</h1>
    <message></message>
    <children :parentMessage="message"></children>
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
  }
</script>

<style scoped lang="scss">
  @import 'Home';
</style>
