<template>
  <h2>欢迎来到vue3</h2>
  <h3>{{name}}</h3>
  <h3>{{age}}</h3>
  <button @click="sayHi">打招呼</button>
</template>

<script>

export default {
  name: 'App',
  setup() {
    let name = 'dfy'
    let lg = 'ly'
    let age = 18

    function sayHi() {
      alert(`Hi my name is ${name} and my age is ${age} my lg is ${lg}`)
    }

    return {
      name,
      age,
      sayHi
    }
  }
}
</script>
