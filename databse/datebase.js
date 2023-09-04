// ページが読み込まれた時にローカルストレージからemailを取得してテキストボックスに表示
window.onload = function () {
  // 1.HTMLでemail入力欄を取得
  // 2.ローカルストレージに保存されたemailを取得
  // 3.ローカルストレージに「email」が存在すれば、1を２に書き換える

  // email
  const displayEmail = document.getElementById("input-email");
  const userEmail = localStorage.getItem("email");
  if (userEmail) {
    displayEmail.value = userEmail;
  }
  // Pass
  const displayPass = document.getElementById("input-password");
  const userPassword = localStorage.getItem("password");
  if (userPassword) {
    displayPass.value = userPassword;
  }
};

// 保存と読み込みを行う関数
function saveAndLoad() {
  const emailInput = document.getElementById("input-email");
  const passwordInput = document.getElementById("input-password");

  // ローカルストレージにデータを保存
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("password", passwordInput.value);
}
