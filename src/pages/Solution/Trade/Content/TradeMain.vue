<template>
    <div>
        <Project/> 
        <br><br><br><br>
        <Advantage/>    
    </div>
</template>

<script>
import Advantage from './Advantage/index.vue'
import Project from './Project/index.vue'

export default {
    name:'TradeMain',
    components:{
        Advantage,
        Project
    }
}
</script>
