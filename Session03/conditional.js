// Bài 24: Câu điều kiện cơ bản

const isRich = false;
const myMoney = 100;

// if(isRich) {
//     console.log("I will buy a new car");
// } else {
//     console.log("I will save my money");
// }

if(!isRich) {
    console.log("I will buy a new car");
} else if(myMoney > 1000) {
    console.log("I will save my money");
} else {
    console.log("I poor");
}

// -----------------------------------------------------------------------------------------------------

// Bài 25: alert, prompt và confirm
// Lý thuyết:
// - Các hàm alert(), prompt() và confirm() là các hộp thoại được cung cấp bởi JavaScript để tương tác với người dùng trên trình duyệt.
// - alert(): Hiển thị một thông báo đơn giản cho người dùng với một nút "OK" để đóng hộp thoại.
// - prompt(): Hiển thị một thông báo cho phép người dùng nhập dữ liệu vào, người dùng có thể nhâp dữ liệu trong ô nhập và sau đó bấm OK hoặc Cancel để đóng hộp thoại.
// - confirm(): Hiển thị một thông báo yêu cầu người dùng xác nhận hay huỷ bỏ một hành động, hoặc đưa ra một lựa chọn, người dùng có thể chọn OK hoặc Cancel để đóng hộp thoại. 
// Hàm này trả về giá trị true hoặc false tùy thuộc vào lựa chọn của người dùng.

// alert("Your website has been hacked!");

// const yourName = prompt("Vui lòng nhập vào tên của bạn!");
// console.log(yourName);

// const isYourMoney = confirm("Đây có phải tiền của bạn không?");
// console.log(isYourMoney);

// -----------------------------------------------------------------------------------------------------

// Bài 26: Bài tập về câu điều kiện

