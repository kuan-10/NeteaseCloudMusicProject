<template>
    <div class="songdaily">
      <span class="searchSong">发现好歌单</span>
      <span class="moreSong">查看更多</span>
    </div>
    <div class="musicList">
    <van-swipe :loop="false" :width="150" :show-indicators="false">
      <van-swipe-item v-for="item in result" :key="item.id" class="listItem">
      <router-link :to="{path:'/musiclist',query:{id:item.id}}">
      <div>
        <img :src="item.picUrl" class="image"/>
         <iconpark-icon name="play-one" class="play-one">
         </iconpark-icon>
           <span class="playCount">{{(changeCount(item.playCount))}}</span>
         </div>
         <div>
      <span class="listName">{{item.name}}</span>
      </div>
      </router-link>
      </van-swipe-item>
  <!-- <van-swipe-item v-for="item in result" :key="item.id">11
   <img src="item.picUrl" alt="">
    <iconpark-icon name="play-one"></iconpark-icon>
    <span>{{item.name}}</span>
  </van-swipe-item> -->
</van-swipe>
</div>
</template>

<script>
import {getSongRecommend} from '@/request/api/home.js'
import { onMounted } from 'vue'
import {reactive} from 'vue'
    export default {
        setup(){
            let result=reactive([])
           onMounted(async()=>{
          let res= await getSongRecommend()
          res.data.result.forEach(element => {
            result.push(element)
             console.log(result)
          }); 
           })
           let changeCount=function(num){
            if(num>100000000){
              num=(num/100000000).toFixed(1)+'亿'
            }
            else if(num>10000){
                 num=(num/10000).toFixed(1)+'万'
            }
            return num
            }
            return {result,changeCount}
        }
    }
</script>

<style lang="less" scoped>
.songdaily{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top:30px;
    margin-bottom: 30px;
    .searchSong{
        font-size: .5rem;
        font-weight:700
    }
    .moreSong{
        font-size: .3rem;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 3px;
        padding-left: 5px;
        padding-right: 5px;
    }
}
.musicList{
    width: 100vw;
    .van-swipe__track{
        width: 100%;
        .van-swipe-item{
              width: 100%;
              height: 4rem;
              margin-right: 30px;
              position: relative;
              img{
                height: 2.7rem;
                border-radius: 10px;
                margin-bottom: 10px;
              }
              .play-one{
                position: absolute;
                top:3px;
                right:73px;
                font-size: .5rem;
                font-weight: 800;
                color: white;
              }
              .playCount{
                position: absolute;
                right:10px;
                top:5px;
                color: white;
                font-size: .3rem;
              }
        }
    }
    .listName{
        font-size: .27rem;
        color:black;
    }
}
</style>