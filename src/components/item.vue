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

    changeStatus($event: Event) {
      console.log('change item');
      const checked: boolean = ($event.target as HTMLInputElement).checked;

      if (checked) {
        this.$store.commit('changeStatus', {id: this.id, status: 'clear'});
      } else {
        this.$store.commit('changeStatus', {id: this.id, status: 'active'});
      }
    }

    removeItem () {
      console.log('remove item');
      this.$store.commit('removeItem', this.id);
    }
  }
</script>

<style scoped>

</style>
