 Mục tiêu
Bài thực hành này giúp bạn:

Nắm vững kiến thức về kiểm thử End-to-End (E2E) bằng công cụ Cypress.

Kiểm tra các chức năng chính của website: https://www.saucedemo.com.

Thực hành viết và thực thi các kịch bản kiểm thử:

Giao diện người dùng

Đăng nhập

Thêm/xóa sản phẩm vào giỏ hàng

Quy trình thanh toán

Kiểm tra điều hướng và trạng thái của hệ thống

Yêu cầu trước khi bắt đầu
Máy đã cài Node.js (phiên bản 14 trở lên)

Cài đặt Visual Studio Code hoặc bất kỳ trình soạn thảo mã nguồn nào

Truy cập được trang web: https://www.saucedemo.com

Có kết nối internet

Biết sử dụng cơ bản dòng lệnh (Terminal/Command Prompt)

Hướng dẫn cài đặt và cấu hình Cypress
Bước 1: Tạo thư mục dự án và khởi tạo dự án Node.js
bash
Copy
Edit
mkdir cypress-exercise
cd cypress-exercise
npm init -y
Bước 2: Cài đặt Cypress vào dự án
bash
Copy
Edit
npm install cypress --save-dev
Bước 3: Mở giao diện Cypress
bash
Copy
Edit
npx cypress open
 Khi chạy lệnh trên lần đầu, Cypress sẽ tự động tạo cấu trúc thư mục:

arduino
Copy
Edit
cypress/
  └── e2e/           // nơi lưu các file kiểm thử (ví dụ: login_spec.cy.js, cart_spec.cy.js)
  └── support/
  └── fixtures/
cypress.config.js     // file cấu hình chính
Cách chạy các bài kiểm thử
Mở giao diện Test Runner
bash
Copy
Edit
npx cypress open
Cửa sổ Cypress Test Runner sẽ hiện ra.

Danh sách tất cả các file kiểm thử .cy.js nằm trong thư mục cypress/e2e/ sẽ được hiển thị.

 Chạy từng file kiểm thử
login_spec.cy.js: kiểm thử chức năng đăng nhập.

cart_spec.cy.js: kiểm thử thêm sản phẩm, xóa sản phẩm, và thanh toán.

 Nhấp vào một file cụ thể để Cypress tự động chạy toàn bộ các kịch bản kiểm thử trong file đó.
 Nội dung chi tiết file cart_spec.cy.js
1.  Kịch bản: Xóa sản phẩm khỏi giỏ hàng
Bước kiểm thử:

Đăng nhập bằng tài khoản hợp lệ (ví dụ: standard_user).

Thêm một sản phẩm bất kỳ vào giỏ hàng bằng nút Add to cart.

Truy cập biểu tượng giỏ hàng.

Nhấn nút Remove để xóa sản phẩm.

Xác minh rằng giỏ hàng không còn sản phẩm nào bằng cách kiểm tra biểu tượng giỏ hàng không có số lượng hiển thị.

Mã kiểm thử:

js
Copy
Edit
cy.get('.shopping_cart_badge').should('not.exist');
2.  Kịch bản: Kiểm tra quy trình thanh toán
Bước kiểm thử:

Đăng nhập bằng tài khoản standard_user.

Thêm một sản phẩm vào giỏ hàng.

Truy cập trang giỏ hàng và nhấn nút Checkout.

Điền thông tin người dùng:

First Name: John

Last Name: Doe

Zip Code: 12345

Nhấn nút Continue.

Kiểm tra điều hướng đến trang xác nhận đơn hàng /checkout-step-two.html.

Mã kiểm thử:

js
Copy
Edit
cy.url().should('include', '/checkout-step-two.html');
📸 Quan sát kết quả kiểm thử
Cypress sẽ hiển thị trạng thái Pass/Fail cho từng bước kiểm thử.

Khi test bị lỗi, Cypress sẽ tự động:

Chụp ảnh màn hình

Ghi lại video (nếu cấu hình bật)

Giao diện dễ theo dõi và hiển thị rõ ràng các hành động đã thực hiện.

💻 Chạy kiểm thử qua Terminal (không mở giao diện)
Để chạy kiểm thử ở chế độ headless (thích hợp khi CI/CD hoặc kiểm tra nhanh):

bash
Copy
Edit
npx cypress run
Tất cả các file trong cypress/e2e/ sẽ được thực thi.

Kết quả kiểm thử sẽ được hiển thị trực tiếp trong terminal.

Cấu trúc thư mục mẫu sau khi hoàn thành
lua
Copy
Edit
cypress-exercise/
├── cypress/
│   ├── e2e/
│   │   ├── login_spec.cy.js
│   │   └── cart_spec.cy.js
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── node_modules/
├── package.json
└── README.md
link video demo:https://youtu.be/kyIckOmTGeE
