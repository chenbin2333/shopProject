$(function () {
  $(".Exc").tyslide({
    boxh: 500,//盒子的高度
    w: 1200,//盒子的宽度
    h: 456,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 20,//控制按钮宽度
    controlsH: 20,//控制按钮高度
    radius: 10,//控制按钮圆角度数
    controlsColor: "#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
    isShowNum: true //是否显示数字
  });

  $("#detailbanner").tyslide({
    boxh:538,//盒子的高度
    w:1000,//盒子的宽度
    h:538,//图片的高度
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

  $('#exclusive .tabmenu li').click(function () {
    $(this).addClass('current').siblings().removeClass('current');
    let index = $(this).index();
    $('#exclusive .Exc').eq(index).addClass('on').siblings().removeClass('on');
  })

  let index = 0;
  let ulHeight = $('#guessyouLike .item:first-child').outerHeight();
  // console.log(ulHeight);
  let length = $('#guessyouLike .item').length;
  $('#guessyouLike .ftitle .alter').click(function () {
    index++;
    $('#guessyouLike .guessyoulikeContent').animate({
      'top': -index * ulHeight + 'px'
    }, 600)
    if (index == length - 1) {
      index = 0;
      $('#guessyouLike .guessyoulikeContent').animate({
        'top': -index * ulHeight + 'px'
      }, 0)
    }
  })

  $('#banner .hot ul li').click(function () {
   $(this).animate({
     'height': '90px'
   }).siblings().animate({
     'height': '40px'
   })
  })
})