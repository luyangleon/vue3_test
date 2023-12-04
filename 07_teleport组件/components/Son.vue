<template>
    <div class="sonYS">
        <Dialog />
    </div>
</template>

<script>
    import Dialog from './Dialog'
    export default {
        name:'Son',
        components:{Dialog}
    }
</script>

<style scoped>
    .sonYS{
        background-color: orange;
        width: 100%;
        height: 100px;
        padding: 10px;
    }
</style>