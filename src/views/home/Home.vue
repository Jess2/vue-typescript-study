<template>
  <div class="home">
    <h1>Home</h1>
    <message></message>
    <children :parentMessage="message" @counter="counter"></children>
    <p>
      부모에서 숫자를 보여줍니다. : {{ count }}
    </p>
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
    count: number = 0;

    changeMessage () {
      this.message = 'changed!';
    }

    counter () {
      this.count++;
    }
  }
</script>

<style scoped lang="scss">
  @import 'Home';
</style>
