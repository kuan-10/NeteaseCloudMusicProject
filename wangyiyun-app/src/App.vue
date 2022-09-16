<template>
<div id="nav">
</div>
<router-view></router-view>
<footer-music-vue class="footerMusic"></footer-music-vue>
</template>
<script>
import FooterMusicVue from '@/components/items/FooterMusic.vue'
import { mapState } from 'vuex'
export default{
components:{FooterMusicVue},
computed:{
  ...mapState(['isMusicFooterShow'])
}
}
</script>
<style lang="less">
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  padding: 30px;
  position: relative;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
