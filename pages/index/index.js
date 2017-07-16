var data = require("../../utils/util.js");
var app = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:["推荐","排行榜","搜索"],
    current:0,
    off:true,
    search: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.searchHistory = [];
    this.setData({
      searchHot: 0,
      num:10
    })
    data.phb(
      function (data) {
        that.setData({
          phb: data.data.topList
        })
      }
    );
    data.slider(function(data){
      that.setData({
        slider:data.data.slider,
        radio: data.data.radioList,
        songList: data.data.songList
      })
    });
    data.searchData(function(data){
      var search_data = data.data.hotkey.slice(0,8);
      that.setData({
        hot: data.data.special_key,
        search_data:search_data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.onLoad();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  cut:function(e){
    var id = e.currentTarget.dataset.id;
    this.setData({
      current:id
    })
  },
  search_song:function(e){
    if(e.code){
      this.setData({
        num: 1,
        search:[""]
      })
    }
    var that = this;
    if (e.detail.value!=''){
    app.searchHistory.push(e.detail.value);
    var num = this.data.num+1
    this.setData({
      searchName: e.detail.value,
      searchHistory: app.searchHistory,
      num:num
    })
    data.search(function (data) {
      var dataList = that.data.search;
      dataList = dataList.concat(data.data.song.list);
        that.setData({
          searchHot: 2,
          search: dataList.concat(that.data.search)
        });
    }, this.data.searchName,this.data.num);
    }else{
    
      this.setData({
        searchHot: 0
      });
      console.log(this.data.searchHot);
    }
  },
  turn:function(e){
   var id =  e.currentTarget.dataset.id;
   wx.navigateTo({
     url: '../songList/songList?id='+id
   });
  },
  playsong: function (e) {
    app.songId = e.currentTarget.dataset.songid;
    app.albId = e.currentTarget.dataset.albid;
    wx.navigateTo({
      url: '../playsong/playsong'
    })
  },
  searchHot:function(e){
   var that = this;
   var id = e.currentTarget.dataset.id;
   if(id==11){
     this.data.searchName = this.data.hot;
   }else{
     this.data.searchName = this.data.search_data[id].k
   }
   data.search(function (data) {
     that.setData({
       search: data
     });
   }, this.data.searchName);
  },
  startSearch:function(e){
    if (e.detail.value == '') {
      this.setData({
        history: 1
      });
    }
  },
  lower: function () {
    var that = this;
    var off = this.data.off;
    if(off){
      setTimeout(function(){
        that.search_song({
          detail: {
            value: that.data.searchName
          }
        });
      },1000)
      
    }else{
      that.setData({
        off: !this.data.off
      })
    }

  }
})