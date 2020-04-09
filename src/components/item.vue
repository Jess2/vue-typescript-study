<template>
  <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" :checked="status === 'clear'" @change="changeStatus">
      </span>
    <input type="text" class="form-control" :value="title">
    <span class="input-group-btn">
      <button class="btn btn-default" type="button" @click="removeItem">X</button>
    </span>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class Item extends Vue {
    @Prop() readonly id!: string;
    @Prop() readonly title!: string;
    @Prop() readonly status!: 'active' | 'clear';

    changeStatus() {
      console.log('change item');
    }

    removeItem () {
      console.log('remove item');
    }
  }
</script>

<style scoped>

</style>
