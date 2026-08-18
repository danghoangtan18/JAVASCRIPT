# 📘 THE COMPLETE JAVASCRIPT COURSE 2025
## Tài liệu học JavaScript từ Zero đến Expert
### Dựa trên khóa học của Jonas Schmedtmann

---

# MỤC LỤC

1. [Phần 1: Kiến Thức Cơ Bản JavaScript - Phần 1](#phần-1-kiến-thức-cơ-bản-javascript---phần-1)
2. [Phần 2: Kiến Thức Cơ Bản JavaScript - Phần 2](#phần-2-kiến-thức-cơ-bản-javascript---phần-2)
3. [Phần 3: Kỹ Năng Lập Trình Viên](#phần-3-kỹ-năng-lập-trình-viên)
4. [Phần 4: Thao Tác DOM & Các Dự Án](#phần-4-thao-tác-dom--các-dự-án)
5. [Phần 5: JavaScript Hoạt Động Như Thế Nào (Behind the Scenes)](#phần-5-javascript-hoạt-động-như-thế-nào)
6. [Phần 6: Cấu Trúc Dữ Liệu, Operators Hiện Đại & Strings](#phần-6-cấu-trúc-dữ-liệu-operators-hiện-đại--strings)
7. [Phần 7: Hàm Nâng Cao (A Closer Look at Functions)](#phần-7-hàm-nâng-cao)
8. [Phần 8: Mảng Nâng Cao (Working With Arrays)](#phần-8-mảng-nâng-cao)
9. [Phần 9: Numbers, Dates, Intl & Timers](#phần-9-numbers-dates-intl--timers)
10. [Phần 10: DOM Nâng Cao & Events](#phần-10-dom-nâng-cao--events)
11. [Phần 11: Lập Trình Hướng Đối Tượng (OOP)](#phần-11-lập-trình-hướng-đối-tượng-oop)
12. [Phần 12: Lập Trình Bất Đồng Bộ (Asynchronous JS)](#phần-12-lập-trình-bất-đồng-bộ)
13. [Phần 13: JavaScript Hiện Đại - Modules, Tooling & Functional](#phần-13-javascript-hiện-đại)

---

# Phần 1: Kiến Thức Cơ Bản JavaScript - Phần 1

## 1.1 JavaScript là gì?

JavaScript là ngôn ngữ lập trình **bậc cao (high-level)**, **hướng đối tượng (object-oriented)**, **đa mô hình (multi-paradigm)** được sử dụng chủ yếu để tạo các trang web tương tác.

**Vai trò của JavaScript trong phát triển web:**
- **HTML** = Nội dung (danh từ) — ví dụ: `<p>Hello</p>`
- **CSS** = Trình bày/giao diện (tính từ) — ví dụ: `p { color: red; }`
- **JavaScript** = Hành vi/tương tác (động từ) — ví dụ: hiệu ứng, xử lý sự kiện

## 1.1b Tại sao học JavaScript?

> 🌍 **JavaScript là ngôn ngữ phổ biến nhất thế giới** (theo khảo sát Stack Overflow). Gần như MỌI trang web đều sử dụng JavaScript.

**JavaScript có thể làm gì?**
- 🖥️ **Frontend:** Tạo giao diện web tương tác (React, Vue, Angular)
- ⚙️ **Backend:** Xây dựng server (Node.js, Express)
- 📱 **Mobile App:** Ứng dụng di động (React Native, Ionic)
- 🖥️ **Desktop App:** Ứng dụng desktop (Electron — VS Code được viết bằng JS!)
- 🎮 **Game:** Phát triển game trên web
- 🤖 **Machine Learning:** Mô hình AI trên trình duyệt (TensorFlow.js)

**Hình dung đơn giản:**

Hãy tưởng tượng xây một ngôi nhà:
- **HTML** = Bộ khung nhà (tường, cửa, mái) — cấu trúc
- **CSS** = Sơn nhà, trang trí nội thất — giao diện
- **JavaScript** = Hệ thống điện, nước, điều hòa — chức năng, tương tác

Không có HTML, nhà không có khung. Không có CSS, nhà xấu. Không có JavaScript, nhà không có điện — mọi thứ tĩnh lặng, không tương tác được!

## 1.2 Liên kết file JavaScript

Có 2 cách để thêm JavaScript vào trang HTML:

```html
<!-- Cách 1: Inline Script -->
<script>
  let js = "amazing";
  console.log(40 + 8 + 23 - 10);
</script>

<!-- Cách 2: External Script (KHUYÊN DÙNG) -->
<script src="script.js"></script>
```

> ⚠️ **Lưu ý:** Nên đặt thẻ `<script>` ở cuối `<body>` hoặc dùng thuộc tính `defer` để đảm bảo HTML được load trước.

## 1.3 Giá trị (Values) và Biến (Variables)

**Giá trị** là đơn vị dữ liệu nhỏ nhất trong JavaScript:

```javascript
console.log("Jonas");   // "Jonas" là một giá trị
console.log(23);        // 23 là một giá trị
```

**Biến** là hộp chứa dùng để lưu trữ giá trị. Hãy tưởng tượng biến giống như một **chiếc hộp có dán nhãn** — nhãn là tên biến, bên trong hộp là giá trị:

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  firstName   │    │     age      │    │   isAdmin    │
│ ┌──────────┐ │    │ ┌──────────┐ │    │ ┌──────────┐ │
│ │ "Jonas"  │ │    │ │    30    │ │    │ │   true   │ │
│ └──────────┘ │    │ └──────────┘ │    │ └──────────┘ │
└──────────────┘    └──────────────┘    └──────────────┘
    String              Number              Boolean
```


```javascript
let firstName = "Jonas";
console.log(firstName); // In ra: Jonas
```

**Quy tắc đặt tên biến:**
- ✅ Bắt đầu bằng chữ cái, `_` hoặc `$`
- ✅ Chỉ chứa chữ cái, số, `_` và `$`
- ❌ Không bắt đầu bằng số
- ❌ Không dùng từ khóa (reserved words) như `new`, `function`, `name`
- 📝 Dùng camelCase: `myFirstJob`, `currentYear`
- 📝 Biến hằng viết HOA: `const PI = 3.14159`

## 1.4 Kiểu Dữ Liệu (Data Types)

JavaScript có **7 kiểu dữ liệu nguyên thủy (primitive)**:

| Kiểu | Mô tả | Ví dụ |
|------|--------|-------|
| `Number` | Số (cả số nguyên và thập phân) | `23`, `3.14` |
| `String` | Chuỗi ký tự | `"Hello"`, `'World'` |
| `Boolean` | Giá trị logic | `true`, `false` |
| `Undefined` | Biến đã khai báo nhưng chưa gán giá trị | `let x;` |
| `Null` | Giá trị rỗng có chủ đích | `let y = null;` |
| `Symbol` (ES2015) | Giá trị duy nhất, không thể thay đổi | `Symbol('id')` |
| `BigInt` (ES2020) | Số nguyên rất lớn | `9007199254740991n` |

```javascript
let javascriptIsFun = true;
console.log(typeof javascriptIsFun); // "boolean"
console.log(typeof 23);             // "number"
console.log(typeof "Jonas");        // "string"

let year;
console.log(typeof year);           // "undefined"

// ⚠️ Bug nổi tiếng của JavaScript:
console.log(typeof null);           // "object" (đáng lẽ phải là "null")
```

> 💡 **JavaScript là Dynamic Typing:** Kiểu dữ liệu được xác định tự động bởi giá trị, KHÔNG phải bởi biến. Biến có thể thay đổi kiểu dữ liệu.

**So sánh với ngôn ngữ Static Typing (Java, C++):**
```
// Java (Static Typing) — phải khai báo kiểu
// int age = 30;        → age LUÔN là int, không đổi được
// age = "hello";       → ❌ LỖI BIÊN DỊCH!

// JavaScript (Dynamic Typing) — kiểu tự động
let age = 30;           // age là Number
age = "thirty";         // age giờ là String → ✅ OK!
```

> ⚠️ Dynamic typing giúp code nhanh hơn nhưng cũng dễ gây bug hơn. Đó là lý do TypeScript (phiên bản static typing của JS) ngày càng phổ biến.

## 1.5 let, const và var

```javascript
// LET - có thể thay đổi giá trị (mutable)
let age = 30;
age = 31; // ✅ OK

// CONST - không thể thay đổi giá trị (immutable)
const birthYear = 1991;
// birthYear = 1990; // ❌ TypeError!
// const job;         // ❌ Phải gán giá trị ngay khi khai báo!

// VAR - cách cũ (TRÁNH SỬ DỤNG)
var job = "programmer";
job = "teacher"; // ✅ OK nhưng không nên dùng var
```

**So sánh:**

| Đặc điểm | `let` | `const` | `var` |
|-----------|-------|---------|-------|
| Phạm vi (Scope) | Block | Block | Function |
| Thay đổi giá trị | ✅ Có | ❌ Không | ✅ Có |
| Hoisting | ❌ TDZ | ❌ TDZ | ✅ undefined |
| Nên dùng | Khi cần thay đổi | **MẶC ĐỊNH** | ❌ Tránh |

> 💡 **Best Practice:** Luôn dùng `const` làm mặc định. Chỉ dùng `let` khi biết chắc giá trị sẽ thay đổi. **KHÔNG BAO GIỜ** dùng `var`.

**Ví von dễ hiểu:**
- `const` = Khắc tên lên đá 🪨 — không thay đổi được
- `let` = Viết bằng bút chì ✏️ — có thể tẩy và viết lại
- `var` = Viết bằng bút mực cũ 🖊️ — tưởng xóa được nhưng hay bị lem (bug)

## 1.6 Toán Tử (Operators)

### Toán tử số học (Arithmetic)

```javascript
const now = 2037;
const ageJonas = now - 1991;  // 46
const ageSarah = now - 2018;  // 19

console.log(ageJonas * 2);    // 92 (nhân)
console.log(ageJonas / 10);   // 4.6 (chia)
console.log(2 ** 3);          // 8 (lũy thừa: 2^3)
console.log(ageJonas % 3);    // 1 (chia lấy dư)
```

### Toán tử nối chuỗi

```javascript
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); // "Jonas Schmedtmann"
```

### Toán tử gán (Assignment)

```javascript
let x = 10 + 5; // 15
x += 10;        // x = x + 10 = 25
x *= 4;         // x = x * 4 = 100
x++;            // x = x + 1 = 101
x--;            // x = x - 1 = 100
```

### Toán tử so sánh (Comparison)

```javascript
console.log(25 > 18);   // true
console.log(18 >= 18);  // true
console.log(25 < 18);   // false
```

### Thứ tự ưu tiên (Precedence)

```javascript
let x, y;
x = y = 25 - 10 - 5; // Phép trừ trước (trái→phải), gán sau (phải→trái)
// 25-10-5 = 10, rồi y=10, rồi x=10
console.log(x, y);    // 10, 10

const averageAge = (ageJonas + ageSarah) / 2; // Ngoặc ưu tiên cao nhất
```

## 1.7 Strings và Template Literals

```javascript
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// Cách cũ: nối chuỗi bằng +
const jonas = "I'm " + firstName + ", a " + (year - birthYear) +
              " year old " + job + "!";

// Cách mới: Template Literals (ES6) - KHUYÊN DÙNG
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// Kết quả: "I'm Jonas, a 46 year old teacher!"

// Template literals hỗ trợ xuống dòng:
console.log(`Dòng 1
Dòng 2
Dòng 3`);
```

> 💡 **Template Literals** dùng dấu backtick `` ` `` thay vì `"` hoặc `'`. Dùng `${biểu_thức}` để chèn biến hoặc biểu thức JavaScript.

## 1.8 Câu lệnh if/else

```javascript
const age = 15;

if (age >= 18) {
  console.log("Sarah có thể thi bằng lái 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah còn phải đợi ${yearsLeft} năm nữa :)`);
}
// Kết quả: "Sarah còn phải đợi 3 năm nữa :)"
```

> ⚠️ Biến khai báo bên trong `if` hoặc `else` KHÔNG truy cập được từ bên ngoài (block scope).

## 1.9 Chuyển Đổi Kiểu (Type Conversion) và Ép Kiểu (Type Coercion)

Đây là một trong những khái niệm **GÂY NHẦM LẪN NHẤT** cho người mới! Hãy phân biệt rõ:

- **Type Conversion (Explicit):** BẠN chủ động chuyển đổi kiểu bằng hàm `Number()`, `String()`, `Boolean()`
- **Type Coercion (Implicit):** JAVASCRIPT tự động chuyển đổi kiểu khi gặp toán tử

### Type Conversion (chủ động chuyển đổi)

```javascript
const inputYear = "1991";
console.log(Number(inputYear) + 18);  // 2009
console.log(String(23));              // "23"
console.log(Number("Jonas"));        // NaN (Not a Number)
```

### Type Coercion (JavaScript tự động chuyển đổi)

```javascript
// Toán tử + với string → chuyển thành string
console.log("I am " + 23 + " years old"); // "I am 23 years old"
console.log("23" + "10" + 3);  // "23103" (nối chuỗi)

// Toán tử -, *, / → chuyển thành number
console.log("23" - "10" - 3);  // 10
console.log("23" * "2");       // 46
console.log("23" / "2");       // 11.5
```

> ⚠️ **Bẫy thường gặp:**
> ```javascript
> let n = "1" + 1; // "11" (string)
> n = n - 1;       // 10 (number!) — vì phép - chuyển string → number
> ```

## 1.10 Giá trị Truthy và Falsy

**5 giá trị Falsy** (khi chuyển sang Boolean sẽ thành `false`):

| Giá trị | Kiểu |
|---------|------|
| `0` | Number |
| `""` (chuỗi rỗng) | String |
| `undefined` | Undefined |
| `null` | Null |
| `NaN` | Number |

Tất cả giá trị khác đều là **Truthy** (chuyển sang `true`).

> 🧠 **Mẹo nhớ 5 giá trị Falsy:** `0`, `""`, `undefined`, `null`, `NaN` — gồm: số 0, chuỗi rỗng, và 3 giá trị "trống/lỗi". Mọi thứ khác đều truthy!

**Những giá trị truthy BẤT NGỜ:**
- `"0"` → **truthy** (chuỗi KHÔNG rỗng, dù nội dung là "0")
- `"false"` → **truthy** (chuỗi KHÔNG rỗng)
- `[]` → **truthy** (mảng rỗng)
- `{}` → **truthy** (object rỗng)

```javascript
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas"));   // true
console.log(Boolean({}));        // true (object rỗng = truthy!)

// Ứng dụng trong if/else:
const money = 0;
if (money) {
  console.log("Đừng tiêu hết nhé!");
} else {
  console.log("Bạn nên đi kiếm việc!"); // ← Chạy vì money = 0 (falsy)
}
```

## 1.11 Toán tử So sánh: == vs ===

```javascript
const age = "18";

// === (Strict Equality) - KHÔNG chuyển đổi kiểu
console.log(age === 18); // false ("18" !== 18, khác kiểu)

// == (Loose Equality) - CÓ chuyển đổi kiểu
console.log(age == 18);  // true ("18" được chuyển thành 18)
```

> 💡 **Best Practice:** LUÔN sử dụng `===` (strict equality). Tránh `==` vì nó có thể gây ra bug khó phát hiện.

```javascript
// Toán tử khác:
console.log(18 !== 18);  // false (strict not equal)
console.log("18" != 18); // false (loose not equal) — TRÁNH DÙNG
```

## 1.12 Toán tử Logic (Logical Operators)

```javascript
const hasDriversLicense = true;  // A
const hasGoodVision = true;      // B
const isTired = false;           // C

console.log(hasDriversLicense && hasGoodVision); // true (AND)
console.log(hasDriversLicense || hasGoodVision); // true (OR)
console.log(!hasDriversLicense);                 // false (NOT)

// Kết hợp nhiều điều kiện:
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah có thể lái xe!");
} else {
  console.log("Ai đó khác nên lái...");
}
```

**Bảng chân lý:**

| A | B | A && B | A \|\| B | !A |
|---|---|--------|----------|----|
| true | true | true | true | false |
| true | false | false | true | false |
| false | true | false | true | true |
| false | false | false | false | true |

## 1.13 Câu lệnh switch

```javascript
const day = "friday";

switch (day) {
  case "monday":    // day === "monday"
    console.log("Lên kế hoạch khóa học");
    console.log("Đi coding meetup");
    break;          // ⚠️ BẮT BUỘC phải có break!
  case "tuesday":
    console.log("Chuẩn bị video lý thuyết");
    break;
  case "wednesday": // Nhiều case cùng hành động
  case "thursday":
    console.log("Viết code ví dụ");
    break;
  case "friday":
    console.log("Quay video");
    break;
  case "saturday":
  case "sunday":
    console.log("Tận hưởng cuối tuần :D");
    break;
  default:          // Tương tự else
    console.log("Không phải ngày hợp lệ!");
}
```

## 1.14 Biểu thức (Expressions) vs Câu lệnh (Statements)

```javascript
// Expressions - tạo ra giá trị
3 + 4           // → 7
1991            // → 1991
true && false   // → false

// Statements - thực hiện hành động, KHÔNG tạo ra giá trị
if (23 > 10) {
  const str = "23 is bigger";
}

// Template literal chỉ chấp nhận EXPRESSIONS:
console.log(`I'm ${2037 - 1991} years old`); // ✅
// console.log(`I'm ${if (true) {23}}`);     // ❌ Lỗi!
```

## 1.15 Toán tử Ba Ngôi (Ternary Operator)

```javascript
const age = 23;

// Cú pháp: điều_kiện ? giá_trị_đúng : giá_trị_sai
const drink = age >= 18 ? "rượu 🍷" : "nước 💧";
console.log(drink); // "rượu 🍷"

// Dùng trong template literal:
console.log(`Tôi thích uống ${age >= 18 ? "rượu 🍷" : "nước 💧"}`);

// Tương đương if/else nhưng ngắn gọn hơn:
let drink2;
if (age >= 18) {
  drink2 = "rượu 🍷";
} else {
  drink2 = "nước 💧";
}
```

---

# Phần 2: Kiến Thức Cơ Bản JavaScript - Phần 2

## 2.1 Strict Mode

```javascript
"use strict"; // Đặt ở dòng đầu tiên của file

// Strict mode giúp:
// 1. Bắt lỗi "thầm lặng" (silent errors) → báo lỗi
// 2. Ngăn chặn một số hành vi nguy hiểm
// 3. Dự trữ một số từ khóa cho tương lai

let hasDriversLicense = false;
const passTest = true;

// Nếu KHÔNG có strict mode, lỗi typo sẽ im lặng:
if (passTest) hasDriversLicense = true;  // ✅
// if (passTest) hasDriverLicense = true; // ❌ Strict mode báo lỗi!
```

> 💡 **Best Practice:** LUÔN LUÔN bật `'use strict';` ở đầu mỗi file JavaScript.

## 2.2 Hàm (Functions)

**Hàm là gì?** Hàm giống như một **chiếc máy xay sinh tố** 🍹:
1. Bạn bỏ nguyên liệu vào (= **parameters/arguments**)
2. Máy xử lý bên trong (= **function body**)
3. Bạn nhận kết quả ra (= **return value**)

```
         ┌─────────────────────┐
Input → │   FUNCTION BODY    │ → Output (return)
(args)   │   (xử lý logic)    │
         └─────────────────────┘
```

**Tại sao cần hàm?**
- ♻️ **Tái sử dụng code:** Viết một lần, gọi nhiều lần
- 📦 **Tổ chức code:** Chia nhỏ bài toán lớn thành các phần nhỏ
- 🐛 **Dễ debug:** Sửa một chỗ, áp dụng mọi nơi

**3 cách viết hàm trong JavaScript:**

| Cách viết | Hoisting | `this` riêng | Khi nào dùng |
|-----------|----------|-------------|-------------|
| Function Declaration | ✅ Có | ✅ Có | Hàm chính, cần hoisting |
| Function Expression | ❌ Không | ✅ Có | Gán vào biến, truyền làm argument |
| Arrow Function | ❌ Không | ❌ Không | Callback ngắn gọn, trong method |

### Function Declaration

```javascript
// Khai báo hàm
function calcAge(birthYear) {
  return 2037 - birthYear;
}

const age = calcAge(1991); // Gọi hàm, truyền argument
console.log(age);          // 46

// ✅ Có thể gọi TRƯỚC khi khai báo (hoisting)
```

### Function Expression

```javascript
// Gán hàm vào biến
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
// ❌ KHÔNG thể gọi trước khi khai báo
```

### Arrow Function (ES6)

```javascript
// Dạng ngắn gọn (1 tham số, 1 dòng): không cần (), {}, return
const calcAge3 = birthYear => 2037 - birthYear;

// Nhiều tham số hoặc nhiều dòng: cần (), {}, return
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} nghỉ hưu sau ${retirement} năm`;
};
```

> ⚠️ **Arrow function KHÔNG có `this` riêng!** Điều này rất quan trọng khi làm việc với objects (sẽ học ở phần sau).

### Hàm gọi hàm

```javascript
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `Nước ép với ${applePieces} miếng táo và ${orangePieces} miếng cam.`;
}

console.log(fruitProcessor(2, 3));
// "Nước ép với 8 miếng táo và 12 miếng cam."
```

## 2.3 Mảng (Arrays)

**Mảng là gì?** Mảng giống như một **đoàn tàu** 🚂 — mỗi toa tàu (phần tử) có một số thứ tự (index), bắt đầu từ **0** (không phải 1!).

```
Index:     0          1          2          3
        ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
  🚂 ← │"Táo" │──│"Cam" │──│"Lê"  │──│"Nho" │
        └──────┘  └──────┘  └──────┘  └──────┘
         [0]       [1]       [2]       [3]
                                    length = 4
```

**Khi nào dùng mảng?** Khi cần lưu trữ **danh sách** các giá trị cùng loại (danh sách bạn bè, điểm số, sản phẩm...).

```javascript
// Tạo mảng
const friends = ["Michael", "Steven", "Peter"];
const years = new Array(1991, 1984, 2008);

// Truy cập phần tử (bắt đầu từ 0)
console.log(friends[0]);              // "Michael"
console.log(friends[friends.length - 1]); // "Peter" (phần tử cuối)

// Thay đổi phần tử (const chỉ bảo vệ biến, không bảo vệ nội dung mảng)
friends[2] = "Jay"; // ✅ OK
// friends = ["Bob"]; // ❌ Không thể gán lại toàn bộ mảng!

// Mảng có thể chứa nhiều kiểu dữ liệu:
const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
```

### Các phương thức mảng cơ bản

```javascript
const friends = ["Michael", "Steven", "Peter"];

// THÊM phần tử
friends.push("Jay");        // Thêm cuối → ["Michael","Steven","Peter","Jay"]
friends.unshift("John");    // Thêm đầu → ["John","Michael","Steven","Peter","Jay"]

// XÓA phần tử
friends.pop();              // Xóa cuối, trả về phần tử bị xóa
friends.shift();            // Xóa đầu

// TÌM KIẾM
console.log(friends.indexOf("Steven"));   // 1 (vị trí)
console.log(friends.indexOf("Bob"));      // -1 (không tìm thấy)
console.log(friends.includes("Steven"));  // true (có tồn tại?)
```

## 2.4 Objects

**Object là gì?** Nếu mảng lưu dữ liệu theo **thứ tự** (index), thì object lưu dữ liệu theo **tên** (key-value pairs).

Hãy tưởng tượng object giống như một **thẻ căn cước** 🪪:

```
┌────────────────────────────────┐
│         OBJECT: jonas          │
│ ┌────────────┬───────────────┐ │
│ │ firstName  │ "Jonas"       │ │
│ ├────────────┼───────────────┤ │
│ │ lastName   │ "Schmedtmann" │ │
│ ├────────────┼───────────────┤ │
│ │ age        │ 46            │ │
│ ├────────────┼───────────────┤ │
│ │ job        │ "teacher"     │ │
│ └────────────┴───────────────┘ │
│     (key)        (value)       │
└────────────────────────────────┘
```

**Mảng vs Object — Khi nào dùng?**
| | Mảng | Object |
|---|---|---|
| Dùng khi | Danh sách có thứ tự | Dữ liệu có tên/nhãn |
| Truy cập bằng | Index (số) | Key (tên) |
| Ví dụ | `["Táo", "Cam", "Lê"]` | `{ name: "Jonas", age: 46 }` |

```javascript
// Object Literal
const jonas = {
  firstName: "Jonas",       // property (thuộc tính)
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
```

### Dot vs Bracket Notation

```javascript
// Dot notation - dùng khi biết tên property
console.log(jonas.lastName);      // "Schmedtmann"

// Bracket notation - dùng khi tên property là biến hoặc biểu thức
console.log(jonas["lastName"]);   // "Schmedtmann"

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // "Jonas"
console.log(jonas["last" + nameKey]);  // "Schmedtmann"

// Thêm property mới
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
```

### Object Methods (Phương thức của Object)

```javascript
const jonas = {
  firstName: "Jonas",
  birthYear: 1991,
  hasDriversLicense: true,

  // Phương thức = hàm trong object
  calcAge: function () {
    this.age = 2037 - this.birthYear; // this = object hiện tại
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} là giáo viên ${this.calcAge()} tuổi, và ${
      this.hasDriversLicense ? "có" : "không có"
    } bằng lái xe.`;
  },
};

console.log(jonas.calcAge());    // 46
console.log(jonas.age);          // 46 (đã được lưu bởi calcAge)
console.log(jonas.getSummary()); // "Jonas là giáo viên 46 tuổi, và có bằng lái xe."
```

> 💡 **`this`** trong method trỏ đến object đang gọi method đó.

## 2.5 Vòng lặp (Loops)

**Vòng lặp là gì?** Vòng lặp cho phép bạn **lặp lại** một đoạn code nhiều lần mà không cần viết lại.

**Ví von:** Thay vì viết 100 dòng `console.log("Xin chào")`, bạn chỉ cần:
```javascript
for (let i = 0; i < 100; i++) console.log("Xin chào");
```

**Các loại vòng lặp trong JavaScript:**

| Loại | Khi nào dùng | Ví dụ |
|------|-------------|-------|
| `for` | Biết trước số lần lặp | Lặp qua mảng |
| `for...of` | Lặp qua mảng/string (ES6) | `for (const item of arr)` |
| `for...in` | Lặp qua keys của object | `for (const key in obj)` |
| `while` | Không biết trước số lần | Đợi user input |
| `do...while` | Luôn chạy ít nhất 1 lần | Menu loop |
| `forEach` | Lặp mảng với callback | `arr.forEach(fn)` |

### Vòng lặp for

```javascript
// Cú pháp: for (khởi_tạo; điều_kiện; cập_nhật)
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Nâng tạ lần ${rep} 🏋️`);
}

// Lặp qua mảng
const jonas = ["Jonas", "Schmedtmann", 46, "teacher", ["Michael", "Peter"]];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  types.push(typeof jonas[i]); // Tạo mảng mới từ vòng lặp
}
```

### continue và break

```javascript
// continue: bỏ qua iteration hiện tại, chuyển sang iteration tiếp
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue; // Chỉ in string
  console.log(jonas[i]);
}

// break: thoát hoàn toàn khỏi vòng lặp
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break; // Dừng khi gặp number
  console.log(jonas[i]);
}
```

### Lặp ngược và lặp lồng nhau

```javascript
// Lặp ngược
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// Lặp lồng nhau
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Bài tập ${exercise} ---`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Bài ${exercise}: Lần lặp ${rep} 🏋️`);
  }
}
```

### Vòng lặp while

```javascript
// Dùng khi KHÔNG biết trước số lần lặp
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`Bạn tung được ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
console.log("Vòng lặp kết thúc!");
```

> 💡 **Khi nào dùng `for` vs `while`?**
> - `for`: Khi biết trước số lần lặp
> - `while`: Khi điều kiện dừng phụ thuộc vào kết quả trong quá trình lặp


---

# Phần 3: Kỹ Năng Lập Trình Viên

## 3.1 Tư duy giải quyết vấn đề

Khi gặp một bài toán lập trình, hãy tuân theo quy trình **4 bước**:

1. **Hiểu rõ vấn đề:** Đọc kỹ đề bài, xác định input và output
2. **Chia nhỏ thành bài toán con:** Tách vấn đề lớn thành từng bước nhỏ
3. **Nghiên cứu nếu cần:** Google, MDN, StackOverflow
4. **Viết pseudo-code trước, rồi code thật**

```javascript
// VÍ DỤ: Tính biên độ nhiệt từ mảng, bỏ qua lỗi sensor
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
console.log(calcTempAmplitude(temperatures)); // 23
```

## 3.2 Debugging (Gỡ lỗi)

**Quy trình A-B-C:**
1. **A - Identify:** Nhận ra có bug
2. **B - Find:** Tìm vị trí bug (dùng `console.log`, `console.table`, `debugger`)
3. **C - Fix:** Sửa code và kiểm tra lại

```javascript
// Công cụ hữu ích:
console.log(myVariable);     // In giá trị
console.table(myObject);     // Hiển thị dạng bảng
console.warn("Cảnh báo!");   // Cảnh báo màu vàng
console.error("Lỗi!");       // Lỗi màu đỏ
debugger;                     // Dừng code tại đây (DevTools)
```

> 💡 **Chrome DevTools:** F12 → Tab Sources → Click số dòng để đặt breakpoint

---

# Phần 4: Thao Tác DOM & Các Dự Án

## 4.1 DOM là gì?

**DOM (Document Object Model)** là biểu diễn có cấu trúc của tài liệu HTML dưới dạng **cây (tree)**. JavaScript dùng DOM để thay đổi nội dung, style và cấu trúc trang web.

**Hình dung:** DOM giống như **cây gia phả** của trang web — mỗi thẻ HTML là một "thành viên" (node) trong cây:

```
                    document
                       │
                      html
                    ┌───┴───┐
                  head     body
                   │      ┌──┴──┐
                 title  header  main
                          │    ┌─┴─┐
                         h1   p   img
```

> DOM **KHÔNG** phải là một phần của JavaScript. DOM là **Web API** do trình duyệt cung cấp.

**Các loại DOM Node:**
- **Document:** Gốc của cây DOM (`document`)
- **Element:** Thẻ HTML (`<p>`, `<div>`, `<h1>`)
- **Text:** Nội dung văn bản bên trong thẻ
- **Attribute:** Thuộc tính của thẻ (`class`, `id`, `src`)
- **Comment:** Ghi chú HTML (`<!-- comment -->`)

## 4.2 Chọn và thay đổi phần tử

```javascript
// CHỌN PHẦN TỬ
document.querySelector(".message");         // 1 phần tử đầu tiên
document.querySelectorAll(".btn");          // TẤT CẢ → NodeList
document.getElementById("score--0");        // Theo ID
document.getElementsByClassName("dice");    // Theo class → HTMLCollection

// ĐỌC NỘI DUNG
document.querySelector(".message").textContent;  // Lấy text
document.querySelector(".guess").value;          // Lấy giá trị input

// THAY ĐỔI NỘI DUNG
document.querySelector(".message").textContent = "Đoán đúng! 🎉";
document.querySelector(".guess").value = 23;

// THAY ĐỔI STYLE
document.querySelector("body").style.backgroundColor = "#60b347";
document.querySelector(".number").style.width = "30rem";
```

## 4.3 Xử lý sự kiện (Event Handling)

**Sự kiện là gì?** Sự kiện là bất kỳ hành động nào xảy ra trên trang web — click chuột, nhấn phím, scroll, di chuột...

**Cách hoạt động:**
1. Bạn chọn element cần lắng nghe
2. Bạn chỉ định loại sự kiện (`click`, `keydown`, `submit`...)
3. Bạn viết hàm xử lý (callback function) — sẽ chạy KHI sự kiện xảy ra

**Các sự kiện thường dùng:**

| Sự kiện | Mô tả | Ví dụ |
|---------|-------|-------|
| `click` | Click chuột | Nhấn nút |
| `dblclick` | Double click | Mở file |
| `mouseover`/`mouseout` | Di/rời chuột | Hiệu ứng hover |
| `keydown`/`keyup` | Nhấn/nhả phím | Phím tắt |
| `submit` | Gửi form | Đăng nhập |
| `input` | Gõ trong input | Tìm kiếm real-time |
| `scroll` | Cuộn trang | Sticky header |
| `load` | Trang load xong | Khởi tạo app |

```javascript
// Click event
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Chưa nhập số!";
  }
});

// Keyboard event
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
```

## 4.4 Thao tác với Classes

```javascript
element.classList.add("hidden", "active");    // Thêm class
element.classList.remove("hidden");           // Xóa class
element.classList.toggle("hidden");           // Toggle
element.classList.contains("hidden");         // Kiểm tra (true/false)
```

> ⚠️ **KHÔNG** dùng `element.className = "hidden"` vì sẽ GHI ĐÈ toàn bộ class cũ.

---

# Phần 5: JavaScript Hoạt Động Như Thế Nào

## 5.1 Execution Context & Call Stack

Mỗi khi JavaScript chạy, nó tạo **Execution Context**:
- **Global EC:** Khi file JS bắt đầu chạy
- **Function EC:** Mỗi khi một hàm được gọi

Mỗi EC chứa: **Variable Environment**, **Scope Chain**, **`this` keyword**

**Call Stack** = ngăn xếp quản lý thứ tự thực thi EC.

## 5.2 Scope & Scope Chain

| Loại Scope | Mô tả | Khai báo bằng |
|------------|--------|---------------|
| Global | Truy cập mọi nơi | Biến ngoài mọi hàm/block |
| Function | Chỉ trong hàm | `var`, `let`, `const` |
| Block | Chỉ trong `{}` | `let`, `const` (⚠️ `var` KHÔNG bị block scope!) |

```javascript
const firstName = "Jonas"; // Global scope

function calcAge(birthYear) {
  const age = 2037 - birthYear; // Function scope

  function printAge() {
    let output = `${firstName}, bạn ${age} tuổi`; // Truy cập biến ngoài ✅

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Millenial, ${firstName}`; // Block scope
      var millenial = true; // var = function scope!
    }
    // console.log(str);     // ❌ ReferenceError
    console.log(millenial);  // ✅ OK (var không bị block scope)
  }
  printAge();
}
```

> 💡 **Scope Chain:** Hàm con truy cập biến hàm cha, nhưng KHÔNG ngược lại.

**Ví von:** Scope Chain giống như **kính một chiều** 🪟:
- Từ phòng bên trong (hàm con) → nhìn thấy phòng bên ngoài (hàm cha) ✅
- Từ phòng bên ngoài (hàm cha) → KHÔNG nhìn thấy phòng bên trong ❌

```
┌──────────────────────────────────────────┐
│ GLOBAL SCOPE                             │
│   firstName = "Jonas"                    │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │ calcAge SCOPE                    │   │
│   │   age = 46                       │   │
│   │   ↑ Truy cập firstName ✅        │   │
│   │                                  │   │
│   │   ┌──────────────────────────┐   │   │
│   │   │ printAge SCOPE           │   │   │
│   │   │   output = "..."        │   │   │
│   │   │   ↑ Truy cập age ✅      │   │   │
│   │   │   ↑ Truy cập firstName ✅│   │   │
│   │   └──────────────────────────┘   │   │
│   └──────────────────────────────────┘   │
│   ↓ KHÔNG truy cập age ❌                │
└──────────────────────────────────────────┘
```

## 5.3 Hoisting & Temporal Dead Zone (TDZ)

**Hoisting là gì?** Hãy tưởng tượng JavaScript đọc code 2 lần:
- **Lần 1 (Creation Phase):** "Quét" toàn bộ code, ghi nhận các khai báo biến/hàm
- **Lần 2 (Execution Phase):** Chạy code từ trên xuống

Kết quả: Một số khai báo có thể được "nâng lên" (hoisted) lên đầu scope trước khi code thực thi.

**TDZ (Temporal Dead Zone)** là vùng code TRƯỚC vị trí khai báo `let`/`const`. Trong vùng này, biến tồn tại nhưng KHÔNG thể truy cập.

```
// ────── TDZ cho biến job ──────
console.log(job); // ❌ ReferenceError!
// ────── HẾT TDZ ──────
let job = "teacher"; // Từ đây trở đi mới dùng được
```

> 🤔 **Tại sao TDZ tồn tại?** Để bắt lỗi sớm! Nếu bạn vô tình dùng biến trước khi khai báo, JavaScript sẽ báo lỗi ngay thay vì trả về `undefined` khó debug.

| Khai báo | Hoisting | Giá trị trước khi khai báo |
|----------|----------|---------------------------|
| `function declaration` | ✅ | Giá trị thực của hàm |
| `var` | ✅ | `undefined` |
| `let`, `const` | ❌ TDZ | `ReferenceError` |

```javascript
console.log(me);    // undefined (var hoisted)
// console.log(job); // ❌ ReferenceError (let trong TDZ)

var me = "Jonas";
let job = "teacher";

console.log(addDecl(2, 3)); // 5 ✅ (function declaration hoisted)

function addDecl(a, b) { return a + b; }
```

## 5.4 Từ khóa `this`

**`this` là gì?** `this` là một biến đặc biệt được JavaScript tạo tự động trong mỗi execution context. Giá trị của `this` phụ thuộc vào **CÁCH** hàm được gọi, KHÔNG phải nơi hàm được viết.

**Ví von:** Từ "tôi" trong tiếng Việt thay đổi ý nghĩa tùy thuộc vào AI nói — `this` cũng tương tự, nó thay đổi tùy thuộc vào cách hàm được gọi.

| Ngữ cảnh | `this` trỏ đến |
|-----------|---------------|
| Global | `window` / `undefined` (strict) |
| Hàm thường | `undefined` (strict) |
| Arrow function | `this` của scope cha |
| Method | Object gọi method |
| Event listener | Element nhận sự kiện |

```javascript
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year); // this = jonas → 46

    // Arrow function kế thừa this từ parent
    const isMillenial = () => {
      console.log(this.year >= 1981); // this = jonas ✅
    };
    isMillenial();
  },

  // ⚠️ KHÔNG dùng arrow làm method!
  greet: () => {
    console.log(`Hey ${this.firstName}`); // this = window → undefined!
  },
};
```

## 5.5 Primitives vs Objects (Value Types vs Reference Types)

**Đây là một trong những khái niệm QUAN TRỌNG NHẤT và GÂY NHẦM LẪN NHẤT!**

Hãy tưởng tượng:
- **Primitive** (Number, String, Boolean...) giống như **ghi chú trên giấy** 📝 — khi bạn photocopy, bạn có BẢN SAO HOÀN TOÀN ĐỘC LẬP. Sửa bản photo không ảnh hưởng bản gốc.
- **Object** (Object, Array, Function) giống như **địa chỉ nhà** 🏠 — khi bạn chia sẻ địa chỉ, mọi người đều đến CÙNG MỘT NHÀ. Ai sửa nhà đều ảnh hưởng tất cả!

```
PRIMITIVES (Stack)           OBJECTS (Heap)
┌─────────┬───────┐          ┌─────────┬─────────┐
│  age    │  30   │          │   me    │ →───┐   │
├─────────┼───────┤          ├─────────┤     │   │
│ oldAge  │  30   │ (copy)   │ friend  │ →───┤   │
└─────────┴───────┘          └─────────┘     │   │
 Mỗi biến có giá trị         Cả hai trỏ đến │   │
 riêng, độc lập               CÙNG object   ▼   │
                             ┌──────────────────┐│
                             │ { name: "Jonas", ││
                             │   age: 30 }      ││
                             └──────────────────┘│
```

```javascript
// PRIMITIVES: copy GIÁ TRỊ
let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge); // 30 (không bị ảnh hưởng)

// OBJECTS: copy THAM CHIẾU
const me = { name: "Jonas", age: 30 };
const friend = me;
friend.age = 27;
console.log(me.age); // 27 ← BỊ THAY ĐỔI!

// Shallow copy
const jessicaCopy = { ...jessica };

// Deep copy (ES2024)
const jessicaClone = structuredClone(jessica);
```

---

# Phần 6: Cấu Trúc Dữ Liệu, Operators Hiện Đại & Strings

## 6.1 Destructuring Arrays

**Destructuring là gì?** Destructuring = "mở hộp" 📦 — trích xuất giá trị từ mảng/object và gán vào các biến riêng lẻ trong MỘT dòng code.

**Không có destructuring (cách cũ):**
```javascript
const arr = ["Italian", "Pizzeria", "Vegetarian"];
const first = arr[0];   // Phải lấy từng phần tử
const second = arr[1];  // Rất dài dòng!
```

**Có destructuring (cách mới):**
```javascript
const [first, second] = ["Italian", "Pizzeria", "Vegetarian"];
// first = "Italian", second = "Pizzeria"

const [a, , c] = ["Italian", "Pizzeria", "Vegetarian"]; // Bỏ qua phần tử
// a = "Italian", c = "Vegetarian"

// Hoán đổi giá trị
let [main, secondary] = ["Pizza", "Pasta"];
[main, secondary] = [secondary, main];

// Lồng nhau + giá trị mặc định
const [i, , [j, k]] = [2, 4, [5, 6]]; // i=2, j=5, k=6
const [p = 1, q = 1, r = 1] = [8, 9]; // p=8, q=9, r=1
```

## 6.2 Destructuring Objects

```javascript
const { name, openingHours } = restaurant;   // Tên biến = tên property
const { name: restName } = restaurant;       // Đổi tên biến
const { menu = [] } = restaurant;            // Giá trị mặc định
const { fri: { open, close } } = openingHours; // Lồng nhau
```

## 6.3 Spread Operator (...) — mở rộng

**Spread** giống như **đổ hết đồ trong hộp ra** 📦➡️📤:
- Bạn có một hộp (mảng/object)
- Spread `...` đổ tất cả phần tử ra ngoài thành từng cái riêng lẻ

```javascript
const newArr = [1, 2, ...arr];           // Mở rộng mảng
const menuCopy = [...restaurant.mainMenu]; // Copy mảng
const letters = [..."Jonas"];             // ["J","o","n","a","s"]
const newObj = { ...restaurant, founder: "Giuseppe" }; // Copy object
restaurant.orderPasta(...ingredients);     // Truyền arguments
```

## 6.4 Rest Pattern (...) — thu gọn (ngược Spread)

**Rest** giống như **gom đồ vào hộp** 📤➡️📦 — ngược lại với Spread!
- Bạn có nhiều phần tử rời rạc
- Rest `...` gom tất cả còn lại vào MỘT mảng

```javascript
const [a, b, ...others] = [1, 2, 3, 4, 5]; // others = [3, 4, 5]
const { sat, ...weekdays } = openingHours;   // Thu gọn object

const add = function (...numbers) {  // Rest parameters
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};
```

> 💡 Spread ở **phải** dấu `=` (mở rộng). Rest ở **trái** dấu `=` (thu gọn).

## 6.5 Short Circuiting (Đoản mạch)

**Short circuiting là gì?** Toán tử `||` và `&&` không chỉ trả về `true`/`false` — chúng có thể trả về BẤT KỲ giá trị nào!

**Quy tắc dễ nhớ:**
- `||` (OR): Tìm và trả về **truthy đầu tiên** — giống "đi tìm người giúp đỡ, ai có mặt trước thì nhờ người đó"
- `&&` (AND): Tìm và trả về **falsy đầu tiên** — giống "kiểm tra hàng loạt, dừng lại ngay khi thấy lỗi"
- Nếu không tìm thấy, trả về giá trị **CUỐI CÙNG**

```javascript
// || trả về truthy ĐẦU TIÊN
console.log("" || "Jonas");     // "Jonas"
const guests = numGuests || 10; // Gán mặc định

// && trả về falsy ĐẦU TIÊN
console.log(0 && "Jonas");     // 0
restaurant.orderPizza && restaurant.orderPizza("mushrooms");
```

## 6.6 Nullish Coalescing (??) — ES2020

```javascript
// ?? chỉ coi null và undefined là "nullish"
restaurant.numGuests = 0;
const guests = restaurant.numGuests ?? 10; // 0 ✅ (không phải nullish)
```

## 6.7 Optional Chaining (?.) — ES2020

```javascript
console.log(restaurant.openingHours.mon?.open); // undefined (không lỗi)
console.log(restaurant.order?.(0, 1) ?? "Không tồn tại");
console.log(users[0]?.name ?? "Mảng rỗng");
```

## 6.8 Sets & Maps

```javascript
// SET — tập hợp giá trị DUY NHẤT
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
const unique = [...new Set(staff)]; // ["Waiter", "Chef", "Manager"]

// MAP — key-value, key là BẤT KỲ kiểu nào
const rest = new Map();
rest.set("name", "Classico");
rest.set(true, "Mở cửa");
console.log(rest.get("name")); // "Classico"

// Tạo Map từ mảng
const question = new Map([["q", "Tốt nhất?"], [1, "C"], [2, "JS"]]);
// Object → Map
const hoursMap = new Map(Object.entries(openingHours));
```

## 6.9 Strings

```javascript
// Cơ bản
"TAP Air Portugal".indexOf("r");    // 6
"TAP Air Portugal".slice(4, 7);     // "Air"
"TAP Air Portugal".slice(-2);       // "al"

// Biến đổi
"jOnAS".toLowerCase();              // "jonas"
"  hello \n".trim();                // "hello"
"288,97£".replace("£", "$");       // "288,97$"
"door 1. door 2!".replaceAll("door", "gate");

// Kiểm tra
"Airbus A320neo".includes("A320");  // true
"Airbus A320neo".startsWith("Air"); // true

// Split & Join
"Jonas Schmedtmann".split(" ");     // ["Jonas", "Schmedtmann"]
["Mr.", "Jonas"].join(" ");         // "Mr. Jonas"

// Padding & Repeat
"23".padStart(4, "0");              // "0023"
"Bad weather... ".repeat(3);
```



---

# Phần 7: Hàm Nâng Cao

## 7.1 Default Parameters (Tham số mặc định)

```javascript
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // Có thể tham chiếu tham số trước đó!
) {
  const booking = { flightNum, numPassengers, price };
  console.log(booking);
};

createBooking("LH123");           // { flightNum: "LH123", numPassengers: 1, price: 199 }
createBooking("LH123", 2, 800);   // { flightNum: "LH123", numPassengers: 2, price: 800 }
createBooking("LH123", undefined, 1000); // Dùng undefined để bỏ qua tham số
```

## 7.2 Pass by Value vs Pass by Reference

```javascript
const flight = "LH234";
const jonas = { name: "Jonas", passport: 24739479284 };

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";       // Không ảnh hưởng biến flight bên ngoài
  passenger.name = "Mr. " + passenger.name; // ⚠️ THAY ĐỔI object gốc!
};

checkIn(flight, jonas);
console.log(flight);       // "LH234" (không đổi - primitive)
console.log(jonas.name);   // "Mr. Jonas" (bị đổi - object reference!)
```

> ⚠️ JavaScript CHỈ có **pass by value**. Với objects, giá trị truyền vào là **tham chiếu** (memory address), nên hàm có thể thay đổi nội dung object gốc.

## 7.3 First-Class vs Higher-Order Functions

- **First-class functions:** Hàm được coi như GIÁ TRỊ — có thể gán vào biến, truyền vào hàm khác, return từ hàm
- **Higher-order function:** Hàm NHẬN hàm khác làm tham số, hoặc TRẢ VỀ hàm

```javascript
// Callback functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Kết quả: ${fn(str)}`);
  console.log(`Hàm: ${fn.name}`);
};

transformer("JavaScript is great!", upperFirstWord);
// transformed by: upperFirstWord
transformer("JavaScript is great!", oneWord);
// transformed by: oneWord
```

## 7.4 Functions Returning Functions (Closures Preview)

```javascript
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");  // "Hey Jonas"
greeterHey("Steven"); // "Hey Steven"
greet("Hello")("Jonas"); // "Hello Jonas"

// Arrow version
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
```

## 7.5 call, apply, bind

Dùng để chỉ định `this` cho hàm:

```javascript
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = { airline: "Eurowings", iataCode: "EW", bookings: [] };
const book = lufthansa.book;

// CALL — gọi hàm với this = argument đầu tiên
book.call(eurowings, 23, "Sarah");
book.call(lufthansa, 239, "Mary");

// APPLY — giống call nhưng nhận mảng arguments (ít dùng)
book.apply(eurowings, [23, "Steven"]);

// BIND — trả về HÀM MỚI với this đã được gán cố định
const bookEW = book.bind(eurowings);
bookEW(23, "Steven");

// Partial Application (gán sẵn một số arguments)
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas");   // Flight EW23
bookEW23("Martha");  // Flight EW23

// Bind với Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
// ⚠️ Trong event listener, this = element → cần bind
document.querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
```

## 7.6 IIFE (Immediately Invoked Function Expressions)

```javascript
// Hàm được gọi ngay khi định nghĩa, chỉ chạy MỘT LẦN
(function () {
  console.log("Chỉ chạy một lần!");
  const isPrivate = 23; // Không truy cập được từ bên ngoài
})();

(() => console.log("Arrow IIFE!"))();

// Ngày nay ít dùng IIFE, thay bằng block + let/const:
{
  const isPrivate = 23;
}
```

## 7.7 Closures — Khái niệm khó nhất trong JavaScript!

**Closure là gì?** Closure = hàm "nhớ" được biến của scope cha, ngay cả khi scope cha đã kết thúc.

**Ví von dễ hiểu:** Hãy tưởng tượng bạn đi học xa nhà 🏠. Dù đã rời khỏi nhà, bạn vẫn "nhớ" mọi thứ trong nhà (closure). Bạn có thể kể cho bạn bè về phòng ngủ, nhà bếp... mặc dù bạn không còn ở đó nữa.

Trong JavaScript: Khi một hàm được tạo bên trong hàm khác, hàm con sẽ "nhớ" toàn bộ biến của hàm cha, ngay cả sau khi hàm cha đã chạy xong và bị xóa khỏi call stack.

```
secureBooking() chạy xong → bị xóa khỏi Call Stack
                                    │
    Nhưng biến passengerCount    ←──┘ vẫn tồn tại trong bộ nhớ!
    vì hàm booker (closure) đang giữ tham chiếu đến nó
```

```javascript
const secureBooking = function () {
  let passengerCount = 0; // Biến cục bộ

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker(); // 1 passengers — vẫn truy cập được passengerCount!
booker(); // 2 passengers
booker(); // 3 passengers
```

> 💡 **Closure có độ ưu tiên cao hơn scope chain.** Hàm luôn giữ tham chiếu đến biến của scope nơi nó được TẠO RA, không phải nơi nó được GỌI.

```javascript
// Ví dụ thực tế: setTimeout
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`Boarding ${n} passengers`);
    console.log(`${perGroup} passengers per group`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);
// "Will start boarding in 3 seconds" (ngay lập tức)
// (3 giây sau) "Boarding 180 passengers" — closure giữ n và perGroup!
```

---

# Phần 8: Mảng Nâng Cao

## 8.1 Các phương thức mảng cơ bản

```javascript
let arr = ["a", "b", "c", "d", "e"];

// SLICE — trích xuất, KHÔNG thay đổi mảng gốc
arr.slice(2);        // ["c", "d", "e"]
arr.slice(2, 4);     // ["c", "d"]
arr.slice(-2);       // ["d", "e"]
[...arr];            // Copy nhanh

// SPLICE — trích xuất và XÓA khỏi mảng gốc
arr.splice(-1);      // Xóa phần tử cuối
arr.splice(1, 2);    // Xóa 2 phần tử từ vị trí 1

// REVERSE — đảo ngược (THAY ĐỔI mảng gốc)
const arr2 = ["j", "i", "h", "g", "f"];
arr2.reverse();      // ["f", "g", "h", "i", "j"]

// CONCAT — gộp mảng
const letters = arr.concat(arr2);
// hoặc: [...arr, ...arr2]

// JOIN — gộp thành chuỗi
letters.join(" - "); // "a - b - c - ..."

// AT — truy cập (ES2022)
const arr3 = [23, 11, 64];
arr3.at(0);    // 23
arr3.at(-1);   // 64 (phần tử cuối — tiện hơn arr3[arr3.length-1])
```

## 8.2 forEach

```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`${i + 1}: Nạp ${mov}€`);
  } else {
    console.log(`${i + 1}: Rút ${Math.abs(mov)}€`);
  }
});

// forEach với Map
const currencies = new Map([["USD", "US Dollar"], ["EUR", "Euro"]]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// forEach với Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR"]);
currenciesUnique.forEach(function (value) {
  console.log(value);
});
```

> ⚠️ **Không thể dùng `break` hay `continue` trong `forEach`.** Nếu cần, hãy dùng vòng lặp `for...of`.

## 8.3 map — biến đổi mảng

**`map` = "biến hóa" từng phần tử** 🪄 — tạo mảng MỚI bằng cách áp dụng hàm lên TỪNG phần tử.

```
[200, 450, -400]  →  map(x => x * 1.1)  →  [220, 495, -440]
   Mảng gốc          Hàm biến đổi          Mảng MỚI
```

```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// Tạo mảng MỚI với mỗi phần tử được biến đổi
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
);
```

## 8.4 filter — lọc mảng

**`filter` = "sàng lọc"** 🔍 — tạo mảng MỚI chỉ chứa phần tử thỏa điều kiện.

```
[200, 450, -400, 3000, -650]  →  filter(x => x > 0)  →  [200, 450, 3000]
         Mảng gốc                  Điều kiện              Chỉ giữ > 0
```

```javascript
const deposits = movements.filter(mov => mov > 0);
// [200, 450, 3000, 70, 1300]

const withdrawals = movements.filter(mov => mov < 0);
// [-400, -650, -130]
```

## 8.5 reduce — tổng hợp mảng thành 1 giá trị

**`reduce` = "nấu cô đặc"** 🍲 — biến TOÀN BỘ mảng thành MỘT giá trị duy nhất (tổng, max, min, object...).

```
[200, 450, -400]  →  reduce((acc, cur) => acc + cur, 0)  →  250
    Mảng gốc           acc = "nồi tích lũy"                 1 giá trị
```

**`reduce` là method mạnh nhất** — bạn có thể implement `map`, `filter` và nhiều thứ khác bằng `reduce`!

```javascript
// Tính tổng
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// 0 là giá trị khởi tạo của accumulator
console.log(balance); // 3840

// Tìm giá trị lớn nhất
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
```

## 8.6 Chaining Methods (Pipeline)

```javascript
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)        // Lọc deposits
  .map(mov => mov * eurToUsd)    // Chuyển EUR → USD
  .reduce((acc, mov) => acc + mov, 0); // Tính tổng
```

## 8.7 find, findIndex, findLast

```javascript
// find — tìm phần tử ĐẦU TIÊN thỏa điều kiện
const firstWithdrawal = movements.find(mov => mov < 0); // -400

// findIndex — tìm VỊ TRÍ đầu tiên
const index = movements.findIndex(mov => mov === 3000); // 3

// findLast — tìm phần tử CUỐI CÙNG (ES2023)
const lastWithdrawal = movements.findLast(mov => mov < 0); // -130

// findLastIndex (ES2023)
const lastLargeIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000);
```

## 8.8 some, every, includes

```javascript
// includes — kiểm tra GIÁ TRỊ CHÍNH XÁC (equality)
movements.includes(-130); // true

// some — kiểm tra ĐIỀU KIỆN (ít nhất 1 phần tử thỏa)
movements.some(mov => mov > 0);    // true
movements.some(mov => mov > 5000); // false

// every — TẤT CẢ phần tử phải thỏa điều kiện
movements.every(mov => mov > 0);   // false
[430, 1000, 700].every(mov => mov > 0); // true
```

## 8.9 flat & flatMap

```javascript
// flat — làm phẳng mảng lồng nhau
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
arr.flat();         // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
arrDeep.flat(2);    // [1, 2, 3, 4, 5, 6, 7, 8] — flat sâu 2 level

// flatMap = map + flat(1) — hiệu năng tốt hơn
const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
```

## 8.10 sort

```javascript
// Strings — sắp xếp theo bảng chữ cái
const owners = ["Jonas", "Zach", "Adam", "Martha"];
owners.sort(); // ⚠️ THAY ĐỔI mảng gốc!

// Numbers — cần callback function
movements.sort((a, b) => a - b); // Tăng dần
movements.sort((a, b) => b - a); // Giảm dần

// Quy tắc:
// return < 0 → giữ nguyên thứ tự (a trước b)
// return > 0 → đổi chỗ (b trước a)
```

## 8.11 Array.from & fill

```javascript
// Tạo mảng với Array.from
const y = Array.from({ length: 7 }, () => 1);        // [1,1,1,1,1,1,1]
const z = Array.from({ length: 7 }, (_, i) => i + 1); // [1,2,3,4,5,6,7]

// Tạo mảng từ NodeList
const movementsUI = Array.from(
  document.querySelectorAll(".movements__value"),
  el => Number(el.textContent.replace("€", ""))
);

// fill — điền giá trị vào mảng
const x = new Array(7);
x.fill(1);          // [1,1,1,1,1,1,1]
x.fill(23, 2, 5);   // [1,1,23,23,23,1,1]
```

## 8.12 Object.groupBy (ES2024)

```javascript
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? "deposits" : "withdrawals"
);
// { deposits: [200, 450, 3000, 70, 1300], withdrawals: [-400, -650, -130] }
```

---

# Phần 9: Numbers, Dates, Intl & Timers

## 9.1 Numbers

```javascript
// Chuyển đổi
Number("23");   // 23
+"23";          // 23 (shortcut)

// Parsing
Number.parseInt("30px", 10);   // 30
Number.parseFloat("2.5rem");   // 2.5

// Kiểm tra
Number.isNaN(20);              // false
Number.isFinite(20);           // true ← tốt nhất để kiểm tra số
Number.isInteger(23.0);        // true

// Math
Math.sqrt(25);     // 5
Math.max(5, 18);   // 18
Math.min(5, 18);   // 5
Math.PI;           // 3.14159...
Math.trunc(23.3);  // 23 (cắt phần thập phân)
Math.round(23.5);  // 24
Math.ceil(23.3);   // 24 (làm tròn lên)
Math.floor(23.9);  // 23 (làm tròn xuống)
(2.7).toFixed(0);  // "3" (trả về string!)
(2.7).toFixed(3);  // "2.700"

// Số ngẫu nhiên trong khoảng [min, max]
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// BigInt (ES2020) — số nguyên RẤT lớn
const huge = 2038423048230948209384n;
console.log(huge + 10n);  // Chỉ tính được với BigInt khác
```

## 9.2 Dates

```javascript
// Tạo Date
const now = new Date();                           // Hiện tại
const date1 = new Date("Aug 02 2020 18:05:41");
const date2 = new Date(2037, 10, 19, 15, 23, 5); // Tháng bắt đầu từ 0!

// Methods
date2.getFullYear();   // 2037 (KHÔNG dùng getYear!)
date2.getMonth();      // 10 (tháng 11, vì bắt đầu từ 0)
date2.getDate();       // 19 (ngày trong tháng)
date2.getDay();        // 4 (thứ 5, 0 = Chủ nhật)
date2.getHours();      // 15
date2.getTime();       // Timestamp (milliseconds từ 1/1/1970)
Date.now();            // Timestamp hiện tại
date2.toISOString();   // "2037-11-19T08:23:05.000Z"

// Tính toán với dates (trả về milliseconds)
const future = new Date(2037, 10, 19);
const daysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
```

## 9.3 Internationalization (Intl)

```javascript
// Format số
const num = 3884764.23;
new Intl.NumberFormat("vi-VN").format(num);          // "3.884.764,23"
new Intl.NumberFormat("en-US").format(num);          // "3,884,764.23"
new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
}).format(num); // "3.884.764 ₫"

// Format ngày
new Intl.DateTimeFormat("vi-VN").format(new Date()); // "12/02/2026"
new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
}).format(new Date());
```

## 9.4 Timers

```javascript
// setTimeout — chạy MỘT LẦN sau delay
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Pizza với ${ing1} và ${ing2} 🍕`),
  3000,        // 3000ms = 3 giây
  "olives",    // Argument cho callback
  "spinach"
);

// Hủy timer trước khi chạy
clearTimeout(pizzaTimer);

// setInterval — chạy LẶP LẠI theo khoảng thời gian
const clock = setInterval(function () {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000); // Mỗi 1 giây

// Hủy interval
clearInterval(clock);
```

---

# Phần 10: DOM Nâng Cao & Events

## 10.1 Event Propagation (Lan truyền sự kiện)

Khi một sự kiện xảy ra, nó đi qua 3 phase:
1. **Capturing Phase:** Từ `document` → xuống element đích
2. **Target Phase:** Đến element đích
3. **Bubbling Phase:** Từ element đích → ngược lên `document`

```javascript
// Mặc định addEventListener lắng nghe ở Bubbling phase
document.querySelector(".nav").addEventListener("click", function (e) {
  console.log("NAV", e.target, e.currentTarget);
  // e.target = element được click THỰC SỰ
  // e.currentTarget = element đang lắng nghe (= this)
});

// Lắng nghe ở Capturing phase (tham số thứ 3 = true)
el.addEventListener("click", handler, true);

// Ngừng lan truyền
e.stopPropagation();
```

## 10.2 Event Delegation

Thay vì gắn event cho TỪNG phần tử, gắn cho parent rồi kiểm tra target:

```javascript
// ❌ Không hiệu quả (gắn cho mỗi link)
document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) { /* ... */ });
});

// ✅ Event Delegation (gắn cho parent)
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
```

## 10.3 DOM Traversing (Duyệt DOM)

```javascript
const h1 = document.querySelector("h1");

// Đi XUỐNG (con cháu)
h1.querySelectorAll(".highlight");  // Tất cả con cháu có class
h1.childNodes;        // Tất cả child nodes (text, comment, element)
h1.children;          // Chỉ child ELEMENTS (HTMLCollection)
h1.firstElementChild; // Element con đầu tiên
h1.lastElementChild;  // Element con cuối cùng

// Đi LÊN (cha ông)
h1.parentNode;        // Parent node
h1.parentElement;     // Parent element
h1.closest(".header"); // Cha/ông GẦN NHẤT có class "header"

// Đi NGANG (anh chị em)
h1.previousElementSibling; // Element anh/chị trước
h1.nextElementSibling;     // Element em sau
h1.parentElement.children;  // Tất cả anh chị em
```

## 10.4 Intersection Observer API

Theo dõi khi một element vào/ra khỏi viewport:

```javascript
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element đã vào viewport
      entry.target.classList.remove("hidden");
    }
  });
};

const obsOptions = {
  root: null,         // null = viewport
  threshold: 0.1,     // 10% element visible
  rootMargin: "-100px", // Offset
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(document.querySelector(".section"));
```

**Ứng dụng phổ biến:**
- Sticky navigation
- Lazy loading images
- Reveal sections on scroll
- Infinite scrolling

## 10.5 Lazy Loading Images

```javascript
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src; // Thay src
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img"); // Bỏ blur
    });
    observer.unobserve(entry.target);
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null, threshold: 0, rootMargin: "200px"
});
imgTargets.forEach(img => imgObserver.observe(img));
```

## 10.6 Lifecycle DOM Events

```javascript
// DOM được parse xong (HTML + JS loaded, KHÔNG đợi images/CSS)
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed và DOM tree built!");
});

// Trang web hoàn toàn loaded (cả images, CSS, fonts)
window.addEventListener("load", function (e) {
  console.log("Trang đã load hoàn toàn!");
});

// Trước khi rời trang (dùng cho cảnh báo unsaved changes)
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = ""; // Hiển thị dialog xác nhận
});
```

---

# Phần 11: Lập Trình Hướng Đối Tượng (OOP)

## 11.1 OOP là gì?

**OOP (Object-Oriented Programming)** là mô hình lập trình dựa trên **objects** chứa data (properties) và hành vi (methods).

**Ví von:** Hãy tưởng tượng bạn đang thiết kế một game 🎮:
- **Object** = Nhân vật trong game (Mario, Luigi...)
- **Properties** = Thuộc tính (tên, máu, tốc độ, vũ khí)
- **Methods** = Hành động (nhảy, chạy, bắn, tấn công)

**4 nguyên tắc cốt lõi (Bốn trụ cột của OOP):**

1. **Abstraction (Trừu tượng) 🎭**
   - Ẩn chi tiết phức tạp bên trong, chỉ lộ giao diện đơn giản
   - *Ví dụ:* Bạn dùng điện thoại mà không cần biết CPU hoạt động thế nào

2. **Encapsulation (Đóng gói) 🔒**
   - Giữ data + methods private, ngăn truy cập/sửa đổi từ bên ngoài
   - *Ví dụ:* Tài khoản ngân hàng — không ai được tự ý sửa số dư

3. **Inheritance (Kế thừa) 👨‍👦**
   - Class con kế thừa tất cả từ class cha, có thể thêm/sửa
   - *Ví dụ:* "Sinh viên" kế thừa từ "Người" (có tên, tuổi) + thêm "trường", "điểm"

4. **Polymorphism (Đa hình) 🎭**
   - Class con ghi đè method của class cha theo cách riêng
   - *Ví dụ:* Phương thức "di chuyển" — Chó thì chạy, Cá thì bơi, Chim thì bay

## 11.2 Prototypal Inheritance — Điểm khác biệt lớn nhất của JavaScript!

Hầu hết các ngôn ngữ (Java, C++, Python) dùng **classical inheritance** (class → instance). JavaScript dùng **prototypal inheritance** (object → object).

**Ví von:** Prototypal inheritance giống như **tra từ điển** 📖:
1. Bạn tìm từ "calcAge" trong object `jonas` → Không có!
2. JavaScript tự động tìm tiếp trong `jonas.__proto__` (prototype) → Tìm thấy!
3. Nếu vẫn không có → tìm tiếp ở prototype của prototype → ... → `null` (hết)

Đây gọi là **Prototype Chain**:
```
jonas → Person.prototype → Object.prototype → null
  │          │                    │
  │       calcAge()           toString()
  │       greet()             hasOwnProperty()
  │
  firstName = "Jonas"
  birthYear = 1991
```

**3 cách tạo Prototypal Inheritance:**
1. Constructor Functions (cách cũ, vẫn hay dùng)
2. ES6 Classes (cú pháp hiện đại, nên dùng)
3. Object.create (ít dùng, nhưng quan trọng về lý thuyết)

## 11.3 Constructor Functions

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;   // Instance properties
  this.birthYear = birthYear;
  // ❌ KHÔNG tạo method ở đây (mỗi instance sẽ copy 1 bản)
};

const jonas = new Person("Jonas", 1991);
// Khi gọi new: 1) Tạo {} 2) this = {} 3) {} link đến prototype 4) return {}

console.log(jonas instanceof Person); // true

// Thêm method vào prototype (TẤT CẢ instances dùng chung)
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); // 46
console.log(jonas.__proto__ === Person.prototype); // true
```

## 11.4 ES6 Classes (Cú pháp hiện đại)

```javascript
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods (tự động thêm vào prototype)
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // Getter
  get age() {
    return 2037 - this.birthYear;
  }

  // Setter (validation)
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // Static method (gọi trên class, không phải instance)
  static hey() {
    console.log("Hey there 👋");
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
jessica.calcAge(); // 41
console.log(jessica.age); // 41 (getter)
PersonCl.hey();    // Static method

// ⚠️ Classes:
// 1. KHÔNG được hoisted
// 2. Là first-class citizens (có thể truyền vào/return từ hàm)
// 3. Luôn chạy trong strict mode
```

## 11.5 Object.create

```javascript
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init("Steven", 2002);
steven.calcAge(); // 35
```

## 11.6 Inheritance (Kế thừa)

### Kế thừa với Constructor Functions

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // Gọi constructor cha
  this.course = course;
};

// Liên kết prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`I'm ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce(); // "I'm Mike and I study Computer Science"
mike.calcAge();   // 17 (kế thừa từ Person)
```

### Kế thừa với ES6 Classes

```javascript
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // Gọi constructor cha (BẮT BUỘC trước this)
    this.course = course;
  }

  introduce() {
    console.log(`I'm ${this.fullName} and I study ${this.course}`);
  }

  // Override method cha
  calcAge() {
    console.log(`I'm ${2037 - this.birthYear}, but feel like ${2037 - this.birthYear + 10}`);
  }
}
```

## 11.7 Encapsulation (Đóng gói) — Private Fields

```javascript
class Account {
  // 1) Public fields (trên mỗi instance)
  locale = navigator.language;

  // 2) Private fields (KHÔNG truy cập được từ bên ngoài)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // 3) Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // Cho phép chaining
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
    }
    return this;
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(250).deposit(300).withdraw(35).requestLoan(25000);
// console.log(acc1.#movements); // ❌ SyntaxError!
console.log(acc1.getMovements()); // ✅
```

---

# Phần 12: Lập Trình Bất Đồng Bộ

## 12.1 Synchronous vs Asynchronous

**Đây là chủ đề KHÓ NHẤT trong JavaScript!** Nhưng cũng là QUAN TRỌNG NHẤT cho phát triển web thực tế.

**Ví von dễ hiểu:**

🔄 **Synchronous** = Xếp hàng mua cà phê ☕
- Bạn đứng xếp hàng → đợi người trước xong → đến lượt bạn → đợi pha xong → nhận cà phê
- Mọi việc diễn ra TUẦN TỰ, phải đợi từng bước

⚡ **Asynchronous** = Gọi cà phê qua app 📱
- Bạn đặt cà phê → KHÔNG đợi → làm việc khác → nhận thông báo khi xong → lấy cà phê
- Bạn KHÔNG bị block, có thể làm việc khác trong khi đợi

**Trong JavaScript:**
- **Synchronous:** Code chạy TUẦN TỰ, từng dòng một. Dòng sau đợi dòng trước xong.
- **Asynchronous:** Code chạy KHÔNG tuần tự. Task dài (HTTP request, timer) chạy nền, không block code sau.

```javascript
// Ví dụ async: setTimeout
console.log("Bắt đầu");
setTimeout(() => console.log("Timer xong!"), 2000);
console.log("Kết thúc");
// Output: "Bắt đầu" → "Kết thúc" → (2s sau) "Timer xong!"
```

## 12.2 AJAX & API

- **AJAX** = Asynchronous JavaScript And XML — giao tiếp với server không cần reload trang
- **API** = Application Programming Interface — phần mềm cho phần mềm khác tương tác
- **REST API** = API trên web trả về dữ liệu (thường là JSON)

## 12.3 Promises & Fetch API

**Promise là gì?** Promise = "lời hứa" 🤝 — một object đại diện cho giá trị SẼ CÓ trong tương lai.

**Ví von:** Khi bạn đặt pizza 🍕:
1. Bạn gọi điện đặt pizza → Nhận về "lời hứa" sẽ có pizza (= `Promise`)
2. Đang đợi pizza → Trạng thái **Pending** (đang xử lý)
3. Pizza đến → **Fulfilled** (thành công) → bạn ăn pizza (`.then()`)
4. Hết pizza → **Rejected** (thất bại) → bạn xử lý lỗi (`.catch()`)

```
Promise Lifecycle:
                          ┌──→ Fulfilled → .then(value)
Pending (đang chờ) ──→──┤
                          └──→ Rejected  → .catch(error)
                                            │
                                 .finally() ←┘ (luôn chạy)
```

```javascript
// Fetch trả về một PROMISE
const request = fetch("https://restcountries.com/v2/name/portugal");
// Promise: object đại diện cho giá trị SẼ CÓ trong tương lai

// Consuming Promises
fetch("https://restcountries.com/v2/name/portugal")
  .then(response => response.json())     // Parse JSON (cũng trả về Promise)
  .then(data => console.log(data[0]))    // Sử dụng data
  .catch(err => console.error(err))      // Bắt lỗi
  .finally(() => console.log("Done"));   // Luôn chạy
```

**Vòng đời của Promise:**
1. **Pending** → đang chờ kết quả
2. **Fulfilled** → thành công → `.then()`
3. **Rejected** → thất bại → `.catch()`

### Chaining Promises

```javascript
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      if (!response.ok) throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error("No neighbour found!");
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, "neighbour"))
    .catch(err => renderError(`Something went wrong: ${err.message}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};
```

## 12.4 Async/Await (ES2017)

**Async/Await** = "đường cú pháp" (syntactic sugar) cho Promises. Cùng chức năng nhưng code trông giống **synchronous** hơn → dễ đọc, dễ debug!

**So sánh:**
```
// Promise chain (khó đọc khi phức tạp):
fetch(url)
  .then(res => res.json())
  .then(data => fetch(url2))
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await (đọc giống code tuần tự):
const res = await fetch(url);
const data = await res.json();
const res2 = await fetch(url2);
const data2 = await res2.json();
console.log(data2);
```

Cú pháp hiện đại, dễ đọc hơn `.then()` chain:

```javascript
const whereAmI = async function () {
  try {
    // Await "đợi" Promise resolve, rồi trả về giá trị
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();

    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
    if (!res.ok) throw new Error("Problem getting country");
    const data = await res.json();

    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`Something went wrong: ${err.message}`);
    throw err; // Re-throw để Promise bị reject
  }
};

// Gọi async function
whereAmI()
  .then(city => console.log(city))
  .catch(err => console.error(err));

// Hoặc dùng IIFE
(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(err);
  }
})();
```

## 12.5 Promise Combinators

```javascript
// Promise.all — TẤT CẢ phải thành công (reject nếu BẤT KỲ fail)
const data = await Promise.all([
  getJSON(`https://restcountries.com/v2/name/portugal`),
  getJSON(`https://restcountries.com/v2/name/canada`),
  getJSON(`https://restcountries.com/v2/name/tanzania`),
]);

// Promise.race — Trả về KẾT QUẢ ĐẦU TIÊN (dù success hay fail)
const res = await Promise.race([
  getJSON(`https://restcountries.com/v2/name/italy`),
  timeout(5), // Promise reject sau 5 giây
]);

// Promise.allSettled — Đợi TẤT CẢ, trả về kết quả của từng Promise
const results = await Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another success"),
]);
// [{status: "fulfilled", value: "Success"}, {status: "rejected", reason: "Error"}, ...]

// Promise.any — Trả về KẾT QUẢ THÀNH CÔNG ĐẦU TIÊN (bỏ qua rejected)
const first = await Promise.any([
  Promise.reject("Error"),
  Promise.resolve("Success"),
]);
// "Success"
```

## 12.6 Building a Promise

```javascript
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw happening 🔮");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN 💰");      // Fulfill promise
    } else {
      reject(new Error("You lost 💩")); // Reject promise
    }
  }, 2000);
});

lotteryPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

wait(2).then(() => console.log("2 seconds passed"));
```

---

# Phần 13: JavaScript Hiện Đại

## 13.1 Modules (ES6)

**Module là gì?** Module = một file JavaScript riêng biệt, có scope riêng. Module giúp:
- 📦 **Tổ chức code** — chia ứng dụng thành nhiều file nhỏ, dễ quản lý
- 🔒 **Đóng gói** — biến/hàm mặc định là private, chỉ export những gì cần thiết
- ♻️ **Tái sử dụng** — import module vào bất kỳ đâu
- 🧩 **Dependency management** — rõ ràng module nào phụ thuộc module nào

**Ví von:** Hãy tưởng tượng ứng dụng web giống một **nhà máy** 🏭:
- Mỗi module = một **bộ phận** (phòng kế toán, phòng sản xuất, phòng bán hàng)
- `export` = sản phẩm/dịch vụ bộ phận **cung cấp ra ngoài**
- `import` = sản phẩm/dịch vụ bộ phận **nhận từ bên ngoài**

```javascript
// Một module = một file. Mỗi module có scope riêng.

// ===== shoppingCart.js (EXPORTING) =====
const shippingCost = 10;  // Private (không export)
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added`);
};

// Named exports
export { totalPrice, totalQuantity };

// Default export (1 per module)
export default function (product, quantity) {
  cart.push({ product, quantity });
}

// ===== script.js (IMPORTING) =====
// Named imports
import { addToCart, totalPrice } from "./shoppingCart.js";

// Đổi tên
import { addToCart as add } from "./shoppingCart.js";

// Import tất cả
import * as ShoppingCart from "./shoppingCart.js";
ShoppingCart.addToCart("bread", 5);

// Default import
import add from "./shoppingCart.js";
add("pizza", 2);
```

> ⚠️ Trong HTML, phải dùng `<script type="module" src="script.js"></script>`

## 13.2 Top-Level Await (ES2022)

```javascript
// Trong modules, có thể dùng await NGOÀI async function
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data);

// ⚠️ Top-level await BLOCK toàn bộ module (kể cả module import nó)
```

## 13.3 Module Pattern (Cách cũ)

```javascript
// IIFE trả về object chứa public API
const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
  };

  return { addToCart, cart };
})();

ShoppingCart.addToCart("apples", 4);
```

## 13.4 Bundling & Transpiling

- **Bundler (Parcel, Webpack):** Gộp nhiều files thành 1, xử lý dependencies
- **Transpiler (Babel):** Chuyển ES6+ về ES5 cho trình duyệt cũ
- **Polyfilling:** Thêm tính năng mới cho trình duyệt cũ (core-js, regenerator-runtime)

```bash
# Parcel (zero-config bundler)
npx parcel index.html           # Dev mode (hot reload)
npx parcel build index.html     # Production build

# Cài Babel polyfills
npm install core-js regenerator-runtime
```

```javascript
// Import polyfills
import "core-js/stable";
import "regenerator-runtime/runtime";
```

## 13.5 Declarative & Functional Programming

JavaScript hỗ trợ cả **imperative** (ra lệnh từng bước) và **declarative** (mô tả kết quả).

**Functional programming principles:**
1. **Immutability:** Không thay đổi data gốc
2. **Side effect-free functions:** Hàm không ảnh hưởng bên ngoài
3. **Pure functions:** Cùng input → luôn cùng output

```javascript
// Imperative (cách cũ)
const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++) {
  doubled.push(arr[i] * 2);
}

// Declarative/Functional (cách mới)
const doubled2 = arr.map(n => n * 2);

// Object.freeze — "đóng băng" object (ngăn mutation)
const budget = Object.freeze({ food: 200, car: 550, hobby: 100 });
// budget.food = 300; // ❌ Lỗi trong strict mode
```

---

# 💡 Tổng Kết & Tips

## Cách học hiệu quả:
1. **Code theo video** — đừng chỉ xem
2. **Làm Coding Challenges** — sau mỗi bài học
3. **Hiểu CONCEPT** trước, nhớ syntax sau
4. **Đọc lại lý thuyết** (file này!) khi quên
5. **Xây dựng dự án riêng** sau khi xong khóa

## Thứ tự ưu tiên kỹ năng:
1. 🟢 Variables, Types, Operators, Strings
2. 🟢 Functions (all types), Scope, Closures
3. 🟢 Arrays + Methods (map, filter, reduce)
4. 🟢 Objects, this keyword
5. 🟡 DOM Manipulation
6. 🟡 Async/Await, Promises, Fetch
7. 🟡 OOP (Classes, Prototypes)
8. 🔵 Modules, Tooling
9. 🔵 Advanced Patterns

---

> 📌 **Tài liệu này được tạo dựa trên khóa học "The Complete JavaScript Course 2025" của Jonas Schmedtmann. Sử dụng kết hợp xem video để đạt hiệu quả tốt nhất.**

