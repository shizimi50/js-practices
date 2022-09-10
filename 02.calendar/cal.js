const args = require('minimist')(process.argv.slice(2)) // { _: [], y: 2022, m: 9 }
const year = args.y // コマンド引数で年を取得
const month = args.m // コマンド引数で月を取得
const weekdays = ['日', '月', '火', '水', '木', '金', '土'] // 曜日を初期化
const startDate = new Date(year, month - 1) // 月初の日付を取得
const startWday = startDate.getDay() // 月初の曜日を取得
const lastDate = new Date(new Date(year, month, 0)) // 月末の日付を取得
const oneSpace = ' ' // 半角空白を初期化
let firstSaturday // 最初の土曜日の日付を宣言

// ========コマンド引数で取得した年月を出力========
console.log((oneSpace * 5) + year + '年' + 'month')
// ========全曜日を出力========
for (let i = 0; i < weekdays.length; ++i) {
  process.stdin.write(`${weekdays[i]} `)
}
// ========曜日と日付を改行するためにconsole.logで改行を追加========
console.log('')

// ========開始日の左側にスペースを出力する（条件は曜日）========
if (startWday === 0) { // 月初が日曜日 空白0個
  process.stdout.write(oneSpace.repeat(0))
  firstSaturday = 7
} else if (startWday === 1) { // 月初が月曜日 空白1個
  firstSaturday = 6
  process.stdout.write(oneSpace.repeat(3))
} else if (startWday === 2) { // 月初が火曜日 空白2個
  process.stdout.write(oneSpace.repeat(6))
  firstSaturday = 5
} else if (startWday === 3) { // 月初が水曜日 空白3個
  process.stdout.write(oneSpace.repeat(9))
  firstSaturday = 4
} else if (startWday === 4) { // 月初が木曜日 空白4個
  process.stdout.write(oneSpace.repeat(12))
  firstSaturday = 3
} else if (startWday === 5) { // 月初が金曜日 空白5個
  process.stdout.write(oneSpace.repeat(15))
  firstSaturday = 2
} else { // 月初が土曜日 空白6個
  process.stdout.write(oneSpace.repeat(18))
  firstSaturday = 1 // 最初の土曜日
}

// ========日付が2桁と1桁で空白追加の有無を定義 + 土曜日の場合は改行して出力をさせる========
for (let i = 1; i <= lastDate.getDate(); ++i) {
  if (String(i).length > 1) { // 二行の場合
    if (i === firstSaturday || i === (firstSaturday + 7) || i === (firstSaturday + 14) || i === (firstSaturday + 21) || i === (firstSaturday + 28)) {
      console.log(i + oneSpace)
    } else {
      process.stdout.write(i + oneSpace)
    }
  } else {
    if (i === firstSaturday || i === (firstSaturday + 7) || i === (firstSaturday + 14) || i === (firstSaturday + 21) || i === (firstSaturday + 28)) {
      console.log(oneSpace + i + oneSpace)
    } else {
      process.stdout.write(oneSpace + i + oneSpace) // 一行の場合
    }
  }
}
