// Bài 07 - 08: Kiểu dữ liệu string - Sử dụng string cơ bản
// Lý thuyết:
// - Trong JavaScript, string là một kiểu dữ liệu được sử dụng để đại diện cho các chuỗi ký tự.
// - Chuỗi được đặt trong một cặp dấu ngoặc kép hoặc dấu nháy đơn.

const names = "Nguyễn Hiếu Nghĩa";
const job = "Fullstack Developer";

// Cách 1:
const newString1 = "My name is " + names + " and I am " + job;

// Cách 2:
const newString2 = `My name is ${names} and I am ${job}`;

console.log(names); // Nguyễn Hiếu Nghĩa

console.log(typeof names); // Xem kiểu dữ liệu: string

console.log(newString1); // My name is Nguyễn Hiếu Nghĩa and I am Fullstack Developer

console.log(newString2); // My name is Nguyễn Hiếu Nghĩa and I am Fullstack Developer

// -----------------------------------------------------------------------------------------------------

// Bài 9: index và length trong string cần nắm
// Lý thuyết:
// - index là vị trí của từng ký tự trong string, bao gồm cả ký tự khoảng trắng và bắt đầu bằng số 0
// - length trả về độ dài của string

console.log(newString1.length); // 57

// ----------------------------------------------------------------------------------------------------

// Bài 10 - 11: Các phương thức trong string phần 1 - 2
// Lý thuyết:
// - split() là một phương thức được sử dụng để chia chuỗi thành một mảng các phần tử con dựa trên một ký tự hoặc chuỗi được chỉ định.
// - toLowerCase() là một phương thức được sử dụng để chuyển đổi chuỗi thành chuỗi mới với tất cả các ký tự in hoa được chuyển đổi thành chữ thường.
// - toUpperCase() là một phương thức được sử dụng để chuyển đổi chuỗi thành chuỗi mới với tất cả các ký tự in thường được chuyển đổi thành chữ hoa.
// - startsWith() là một phương thức được sử dụng để kiểm tra xem chuỗi có bắt đầu bằng một chuỗi khác hay không. 
// - endsWith() là một phương thức được sử dụng để kiểm tra xem chuỗi có kết thúc bằng một chuỗi khác hay không. 
// - includes() là một phương thức được sử dụng để kiểm tra xem chuỗi có chứa một chuỗi khác hay không.
// - indexOf() là một phương thức được sử dụng để tìm kiếm một chuỗi con trong chuỗi ban đầu và trả về vị trí đầu tiên của chuỗi con đó nếu tồn tại hoặc -1 nếu không tồn tại.
// - lastIndexOf() là một phương thức được sử dụng để tìm kiếm một chuỗi con trong chuỗi ban đầu và trả về vị trí cuối cùng của chuỗi con đó nếu tồn tại hoặc -1 nếu không tồn tại.
// - replace() là một phương thức được sử dụng để tìm và thay thế một chuỗi con bằng một chuỗi khác trong chuỗi ban đầu.
// - repeat() là một phương thức được sử dụng để tạo ra một chuỗi mới bằng cách lặp lại một chuỗi ban đầu n lần.
// - slice() là một phương thức được sử dụng để trích xuất một phần của chuỗi ban đầu và trả về một chuỗi mới.
// - trim() là một phương thức được sử dụng để loại bỏ khoảng trắng ở hai đầu của chuỗi ban đầu và trả về một chuỗi mới.
// - trimStart() là một phương thức được sử dụng để loại bỏ khoảng trắng ở đầu chuỗi ban đầu và trả về một chuỗi mới.
// - trimEnd() là một phương thức được sử dụng để loại bỏ khoảng trắng ở cuối chuỗi ban đầu và trả về một chuỗi mới.
// - charAt() là một phương thức được sử dụng để trả về ký tự ở vị trí chỉ định trong chuỗi.

// Bài 12: Phân biệt substr và substring
// Lý thuyết:
// - substring() là một phương thức được sử dụng để lấy ra các ký tự của chuỗi từ một chuỗi ban đầu.
// - substr() là một phương thức được sử dụng để lấy ra một phần của chuỗi từ một chuỗi ban đầu

const myStr = "Javascript Developer";
const myStr1 = "Javascript Developer Dev";
const myStr2 = "    Javascript Developer    ";

console.log(myStr.split(" ")); // (2) ['Javascript', 'Developer']

console.log(myStr.split("")); // (20) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

console.log(myStr.toLowerCase()); // javascript developer

console.log(myStr.toUpperCase()); // JAVASCRIPT DEVELOPER

console.log(myStr.startsWith("Javascript")); // true

console.log(myStr.endsWith("Developer")); // true

console.log(myStr.includes("Dev")); // true

console.log(myStr.indexOf("D")); // 11

console.log(myStr1.lastIndexOf("D")); // 21

console.log(myStr.replace("Javascript", "Backend")); // Backend Developer

console.log(myStr.repeat(3)); // Javascript Developer Javascript Developer Javascript Developer

console.log(myStr.slice(0, 11)); // Javascript 

console.log(myStr.slice(0)); // Javascript Developer

console.log(myStr.slice(-9)); // Developer

console.log(myStr2.trim()); // Javascript Developer

console.log(myStr2.trimStart()); // Javascript Developer

console.log(myStr2.trimEnd()); //     Javascript Developer

console.log(myStr.charAt(0)); // J

console.log(myStr.substring(0, 10)); // Javascript

console.log(myStr.substr(0, 10)); // Javascript

// -----------------------------------------------------------------------------------------------------

// Bài 13: Sử dụng nhiều phương thức của string cùng lúc
// Bài toán: 
// - Loại bỏ khoảng trống của chuỗi sau "    Javascript Developer    "
// - Thay chữ Developer thành Fullstack
// - Đưa tất cả về in hoa
// - Sau đó cho chuỗi đó lặp lại 3 lần 

console.log(myStr2.trim().replace("Developer", "Fullstack").toUpperCase().repeat(3));

// -----------------------------------------------------------------------------------------------------

// Bài 14 - 15: Tìm hiểu kiểu dữ liệu number phần 1 - 2
// Lý thuyết
// - typeof được sử dụng để kiểm tra kiểu dữ liệu
// - parseInt() là một hàm được sử dụng để chuyển đổi một chuỗi sang kiểu số nguyên.
// - parseFloat() là một hàm được sử dụng để chuyển đổi một chuỗi sang kiểu số thực
// - Math.abs() là một hàm được sử dụng để trả về giá trị tuyệt đối (giá trị dương) của một số. 
// - Math.floor() là một hàm được sử dụng để làm tròn số xuống (lấy phần nguyên của một số)
// - Math.ceil() là một hàm được sử dụng để làm tròn số lên (lấy phần nguyên của một số)
// - Math.round() là một hàm được sử dụng để làm tròn số thành số nguyên gần nhất.

const number1 = "22"; // kiểu chuỗi
const number2 = "22.5"; // kiểu chuỗi
const number3 = -22;

console.log(5 + 7); // 12

console.log(typeof 22); // number

console.log(parseInt(number1)); // 22

console.log(parseFloat(number2)); // 22.5

console.log(Math.abs(number3)); // 22

console.log(Math.floor(number2)); // 22

console.log(Math.ceil(number2)); // 23

console.log(Math.round(number2)); // 23