// Bài 1: Tính tiền lương nhân viên

/** Input: Tiền lương (1 ngày)
 *        Số ngày làm
 * Process: 
 * 1. Dom tới input lấy value (Tiền lương, Số ngày làm).
 * 2. Tính tiền:
 * Tổng lương = Tiền lương(1 ngày) * Số ngày làm
 * Output: In ra màn hình kết quả tổng lương
 */

document.getElementById('btnTotalSalary').onclick = function () {
    // input
    var wage = +document.getElementById('wage').value;
    var workDay = +document.getElementById('workDay').value;
    // process
    var totalSalary = wage * workDay;
    // output
    document.getElementById('totalSalary').innerHTML = new Intl.NumberFormat('vn-VN').format(totalSalary);
}
// ========== ========== ==========
// Bài 2: Tính giá trị trung bình

/** Input: Số thực 1, 2, 3, 4, 5.
 * Process: 
 * 1. Dom tới input lấy value số thực (1, 2, 3, 4, 5).
 * 2. Ép kiểu số thực vì input lấy vào là chuỗi.
 * 3. Tính trung bình:
 * Trung bình =  (ST1 + ST2 + ST3 + ST4 + ST5) / 5
 * Output: In ra màn hình giá trị trung bình của 5 số thực.
 */

document.getElementById('btnAverage').onclick = function () {
    // input
    var realNumber1 = parseFloat(document.getElementById('realNumber1').value);
    var realNumber2 = parseFloat(document.getElementById('realNumber2').value);
    var realNumber3 = parseFloat(document.getElementById('realNumber3').value);
    var realNumber4 = parseFloat(document.getElementById('realNumber4').value);
    var realNumber5 = parseFloat(document.getElementById('realNumber5').value);
    // process
    var average = (realNumber1 +  realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;
    // output 
    document.getElementById('average').innerHTML = average;
}
// ========== ========== ==========
// Bài 3: Quy đổi tiền

/** Input: Số USD
 * Process: 
 * 1. Dom tới input lấy value số USD cần quy đổi.
 * 2. Tính giá trị quy đổi:
 * VNĐ = số USD * 23000
 * Output: In giá trị quy đổi USD sang VNĐ ra màn hình.
 */

document.getElementById('btnSwap').onclick = function () {
    // input
    var usdSwap = +document.getElementById('usdSwap').value;
    // process
    var vnd = usdSwap * 23500;
    // output
    var result = document.getElementById('result');
    result.style.display = 'block';
    document.getElementById('vnd').innerHTML = new Intl.NumberFormat('vn-VN').format(vnd) + ' VND';
}
// ========== ========== ==========
// Bài 4: Tính chu vi, diện tích HCN

/** Input: Chiều dài, chiều rộng HCN.
 * Process:
 * 1. Dom tới lấy value chiều dài, chiều rộng HCN.
 * 2. Tính:
 * Chu vi = (Dài + Rộng) * 2
 * Diện tích = Dài * Rộng
 * Output: In kết quả chu vi, diện tích HCN ra màn hình.
 */

document.getElementById('btnCalculate').onclick = function () {
    // input
    var rectangleLength = +document.getElementById('rectangleLength').value;
    var rectangleWidth = +document.getElementById('rectangleWidth').value;
    // process
    var circumference = (rectangleLength + rectangleWidth) * 2;
    var area = rectangleLength * rectangleWidth;
    // output
    document.getElementById('circumference').innerHTML = circumference;
    document.getElementById('area').innerHTML = area;
}
// ========== ========== ==========
// Bài 5: Tính tổng 2 ký số

/** Input: Số có 2 chữ số (ab)
 * Process:
 * 1. Dom tới lấy value 2 chữ số 
 * 2. Tính:
 * chữ số hàng chục (a) = ab / 10
 * chữ số hàng đơn vị (b) = ab % 10
 * Tổng ký số = a + b
 * Output: In ra màn hình tổng ký số.
 */

document.getElementById('btn2Numbers').onclick = function () {
    // input
    var twoNumbers = +document.getElementById('twoNumbers').value;
    // process
    var firstNumber = Math.floor(twoNumbers / 10);
    var secondNumber = twoNumbers % 10;
    var sum2Numbers = firstNumber + secondNumber;
    // output
    document.getElementById('sum2Numbers').innerHTML = sum2Numbers;
}