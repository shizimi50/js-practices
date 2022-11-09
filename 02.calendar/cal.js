const args = require('minimist')(process.argv.slice(2))
const year = args.y
const month = args.m
const weekdays = ['日', '月', '火', '水', '木', '金', '土']
const startDate = new Date(year, month - 1)
const startWday = startDate.getDay()
const lastDate = new Date(new Date(year, month, 0))
const oneSpace = ' '

// NOTE: 空白を5行いれることで、年月日をセンタリング
console.log(`${'     '}${year}年${month}月`)

for (let i = 0; i < weekdays.length; ++i) {
  process.stdin.write(`${weekdays[i]} `)
}
// NOTE: 曜日と日付を改行するために、console.logで空文字を出力
console.log('')

process.stdout.write(oneSpace.repeat(startWday * 3))
const firstSaturday = 7 - startWday

for (let i = 1; i <= lastDate.getDate(); ++i) {
  if (i === firstSaturday || (i - firstSaturday) % 7 === 0) {
    console.log(String(i))
  } else {
    process.stdout.write(String(i).padStart(2, oneSpace) + oneSpace)
  }
}
