<template>
  <h2>欢迎来到vue3</h2>
  <h3>{{name}}</h3>
  <h3>{{age}}</h3>
  <hr>
  <h4>{{otherLp.name}}</h4>
  <h4>{{otherLp.age}}</h4>
  <h4>{{otherLp.sanwei.xiong}}</h4>
  <h4>{{otherLp.sanwei.tun}}</h4>
  <hr>
  <h5>{{xiaoLP.name}}</h5>
  <h5>{{xiaoLP.age}}</h5>
  <button @click="sayHi">打招呼</button>
  <br><br>
  <button @click="changeLP">修改数据</button>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'App',
  setup() {
    //ref
    let name = ref('dfy')
    let lg = ref('ly')
    let age = ref(18)
    //reactive
    const xiaoLP = reactive({
      name:'cn',
      age:27
    })
    //普通对象
    const otherLp = {
      name:'wjl',
      age:22,
      sanwei:{
        xiong:'36D',
        tun:'28'
      }
    }

    function sayHi() {
      alert(`Hi my name is ${name.value} and my age is ${age.value} my lg is ${lg.value}`)
    }

    function changeLP() {
      name.value = 'lm',
      age.value = 40,
      console.log(otherLp)
      otherLp.name = 'WJL',
      otherLp.age = 23,
      otherLp.sanwei.xiong = '35D',
      otherLp.sanwei.tun = '27',
      xiaoLP.name = 'CN',
      xiaoLP.age = 28
    }

    return {
      name,
      age,
      xiaoLP,
      otherLp,
      sayHi,
      changeLP
    }
  }
}
</script>
