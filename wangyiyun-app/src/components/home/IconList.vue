<template>
    <div class="iconList">
    <div class="iconItem">
        <iconpark-icon name="tuijian" class="tuijian"></iconpark-icon>
        <span>每日推荐</span>
    </div>
    <div class="iconItem">
       <iconpark-icon name="diantai" class="diantai"></iconpark-icon>
        <span>私人FM</span>
    </div>
    <div class="iconItem">
        <iconpark-icon name="gedan" class="gedan"></iconpark-icon>
        <span>歌单</span>
    </div>
    <div class="iconItem">
        <iconpark-icon name="paihangbang" class="paihangbang"></iconpark-icon>
        <span>排行榜</span>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>

.iconList{
    margin-top:10px;
    display:flex;
    justify-content: space-around;
    .iconItem{
        display:flex;
        flex-direction:column;
        justify-content:center;
       
    }
     .iconItem:nth-child(1){
         .tuijian{
            font-size: .9rem;
            margin-bottom: 10px;
        }
     }
     .iconItem:nth-child(2){
         .diantai{
            font-size: .9rem;
              margin-bottom: 10px;
        }
     }
     .iconItem:nth-child(3){
         .gedan{
            font-size: .9rem;
              margin-bottom: 10px;
        }
     }
     .iconItem:nth-child(4){
         .paihangbang{
            font-size: .9rem;
              margin-bottom: 10px;
        }
     }
    }
</style>