let num = Math.floor(Math.random() * 15);

console.log(num);
// 表示確認

if (num % 15 == 0) {
  console.log('3と5の倍数です')
}
// (1)numを15で割ったらあまり0になる場合

else if (num % 3 == 0) {
  console.log('3の倍数です');
}
// (2)_(1)でなくnumを３で割ったらあまり０になる場合

else if (num % 5 == 0) {
  console.log('5の倍数です');
}
// (3)_(1)でなく５で割ったらあまり0になる場合


else {
  console.log(num);
}