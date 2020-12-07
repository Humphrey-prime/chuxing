// pages/testcode/testcode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:50,
    timehide:false,
    drawhide:true,
  max:1,
  value1:0,
  value2: 0,
  value3: 0,
  value4: 0,
  },
nexttip:function(){
  wx.navigateTo({
    url: '../route/special'
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this. countdown();
  },
  //验证码测试
  //第一位验证码
  hidetime1:function(e){
    var value1= e.detail.value;
    var value2=this.data.value2;
    var value3= this.data.value3;
    var value4= this.data.value4;
    this.setData({
      value1: value1
    });
    if (value1.length == 1 && value1 == 1 && value2 == 1 && value3 == 1 && value4 == 1)
     {
       this.setData({
         timehide: true,
         drawhide: false,
       });
     }
  },
//第二位验证码
  hidetime2: function (e) {
    var value1 = this.data.value1;
    var value2 = e.detail.value;
    var value3 = this.data.value3;
    var value4 = this.data.value4;
    this.setData({
      value2: value2
    });
    if (value2.length == 1 && value1 == 1 && value2 == 1 && value3 == 1 && value4 == 1) {
      this.setData({
        timehide: true,
        drawhide: false,
      });
    }
  },
//第三位验证码
  hidetime3: function (e) {
    var value1 = this.data.value1;
    var value2 = this.data.value2;
    var value3 = e.detail.value;
    var value4 = this.data.value4;
    this.setData({
      value3: value3
    });
    if (value3.length == 1 && value1 == 1 && value2 == 1 && value3 == 1 && value4 == 1) {
      this.setData({
        timehide: true,
        drawhide: false,
      });
    }
  },
//第四位验证码
  hidetime4: function (e) {
    var value1 = this.data.value1;
    var value2 = this.data.value2;
    var value3 = this.data.value3;
    var value4 = e.detail.value;
    this.setData({
      value4: value4
    });
    if (value4.length == 1 && value1 == 1 && value2 == 1 && value3 == 1 && value4 == 1) {
      this.setData({
        timehide: true,
        drawhide: false,
      });
    }
  },

//焦点离开
cancel1:function(e){
  var value1 = e.detail.value;
  var value2 = this.data.value2;
  var value3 = this.data.value3;
  var value4 = this.data.value4;
  this.setData({
    value4: value4
  });
  if (value1.length == 0|| value1 != 1 || value2 != 1 || value3 != 1 || value4 != 1) {
    this.setData({
      timehide: false,
      drawhide: true,
    });
  }
},

cancel2: function (e) {
  var value1 = this.data.value1;
  var value2 = e.detail.value;
  var value3 = this.data.value3;
  var value4 = this.data.value4;
  this.setData({
    value4: value4
  });
  if (value2.length == 0 || value1 != 1 || value2 != 1 || value3 != 1 || value4 != 1) {
    this.setData({
      timehide: false,
      drawhide: true,
    });
  }
},

cancel3: function (e) {
  var value1 = this.data.value1;
  var value2 = this.data.value2;
  var value3 = e.detail.value;
  var value4 = this.data.value4;
  this.setData({
    value4: value4
  });
  if (value3.length == 0 || value1 != 1 || value2 != 1 || value3 != 1 || value4 != 1) {
    this.setData({
      timehide: false,
      drawhide: true,
    });
  }
},

cancel4: function (e) {
  var value1 = this.data.value1;
  var value2 = this.data.value2;
  var value3 = this.data.value3;
  var value4 = e.detail.value;
  this.setData({
    value4: value4
  });
  if (value4.length == 0 || value1 != 1 || value2 != 1 || value3 != 1 || value4 != 1) {
    this.setData({
      timehide: false,
      drawhide: true,
    });
  }
},


  countdown:function () {
    var that=this
    var second = that.data.time
    // console.log(second)
 if (second == 0) {
      // console.log("Time Out...");
      that.setData({
        time: "Time Out..."
      });
      return;
    }
 var timecount = setTimeout(function(){
      that.setData({
        time: second - 1
      });
     that.countdown();
    }
      , 1000)
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
  
  }
})