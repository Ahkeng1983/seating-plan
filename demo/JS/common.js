// 封装获取随机颜色
function getColor() {
  var r = parseInt(Math.random() * 255);
  var g = parseInt(Math.random() * 255);
  var b = parseInt(Math.random() * 255);
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

// 封装生成盒子
function getFather(pos, num, color) {
  var $father = getBox(pos, true, color);
  for (var i = 0; i < num; i++) {
    // 创建盒子
    var sonBox = getBox(getPos(i, num, 100), false, getColor());
    // 将创建出来的盒子添加到指定元素中
    $father.append(sonBox);
    // 设置生成的样式
  }
  return $father;
}
// 封装设置子盒子的函数
function getBox(pos, draggable, color) {
  var $boxmin = $('<div></div>').css({
    'position': 'absolute',
    'width': '40px',
    'height': '40px',
    'left': pos.x,
    'top': pos.y,
    'backgroundColor': color
  })
  if (draggable) {
    $boxmin.draggable();
  }
  return $boxmin;
}
// index 第几个盒子 max 一共有几个盒子 radius半径
function getPos(index, max, radius) {
  var pos = {};
  pos.x = Math.sin(Math.PI * 2 * index / max) * radius;
  pos.y = Math.cos(Math.PI * 2 * index / max) * radius;
  return pos;
}
$(function () {
  $('.box1').css('backgroundColor', 'red');
  $('.box2').css('backgroundColor', 'green');
  $('.box3').css('backgroundColor', 'blue');
  $('.box4').css('backgroundColor', 'pink');
  // 拖动
  $('.box1').draggable();
  $('.box2').draggable();
  $('.box3').draggable();
  $('.box4').draggable();
  //设置相对定位
  $(".right").css({'position': 'relative'})
  // 点击按钮动态生成效果
  $('#1').on('click', function () {
    // 点击后在指定区域生成指定个数的盒子
    var pos = {};
    pos.x = Math.random() * $(".right").width();
    pos.y = Math.random() * $(".right").height();
    $(".right").append(getFather(pos, 10, "yellowgreen"));
  })
})
