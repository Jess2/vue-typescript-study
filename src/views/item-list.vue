<template>
  <div>
    <item v-for="item in renderList" :key="item.id" :id="item.id" :title="item.title" :status="item.status"></item>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator';
  import item from '@/components/item.vue';

  @Component({
    components: {
      item
    }
  })
  export default class ItemList extends Vue {
    items: any[] = [
      { id: 0, title: 'test0', status: 'active'},
      { id: 1, title: 'test1', status: 'clear'},
      { id: 2, title: 'test2', status: 'clear'}
    ];

    renderList: any[] = this.items;

    @Watch('$route.params.status')
    routeUpdate(newVal: string) {
      if (!newVal) {
        this.renderList = this.items;
      } else if (newVal === 'active' || newVal === 'clear') {
        this.renderList = this.items.slice().filter((item: any) => {
          return item.status === newVal;
        })
      }
    }
  }
</script>

<style scoped>

</style>
