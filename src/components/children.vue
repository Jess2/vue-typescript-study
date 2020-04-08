<template>
  <div>
    <p>
      {{ alarmMessage }}
    </p>
    {{ parentMessage }}
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

  @Component
  export default class Children extends Vue {
    @Prop() parentMessage?: string;
    alarmMessage: string = '';

    @Watch('parentMessage')
    update(value: string, oldValue: string) {
      this.alarmMessage = '메세지를 업데이트 했습니다.';
    }
  }
</script>
