// Bài 17: Tìm hiểu hàm Number
// Lý thuyết:
// - Number() là hàm chuyển đối một đối tượng thành số
// - Nếu đối tượng được truyền vào không thể chuyển đổi thành một số, thì nó sẽ trả về giá trị NaN.

console.log(Number("123")); // 123

console.log(Number("12.3")); // 12.3

console.log(Number("abcdef")); // NaN

console.log(Number(undefined)); // NaN

console.log(Number(null)); // 0

console.log(Number(false)); // 0

console.log(Number(true)); // 1

console.log(Number(NaN)); // NaN

// -----------------------------------------------------------------------------------------------------

// Bài 18: Tìm hiểu hàm String
// Lý thuyết: 
// - String() là hàm chuyển đối một đối tượng thành chuỗi
// - Nếu đối tượng được truyền vào không thể chuyển đổi thành một chuỗi, thì nó sẽ trả về giá trị NaN.

console.log(String(123)); // 123

console.log(String(undefined)); // NaN

console.log(String(null)); // 0

console.log(String(false)); // false

console.log(String(true)); // true

console.log(String(NaN)); // NaN

// -----------------------------------------------------------------------------------------------------

// Bài 19: Tìm hiểu hàm Boolean
// Lý thuyết:
// - Boolean -> true hoặc false

console.log(`Boolean of zero: ${Boolean(0)}`); // false

console.log(`Boolean of "": ${Boolean("")}`); // false

console.log(`Boolean of null: ${Boolean(null)}`); // false

console.log(`Boolean of undefined: ${Boolean(undefined)}`); // false

console.log(`Boolean of NaN: ${Boolean(NaN)}`); // false

console.log(`Boolean of false: ${Boolean(false)}`); // false

console.log(`Boolean of text: ${Boolean("Nguyễn Hiếu Nghĩa")}`); // true