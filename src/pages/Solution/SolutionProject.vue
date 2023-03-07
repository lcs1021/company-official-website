<template>
    <div>
        <keep-alive :include="['SolutionProject','ItScience','HeaderImg','SolutionIntroduce',]">
            <router-view></router-view>              
        </keep-alive>  
        
    </div>
</template>

<script>

export default {
    name:'SolutionProject',
    
}
</script>

<style>
    html{
        /* background-color: rgb(255, 255, 255); */
    }
</style>