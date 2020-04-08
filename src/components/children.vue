<template>
  <div>
    {{ parentMessage }}
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Children extends Vue {
    @Prop() parentMessage?: string;
  }
</script>
