<template>
    <div class="footerMusic">
       <div class="footerLeft" @click="showPopup">
         <img :src="playList[playListIndex].al.picUrl" alt="">   
         <div>
            <p>{{playList[playListIndex].name}}</p>
            <span>横滑切换上下首</span>
         </div>
       </div>
       <div class="footerRight">
          <iconpark-icon name="pause-one" class="pause-one" @click="play"  v-if="isBtnShow" ></iconpark-icon>
            <iconpark-icon name="play" class="play" @click="play" v-else></iconpark-icon>
            <iconpark-icon name="Todo-List" class="todo-list"></iconpark-icon>
       </div>
       <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
       <van-popup v-model:show="isDetailShow" position="bottom" :style="{ height: '100%',width:'100%' }">
       <music-detail  :musicDetail="playList[playListIndex]" :play="play" :isBtnShow="isBtnShow" :addDuration="addDuration"></music-detail>
       </van-popup>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import MusicDetailVue from  '@/components/items/MusicDetail.vue'
    export default {
        data(){
            return{
                interval:0
            }
        },
        computed:{
            ...mapState(['playList','playListIndex','isBtnShow','isDetailShow','currentTime','duration'])
        },
        components:{MusicDetailVue},
        mounted(){
              console.log(this.$refs.audio)
        },
        updated(){
            this.$store.dispatch("getLyrics",this.playList[this.playListIndex].id)
            this.addDuration()
        },
        methods: {
               play(){//设置音频的播放状态，并且切换图标
                if(this.$refs.audio.paused){
                    this.$refs.audio.play()
                    this.updateIsBtnShow(true)
                    this.updateTime()
               }
               else{
                    this.$refs.audio.pause()
                    this.updateIsBtnShow(false)
                    clearInterval(this.interval)
               }
                },
                showPopup(){
                    this.updateDetailShow()
                    console.log(this.isDetailShow)
                },
                updateTime(){
                    this.interval=setInterval(()=>{
                        this.updateCurrentTime(this.$refs.audio.currentTime)

                    },1000)
                },
                addDuration(){
                    this.updateDuration(this.$refs.audio.duration)
                },
                ...mapMutations(['updateIsBtnShow','updateDetailShow','updateCurrentTime','updateDuration'])
               },
                 watch:{//监听歌曲列表的index是否改变，改变的话让歌曲自动播放
            playListIndex(oldValue,newValue){
             this.$refs.audio.autoplay=true
               if(this.$refs.audio.paused){
                this.updateIsBtnShow(false)
               }else{
                this.updateIsBtnShow(true)
               }
            }
        }
        }
        //playList[playListIndex].al.picUrl
</script>

<style lang="less" scoped>
.footerMusic{
    width: 100%;
    height:1.8rem;
    border:2px gray solid;
    position: fixed;
    bottom: 0;
    padding:.3rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    .footerLeft{
        width: 50%;
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
       div{
        span{
            font-size: .3rem;
        }
       }
        img{
            width: 1rem;
            height:1rem;
            border-radius: 50%;
        }
    }
    .footerRight{
        width: 28%;
        display: flex;
        justify-content: space-around;
        align-items: center;
         .play{
            font-size: .7rem;
         }
         .pause-one{
              font-size: .7rem;
         }
         .todo-list{
            font-size: .7rem;
         }
    }
}

</style>