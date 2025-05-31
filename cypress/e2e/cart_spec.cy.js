describe('Cart Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Should add a product to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });
  it('Should sort products by price low to high', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });
  // Bài tập bổ sung 1: Kiểm tra chức năng xóa sản phẩm khỏi giỏ hàng
  it('Should remove a product from the cart', () => {
    // Thêm sản phẩm vào giỏ
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    // Kiểm tra số lượng sản phẩm trong giỏ = 1
    cy.get('.shopping_cart_badge').should('have.text', '1');
    // Nhấn nút Remove
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    // Kiểm tra biểu tượng giỏ hàng không còn hiển thị hoặc số lượng là 0
    cy.get('.shopping_cart_badge').should('not.exist');
  });
   it('Should complete checkout process step 1 and go to step 2', () => {
    // Thêm sản phẩm vào giỏ
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    // Chuyển đến trang giỏ hàng
    cy.get('.shopping_cart_link').click();
    // Nhấn nút Checkout
    cy.get('#checkout').click();

    // Điền thông tin thanh toán
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    // Nhấn Continue
    cy.get('#continue').click();

    // Kiểm tra chuyển sang trang xác nhận thanh toán
    cy.url().should('include', '/checkout-step-two.html');
  });
});