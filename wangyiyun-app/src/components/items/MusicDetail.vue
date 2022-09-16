<template>
    <div class="musicDetail">
      <img :src="musicDetail.al.picUrl" alt="" class="image">
    <div class="MusicDetailTop">
      <div class="MusicDetailTopLeft">
     <iconpark-icon name="zuojiantou" class="zuojiantou" @click="remove()"></iconpark-icon>
     <div>
      <Vue3Marquee class="songName">
   {{musicDetail.name}}
  </Vue3Marquee>
      <span  class="authorName" v-for="author in musicDetail.ar">{{author.name}}</span>
      </div>
      </div>
    <iconpark-icon name="share-one" class="share-one"></iconpark-icon>
    </div>
    <div class="lyricsContent" ref="musicLyrics" v-show="!isCdShow" @click="changeCdShow">
     <p v-for="item in lyric" :key="item" :class="{'p-active':(currentTime*1000>=item.time && currentTime*1000<item.pre)}" >{{item.lyrics}}</p>
    </div>
    <div  v-show="isCdShow" @click="changeCdShow">
   <img src="@/assets/images/disc-plus.png" alt="" class="disc">
   <img src="@/assets/images/needle-ab.png" alt="" class="needle-ab" :class="{'needle-ab-active':isBtnShow}">
    <img :src="musicDetail.al.picUrl" alt="" class="bgUrl" :class="{'bgUrl_active':isBtnShow,'bgUrl-paused':!isBtnShow}">
    </div>
    <div class="musicDetailMiddle">
      <iconpark-icon name="like" class="fontSize"></iconpark-icon>
      <iconpark-icon name="xiazai-wenjianxiazai-072" class="fontSize"> ></iconpark-icon>
     <iconpark-icon name="yinlechangpian1" class="fontSize"></iconpark-icon>
    <iconpark-icon name="pinglun2"  class="fontSize"></iconpark-icon>
     <iconpark-icon name="gengduo1"  class="fontSize"></iconpark-icon>
    </div>
    <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
    <div class="musicDetailBottom">
      <iconpark-icon name="suiji" class="fontSize"></iconpark-icon>
      <iconpark-icon name="zuobofang1" class="fontSize" @click="previousSong"></iconpark-icon>
      <iconpark-icon name="play" class="musicPlay" v-if="!isBtnShow" @click="play"></iconpark-icon>
      <iconpark-icon name="pause-one" class="musicPlay" v-else @click="play"></iconpark-icon>
      <iconpark-icon name="youbofang1" class="fontSize" @click="nextSong"></iconpark-icon>
     <iconpark-icon name="Todo-List1" class="fontSize"></iconpark-icon>
    </div>
    </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
    export default {
         props:['musicDetail','play','isBtnShow','addDuration'],
         data(){
          return{
            isLyricsShow:false,
            isCdShow:true
          }
         },
         computed:{
          lyric:function(){
           let arr
           if(this.lyrics.lyric){
            arr=this.lyrics.lyric.split(/[(\r\n)\r\n]+/).map((item,i)=>{
               let min=item.slice(1,3)
               let second=item.slice(4,6)
               let milSecond=item.slice(7,10)
               let lyrics=item.slice(11,item.length+1)
               let time=parseInt(min)*60*1000+parseInt(second)*1000+parseInt(milSecond)
               if(isNaN(Number(milSecond))){
                milSecond=item.slice(7,9)
                lyrics=item.slice(10,item.length)
                time=parseInt(min)*60*1000+parseInt(second)*1000+parseInt(milSecond)
               }
               return {min,second,milSecond,lyrics,time}
            })
            arr.forEach((element,i) => {
              if(i===arr.length-1){
                element.pre=0
              }else{
                element.pre=arr[i+1].time
              }
            });
        
            return arr
           }
          },
          ...mapState(['lyrics','currentTime','playListIndex','duration'])
         },
         watch:{
          currentTime(newValue){
           let p=document.querySelector(".p-active")
           if(p){
              if(p.offsetTop>300){
            this.$refs.musicLyrics.scrollTop=p.offsetTop-200
           }
           }
           if(newValue===this.duration){
            this.nextSong()
           }
           console.log([p])
          }//解决歌词滚动问题，歌词会随着时间不断的滚动
         },
          components: {
    Vue3Marquee,
   },
   mounted(){
    this.addDuration()
    console.log(this.lyrics.lyric)
   },
          methods:{
          remove(){
              this.updateDetailShow(false)
          },
          changeCdShow(){
            this.isCdShow=!this.isCdShow
          },
          previousSong(){
           if(this.playListIndex>0)
              this.updatePlayIndex(this.playListIndex-1)
            else{
               this.updatePlayIndex(9)
            }
          },
          nextSong(){
            if(this.playListIndex<9)
              this.updatePlayIndex(this.playListIndex+1)
            else{
               this.updatePlayIndex(0)
            }
          },
          ...mapMutations(['updateDetailShow','updatePlayIndex'])
         }
    }
</script>

<style lang="less" scoped>
.musicDetail{
  position: relative;
  width: 100%;
      height: 100%;
      .disc{
      width: 250px;
      height: 250px;
      position: absolute;
      transform: translateX(-50%);
       transform: translateY(-50%);
      left:70px;
      top:290px;
    }
    .needle-ab{
      display: block;
       width: 140px;
      height: 140px;
      position: absolute;
      left:190px;
      top:50px;
      transform: rotate(0deg);
    transform-origin: 0 0;
    transition: all 2s;
    }
    .needle-ab-active{
      
      transform: rotate(20deg);
    transform-origin: 0 0;
    transition: all 2s;
    }
    .bgUrl{
      width: 160px;
      height:160px;
      border-radius: 50%;
      position: absolute;
      left:114px;
      top:210px;
      animation: rotate_ar 30s linear infinite;
    }
    .bgUrl-active{
      animation-play-state: running;
    }
     .bgUrl-paused{
      animation-play-state: paused;
    }
    @keyframes rotate_ar{
  0%{
    transform: rotateZ(0deg);
  }
  100%{
    transform:rotateZ(360deg)
  }
}
}
.MusicDetailTop{
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .MusicDetailTopLeft{
    display: flex;
    .zuojiantou{
      font-size: .5rem;
      margin-right:10px;
    }
    .songName{
      color:black;
      margin-bottom: 5px;
    }
    .authorName{
      color:gray;
    }
  }
  .share-one{
      font-size: .5rem;
    }
}
 .range{
        display: block;
        position: absolute;
        left: 0;
        bottom: 140px;
        width: 100%;
        height:10px;
        }
.image{
  position: absolute;
  top:0px;
  left:0px;
      width: 100%;
      height: 100%;
      z-index:-1;
      filter:blur(40px)
    }
    .musicDetailMiddle{
      width: 100%;
      display: flex;
     justify-content: space-between;
     padding-left: 10px;
     padding-right: 10px;
     position:absolute;
     left:0px;
     top:470px; 
     .fontSize{
      font-size: .6rem;
      color:white;
    }
    .xiazai{
      font-size: .6rem;
    
    
    }
    }
    .musicDetailBottom{
      width: 100%;
      display: flex;
     justify-content: space-between;
     padding-left: 10px;
     padding-right: 10px;
     position:absolute;
     left:0px;
   bottom: 70px;
     .fontSize{
      font-size: .6rem;
      color:white;
    }
   .musicPlay{
    font-size:1.1rem;
    color:white;
   }
    }
    .lyricsContent{
      margin-top:20px;
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      overflow: scroll;
      align-items: center;
      p{
        margin-bottom: 5px;
        font-size: .35rem;
        color:gray;
      }
      .p-active{
         margin-bottom: 5px;
        font-size: .35rem;
        color:white;
      }
    }
</style>