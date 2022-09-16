<template>
    <div>
        <div class="searchTop">
            <iconpark-icon name="zuojiantou" class="zuojiantou" @click="$router.go(-1)"></iconpark-icon>
            <input type="text" placeholder="陈奕迅"  v-model="searchKey" class="searchBox" @keydown.enter="searchWord">
        </div>
        <div class="searchMiddle">
            <span class="history">历史</span>
            <span v-for="item in keyWordList" class="searchWord" @click="searchKeyWord(item)">{{item}}</span>
            <iconpark-icon name="delete" class="trash" @click="remove"></iconpark-icon>
        </div>
        <div>
            <div v-for="(item,index) in songList" class="songListBox">
            <div class="songListLeft" @click="updateNewSong(item)">
            <span class="songIndex" >{{index}}</span> <span>{{item.name}}</span>
            </div>
            <div class="songListRight">
            <iconpark-icon name="play-two" class="play-two"></iconpark-icon>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getSearchSong} from '@/request/api/searchsinger.js'
    export default {
        data(){
            return{
                keyWordList:['周杰伦'],
                searchKey:"",
                songList:[]
            }
        },
        mounted(){
            this.keyWordList=JSON.parse(localStorage.getItem("keyWordList"))
        },
        methods:{
            searchWord:async function(){
              this.keyWordList.push(this.searchKey)
              localStorage.setItem("keyWordList",JSON.stringify(this.keyWordList))
              this.searchKeyWord()
              this.searchKey=""

            },
            searchKeyWord:async function(keyword){
                if(this.searchKey===""){
                    this.searchKey=keyword
                }
                 let res=await getSearchSong(this.searchKey)
             let arr=[]
             res.data.result.songs.map(element=>{
                arr.push(element)
                })
                this.songList=arr
             console.log(arr)
            },
            remove(){
                localStorage.removeItem("keyWordList")
                this.keyWordList=[]
            },
            updateNewSong(item){
                item.al=item.album
                item.al.picUrl=item.album.artist.img1v1Url
                 console.log(item)
                this.$store.commit("pushPlayList",item)
                this.$store.commit("updatePlayIndex",this.$store.state.playList.length-1)
                  console.log(item)
            }
        }
    }
</script>

<style lang="less" scoped>
.searchTop{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
.zuojiantou{
    font-size: .5rem;
}
.searchBox{
    width: 90%;
    height: 30px;
    border: none;
    border-bottom: .5px solid gray;
}
}
.searchMiddle{
.history{
    color: black;
    font-size: .3rem;
    margin-right:10px;
}
.searchWord{
    display: inline-block;
    padding-top:5px;
    margin-top:10px;
    text-align: center;
    margin-right: 10px;
    color:white;
    border-radius: 20px;
    width: 70px;
    height: 30px;
    background-color: brown;
}
.trash{
    font-size: .5rem;
}

}
.songListBox{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
     margin-top: 10px;
     .songIndex{
        margin-left:10px;
         margin-right:10px;
     }
  .play-two{
    font-size: .4rem;
    margin-right:10px;
  }
}
</style>