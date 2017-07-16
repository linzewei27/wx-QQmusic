var data = require("../../utils/util.js");
var app = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var that = this;
    data.showInfo(function(data){
      console.log(data);
      var color = data.color.toString(16);
      var j = 6 - color.length
      console.log(color.length);
      for(var i = 0; i<j; i++){
        color = "0"+color;
      }
      that.setData({
        data: data,
        color:color
      });
    },id);
    // console.log(this.data.id);
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
  playsong:function(e){
    app.songId = e.currentTarget.dataset.songid;
    app.albId = e.currentTarget.dataset.albid;
    app.name = e.currentTarget.dataset.name;
    app.singer = e.currentTarget.dataset.singer;
    console.log(app);
    wx.navigateTo({
      url: '../playsong/playsong'
    })
  }

})