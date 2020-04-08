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
  import { Component, Vue, Provide } from 'vue-property-decorator';
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

    // 부모의부모의부모에게도 데이터 주입을 받을 수 있다.
    // provide와 inject는 주로 고급 플러그인/컴포넌트 라이브러리를 위해 제공된다.
    // 일반 애플리케이션 코드에서는 사용하지 않는 것이 좋다.
    @Provide('injectMessage') msg: string = 'provide/inject message example';

  }
</script>

<style scoped lang="scss">
  @import 'Home';
</style>
