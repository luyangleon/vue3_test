<template>
  <h2>欢迎来到vue3</h2>
  <h3>{{name}}</h3>
  <h3>{{age}}</h3>
  <hr>
  <h4>{{otherLp.name}}</h4>
  <h4>{{otherLp.age}}</h4>
  <h4>{{otherLp.sanwei.xiong}}</h4>
  <h4>{{otherLp.sanwei.tun}}</h4>
  <button @click="sayHi">打招呼</button>
  <br><br>
  <button @click="changeLP">修改数据</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    let name = ref('dfy')
    let lg = ref('ly')
    let age = ref(18)
    const otherLp = ref({
      name:'wjl',
      age:22,
      sanwei:{
        xiong:'36D',
        tun:'28'
      }
    })

    function sayHi() {
      alert(`Hi my name is ${name.value} and my age is ${age.value} my lg is ${lg.value}`)
    }

    function changeLP() {
      name.value = 'lm',
      age.value = 40,
      console.log(otherLp);
      otherLp.value.age = 23,
      otherLp.value.sanwei.xiong = '35D',
      otherLp.value.sanwei.tun = '27'
    }

    return {
      name,
      age,
      otherLp,
      sayHi,
      changeLP
    }
  }
}
</script>
