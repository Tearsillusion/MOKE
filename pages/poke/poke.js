Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    showR: true,
    lastX: 0,
    lastY: 0,
    scrollT: true,
    scrollTop: 0,
    FontT: true,
    fontsame: true,
    LOGO: true,
    Tabtxt: "",
    PokeNav: true,
    toView: '',
    showALL:true,
    More:"更多",
    Poke_masking:true,
    realHeight:"",
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
 
    
    groups: [
      {
        title: "墨客丹青",
        ids:'list0',
        txt: "墨客丹青是一家综合性专业广告营销策划机构，提供多元、专业、实效的房地产及品牌美学营销方式与新媒体数字传播解决方案。专业地产品牌策划，广告整合推广，微信新媒体策划，数字视频创意制作，媒介整合数字传播运营，微信自媒体公众号服务等综合营销与传播推广服务。用广告专业思维整合多元媒介实效落地方式，为市场提供最高效的多感官交互体验公司介绍墨客丹青是一家综合性专业广告营销策划机构，提供多元、专业、实效的房地产及品牌美学营销方式与新媒体数字传播解决方案。专业地产品牌策划，广告整合推广，微信新媒体策划，数字视频创意制作，媒介整合数字传播运营，微信自媒体公众号服务等综合营销与传播推广服务。用广告专业思维整合多元媒介实效落地方式，为市场提供最高效的多感官交互体验的声光电介质创意传播解决方案。目前在郑州辐射中原，2018年持续服务保利·林语溪、金科御府、新城尚郡、世茂璀璨，建业凯旋广场、建业春天里、鑫苑名城、亚新茉莉公馆、亚新紫藤公馆、亚新集团品牌策划，名门地产品牌策划，融侨城，中部大观国贸等十余个地产项目。在河南拥有近50多人的专业广告策划团队，其中拥有地产广告十多年履历的总监群成员有8人，团队90%以上的人员为专业广告及设计科班出身。2018年墨客丹青整合全媒体资源，与澎湃新闻战略合作，全权代理河南区域广告业务，为客户提供专业高效的媒体资源整合服务。",
        shows: true,
        txts: "正在加载"
      },
      {
        title: "企业文化",
        ids: 'list1',
        def:"../../image/culture.png",
        txt: "墨客丹青是一家综合性专业广告营销策划机构，提供多元、专业、实效的房地产及品牌美学营销方式与新媒体数字传播解决方案。专业地产品牌策划，广告整合推广，微信新媒体策划，数字视频创意制作，媒介整合数字传播运营，微信自媒体公众号服务等综合营销与传播推广服务。用广告专业思维整合多元媒介实效落地方式，为市场提供最高效的多感官交互体验公司介绍墨客丹青是一家综合性专业广告营销策划机构，提供多元、专业、实效的房地产及品牌美学营销方式与新媒体数字传播解决方案。专业地产品牌策划，广告整合推广，微信新媒体策划，数字视频创意制作，媒介整合数字传播运营，微信自媒体公众号服务等综合营销与传播推广服务。用广告专业思维整合多元媒介实效落地方式，为市场提供最高效的多感官交互体验的声光电介质创意传播解决方案。目前在郑州辐射中原，2018年持续服务保利·林语溪、金科御府、新城尚郡、世茂璀璨，建业凯旋广场、建业春天里、鑫苑名城、亚新茉莉公馆、亚新紫藤公馆、亚新集团品牌策划，名门地产品牌策划，融侨城，中部大观国贸等十余个地产项目。在河南拥有近50多人的专业广告策划团队，其中拥有地产广告十多年履历的总监群成员有8人，团队90%以上的人员为专业广告及设计科班出身。2018年墨客丹青整合全媒体资源，与澎湃新闻战略合作，全权代理河南区域广告业务，为客户提供专业高效的媒体资源整合服务。",
        shows: true,
        IMGF:true,
        txts: "正在加载"
      },
      {
        title: "团队展示",
        ids: 'list2',
        def: "../../image/TeamShow.png",
        txt: "墨客丹青是一家综合性专业广告营销策划机构，提供多元、专业、实效的房地产及品牌美学营销方式与新媒体数字传播解决方案。专业地产品牌策划，广告整合推广，微信新媒体策划，数字视频创意制作，媒介整合数字传播运营，微信自媒体公众号服务等综合营销与传播推广服务。用广告专业思维整合多元媒介实效落地方式，为市场提供最高效的多感官交互体验公司介绍墨客丹青是一家综合性专业广告营销策划机构，提供多元、专业、实效的房地产及品牌美学营销方式与新媒体数字传播解决方案。专业地产品牌策划，广告整合推广，微信新媒体策划，数字视频创意制作，媒介整合数字传播运营，微信自媒体公众号服务等综合营销与传播推广服务。用广告专业思维整合多元媒介实效落地方式，为市场提供最高效的多感官交互体验的声光电介质创意传播解决方案。目前在郑州辐射中原，2018年持续服务保利·林语溪、金科御府、新城尚郡、世茂璀璨，建业凯旋广场、建业春天里、鑫苑名城、亚新茉莉公馆、亚新紫藤公馆、亚新集团品牌策划，名门地产品牌策划，融侨城，中部大观国贸等十余个地产项目。在河南拥有近50多人的专业广告策划团队，其中拥有地产广告十多年履历的总监群成员有8人，团队90%以上的人员为专业广告及设计科班出身。2018年墨客丹青整合全媒体资源，与澎湃新闻战略合作，全权代理河南区域广告业务，为客户提供专业高效的媒体资源整合服务。",
        shows: true,
        IMGF: true,
        txts: "正在加载"
      },
      {
        title: "办公环境",
        ids: 'list3',
        def: "../../image/work.png",
        txt: "墨客丹青是一家综合性专业广告营销策划机构，提供多元、专业、实效的房地产及品牌美学营销方式与新媒体数字传播解决方案。专业地产品牌策划，广告整合推广，微信新媒体策划，数字视频创意制作，媒介整合数字传播运营，微信自媒体公众号服务等综合营销与传播推广服务。用广告专业思维整合多元媒介实效落地方式，为市场提供最高效的多感官交互体验公司介绍墨客丹青是一家综合性专业广告营销策划机构，提供多元、专业、实效的房地产及品牌美学营销方式与新媒体数字传播解决方案。专业地产品牌策划，广告整合推广，微信新媒体策划，数字视频创意制作，媒介整合数字传播运营，微信自媒体公众号服务等综合营销与传播推广服务。用广告专业思维整合多元媒介实效落地方式，为市场提供最高效的多感官交互体验的声光电介质创意传播解决方案。目前在郑州辐射中原，2018年持续服务保利·林语溪、金科御府、新城尚郡、世茂璀璨，建业凯旋广场、建业春天里、鑫苑名城、亚新茉莉公馆、亚新紫藤公馆、亚新集团品牌策划，名门地产品牌策划，融侨城，中部大观国贸等十余个地产项目。在河南拥有近50多人的专业广告策划团队，其中拥有地产广告十多年履历的总监群成员有8人，团队90%以上的人员为专业广告及设计科班出身。2018年墨客丹青整合全媒体资源，与澎湃新闻战略合作，全权代理河南区域广告业务，为客户提供专业高效的媒体资源整合服务。",
        shows: true,
        IMGF: true,
        txts: "正在加载"
      },
      {
        title: "团队活动",
        ids: 'list4',
        def: "../../image/TeamActive.png",
        txt: "墨客丹青是一家综合性专业广告营销策划机构，提供多元、专业、实效的房地产及品牌美学营销方式与新媒体数字传播解决方案。专业地产品牌策划，广告整合推广，微信新媒体策划，数字视频创意制作，媒介整合数字传播运营，微信自媒体公众号服务等综合营销与传播推广服务。用广告专业思维整合多元媒介实效落地方式，为市场提供最高效的多感官交互体验公司介绍墨客丹青是一家综合性专业广告营销策划机构，提供多元、专业、实效的房地产及品牌美学营销方式与新媒体数字传播解决方案。专业地产品牌策划，广告整合推广，微信新媒体策划，数字视频创意制作，媒介整合数字传播运营，微信自媒体公众号服务等综合营销与传播推广服务。用广告专业思维整合多元媒介实效落地方式，为市场提供最高效的多感官交互体验的声光电介质创意传播解决方案。目前在郑州辐射中原，2018年持续服务保利·林语溪、金科御府、新城尚郡、世茂璀璨，建业凯旋广场、建业春天里、鑫苑名城、亚新茉莉公馆、亚新紫藤公馆、亚新集团品牌策划，名门地产品牌策划，融侨城，中部大观国贸等十余个地产项目。在河南拥有近50多人的专业广告策划团队，其中拥有地产广告十多年履历的总监群成员有8人，团队90%以上的人员为专业广告及设计科班出身。2018年墨客丹青整合全媒体资源，与澎湃新闻战略合作，全权代理河南区域广告业务，为客户提供专业高效的媒体资源整合服务。",
        shows: true,
        IMGF: true,
        txts: "正在加载"
      }
    ],
    imgUrls:[
      {
        image: '../../image/right_img_1.png', 
      },
      {
        image: '../../image/right_img_1.png',
      },
      {
        image: '../../image/right_img_1.png',
      }
    ],
    group: [//图片地址
      {
        srcs: '../../image/right_img_2.png',
        showImg: true,
        defs: ''
      }, {
        srcs: '../../image/right_img_2.png',
        showImg: true,
        defs: ''
      },
      {
        srcs: '../../image/right_img_2.png',
        showImg: true,
        defs: ''
      },
      {
        srcs: '../../image/right_img_2.png',
        showImg: true,
        defs: ''
      },
      {
        srcs: '../../image/right_img_2.png',
        showImg: true,
        defs: ''
      },
      {
        srcs: '../../image/right_img_2.png',
        showImg: true,
        defs: ''
      },   
    ],
  },

  // 屏幕自适应
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
          // (将4改为json变量)

        });

      }
    });
   
   
      //创建节点选择器
      // var query = wx.createSelectorQuery();
      // //选择id
      // query.select('#id').boundingClientRect()
      // query.exec(function (res) {
      //   //res就是 该元素的信息 数组
      //   console.log(res);
      //   //取高度
      //   that.setData({
      //     realWidth: res[0].width,
      //     realHeight: res[0].height
      //   })
      //   console.log('取高度', that.data.realHeight);
      // })
      

  },
  // 内容展开
  showMore: function (e) {
    var groups = this.data.groups
    for (let i = 0; i < groups.length; i++) {
      console.log(groups[i].ids)
    
    
      var kind = e.currentTarget.dataset.id;;
    console.log(kind)
    if (this.data.showALL) {
      this.setData({
        showALL: false,
        More: "收起"
      })
    }

    else if (this.data.showALL == false) {
      this.setData({
        showALL: true,
        More: "更多"
      })
    }
}
  },
    

   
  // 动画初始化
  onReady: function () {
    this.animation = wx.createAnimation();
    this.animationlogo = wx.createAnimation();
    this.animationfont = wx.createAnimation();
    this.animationImg = wx.createAnimation();
    this.animationR = wx.createAnimation();
    this.animationImgR = wx.createAnimation();
    this.animationNav = wx.createAnimation({
      duration: 300
    });
  },
  // 公司简介
  translate: function () {
    console.log(this.data.winWidth)
    this.animation.translate(this.data.winWidth).step();
    this.animationR.translate(this.data.winWidth).step();
    this.animationImg.translate(-this.data.winWidth / 1.25, -this.data.winHeight / 2.22).step()
    this.animationImg.scale(1).step()
    this.animationlogo.translate(this.data.winWidth / 2.5, -this.data.winHeight / 5.8).step();
    this.animationlogo.scale(1).step();
    // this.animationfont.translate(0,0).step();
    this.animationfont.scale(0).step()
    this.setData({
      animation: this.animation.export(),
      animationlogo: this.animationlogo.export(),
      animationfont: this.animationfont.export(),
      animationR: this.animationR.export(),
      animationImg: this.animationImg.export(),
      show: false,
      scrollT: false,

    })
    // console.log(loadTxts[0])
  },
  // 公司简介图标



  FontSame: function () {
    if (this.data.show == false) {
    this.setData({
      PokeNav: [
        {

          opt: "list0",
          title: "公司简介"
        },
        {

          opt: "list1",
          title: "企业文化"
        },
        {

          opt: "list2",
          title: "团队展示"
        },
        {
          opt: "list3",
          title: "办公环境"
        },
        {
          opt: "list4",
          title: "团队活动"
        },
      ]
    })
    let Fontsame = this.data.fontsame;
    if (Fontsame) {
      this.animationNav.height(50).step();
      this.animationNav.scaleY(1).step();
      this.setData({
        animationNav: this.animationNav.export(),
        fontsame: false,
        
        Poke_masking: false,
        PokeNav: [
          {

            opt: "list0",
            title: "公司简介"
          },
          {

            opt: "list1",
            title: "企业文化"
          },
          {

            opt: "list2",
            title: "团队展示"
          },
          {
            opt: "list3",
            title: "办公环境"
          },
          {
            opt: "list4",
            title: "团队活动"
          },
        ]
      })

    }
    else {

      this.animationNav.scaleY(0).step();
      this.animationNav.height(0).step();
      this.setData({
        animationNav: this.animationNav.export(),
        fontsame: true,
        Poke_masking: true,
        
      })
    }
  }
  },
  PokeMasking:function(){
    this.animationNav.scaleY(0).step();
    this.animationNav.height(0).step();
    this.setData({
      animationNav: this.animationNav.export(),
      fontsame: true,
      Poke_masking: true,

    })
  },
  // 滚动监听


  scroll: function (e) {
    // this.showImgs()
    this.setData({
      scrollTop: e.detail.scrollTop
    })

    console.log(this.data.scrollTop);
    let scrollTopEnd = this.data.scrollTop;


    if (scrollTopEnd > 290 && scrollTopEnd < 746 && scrollTopEnd++ ) {

      this.setData({
        FontT: false,
        Tabtxt: "企业文化",
      })


    }
    else if (scrollTopEnd < 301 && scrollTopEnd++) {
      this.setData({
        FontT: true,
        Tabtxt: "",
      })
    }
    else if (scrollTopEnd > 746 && scrollTopEnd < 1205 && scrollTopEnd++ ) {
      this.setData({
        FontT: false,
        Tabtxt: "团队展示",
      })
    }
    else if (scrollTopEnd > 1205 && scrollTopEnd < 1590 && scrollTopEnd++) {
      this.setData({
        FontT: false,
        Tabtxt: "办公环境",
      })
    }
    else if (scrollTopEnd > 1590 && scrollTopEnd++) {
      this.setData({
        FontT: false,
        Tabtxt: "团队活动",
      })
    }

  },
  jumpTo: function (e) {
    // 获取标签元素上自定义的 data-opt 属性的值
    let target = e.currentTarget.dataset.opt;
    console.log(target)
    this.animationNav.scaleY(0).step();
    this.animationNav.height(0).step();
    this.setData({
      toView: target,
      animationNav: this.animationNav.export(),
      fontsame: true,
      Poke_masking: true,
    })

  },

  // LOGO点击
  animationLogo: function () {
    this.animation.translate(0).step();
    this.animationR.translate(0).step();
    this.animationImg.translate(0, 0).step()
    this.animationImg.scale(1).step()
    this.animationImgR.translate(0, 0).step();
    this.animationImgR.scale(1).step();
    this.animationlogo.translate(0, -0).step();
    this.animationlogo.scale(1).step();
    this.animationfont.scale(1).step();
    this.animationNav.scaleY(0).step();
    this.animationNav.height(0).step();
    this.setData({
      animation: this.animation.export(),
      animationR: this.animationR.export(),
      animationImg: this.animationImg.export(),
      animationlogo: this.animationlogo.export(),
      animationfont: this.animationfont.export(),
      animationImgR: this.animationImgR.export(),
      animationNav: this.animationNav.export(),
      fontsame: true,
      show: true,
      scrollT: true,
      FontT: true,
      Tabtxt: "",
      fontsame: true,
    })
  },
  // 项目简介点击
  translateR: function () {
    this.animationR.translate(-this.data.winWidth).step();
    this.animation.translate(-this.data.winWidth).step();
    this.animationImgR.translate(this.data.winWidth / 1.34, -this.data.winHeight / 2.22).step();
    this.animationImgR.scale(1).step();
    this.animationlogo.translate(-this.data.winWidth / 2.5, -this.data.winHeight / 5.8).step();
    this.animationlogo.scale(1).step();
    // this.animationfont.translate(0,0).step();
    this.animationfont.scale(0).step()
    this.setData({
      animationR: this.animationR.export(),
      animation: this.animation.export(),
      animationlogo: this.animationlogo.export(),
      animationfont: this.animationfont.export(),
      animationImgR: this.animationImgR.export(),
      showR: false
    })
  },

  // 左右滑动效果
  handletouchmoveL: function (event) {
    console.log(event)
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    let tx = currentX - this.data.lastX
    let ty = currentY - this.data.lastY
    let text = ""
    //上下方向滑动
    console.log(currentY, this.data.lastY)
    if (ty < 0) {
      console.log(this.data.winWidth)
      this.animation.translate(this.data.winWidth).step();
      this.animationR.translate(this.data.winWidth).step();
      this.animationImg.translate(-this.data.winWidth / 1.25, -this.data.winHeight / 2.22).step()
      this.animationImg.scale(0.9).step()
      this.animationlogo.translate(this.data.winWidth / 2.5, -this.data.winHeight / 5.8).step();
      this.animationlogo.scale(0.9).step();
      // this.animationfont.translate(0,0).step();
      this.animationfont.scale(0).step()
      this.setData({
        animation: this.animation.export(),
        animationlogo: this.animationlogo.export(),
        animationfont: this.animationfont.export(),
        animationR: this.animationR.export(),
        animationImg: this.animationImg.export(),
        show: false,
        scrollT: false,
      })

    }
    this.data.lastX = currentX
    this.data.lastY = currentY
  },
  handletouchmoveR: function (event) {
    console.log(event)
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    let tx = currentX - this.data.lastX
    let ty = currentY - this.data.lastY
    let text = ""
    if (ty < 0) {
      this.animationR.translate(-this.data.winWidth).step();
      this.animation.translate(-this.data.winWidth).step();
      this.animationImgR.translate(this.data.winWidth / 1.34, -this.data.winHeight / 2.22).step();
      this.animationImgR.scale(0.9).step();
      this.animationlogo.translate(-this.data.winWidth / 2.5, -this.data.winHeight / 5.8).step();
      this.animationlogo.scale(0.9).step();
      // this.animationfont.translate(0,0).step();
      this.animationfont.scale(0).step()
      this.setData({
        animationR: this.animationR.export(),
        animation: this.animation.export(),
        animationlogo: this.animationlogo.export(),
        animationfont: this.animationfont.export(),
        animationImgR: this.animationImgR.export(),
        showR: false
      })
    }
  },
// 公司简介内容
  // showImgs() {
  //   let groups = this.data.groups // 获取图片数组数据 
  //   for (let j in this.data.groups) {
  //     wx.createIntersectionObserver().relativeToViewport().observe('.items-' + j, (ret) => {
  //       if (ret.intersectionRatio > 0) {
  //         groups[j].shows = true
  //       }
  //       console.log(ret.intersectionRatio)
  //       this.setData({
  //         groups
  //       })
  //     })
  //     console.log(groups[j].shows)
  //   }

  // },
  // 项目案例内容
  // showImg() {
  //   let group = this.data.group 
  //   for (let i in this.data.group) {
  //     wx.createIntersectionObserver().relativeToViewport().observe('.item-' + i, (ret) => {
  //       if (ret.intersectionRatio > 0) {
  //         group[i].showImg = true
  //       }
  //       console.log(ret.intersectionRatio)
  //       this.setData({
  //         group
  //       })
  //     })
  //     console.log(group[i].showImg)
  //     }
  //   },
  // scrollRight: function () {
  //   this.showImg();
  // },





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