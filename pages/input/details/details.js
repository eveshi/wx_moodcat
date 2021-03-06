//detail.js
var app = getApp();

Page({

  data: {
    title: "汪~带给你情绪的事件是？",
    saveAll: "保存全部",
    contentHolder: "我……（请尽可能准确地描述自己的情绪，具体的词汇可以点击上方的小问号，参考我们的词汇表哦）",
    inputValue: "",
    quickSave: "保存",
    analysisThen: "分析",
    count: 0,
  },

  diary: function (e) {
    var cot = e.detail.value.length
    this.setData({
      inputValue: e.detail.value,
      count: cot
    })
  },

  words: function(){
    wx.navigateTo({
      url: 'words/words',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  savemode: function(){
    // 向 tableID 为 21194 的数据表插入一条记录
    let tableID = 21194
    let Product = new wx.BaaS.TableObject(tableID)
    let product = Product.create()

    product.set('moodSave', app.globalData.mood)
    product.set('content', this.data.inputValue)

    app.globalData.detailValue = this.data.inputValue

    product.save().then((res) => {
      //成功提示成功
      wx.showModal({
        content: '保存成功！',
        showCancel: false,
        confirmColor: "#8A976A",
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.reLaunch({
              url: '../mood/mood',
            })
          } else {
          }
        },
      })
     }, (err) => { })
  },

  onLoad: function (options) {

  },

  nextPage: function () {
    app.globalData.detailValue = this.data.inputValue

    wx.navigateTo({
      url: '../analysis/analysis',
    })
  },

})