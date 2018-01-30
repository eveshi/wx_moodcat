//analysis.js

Page({

  data: {
    popUp: "汪~你做得非常好！你知道吗？我们出现负面想法，常常是因为我们陷入了一些思维的陷阱。现在，就让我们一起来看一看，是什么负面想法困扰了你呢？",
    descri:"让我们写出三个困扰你的想法吧！",
    whatTrap: "诶~我陷入的思维陷阱是：",
    items: [
      { id: '1', name:'要么全都是，要么全都不是' },
      { id: '2', name: '仅是指责'},
      // { name: 'Cata', value: '悲观夸大' },
      // { name: 'DownP', value: '无视积极面' },
      // { name: 'EmoRea', value: '仅靠感觉判断' },
      // { name: 'ForTell', value: '悲观预测' },
      // { name: 'IoUn', value: '总是不确定' },
      // { name: 'Lab', value: '贴标签' },
      // { name: 'MinRe', value: '读心' },
      // { name: 'NegFil', value: '不看整体' },
      // { name: 'NotA', value: '持续不接受' },
      // { name: 'Over', value: '极端总结' },
      // { name: 'Per', value: '只怪自己' },
      // { name: 'ShoAM', value: '套用自己标准给他人' },
      // { name: 'No', value: '都不适用' },
    ],
    index: 0,
    save: "保存",
    rightHolder: "我觉得其实也可以这样想……",
    wrongHolder: "我的想法是……",
    inputWrongValue: "",
    inputRightValue: ""
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  wrong: function (e) {
    this.setData({
      inputWrongValue: e.detail.value
    })
    console.log(this.data.inputWrongValue)
  },

  right: function (e) {
    this.setData({
      inputRightValue: e.detail.value
    })
    console.log(this.data.inputRightValue)
  },

  onReady: function(){
    wx.showModal({
      content: this.data.popUp,
      conformText: "我明白了",
      showCancel: false,
      confirmColor: "#8A976A",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else {
        }
      }
    })
  }

})