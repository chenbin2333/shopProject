$(function () {
  $('#myform').validate({
    // 规则
    rules: {
      userName: {
        required: true,
        isUser: true
      },
      pwd: {
        required: true,
        isPwd: true
      }
    },
    // 提示信息
    messages: {
      userName: {
        required: '您的账户名和登录名为必填项'
      },
      pwd: {
        required: '密码为必填项'
      }
    }
  })

  // 自定义规则用户名
  jQuery.validator.addMethod("isUser", function (value, element) {
    var tel = /^[A-z]\w{5,11}$/; //6到12位首字符必须是字母，后面(字母、数字、下划线)
    return this.optional(element) || (tel.test(value));
  }, "6到12位首字符必须是字母，后面(字母、数字、下划线)");

  // 自定义规则密码
  jQuery.validator.addMethod("isPwd", function (value, element) {
    var tel = /^[A-z]\w{5,11}$/; //6到12位首字符必须是字母，后面(字母、数字、下划线)
    return this.optional(element) || (tel.test(value));
  }, "6到12位首字符必须是字母，后面(字母、数字、下划线)");

  // 监听checkbox的点击
  $('#myform input[type="checkbox"]').click(function () {
    let status = $(this).prop('checked')
    if (status) {
      $('.nowregister').addClass('on').prop('disabled', false)
    } else {
      $('.nowregister').removeClass('on').prop('disabled', true)
    }
  })
})