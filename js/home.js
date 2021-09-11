 $(function() {
  // 首页轮播效果
  $("#bannerInner").tyslide({
    boxh:442,//盒子的高度
    w:1000,//盒子的宽度
    h:390,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:24,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:20,//控制按钮高度
    radius:10,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    isShowNum:true //是否显示数字
  });
  // 电子书
  $("#ebook .picSlider").tyslide({
    boxh:220,//盒子的高度
    w:334,//盒子的宽度
    h:220,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:false,//是否显示左右按钮
    controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:4,//控制按钮高度
    radius:0,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    isShowNum:false //是否显示数字
  });

  $("#clothswiper").tyslide({
    boxh:3342,//盒子的高度
    w:425,//盒子的宽度
    h:342,//图片的高度
    isShow:false,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:24,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:20,//控制按钮高度
    radius:10,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    isShowNum:true //是否显示数字
  });

  let kefu = new Kefu({
    index: "",
    tel: "13643040583",//电话号码
    qq: "888888",//在线QQ
    wechatPerson: {
        state: true,// true是开启个人微信二维码, false不开启
        imgURL: "./imgs/2wm.png" //图片路径
    },
    wechatofficial: {
        state: true,// true是开启微信公众号二维码, false不开启
        imgURL: "./imgs/2wm.png" //图片路径
    }//微信公众号
  });
  // 电子书tab切换
  // 获取所有元素对象
  // let lis = document.querySelectorAll('#ebook .ebookTab li');
  // let cons = document.querySelectorAll('#ebook .content>ul');

  // console.log(cons);
  // for (let i = 0; i < lis.length; ++i) {
  //   lis[i].addEventListener('mouseover', function() {
  //     for (let j = 0; j < lis.length; ++j) {
  //       lis[j].className = '';
  //       cons[j].classList.remove('on')
  //     }
  //     this.className = 'current'

  //     cons[i].classList.add('on')
  //   })
  // }
  $('#ebook .ebookTab li').mouseover(function() {
    $(this).addClass('current').siblings().removeClass('current');
    let index = $(this).index();
    $('#ebook .content>ul').eq(index).addClass('on').siblings().removeClass('on');
  })

  // 新书畅销榜----手风琴效果
  // 注册事件
  $('#ebook .ebookR ul li').mouseover(function () {
    // $(this).find('div').show();
    $('div', this).show();
    $(this).siblings().find('div').hide();

    // $(this).find('h4').hide();
    $('h4', this).hide();
    $(this).siblings().find('h4').show();
  })

  /*
    楼层跳转功能
      需求1:
         移入: 切换图标，宽度为80px,改变背景颜色
         移出: 切换图标(原来坐标),宽度为40px，改变背景颜色(原来的样式)
      需求2： 点击指定楼层，网页滑动道指定楼层
  */

  // 需求1
    $('#floorBox ul li').hover(
      function() {
        let bgcolor = $(this).attr('bgcolor')
        $(this).css({
          'width': '80px',
          'background-color': bgcolor,
          'background-position-x': '-40px'
        })
      },
      function() {
        $(this).css({
          'width': '40px',
          'background-color': '',
          'background-position-x': ''
        })
      }
    )
    // 需求2 点指定li 跳转道指定楼层
    .click(function () {
      let index = $(this).index();
      
      let fBox = $('.flor').eq(index);

      let sTop = fBox.offset().top;
                       
     $('html, body').animate({
       scrollTop: sTop
     })
    })

    // 固定头部
    /*
      需求: 当滚动条滚动到300距离时，显示固定头部，否则隐藏
     */
    $(window).scroll(function () { 
      // 获取滚动条到顶部的距离
      let sTop = $('html, body').scrollTop()
      // console.log(sTop);
      if (sTop >= 300) {
        $('#fixedHeader').slideDown();
        $('.search').appendTo('#searchBox2')
      }
      else {
        $('#fixedHeader').slideUp();
        $('.search').appendTo('#searchBox1');
      }
    })

    $('.flor .Tab li').mouseover(function () {
      $(this).addClass('current').siblings().removeClass('current')
      let index = $(this).index();
      $('.flor .content .r ul').eq(index).show().siblings().hide();
    })

})