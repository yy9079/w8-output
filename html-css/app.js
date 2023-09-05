// function toggleActiveClass(element) {
//     element.classList.toggle('active'); // 'active'クラスをトグル
//     if
// }

const clickHandler = (e) => {
  e.preventDefault();
  const $target = e.currentTarget; //クリックされた要素
  const ACTIVE_CLASS = "is-active";
  // なければアクティブクラスをつける
  if ($target.classList.contains(ACTIVE_CLASS)) {
    $target.classList.remove(ACTIVE_CLASS);
  } else {
    $target.classList.add(ACTIVE_CLASS);
  }
};

// クリックイベントを要素に関連付ける
// inputクラス全てに対して、クリックされたら「clickHandler」が呼び出される
const $inputs = document.querySelectorAll(".input"); // この行で要素を選択してください
$inputs.forEach(($inputs) => {
  $inputs.addEventListener("click", clickHandler);
});

document.addEventListener("click", (e) => {
  $inputs.forEach(($input) => {
    // クリックされた要素が"input" でなく、かつ "is-active" クラスを持っている場合
    if ($input !== e.target && $input.classList.contains("is-active")) {
      $input.classList.remove("is-active");
    }
  });
});

// document.addEventListener("click", (e) => {
//     const $allElements = document.querySelectorAll(".input"); // すべての "input" 要素を選択
//     $allElements.forEach(($input) => {
//       if ($input !== e.target && $input.classList.contains("is-active")) {
//         // クリックされた要素が "input" でなく、かつ "is-active" クラスを持っている場合、クラスを取り除く
//         $input.classList.remove("is-active");
//       }
//     });

// (() => {
//     // クラスとインスタンス
//     class Accordion {
//       // 初期化
//       constructor(obj) {
//         console.log("obj", obj);
//         const $elm = document.querySelector(obj.hookName);
//         this.$trigger = $elm.getElementsByTagName(obj.tagName);

//         const triggerLen = this.$trigger.length;
//         let index = 0;
//         while (index < triggerLen) {
//           // クラスの中で関数を指定した場合は、clickHandler(e)の前に「this」を入れなければならない
//           this.$trigger[index].addEventListener("click", (e) =>
//             this.clickHandler(e)
//           );
//           index++;
//         }
//       }

//       // クリックしたら実行される処理
//       // クラスの中で関数を書くときは、const不要なので消す

//       clickHandler = (e) => {
//         e.preventDefault();

//         const $target = e.currentTarget; //クリックされた要素
//         const $content = $target.nextElementSibling; //クリックした次の要素accordion-contents
//         // getElementsByTagName：クリックしたタグの中（子要素）を持ってくる
//         const $img = $target.getElementsByTagName("img")[0];
//         const $shape = $target.getElementsByTagName("div")[0];

//         const ACTIVE_CLASS = "is-active";

//         if ($target.classList.contains(ACTIVE_CLASS)) {
//           $target.classList.remove(ACTIVE_CLASS);
//           $content.classList.remove(ACTIVE_CLASS);
//           $img.classList.remove(ACTIVE_CLASS);
//           $shape.classList.remove(ACTIVE_CLASS);
//         } else {
//           $target.classList.add(ACTIVE_CLASS);
//           $content.classList.add(ACTIVE_CLASS);
//           $img.classList.add(ACTIVE_CLASS);
//           $shape.classList.add(ACTIVE_CLASS);
//         }

//         // // **正しく動くコード（1on1終了時点）
//         // if ($content.style.display === "block") {
//         //   // 順番が変わるとうまく動かない
//         //   $content.style.display = "none";
//         //   // アレンジクリックで色が変わる
//         //   $target.style.backgroundColor = "";
//         //   $img.style.opacity = 0;
//         // } else {
//         //   $content.style.display = "block";
//         //   // アレンジクリックで色が変わる
//         //   $target.style.backgroundColor = "#FF6F61";
//         //   $img.style.opacity = 1;
//         // }
//       };
//     }})
