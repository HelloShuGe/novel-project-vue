<template>
  <div>
    <div class="title">
      {{novelName}}
    </div>
    <div  class = "chapter">
        <div class="chapterName">
            {{chapterName}}
        </div>
        
        
        <p v-for="(item, index) in contentList" :key="index" class="novelConent">{{item}}</p>
        <el-button type="primary" round @click="preChapterFun()" class="chapterButton">previous chapter</el-button>
        <el-button type="primary" round @click="nextChapterFun()" class="chapterButton">next chapter</el-button>
    </div>
   
  </div>
</template>

<script>
import router from "@/router";
export default {
    name: 'NovelContent',
    data(){
        return{
           novelName: '',
           chapterName: '',
           chapterUid:'',
           contentList: [],
        }
    },
    mounted: function () {
      this.getNovelUid();
      this.loaderChapter();
    },
    methods: {
        getNovelUid(){
        this.novelName = this.$route.params.novelName;
        this.chapterName = this.$route.params.chapterName;
        this.chapterUid = this.$route.params.chapterUid;
        },
        
        async loaderChapter(){
            this.$axios.post('/getContent',{
                novelName: this.novelName,
                chapterName: this.chapterName,
            }).then(resp => {
          console.log(resp);
          if (resp && resp.data.code === 200) {
            this.contentList = resp.data.data;
            console.log(this.contentList)
          }
        })
        },
        preChapterFun(){
            let  preChapter = {};
            this.$axios.post('/getPreChapter',{
                chapterUid: this.chapterUid
            }).then(resp => {
              if (resp && resp.data.code === 200) {
                  preChapter = resp.data.data;
                  console.log(preChapter);
                  router.push({ name: 'novelContent', params: { novelName: preChapter.novelName, chapterName: preChapter.chapterName, chapterUid: preChapter.chapterUid }});
              }
            }
            )
        },
        nextChapterFun(){
          let  nextChapter = {};
            this.$axios.post('/getNextChapter',{
                chapterUid: this.chapterUid
            }).then(resp => {
              if (resp && resp.data.code === 200) {
                  nextChapter = resp.data.data;
                  console.log(nextChapter);
                  router.push({ name: 'novelContent', params: { novelName:nextChapter.novelName, chapterName: nextChapter.chapterName, chapterUid:nextChapter.chapterUid }});
              }
            }
            )
        }
    },
    watch: {
			$route(){
				this.getNovelUid();
        this.loaderChapter();//换成你的方法
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
.novelConent{
   width: 1560px;
}
.chapterName{
  font-size: 35px;
  position: relative;
  left: 2%;
  height: 50px;
  width: 1200px;
  padding: 60px;
}
.chapterButton{
    position: relative;
    left: 30%;
    width: 300px;
    margin-left:50px;
}
</style>