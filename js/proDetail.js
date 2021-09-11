$(function () {
  $('.rightbox b').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
  })

  // 商品加减功能
  $('#addNum').click(function () {
    $('#reNum').css({
      cursor: 'pointer'
    })
    let num = $('#numberBox').val();
    num++;
    $('#numberBox').val(num)
  })

  $('#reNum').click(function () {
    let num = $('#numberBox').val();
    num--;
    if (num < 1) {
      $(this).css({
        cursor: 'not-allowed'
      })
      return;
    }
    $('#numberBox').val(num)
  })
})