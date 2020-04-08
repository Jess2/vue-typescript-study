<template>
  <div>
    <p>
      {{ alarmMessage }}
    </p>
    {{ parentMessage }}
    <button @click="counter">숫자를 증가시킵니다.</button>
    {{ injectMessage }}
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue, Watch, Emit, Inject } from 'vue-property-decorator';

  @Component
  export default class Children extends Vue {
    @Prop() parentMessage?: string;
    alarmMessage: string = '';

    @Watch('parentMessage')
    update(value: string, oldValue: string) {
      this.alarmMessage = '메세지를 업데이트 했습니다.';
    }

    @Emit()
    counter () {
      console.log('count');
    }

    @Inject() readonly injectMessage!: string;
  }
</script>
