<template>
    <div>
        <transition enter-active-class="animate__animated animate__backInDown" appear>       
            <div class="extend">
                <span>信息与通信技术</span>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'SystemExtend',
}
</script>

<style scoped>
    .extend{
        margin-left: 10%;
        width: 80%;
        padding-top: 30px;
        text-align: center;
    }
    .extend span{
        font-size: 25px;
        font-weight: bold;
    }
    p{
        text-align: left;
        text-indent: 2em;
    }
</style>