<template>
<div>
  <p>
    <div v-for = "(item, i) in books.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="i" :index = "item.name" class = "novel">
      <!-- <p class="pclass">
           <img :src="bookGroundUrl" class="imgstyle" alt=""/>
           <div class="novelMesssage"> 
             <router-link :to="{path:'home/completed'}" class="title">{{item.novelName}}</router-link>
           </div>
              
      </p>   -->
      <p>
        <div class = "picture">
          <img :src="bookGroundUrl" class="imgstyle" alt=""/>
        </div>
        <div class = "message">
          <div>
            <router-link :to="`/chapter/${item.novelUid}`"  class="title">{{item.novelName}}</router-link>
          </div>
          <div class="info">
            <p>
              <div class="chapter">
                <p>Chapters</p>
                <i class="el-icon-reading"> {{ item.chapterNum}}</i>  
              </div>
              <div class="view">
                <p>View</p>
                <i class="el-icon-view"> {{ item.readNum}}</i>
              </div>
              <div class="bookmark">
                <p>Bookmarked</p>
                <i class="el-icon-collection-tag"> {{ item.collectionNum}}</i>
              </div>
              <div class="status1">
                <p>Status</p>
                <i v-if="item.isEnd==='N'" class="statusp">Ongoing</i>
                <i v-else class="statusp">Completed</i>
              </div>
            </p>
          </div>
          <div class="chapter">
            <p>
              {{item.text1}} 
              <router-link :to="`/chapter/${item.novelUid}`"  class="more">...more</router-link>
            </p>
          </div>
        </div>
      </p>
    </div>
  </p>
    <p>
      <el-pagination class="pagination"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="books.length" v-if="this.books.length > 10">
      </el-pagination>
    </p>
</div>
  
</template>

<script>
export default {
    name:'Novel',
    data () {
      return {
        books: [],
        currentPage: 1,
        pagesize: 10,
        bookGroundUrl: require('@/assets/login.jpg'),
        introduction:[],
      }
    },
    mounted: function () {
      this.loadBooks();
    },
    methods: {
      async loadBooks () {
        this.$axios.post('/searchNovelAll').then(resp => {
          console.log(resp);
          if (resp && resp.data.code === 200) {
            this.books = resp.data.data;
          }
        })
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage
      },
      searchResult () {
        var _this = this
        this.$axios
          .get('/search?keywords=' + this.$refs.searchBar.keywords, {
          }).then(resp => {
          if (resp && resp.data.code === 200) {
            _this.books = resp.data.result
          }
        })
      },
    }

}
</script>

<style scoped>
.imgstyle{
    width: 300px;
    height: 400px;
    overflow:hidden;
    display:inline-block;
}
.picture{
  width: 300px;
  height: 400px;
  margin-bottom: 30px;
}
.message{
  width: 800px;
  height: 400px;
  margin-bottom: 30px;
  margin-top: 10px;
}
.novel> div{
    float: left;
}
.title{
    left:5%;
    position: relative;
    font-size: 20px;
    font-weight:bolder;
    text-decoration: none;
    margin-top: 10px;
    color:blueviolet; 
    padding: 20px;
}
.more{
    position: relative;
    font-size: 20px;
    font-weight:bolder;
    text-decoration: none;
    margin-top: 10px;
    color:blueviolet; ;
}
.info{
  left: 5%;
  position: relative;
}
.el-icon-reading{
  left: 5%;
  position: relative;
  font-size: 30px;
}
.el-icon-view{
  left: 5%;
  position: relative;
  font-size: 30px;
}
.el-icon-collection-tag{
  left: 5%;
  position: relative;
  font-size: 30px;
}
.statusp{
  left: 5%;
  position: relative;
  font-size: 20px;
}
.chapter{
  display: inline-block;
  padding: 20px;
}
.view{
  display: inline-block;
  padding: 20px;
  border-left:solid gray 4px;
}
.bookmark{
  display: inline-block;
  padding: 20px;
  border-left:solid gray 4px;
}
.status1{
  display: inline-block;
  padding: 20px;
  border-left:solid gray 4px;
}
.pagination{
  float: left;
  padding: 20px; 
}
.pagination el-pagination li{
  font-size: 20px;
  font-weight: 900;
  height: 40px;
}
</style>