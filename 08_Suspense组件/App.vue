<template>
  <div class="app">
    <h3>App组件</h3>
    <Suspense>
      <template v-slot:default>        
        <Child />
      </template>
      <template v-slot:fallback>
        <div>加载中...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
  // import Child from './components/Child'
  import { defineAsyncComponent } from 'vue'
  const Child = defineAsyncComponent(() => import('./components/Child'))
  export default {
    name: 'App',
    components: {Child}
  }
</script>

<style>
  .app{
    /* width: 100%; */
    background-color: gray;
    padding: 10px;
  }
</style>