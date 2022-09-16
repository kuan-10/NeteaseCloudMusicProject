<template>
    <div class="outerBorder">
        <div class="playListTop">
        <div class="playListTopLeft">
        <iconpark-icon name="play" class="play"></iconpark-icon>
        <span class="playControl">
            <span class="playAll">播放全部</span>
            <span class="playListLength">(共{{songDetailList.length}}首)</span>
        </span>
        </div>
        <span class="subscribed">+收藏({{subscribedCount}})</span>
        </div>
        <div class="playList">
        <div v-for="(item,index) in songDetailList" class="singleSong">
        <div class="singleSongleft" @click="playMusic(index,item)">
        <span class="songIndex">{{index+1}}</span>
        <div >
            <div class="songName">{{item.name}}</div>
            <div class="author">
            <span v-for="author in item.ar">{{author.name}}</span>
            </div>
        </div>
        <div class="singleSongRight">
<iconpark-icon name="play-two" class="play-two" v-show="item.mv!='0'"></iconpark-icon>
<iconpark-icon name="hamburger-button" class="caidan"></iconpark-icon>
       </div> 
        </div>
        </div>
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue'
import { mapMutations } from 'vuex'
    export default {
       props:['songDetailList','subscribedCount'],
       data(){
        return{
            allSongs:this.songDetailList,
        }
       },
       methods:{
        playMusic(i,item){
          this.updatePlayList(this.songDetailList)
          this.playIndex=i
          this.updatePlayIndex(i)
          console.log(this.songDetailList)
          console.log(item.name)
        },
        ...mapMutations(['updatePlayList','updatePlayIndex'])
       },
      
       
    }
</script>

<style lang="less" scoped>
.outerBorder{
    width: 100%;
    height: 12rem;
   padding: 10px;
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   border-top:2px solid black;
    border-right:2px solid black;
     border-left:2px solid black;
   position: relative;
   .playListTop{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .playListTopLeft{
        width: 45%;
         display: flex;
         margin-top:0px;
          margin-left:50px;
            text-align: center;
        .play{
            font-size: .6rem;
            position: absolute;
            top:15px;
            left:20px;
        }
        .playAll{
            font-weight: 800;
        }
        .playListLength{
            font-weight: 300;
            font-size: .2rem;
            color:gray;
        }
    }
    .subscribed{
        width:30%;
        height:.7rem;
        border-radius: 20px;
        border:2px solid gray;
        display: flex;
        justify-content:center;
    align-items: center;
    background-color: red;
    color:white;
    font-size: .3rem;
    }
   }
   .singleSong{
    width: 100%;
    height:1.09rem;
    display: flex;
    align-items: center;
    position: relative;
    .singleSongleft{
         width: 50%;
        display: flex;
        justify-content: center;
         .author{
        position: absolute;
        left:40px;
        top:35px;
        font-weight: 600;
        color:gray;
        font-size: .25rem;
       }
       .songName{
        position: absolute;
        font-weight: 700;
        left:40px;
        font-size: .35rem;
        top:8px;
       }
     .songIndex{
       position: absolute;
       left:10px;
       top:15px;
     }
    }
    .singleSongRight{
       .play-two{
        position: absolute;
        font-weight: 500;
        font-size: .5rem;
        top:16px;
        right:60px;
        }
        .caidan{
            position: absolute;
        font-weight: 500;
        font-size: .5rem;
        top:16px;
        right:15px;
        }
    
    }
   }
}
</style>