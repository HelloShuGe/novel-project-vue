<template>
  <div>
    <div class="title">
      {{chapterList[0].novelName}}
      <el-button type="info" class="add" @click="addNovel">
      <i class="el-icon-collection-tag"> ADD TO LIBARY</i>
      </el-button>
    </div>
    <div  class = "chapter">
        <div>
          
              <el-row :gutter="20">
              <el-col
              :span="10"
              v-for="(item, index) in chapterList"
              :key="index"
            class="el-col">
               <router-link :to="`/content/${item.novelName}/${item.chapterName}/${item.chapterUid}`"  class="chapterName" @click="loaderChapter">
               {{item.chapterName}}
               </router-link>
            </el-col>
             </el-row>
           </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'Chapter',
    data(){
        return{
           novelUid: '',
           chapterList:[],
           packageNum: 0,
           busy: false
        }
    },
    mounted: function () {
      this.getNovelUid();
      this.loaderChapter();
    },
    methods: {
        getNovelUid(){
        this.novelUid = this.$route.params.novelUid;
        },
        async loaderChapter(){
            this.$axios.post('/getChapterByNovelUid',{
                novelUid: this.novelUid
            }).then(resp => {
          console.log(resp);
          if (resp && resp.data.code === 200) {
            this.chapterList = resp.data.data;
            console.log(this.chapterList)
          }
        })
        },
        async addNovel(){
          var userEmail = sessionStorage.getItem('username');
          if(userEmail === null){
            this.$router.push({path:'/login'});
            return;
          }
          this.$axios.post('/libary/addnovel',{
                novelUid: this.novelUid,
                userEmail: userEmail
            }).then(resp => {
          console.log(resp);
          if (resp && resp.data.code === 200) {
            this.$alert(resp.data.msg);
          }
        })
        }
    }
    

}
</script>

<style scoped>
.title{
  font-size: 40px;
  position: relative;
  left: 20%;
  height: 50px;
  width: 1200px;
  padding: 60px;
}
.chapter{
  position: relative;
  left: 20%;
  font-size: 20px;
  padding: 20px 20px 10px 20px;
  background-color: bisque;
  width: 1700px;
}
.chapterName{
    left: 5%;
    position: relative;
    font-size: 20px;
    text-decoration: none;
    color:blueviolet; 
    width: 500px;
    height: 100px;
    margin-bottom: 50px;
}
.el-col{
  height: 40px;
  margin-top: 10px;
}
.add{
  position: absolute;
  left: 98%;
}
.el-icon-collection-tag{
  font-size: 20px;
}
</style>