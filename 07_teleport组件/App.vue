<template>
  <div class="appYS">
    <Child />
  </div>
</template>

<script>
import Child from './components/Child'
export default {
  name: 'App',
  components: {Child}  
}
</script>

<style>
  .appYS{
    width: 100%;
    padding: 10px;
  }
</style>