<template>
  <div class="form-group">
    <input type="text"
           class="form-control"
           @keyup.enter="addItem"
           placeholder="할 일을 입력해 주세요.">
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class ItemInput extends Vue {
    addItem () {
      console.log('add item');
    }
  }
</script>

<style scoped>

</style>
