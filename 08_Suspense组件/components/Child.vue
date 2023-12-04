<template>
    <div class="child">
        <h2>Child组件</h2>
        {{ sum }}
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        name:'Child',
        async setup() {
            let sum = ref(0)

            let p = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(sum.value++)
                }, 1000)
            }).then((value) => {
                setTimeout(() => {
                    console.log('value: ', value)
                }, 2000);
            }, (reason) => {
                console.log('reason: ', reason)
            })
            return await p
        }
    }
</script>

<style scoped>
    .child{
        background-color: skyblue;
        padding: 10px;
    }
</style>