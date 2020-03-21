var an; // 解答
var point; // 正解数
var c_a = 20; // 問題の係数
var c_b = 15; // 問題の係数

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
  // 問題を作成
  //
  if (point > 30) {
    c_a = 50; // 問題の係数
    c_b = 49; // 問題の係数
  }
  var rand_a;
  var rand_b;
  rand_a = Math.floor( Math.random() * c_a);
  rand_b = Math.floor( Math.random() * c_b);
  // 難易度調整:負数にならんように
  if (op_f == "-") {
    while (rand_a < rand_b) {
      rand_a = Math.floor( Math.random() * c_a);
      rand_b = Math.floor( Math.random() * c_b);
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
  // 難易度調整：負数は選択肢にすら出さんね
  for (let i in ary) {
    if (ary[i] < 0) {
      ary[i] = an + 3;
    }
  }
  shuffle(ary);
  // 設定
  $('#op').text(op_f);
  $('#a').text(rand_a);
  $('#b').text(rand_b);
  $('#an1').val(ary[0]);
  $('#an2').val(ary[1]);
  $('#an3').val(ary[2]);
  $('#an4').val(ary[3]);
  $('#msg').text("");
  $('#comment').text("");
}

// ページ更新時、最初に動く
window.onload = function() {
  point = 0;
  $('#point').text(point);
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
    $('#msg').text("○");
    point = point + 1;
    $('#point').text(point);
    // 応援コメント
    switch (point) {
      case 1:
        $('#comment').text("せいかい。おめでとう！");
        break;
      case 3:
        $('#comment').text("すごい。せいかい。");
        break;
      case 5:
        $('#comment').text("また せいかい(*^^*)");
        break;
      case 7:
        $('#comment').text("すご。");
        break;
      case 10:
        $('#comment').text("すごすぎる。");
        break;
      case 12:
        $('#comment').text("てんさいだ。");
        break;
      case 15:
        $('#comment').text("さんすうのてんさいですか？");
        break;
      case 20:
        $('#comment').text("てんさいだー！");
        break;
      case 21:
        $('#comment').text("そろそろ きゅうけい してはいかがですか。");
        break;
      case 22:
        $('#comment').text("いぬ は うれしい とき、しっぽ を どうするでしょうか？");
        break;
      case 23:
        $('#comment').text("せいかいは、ふります！");
        break;
      case 25:
        $('#comment').text("ねこ は うれしい とき、しっぽ を どうするでしょうか？");
        break;
      case 26:
        $('#comment').text("せいかいは、ピン と たてます。");
        break;
      case 30:
        $('#comment').text("もんだい、かんたん すぎますか？");
        break;
      case 31:
        $('#comment').text("つぎから、もんだいを少し むつかしく します。");
        break;
      case 35:
        $('#comment').text("もう、さんすう は かんぺき かな。");
        break;
      case 100:
        $('#comment').text("100 もん せいかい。やるな〜。");
        break;
      default:
        $('#comment').text("");
        break;
    }
  } else {
    $('#msg').text("×");
    $('#comment').text("");
  }
}