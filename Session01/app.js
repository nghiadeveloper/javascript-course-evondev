// Bài 01: Lời giới thiệu, cám ơn và hướng dẫn quan trọng cần nắm

// -----------------------------------------------------------------------------------------------------

// Bài 02: 2 cách chèn Javascript vào HTML

// -----------------------------------------------------------------------------------------------------

// Bài 03: Tìm hiểu về hàm console.log()
// Lý thuyết:
// - Trong JavaScript, console.log() là một phương thức được sử dụng để xuất thông báo ra bảng điều khiển console.
// - Nó nhận một hoặc nhiều đối số, có thể thuộc bất kỳ loại dữ liệu nào và hiển thị chúng trong bảng điều khiển dành cho nhà phát triển. 
// - Phương pháp này thường được sử dụng cho mục đích gỡ lỗi hoặc để hiển thị thông tin cho người dùng.

console.log("Hello world!"); // Hello world

// -----------------------------------------------------------------------------------------------------

// Bài 04 - 05: Kiến thức về biến và cách khai báo biến với const và let
// Lý thuyết:
// - Trong JavaScript, biến được sử dụng để lưu trữ giá trị hoặc tham chiếu đến một giá trị. Biến có thể được tạo bằng các từ khóa var, let, hoặc const.
// - Từ khóa var đã cũ và không nên được sử dụng nữa, chúng ta nên sử dụng let hoặc const.
// - Từ khóa let khai báo một biến có thể được gán lại giá trị mới và chỉ tồn tại trong block nơi nó được khai báo.
// - Từ khóa const cũng khai báo một biến nhưng giá trị của biến không thể được gán lại sau khi khởi tạo, giá trị của biến là không thay đổi,
// nhưng các thuộc tính của đối tượng hoặc phần tử của mảng được khai báo bằng const vẫn có thể thay đổi.

var numbers = 100;
console.log(numbers); // 100

let names = "Hiếu Nghĩa";
names = "Nguyễn Hiếu Nghĩa";
console.log(names); // Nguyễn Hiếu Nghĩa

const otherNumber = 200;
console.log(otherNumber); // 200

// -----------------------------------------------------------------------------------------------------

// Bài 06: Hoisting
// Lý thuyết:
// - Hoisting là một tính năng trong JavaScript, cho phép các khai báo biến và hàm được di chuyển lên đầu phạm vi của nó trước khi thực hiện bất kỳ mã lệnh nào trong phạm vi đó. 
// Cụ thể hơn, các khai báo sẽ được đưa lên đầu của phạm vi và có thể được truy cập trước khi nó được khai báo.
// - Nói cách khác, dù bạn khai báo biến hay hàm ở bất kỳ đâu trong phạm vi, nhưng trình thông dịch JavaScript sẽ tự động đưa chúng lên đầu của phạm vi đó, 
// giống như nó được đưa lên trên đỉnh của một ngăn xếp (stack), trước khi thực thi bất kỳ lệnh nào trong phạm vi.
// - Tuy nhiên, chỉ có khai báo được hoisted mà thôi, không phải giá trị của biến được gán trong quá trình khai báo, do đó nếu bạn truy cập một biến trước khi nó được khai báo, 
// giá trị của nó sẽ là undefined. Do đó, nên khai báo tất cả các biến và hàm ở đầu của phạm vi để tránh những sai sót không mong muốn.

let a = 500;
console.log(a); // 500