$(document).ready(function(){jQuery('.option-box ').click(function(){if(jQuery('.color-option').hasClass("active")){jQuery('.color-option').animate({"left":"-70px"},function(){jQuery('.color-option').toggleClass("active");});jQuery('.option-box').animate({"left":"0px"},function(){});}else{jQuery('.color-option').animate({"left":"0px"},function(){jQuery('.color-option').toggleClass("active");});jQuery('.option-box').animate({"left":"71px"},function(){});}});var colorLi=$('.color-option ul li');$('.color-option ul li').eq(0).css('backgroundColor','#f76d2b').end().eq(1).css('backgroundColor','#de483d').end().eq(2).css('backgroundColor','#228dcb').end().eq(3).css('backgroundColor','#00bff3').end().eq(4).css('backgroundColor','#2dcc70').end().eq(5).css('backgroundColor','#6054c2');colorLi.click(function(){$("link[href*='Theme']").attr('href',$(this).attr('data-value'));});});