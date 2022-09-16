<template>
    <div>
<van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in images" :key="image">
    <img :src="image" />
  </van-swipe-item>
</van-swipe>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import {reactive} from 'vue'
import {getBanner} from '../request/api/home.js'
    export default {
          setup() {
    let images = reactive([]);
    onMounted(async ()=>{
      let result=await getBanner()
       result.data.banners.forEach(element => {
            images.push(element.pic)
         }); 
    //   axios.get(`http://localhost:3000/banner?type=2`).then(r=>{
    //      r.data.banners.forEach(element => {
    //         images.push(element.pic)
    //      }); 
    //       });
        })
          return { images };

  },
    }
</script>

<style lang="less" scoped>
.van-swipe{
    width: 100%;
    padding: 10px;
    .van-swipe__track{
        .van-swipe-item{
            img{
                width: 100%;
                height: 4rem;
            }
        }
    }
   
}
</style>