<template>
  <Demo @hello="showHello" exName="zxq" :exAge="16"><!-- 父组件的自定义方法 -->
    <template v-slot:chaCao1><!-- 父组件的插槽模板 -->
      <span>插槽1</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components: {Demo},
  setup() {
    function showHello(msg) {
      alert(msg);
    }

    return {
      showHello
    }
  }
}
</script>
