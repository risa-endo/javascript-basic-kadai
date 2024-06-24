
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// HTML要素.メソッド('イベント種類',関数(コールバック関数),待ち時間)
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});

// setTimeout(btn.addEventListener('click') => {
//   text.textContent = 'ボタンをクリックしました';
// },2000);
