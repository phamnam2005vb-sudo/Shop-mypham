let cart = [];
let total = 0;

// Hàm thêm sản phẩm vào giỏ
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
}

// Cập nhật giao diện giỏ hàng
function updateCartUI() {
    // Cập nhật số lượng trên thanh Navbar
    document.getElementById('cart-count').innerText = cart.length;

    // Cập nhật danh sách trong Modal giỏ hàng
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Xóa danh sách cũ đi

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ${item.price.toLocaleString()} đ`;
        cartItems.appendChild(li);
    });

    // Cập nhật tổng tiền
    document.getElementById('cart-total').innerText = total.toLocaleString();
}

// Ẩn/Hiện giỏ hàng khi nhấn nút
function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}

// Hàm thông báo khi ấn Thanh toán
function checkout() {
    if(cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
    } else {
        alert("Cám ơn bạn đã đặt hàng! Đơn hàng mô phỏng thành công.");
        cart = [];
        total = 0;
        updateCartUI();
        toggleCart();
    }
}