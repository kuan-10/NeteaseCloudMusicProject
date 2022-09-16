<template>
  <div class="home">
    <TopNavVue></TopNavVue>
    <buttinVue></buttinVue>
    <IconListVue></IconListVue>
    <MusicListVue></MusicListVue>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNavVue from '@/components/home/TopNav.vue'
import buttinVue from '@/components/buttin.vue'
import IconListVue from '@/components/home/IconList.vue'
import MusicListVue from '@/components/home/MusicList.vue'
export default {
  name: 'HomeView',
  components: {
   TopNavVue,buttinVue,IconListVue,MusicListVue
  }
}
</script>
