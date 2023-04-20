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
// -> "10" + "10" = 1010

console.log(10 + "10"); // 1010

// Trường hợp dấu - * / 
// - Javascript nó sẽ cố gắng chuyển đổi String -> Number 
// - Lúc này chuỗi "10" sẽ được chuyển đổi từ String -> Number 
// - Kết quả Number - Number = Number 
// -> 10 - 10 = 0

console.log(10 - "10"); // 0

// Trường hợp "" - 1
// - Javascript nó sẽ cố gắng chuyển đổi String -> Number 
// - Lúc này String rỗng sẽ được chuyển đổi từ String -> Number, "" sẽ có giá trị là 0
// - Kết quả Number - Number = Number 
// -> 0 - 1 = -1

console.log("" - 1); // -1

// Trường hợp null + ""
// - Javascript nó sẽ cố gắng chuyển đổi null -> String 
// - Lúc này null sẽ được chuyển đổi từ null -> String 
// - Kết quả String + String = String 
// -> "" + "" = null

console.log(null + ""); // null

// Trường hợp null + 10
// - Javascript nó sẽ cố gắng chuyển đổi null -> Number
// - Lúc này null sẽ được chuyển đổi từ null -> Number, null sẽ có giá trị là 0 
// - Kết quả Number + Number = Number 
// -> 0 + 10 = 10

console.log(null + 10); // 10

// Trường hợp true - false
// - Javascript nó sẽ cố gắng chuyển đổi Boolean -> Number 
// - Lúc này true và false sẽ được chuyển đổi từ Boolean -> Number, true - false sẽ có giá trị là 1 - 0
// - Kết quả Number - Number = Number 
// -> 1 - 0 = 1

console.log(true - false); // 1

// Trường hợp null + undefined
// - null là giá trị rỗng, undefined là giá trị không xác định
// - Theo lý thuyết nếu giá trị truyền vào không thể chuyển đổi, thì nó sẽ trả về giá trị NaN.

console.log(null + undefined); // NaN

// -----------------------------------------------------------------------------------------------------

// Bài 21: Toán tử so sánh cơ bản: > < >= <= 

console.log(10 > 5); // true

console.log(10 < 5); // false

console.log(10 >= 5); // true

console.log(10 <= 5); // false

// -----------------------------------------------------------------------------------------------------

// Bài 22: Toán tử logic cơ bản: && || !
// Lý thuyết:
// - Trường hợp &&:
//   true && true -> true
//   false && false -> false
//   false && true -> false
//   true && false -> false

// - Trường hợp ||:
//   false || false -> false
//   true || true -> true
//   false || true -> true
//   true || false -> true

// - Trường hợp phủ định !
//   !false -> true
//   !true -> false

console.log(5 > 7 && 8 > 3); // false

console.log(5 > 7 || 8 > 3); // true

const amIWrong = false;
console.log(!amIWrong); // true

// -----------------------------------------------------------------------------------------------------

// Bài 23: So sánh == vs ===
// Lý thuyết:
// - == (loose equality): so sánh giá trị
// - === (strict equality): so sánh giá trị và kiểu dữ liệu


console.log(10 == 10); // true

// Trường hợp 10 == "10"
// - Javascript nó sẽ cố gắng chuyển đổi Number -> String. 
// - Lúc này số 10 sẽ được chuyển đổi từ Number -> String 
// - Kết quả String == String -> true 
// -> "10" == "10" -> true

console.log(10 == "10"); // true

// Trường hợp true == 1
// - Javascript nó sẽ cố gắng chuyển đổi true -> Number. 
// - Lúc này true sẽ được chuyển đổi từ true -> Number (1) 
// - Kết quả Number == Number -> true
// -> 1 == 1 -> true

console.log(true == 1); // true

// Trường hợp 1 == "01"
// - Javascript nó sẽ cố gắng chuyển đổi String -> Number. 
// - Lúc này "01" sẽ được chuyển đổi từ String -> Number (1) 
// - Kết quả Number == Number -> true
// -> 1 == 1 -> true

console.log(1 == "01"); // true

// Trường hợp null == ""
// - Javascript nó sẽ hiểu "" là giá trị rỗng. 
// - Theo lý thuyết thì giá trị null sẽ khác giá trị rỗng 
// - Kết quả null == "" -> false

console.log(null == ""); // false

// Trường hợp 10 === 10
// - Số 10 có kiểu dữ liệu Number và giá trị bằng nhau
// - 10 === 10 -> true

console.log(10 === 10); // true

// Trường hợp 10 === 10
// - Số 10 có kiểu dữ liệu Number và "10" có kiểu dữ liệu String
// - Number sẽ không bằng nhau với String
// - 10 === "10" -> false

console.log(10 === "10"); // false

// Trường hợp 10 !== 10
// - Số 10 có kiểu dữ liệu Number và "10" có kiểu dữ liệu String
// - Number sẽ khác nhau với String
// - 10 !== "10" -> true

console.log(10 !== "10"); // true

// Trường hợp true === "true"
// - Javascript nó sẽ cố gắng chuyển đổi Boolean -> Number 
// - Lúc này true sẽ được chuyển đổi từ true -> Number (1)
// - Kết quả Number === String -> false 
// - Kết quả 1 === "true" -> false

console.log(true === "true"); // false