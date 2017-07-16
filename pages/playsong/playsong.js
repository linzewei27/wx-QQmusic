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
    console.log(options);
    this.setData({
      songId:app.songId,
      albId:app.albId,
      singer:app.singer,
      name:app.name,
      playSong:true
    });
    console.log(app);
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/C100'+app.songId+'.m4a?fromtag=38'
    })
    wx.onBackgroundAudioPlay(function(){
      var num = 0 ;
      console.log(num);
      wx.seekBackgroundAudio({
        position: num++
      })
    });
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
  isPlay:function(){
 
    if (this.data.playSong){
      wx.pauseBackgroundAudio();
      this.setData({
        playSong:false
      });
    }else{
      wx.playBackgroundAudio({
        dataUrl: 'http://ws.stream.qqmusic.qq.com/C100' + app.songId + '.m4a?fromtag=38'
      });
      this.setData({
        playSong: true
      })
    }
   
  }
})