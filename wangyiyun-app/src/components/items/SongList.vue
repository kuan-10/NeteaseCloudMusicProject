<template>
    <div class="box">
       <div class="navTop">
             <div class="navLeft">
            <iconpark-icon name="zuojiantou" class="leftArrow" @click="$router.go(-1)"></iconpark-icon>
            <span class="songList">歌单</span>
            </div>
            <div class="navRight">
            <iconpark-icon name="search" class="search"></iconpark-icon>
            <iconpark-icon name="gengduo" class="gengduo"></iconpark-icon>
            </div>
       </div>
   <img :src="songDetailList.coverImgUrl" alt="" class="bgcImage">
   <div class="navMiddle">
    <div class="navMiddleLeft">
     <img :src="songDetailList.coverImgUrl" alt="" class="innerImg">
     </div>
     <div class="navMiddleRight">
        <span class="songListName">{{songDetailList.name}}</span>
        <div class="avator">
            <img src="http://p4.music.126.net/oConPagh1ywvwWnfcoIa2A==/109951165959239238.jpg" alt="">
            <span>走马观花</span>
        </div>
        <span class="description">持续更新，会把自认为好听的曲子分享给大家</span>
     </div>
   </div>
   <div class="navBottom" @click="click">
      <div>
        <iconpark-icon name="pinglun" class="pinglun"></iconpark-icon>
        <span>{{songDetailList.commentCount}}</span>
      </div>
      <div>
       <iconpark-icon name="share-one" class="share-one"></iconpark-icon>
        <span>{{songDetailList.shareCount}}</span>
      </div>
      <div>
       <iconpark-icon name="xiazai-wenjianxiazai-07" class="xiazai"></iconpark-icon>
        <span>下载</span>
      </div>
      <div>
       <iconpark-icon name="xuanze-duoxuan" class="duoxuan"></iconpark-icon>
        <span>多选</span>
      </div>
   </div>
    </div>
</template>

<script>
    export default {
        props:['songDetailList'],
        data(){
            return{
                songList:this.songDetailList
            }
        },
    }
    //http://p4.music.126.net/oConPagh1ywvwWnfcoIa2A==/109951165959239238.jpg
</script>

<style lang="less" scoped>
.box{
    position: relative;
    width: 100vw;
    height: 100vh;
    .navTop{
    width: 100%;
    display:flex;
    justify-content: space-between;
    padding-top: 10px;
    .navLeft{
        width: 35%;
        display: flex;
        justify-content: space-around;
        .leftArrow{
            font-size: .7rem;
        }
        .songList{
            font-size: .45rem;
        }
    }
    .navRight{
        width: 35%;
        display: flex;
        justify-content: space-around;
        .search{
              font-size: .6rem;
        }
        .gengduo{
              font-size: .7rem;
        }
    }
}
.bgcImage{
    position: absolute;
    left:0;
    top:0;
    z-index:-1;
    width: 100%;
    height: 6rem;
    filter:blur(20px)
}
.navMiddle{
    display: flex;
    width: 100%;
    height: 3rem;
    padding-left: 10px;
    padding-right:10px;
    margin-top:20px;
    .navMiddleLeft{
        width: 45%;
        height: 2.6rem;
        img{
            width: 100%;
            height: 100%;
             border-radius: 10px;
        }
    }
    .navMiddleRight{
         width: 80%;
          height: 3rem;
      .songListName{
        display: block;
        font-size: .3rem;
        color:white;
        margin-left:10px;
        font-weight: 450;
      }
      .avator{
        margin-top:20px;
        width: 50%;
        display: flex;
        height: .7rem;
        justify-content: center;
        padding-left:30px;
       img{
        display: block;
        border-radius: 50%;
        margin-right:20px;
       }
       span{
        margin-top:5px;
        text-align: center;
        display: block;
        white-space: nowrap;
        }
       
      }
      .description{
        width: 100%;
        margin-left:15px;
        display: block;
        padding-top:10px;
        font-size: .3rem;
        color:gray;
      }
    }
}
.navBottom{
    margin-top:10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        padding-right:10px;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .pinglun{
                font-size: .5rem;
                margin-bottom: 10px;
            }
            .share-one{
                font-size: .5rem;
                 margin-bottom: 10px;
            }
            .xiazai{
                font-size: .5rem;
                 margin-bottom: 10px;
            }
            .duoxuan{
                font-size: .5rem;
                 margin-bottom: 10px;
            }
        }
    }
}


</style>