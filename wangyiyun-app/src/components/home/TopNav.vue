<template>
    <div class="topNav">
    <iconpark-icon name="hamburger-button" class="menu"></iconpark-icon>
    <div class="topMenu">
        <span @click="$router.push('/login')">我的</span>
        <span>发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
    <iconpark-icon name="search" class="search" @click="$router.push('/search')"></iconpark-icon>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.topNav{
    width:100%;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    .topMenu{
        width:75%;
        display: flex;
        justify-content: space-around;
    }
    .menu{
        font-size: .5rem;
    }
    .search{
        font-size: .45rem;
    }
    span{
        font-size: .3rem;
    }
    span:nth-child(2){
      font-weight: bold;
    }
}

</style>