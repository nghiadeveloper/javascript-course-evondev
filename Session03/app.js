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

// -----------------------------------------------------------------------------------------------------

// Bài 20: Type coercion là gì?
// Lý thuyết: 
// - Type coercion được hiểu đơn giản là chuyển đổi dữ liệu từ kiểu này sang kiểu khác

console.log(10 + 10); // 20

// Trường hợp dấu +
// - Javascript nó sẽ cố gắng chuyển đổi Number -> String. 
// - Lúc này số 10 sẽ được chuyển đổi từ Number -> String 
// - Kết quả String + String = String 

console.log(10 + "10"); // 1010

// Trường hợp dấu - * / 
// - Javascript nó sẽ cố gắng chuyển đổi String -> Number 
// - Lúc này chuỗi "10" sẽ được chuyển đổi từ String -> Number 
// - Kết quả Number - Number = Number

console.log(10 - "10"); // 0

// Trường hợp "" - 1
// - Javascript nó sẽ cố gắng chuyển đổi String -> Number 
// - Lúc này String rỗng sẽ được chuyển đổi từ String -> Number, "" sẽ có giá trị là 0
// - Kết quả Number - Number = Number

console.log("" - 1); // -1

// Trường hợp null + ""
// - Javascript nó sẽ cố gắng chuyển đổi null -> String 
// - Lúc này null sẽ được chuyển đổi từ null -> String 
// - Kết quả String + String = String 

console.log(null + ""); // null

// Trường hợp null + 10
// - Javascript nó sẽ cố gắng chuyển đổi null -> Number
// - Lúc này null sẽ được chuyển đổi từ null -> Number, null sẽ có giá trị là 0 
// - Kết quả String + String = String 

console.log(null + 10); // 10

// Trường hợp false - true
// - Javascript nó sẽ cố gắng chuyển đổi Boolean -> Number 
// - Lúc này true và false sẽ được chuyển đổi từ Boolean -> Number, true - false sẽ có giá trị là 1 - 0
// - Kết quả Number - Number = Number

console.log(true - false); // 1

// Trường hợp null + undefined
// - null là giá trị rỗng, undefined là giá trị không xác định
// - Theo lý thuyết nếu giá trị truyền vào không thể chuyển đổi, thì nó sẽ trả về giá trị NaN.

console.log(null + undefined); // NaN