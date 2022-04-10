<template>
  <div class="pagination">
    <!-- 上 -->
    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo - 1)" >上一页</button>
    <button v-if="startNumANDendNum.start >1" @click="$emit('getPageNo',1)" :class="{active:pageNo==1}">1</button>
    <button v-if="startNumANDendNum.start >2">···</button>

    <!-- 中 -->
    <button v-for="(page,index) in startNumANDendNum.end" :key="index" @click="$emit('getPageNo',page)" v-if="page >= startNumANDendNum.start"  :class="{active:pageNo== page}">{{page}}</button>
    
    <!-- 下 -->
    <button v-if="startNumANDendNum.end < pageTotal-1">···</button>
    <button v-if="startNumANDendNum.end < pageTotal" @click="$emit('getPageNo',pageTotal)" :class="{active:pageNo==pageTotal}">{{pageTotal}}</button>
    <button :disabled="pageNo==pageTotal" @click="$emit('getPageNo',pageNo + 1)">下一页</button>
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props:['pageNo','pageSize','continues','total'],
    computed:{
      pageTotal(){
        return Math.ceil(this.total/this.pageSize)
      },
      startNumANDendNum(){
        //解构出连续的页码数、当前页码、总页数
        const {pageTotal,pageNo,continues} = this
        //先定义两个变量存储起始数字与结束数字
        let start = 0,end = 0
        //连续五码数字5【就是至少5页】，如果出现不正常的现象【就是不够五页】
        //不正常现象【总页数没有连续页码多】
        if(pageTotal < continues){
          start = 1
          end = pageTotal
        }else{
          // 正常现象【迕续页码5，但是你的.总页数一定是大于5的】
          // 起始数字
          start = pageNo - parseInt(continues/2)
          // 结束数字
          end = pageNo + parseInt(continues/2)
          //把出现不正常的现象【start数宇出现0||负数】 纠正
          if(start < 1){
            start = 1
            end = continues
          }
          //把出现不正常的现象【end数字大于总页码】纠正
          if(end > pageTotal){
            end = pageTotal
            start = pageTotal - continues +1 
          }
        }
        return {start,end}
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color:coral;
        color: #fff;
      }
    }
  }
</style>