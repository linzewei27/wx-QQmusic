function slider(callback) {
  wx.request({
    url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', //仅为示例，并非真实的接口地址
    data: {
      g_tk: 855594307,
      uin: 736955171,
      format: 'json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: 1499928690764
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      // console.log(res);
      if (res.statusCode == 200) {
        callback(res.data)
      }
    }
  })
};
function phb(callback) {
  wx.request({
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', //仅为示例，并非真实的接口地址
    data: {
      g_tk: 5381,
      uin: 0,
      format: "json",
      inCharset: "utf - 8",
      outCharset: "utf - 8",
      notice: 0,
      platform: "h5",
      needNewCode: 1,
      _: 1499999131464
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      if (res.statusCode == 200) {
        callback(res.data)
      }
    }
  })
};
var searchData = function(callback){
  wx.request({
    url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg', //仅为示例，并非真实的接口地址
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: 1500108182464
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      callback(res.data);
    }
  })
};
var search = function(callback,info,num) {
  wx.request({
    url: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp', //仅为示例，并非真实的接口地址
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      w: info,
      zhidaqu: 1,
      catZhida: 1,
      t: 0,
      flag: 1,
      ie: 'utf - 8',
      sem: 1,
      aggr: 0,
      perpage: 20,
      n: 20,
      p: num,
      remoteplace: 'txt.mqq.all',
      _: 1500016087687
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      callback(res.data);
    }
  })
};
var showInfo = function(callback ,info) {
  // console.log(this.data.id);
  wx.request({
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg', //仅为示例，并非真实的接口地址
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      tpl: 3,
      page: 'detail',
      type: 'top',
      topid: info,
      _: 1500009603434
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      // console.log(res);
      if (res.statusCode == 200) {
        callback(res.data);
      }
    }
  })
}
// function playsong(e) {
//   app.songId = e.currentTarget.dataset.songid;
//   app.albId = e.currentTarget.dataset.albid;
//   console.log(app);
//   wx.navigateTo({
//     url: '../playsong/playsong'
//   })
// }
module.exports = {
  slider : slider,
  phb:phb,
  search: search, 
  showInfo:showInfo,
  searchData:searchData
}
// https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg
// https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp