import { createStore } from 'vuex'
import {getSingleSong} from '@/request/api/singlesong.js'
export default createStore({
  state: {
    playList:[
     { 
      al:{
        id: 34613144,
         name: "3 Strikes",
      pic: 109951164000556830,
        picUrl:"https://p2.music.126.net/iFZF7le6cQX_DpPY-udPoQ==/109951164000556824.jpg",
      pic_str: "109951164000556824",
      },
      id:1401302505,
      name:'3 Strike'
    }
  ],
  playListIndex:0,//默认下标为0
  isBtnShow:true,//默认按钮显示
  isDetailShow:false,// 显示歌曲详情页
  lyrics:{},//歌词
  currentTime:0,//歌曲当前时间,
  duration:0,//歌曲总时间
  isLogin:false,//表示登陆状态
  isMusicFooterShow:false
},
  getters: {
  },
  mutations: {
    updateIsBtnShow:function(state,value){
      state.isBtnShow=value
    },
    updatePlayList:function(state,value){
      state.playList=value
      console.log(state.playList)
    },
    updatePlayIndex:function(state,index){
      state.playListIndex=index
    },
    updateDetailShow(state,value){
      state.isDetailShow=!state.isDetailShow
    },
    updateLyrics(state,value){
      state.lyrics=value
    },
    updateCurrentTime(state,value){
      state.currentTime=value
      console.log(state.currentTime)
    },
    updateDuration(state,value){
      state.duration=value
    },
    pushPlayList(state,value){
      state.playList.push(value)
    },
    updateIsMusicFooterShow(state,value){
      state.isMusicFooterShow=value
    }
  },
  actions: {
    getLyrics:async function(context,value){
        let res=await getSingleSong(value)
        context.commit("updateLyrics",res.data.lrc)
        console.log(res)
        return res;
    }
  },
  modules: {
  }
})
