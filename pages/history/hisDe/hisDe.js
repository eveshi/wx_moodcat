// pages/history/hisDe/hisDe.js
var app = getApp()
const imageLink = [
  "../../../images/verySad.png",
  "../../../images/sad.png",
  "../../../images/calm.png",
  "../../../images/happy.png",
  "../../../images/veryHappy.png"
]
const items = [
  { id: 0, name: '请选择' },
  { id: 1, name: '非此即彼' },
  { id: 2, name: '以偏概全' },
  { id: 3, name: '心理过滤' },
  { id: 4, name: '否定正面思考' },
  { id: 5, name: '以偏概全' },
  { id: 6, name: '读心术' },
  { id: 7, name: '先知错误' },
  { id: 8, name: '放大缩小' },
  { id: 9, name: '情绪化推理' },
  { id: 10, name: '应该句式' },
  { id: 11, name: '乱贴标签' },
  { id: 12, name: '罪责归己' },
]

Page({

  data: {
    id: 0,
    timeData: {},
    tgtChange: [],
  },

  deleteCon: function(){
    let tableID = 21194
    var id = this.data.timeData.id

    let Product = new wx.BaaS.TableObject(tableID)
    Product.delete(id).then((res) => {
      // success
      console.log("success")
      wx.showModal({
        content: '删除成功！',
        showCancel: false,
        confirmColor: "#8A976A",
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.reLaunch({
              url: '../history',
            })
          } else {
          }
        }
      })
    }, (err) => {
      // err
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })

    let query = new wx.BaaS.Query()

    query.compare("_id","=", this.data.id)

    let tableID = 21194

    var Product = new wx.BaaS.TableObject(tableID)
    Product.setQuery(query).find().then((res) => {
      var userData = res.data['objects'][0]
      console.log(userData)
      var newRow = {}
      var newTgt = [{},{},{}]
      var date = new Date(userData.created_at*1000)
      newRow.year = date.getFullYear()
      newRow.month = date.getMonth()+"月"
      newRow.day = date.getDate()+"日"
      newRow.hour = date.getHours()
      newRow.min = date.getMinutes()
      newRow.sec = date.getSeconds()
      newRow.id = userData._id
      newRow.mood = imageLink[userData.moodSave]

      if(userData.content != ""){
        newRow.content = userData.content        
      }
      else{
        newRow.content = "汪~这里没有内容哦~"
      }

      if(userData.tgts1){
        newTgt[0].tgts = userData.tgts1
      }
      else{
        newTgt[0].tgts = ""
      }
      if (userData.tgts1Change) {
        newTgt[0].tgtsChange = userData.tgts1Change
      }
      else {
        newTgt[0].tgtsChange = ""
      }
      if (userData.tgts2) {
        newTgt[1].tgts = userData.tgts2
      }
      else {
        newTgt[1].tgts = ""
      }
      if (userData.tgts2Change) {
        newTgt[1].tgtsChange = userData.tgts1
      }
      else {
        newTgt[1].tgtsChange = ""
      }
      if (userData.tgts3) {
        newTgt[2].tgts = userData.tgts3
      }
      else {
        newTgt[2].tgts = ""
      }
      if (userData.tgts3Change) {
        newTgt[2].tgtsChange = userData.tgts3Change
      }
      else {
        newTgt[2].tgtsChange = ""
      }
      if (userData.tgts1TrapId) {
        newTgt[0].tgtsTrapId = items[userData.tgts1TrapId].name
      }
      else {
        newTgt[0].tgtsTrapId = "请选择"
      }
      if (userData.tgts2TrapId) {
        newTgt[1].tgtsTrapId = items[userData.tgts2TrapId].name
      }
      else {
        newTgt[1].tgtsTrapId = "请选择"
      }
      if (userData.tgts3TrapId) {
        newTgt[2].tgtsTrapId = items[userData.tgts3TrapId].name
      }
      else {
        newTgt[2].tgtsTrapId = "请选择"
      }
      
      for(var i=0; i<3; i++){
        if(newTgt[i].tgts==""&&newTgt[i].tgtsChange==""&&newTgt[i].tgtsTrapId=="请选择"){
          newTgt[i].show = "false"
        }
        else{
          newTgt[i].show = "true"

          if (newTgt[i].tgts == "") {
            newTgt[i].tgts = "汪~没有填写内容哦"
          }
          if (newTgt[i].tgtsChange == "") {
            newTgt[i].tgtsChange = "汪~没有填写内容哦"
          }
          if (newTgt[i].tgtsTrapId == "请选择") {
            newTgt[i].tgtsTrapId = "汪~没有选择思维陷阱~"
          }
        }
      }
 
      this.setData({
        timeData: newRow,
        tgtChange: newTgt
      })
    }, (err) => {
      // err
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