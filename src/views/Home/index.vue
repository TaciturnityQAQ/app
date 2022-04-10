<template>
  <div>
    <typeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <!-- Floar这个组件:自己在组件内部是没有发请求的，数据是父组件给的-->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor" />
    <Brand/>
  </div>
</template>

<script>
import Brand from '@/views/Home/Brand'
import ListContainer from '@/views/Home/ListContainer'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Floor from '@/views/Home/Floor'
import Recommend from '@/views/Home/Recommend'
import {mapState} from 'vuex'
export default {
  data(){
    return {

    }
  },
  mounted(){
    // 派发action 获取floor数据
    this.$store.dispatch('getFloorList')
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorList ||[]
    })
  },
  components:{
    Brand,
    ListContainer,
    Rank,
    Like,
    Floor,
    Recommend
  },
}
</script>

<style>

</style>