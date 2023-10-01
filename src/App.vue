

<template>
  <router-link class="link" to="/">Home</router-link>
  <router-link class="link" to="/counter">Counter</router-link>
  {{ ' ' }}
  <RouterView></RouterView>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .link{
    margin-right: 10px;
  }
</style>
