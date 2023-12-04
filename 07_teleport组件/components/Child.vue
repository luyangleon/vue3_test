<template>
    <div class="childYS">
        <Son />
    </div>
</template>

<script>
    import Son from './Son'
    export default {
        name:'Child',
        components:{Son}
    }
</script>

<style scoped>
    .childYS{
        background-color: skyblue;
        width: 100%;
        height: 200px;
        padding: 10px;
    }
</style>