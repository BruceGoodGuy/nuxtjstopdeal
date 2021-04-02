<template>
<div>
  <div class="row">
    <LeftSort :cat="cat"></LeftSort>
    <Main></Main>
    <p class="text-danger">{{msg}}</p>
  </div>
</div>
</template>
<script>
import LeftBar from './../components/LeftSort';
import Main from './../components/Main';
export default({
    head: {
        title: "uTop Fake - Trang Chủ"
    },
    data: function(){
      return {cat: 0, msg: 0};
    },
    watchQuery(n, o){
      this.cat = n.cat;
    },
    watch: {
      cat: function(n){
        if(n !== undefined){
          this.msg = `Bạn đã chọn ${n}`; 
        }else{
          this.msg = "";
        }
      }
    },
    created(){
      this.cat = this.$route.query.cat;
    }
})
</script>
