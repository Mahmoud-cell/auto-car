$('.j-tab').click(function () {
    $(this).addClass("m-active s-lineDownCenter");
    $(this).siblings().removeClass("m-active s-lineDownCenter");
  });
  $('.j-tab:first-of-type').click(function () {
    $("#info1").show();
    $("#info2,#info3,#info4").hide();
  });
  $('.j-tab:nth-of-type(2)').click(function () {
    $("#info2").show();
    $("#info1,#info3,#info4").hide();
  });
  $('.j-tab:nth-of-type(3)').click(function () {
    $("#info3").show();
    $("#info1,#info2,#info4").hide();
  });
  $('.j-tab:nth-of-type(4)').click(function () {
    $("#info4").show();
    $("#info1,#info3,#info2").hide();
  });
  
  //form
  $('b-detail__main-aside-about-form-links .j-tab').click(function () {
    $(this).addClass("m-active s-lineDownCenter");
    $(this).siblings().removeClass("m-active s-lineDownCenter");
  });
  $('.b-detail__main-aside-about-form-links .j-tab:first-of-type').click(function () {
    $("#form1").show();
    $("#form2").hide();
  });
  $('.b-detail__main-aside-about-form-links .j-tab:nth-of-type(2)').click(function () {
    $("#form2").show();
    $("#form1").hide();
  });

