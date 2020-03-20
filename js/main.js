var an;
var point;
// 配列をシャッフル
function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    // 配列の数値を入れ替える
    [array[i], array[rand]] = [array[rand], array[i]]
  }
  return array;
}

// 問題作成 
function next() {
  // 足し算か引き算を設定 
  var op_f;
  if (Math.floor( Math.random() * 2) == 1) {
    op_f = "+";
  } else {
    op_f = "-";
  }
  // 左辺と右辺を作成
  var rand_a;
  var rand_b;
  rand_a = Math.floor( Math.random() * 20);
  rand_b = Math.floor( Math.random() * 15);
  // 負数にならんように
  if (op_f == "-") {
    while (rand_a < rand_b) {
      rand_a = Math.floor( Math.random() * 20);
      rand_b = Math.floor( Math.random() * 15);
    }
  }
  // 解答
  if (op_f == "+") {
    an = rand_a + rand_b;
  } else {
    an = rand_a - rand_b;
  }
  // 選択肢
  ary = new Array(an, an - 1, an + 1, an + 2);
  shuffle(ary);
  // 設定
  op = document.getElementById("op");
  a = document.getElementById("a");
  b = document.getElementById("b");
  op.textContent = op_f; 
  a.textContent = rand_a; 
  b.textContent = rand_b; 
  $('#an1').val(ary[0]);
  $('#an2').val(ary[1]);
  $('#an3').val(ary[2]);
  $('#an4').val(ary[3]);
}

window.onload = function() {
  point = 0;
  p = document.getElementById("point");
  p.textContent = point; 
  this.next();
}
// 回答クリック後の判定
function ans(id) {
  var i_ans;
  switch (id) {
    case "an1":
      i_ans = $('#an1').val();
      break;
    case "an2":
      i_ans = $('#an2').val();
      break;
    case "an3":
      i_ans = $('#an3').val();
      break;
    case "an4":
      i_ans = $('#an4').val();
      break;
  }
  if (i_ans == an) {
    m = document.getElementById("msg");
    m.textContent = "○"; 
    point = point + 1;
    p = document.getElementById("point");
    p.textContent = point; 
  } else {
    m = document.getElementById("msg");
    m.textContent = "×"; 
  }
}