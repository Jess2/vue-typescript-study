<template>
  <div>
    <h1>To Do</h1>
    <ol class="breadcrumb">
      <li><router-link to="/">All</router-link></li>
      <li><router-link to="/active">Active</router-link></li>
      <li class="active"><router-link to="/clear">Clear</router-link></li>
    </ol>
  </div>
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {

  }
</script>
