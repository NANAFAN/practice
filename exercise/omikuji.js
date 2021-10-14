//変数の宣言
let username;
let userresult;

//入力ダイアログで入力された名前をusernameという変数に格納  
username = prompt("お名前を教えて下さい。");

//名前の入力が無ければ名無しと表示される条件分岐
if (username == ""){
    username = "名無し";
}

//idタグを持つ文字列をusername（変数）で上書きする
document.getElementById("name").innerHTML = username;

//0～4の数字をランダムに生成
let rand = Math.floor( Math.random() * 5) ;

//上記メソッドで出力された数字をif文で分岐させる
if (rand == 0) {
    userresult = "大吉";
  }
  if (rand == 1) {
    userresult = "中吉";
  }
  if (rand == 2) {
    userresult = "小吉";
  }
  if (rand == 3) {
    userresult = "吉";
  }
  if (rand == 4) {
    userresult = "凶";
  }
 
//おみくじの結果を画面に表示
  document.getElementById("result").innerHTML = userresult;