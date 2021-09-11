$(function () {
  // 全选功能
  $('.allSel').change(function () {
    let status = $(this).prop('checked')
    // console.log(status);
    $('.sigSel').prop('checked', status)
    $('.allSel').prop('checked', status)
    allCount();
  })

  // 反选功能
  // $('.sigSel').change(function () {
  //   let flag = true;

  //   // 遍历sigSel
  //   $('.sigSel').each(function () {
  //     if (!$(this).prop('checked')) {
  //       flag = false;
  //       return;
  //     }
  //   })
  //   $('.allSel').prop('checked', flag)
  // })

  // 思路二: 获取.sigSel的长度和选中的长度比较
  $('.sigSel').change(function () {
    let sigLen = $('.sigSel').length;
    let selLen = $('.sigSel:checked').length;
    if (sigLen == selLen) 
      $('.allSel').prop('checked', true)
    else
      $('.allSel').prop('checked', false)
    allCount();
  })

  // 添加数量和减少数量功能

  // 1.添加
  $('.addNum').click(function() {
    let n = $(this).siblings('.num').val();
    n++;
    $(this).siblings('.num').val(n);
        
   subPrice(this, n);
   allCount();
  })

  // 1.减少
  $('.reNum').click(function() {
    let n = $(this).siblings('.num').val();
    n--;
    if (n < 1) {
      return;
    }
    $(this).siblings('.num').val(n);
    subPrice(this, n);
    allCount(); 
  })

   // 小计功能 小计=数量*单价
  function subPrice(obj, n) {
    let curPrice = $(obj).closest('tr').find('.sigPrice').text();
    let tot = (curPrice * n).toFixed(2)
    $(obj).closest('tr').find('.subTotal').text(tot)
  }


  // 总价和总数量功能
  function allCount() {
    let allPrice = 0, allNum = 0;
    $('.sigSel:checked').each(function () {
      allNum += parseInt($(this).closest('tr').find('.num').val());
      allPrice += parseFloat($(this).closest('tr').find('.subTotal').text());
    })
    allPrice = allPrice.toFixed(2);
    $('.count').text(allNum)
    $('.allPrice').text(allPrice)
  }

})