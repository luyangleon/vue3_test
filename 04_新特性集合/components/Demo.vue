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
    <hr/>
    <!-- 子组件的props -->
    <h5>{{ exName }},{{ exAge }}</h5>
    <!-- 子组件的插槽 -->
    <slot name="chaCao1"></slot>
    <!-- 子组件的emit -->
    <button @click="invokeHello">调用父组件hello</button>
    <hr>
    <!-- 计算属性 -->
    <h2>{{ lpList }}</h2>
    <!-- 监测属性 -->
    <hr>
    <h3>监测姓名：{{ watchObj.name }}</h3>
    <h3>监测年龄：{{ watchObj.age }}</h3>
    <h3>监测薪水：{{ watchObj.job.j1.salary }}K</h3>
    <button @click="watchObj.name+='~'">修改姓名</button>
    <button @click="watchObj.age++">修改年龄</button>
    <button @click="watchObj.job.j1.salary++">修改薪水</button>
  </template>
  
  <script>
  import { reactive, ref, computed, watch } from 'vue'
  
  export default {
    name: 'App',
    props: ['exName','exAge'],
    emits: ['hello'],
    setup(props, context) {
      console.log('setup:', props, context)
      //ref
      let name = ref('dfy')
      let lg = ref('ly')
      let age = ref(18)
      //reactive
      const daLP = reactive({
        name: 'hs',
        age: 29
      })
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
      //监测对象
      const watchObj = reactive({
        name: '张三',
        age: 20,
        job: {
            j1:{
                salary: 10
            }
        }
      })

      //计算属性computed
      const lpList = computed(() => {
        return name.value + '-' + otherLp.name + '-' +xiaoLP.name
      })
      //监视watch
      watch(daLP, (newValue, oldValue) => {
        console.log('daLP', newValue, oldValue)
      }, {immediate:true})
      watch(()=>watchObj.job, (newValue, oldValue) => {
        console.log('watchObj', newValue, oldValue)
      },{deep:true})
      
      //函数
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
        xiaoLP.age = 28,
        daLP.name = 'HS'
      }
      function invokeHello() {
        // 调用父组件的方法
        context.emit('hello', '123')
      }
      
      // setup中定义的数据需要返回出去
      return {
        name,
        age,
        daLP,
        xiaoLP,
        otherLp,
        lpList,
        watchObj,
        sayHi,
        changeLP,
        invokeHello
      }
    }
  }
  </script>
  