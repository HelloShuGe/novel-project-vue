<template>
  <div class="catogary">
    <p>CATOGARY</p>
    <br>
    <div class = "novelCatogary">
        <router-link :to="`/home/catogarynovel/${catogary.name}`" v-for="(catogary, i) in catogaryList" :key="i" :class="[catogary.name === getCatogary ? 'style1' : 'style']" >
        {{catogary.name}}
        <p v-if="(i + 1) % 3 === 0"></p>
        </router-link> 
        
    </div>
      
  </div>
</template>

<script>
export default {
  name:'Catogary',
  data(){
      return{
          catogaryList:[
          ],
      }
  },
  methods:{
      //获取小说类别
    getNovelCategory(){
      this.$axios
            .post("/searchNovelCatogary", {
            })
            .then(successResponse => {
                console.log(successResponse)
                if (successResponse.data.code === 200) {
                    this.catogaryList = successResponse.data.data;
                }else{
                    this.$Message.info(successResponse.data.msg);
                }

            })
            .catch(failResponse => {
            });
    },
  }
  ,
  mounted () { 
      this.getNovelCategory();
  },
  computed:{
    getCatogary:function(){
      let path = this.$route.path;
      let pathList = path.split("//");
      let result = pathList.pop();
      console.log(result);
      return result;
    }
  }
}
</script>

<style scoped>
  .catogary{
    border:2px solid rgb(228, 227, 227);
  }
  .style{
    position: top;
    font-size: 18px;
    font-weight:bolder;
    text-decoration: none;
    color:blueviolet;
    margin-top:20px;
    line-height: 10px;
    border: 15px;
    margin-left: 7%;
  }
  .style1{
    position: top;
    font-size: 18px;
    font-weight:bolder;
    text-decoration: none;
    color:blueviolet;
    margin-top:20px;
    line-height: 10px;
    border: 15px;
    margin-left: 7%;
    background-color: #ff8432;
  }
</style>