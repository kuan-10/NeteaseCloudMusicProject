
<template>
    <div>
  <SongListVue :songDetailList="state.songDetailList" class="songList"></SongListVue>
  <PlayListVue :songDetailList="state.allSongs" :subscribedCount="state.songDetailList.subscribedCount"></PlayListVue>
    </div>
</template>

<script>
import { getSongDetail } from '../request/api/musiclist.js'
import { getAllSongs } from '@/request/api/allsong.js'
import {useRoute} from 'vue-router'
import { onMounted } from 'vue'
import {reactive} from 'vue'
import SongListVue from '@/components/items/SongList.vue'
import PlayListVue from '@/components/items/PlayList.vue'
    export default {
        components:{SongListVue,PlayListVue},
        setup(){
            let state=reactive({
                songDetailList:{},//歌单列表
                allSongs:[]//歌曲列表
            })
           onMounted( async ()=>{
            let id=useRoute().query.id
            console.log(id)
              let detailList= await getSongDetail(id)
              state.songDetailList=detailList.data.playlist//播放列表页
               console.log(detailList.data.playlist.subscribedCount)
              let allSongList=await getAllSongs(id)
              state.allSongs=allSongList.data.songs
              console.log(state.allSongs)//歌曲详情页
           })
          
           return {state}
        }
        
    }
</script>

<style lang="less" scoped>
.songList{
    width: 100%;
    height: 6rem;
}
</style>