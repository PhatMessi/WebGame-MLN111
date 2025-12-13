// js/main.js

// 1. CẬP NHẬT DANH SÁCH VIEW (Phải khớp 100% với ID trong HTML: view-home, view-lesson...)
const views = ['home', 'lesson', 'game', 'review', 'docs'];

document.addEventListener('DOMContentLoaded', function() {
    // Xử lý nút Start Game
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            if (typeof startGame === 'function') {
                startGame();
            } else {
                console.error("Không tìm thấy hàm startGame!");
            }
        });
    }

    // Mặc định vào Home
    switchTab('home');
});

// HÀM CHUYỂN TAB
// [THAY THẾ] Hàm chuyển Tab có tích hợp xác nhận thoát game
function switchTab(tabName) {
    
    // 1. KIỂM TRA: Có đang chơi game không?
    const gameContainer = document.getElementById('game-container');
    const isGameViewActive = !document.getElementById('view-game').classList.contains('d-none');
    const isPlaying = gameContainer && !gameContainer.classList.contains('d-none');

    // Nếu đang chơi mà bấm chuyển tab (bấm nút Menu)
    if (isGameViewActive && isPlaying) {
        // [SỬA]: Gọi Modal đẹp thay vì confirm()
        if (typeof openConfirmModal === 'function') {
            openConfirmModal();
            return; // Dừng lại, chờ người dùng chọn trong Modal
        }
    }

    // 2. LOGIC CHUYỂN TAB (Giữ nguyên)
    views.forEach(view => {
        const el = document.getElementById(`view-${view}`);
        if (el) {
            el.classList.add('d-none'); 
            el.classList.remove('animate-fade-in'); 
        }
    });

    const selectedView = document.getElementById(`view-${tabName}`);
    if (selectedView) {
        selectedView.classList.remove('d-none'); 
        void selectedView.offsetWidth; 
        selectedView.classList.add('animate-fade-in');
    }

    // Cập nhật trạng thái nút Active
    const navButtons = document.querySelectorAll('.btn-nav');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabName) {
            btn.classList.add('active');
        }
    });
}

// --- HÀM NHẢY TRANG PDF ---
// --- HÀM NHẢY TRANG PDF (ĐÃ FIX LỖI) ---
function jumpToPage() {
    const input = document.getElementById('pdf-page-input');
    const iframe = document.getElementById('pdf-frame');
    
    // 1. Kiểm tra kỹ xem có tìm thấy thẻ không
    if (!input || !iframe) {
        console.error("Lỗi: Không tìm thấy ID của Input hoặc Iframe.");
        return;
    }

    const pageNumber = input.value;

    if (pageNumber && pageNumber > 0) {
        // 2. CÁCH SỬA: Gán cứng đường dẫn gốc (Relative Path) để đảm bảo chính xác
        const basePath = "assets/docs/giaotrinh.pdf"; 
        
        // 3. Tạo chuỗi tham số đầy đủ
        // Thêm zoom=auto để PDF tự căn chỉnh vừa màn hình
        const newSrc = `${basePath}#page=${pageNumber}&zoom=auto&toolbar=0&navpanes=0`;

        console.log("Chuyển đến: " + newSrc); // Kiểm tra trong F12 Console

        // 4. Ép trình duyệt cập nhật
        // Mẹo: Gán src bằng chính nó để trình duyệt nhận diện thay đổi
        iframe.removeAttribute('src'); // Xóa src cũ
        setTimeout(() => {
            iframe.setAttribute('src', newSrc); // Gán src mới sau 1 tích tắc
        }, 10);
    }
}

// (Giữ nguyên phần AddEventListener ở dưới)
document.addEventListener('DOMContentLoaded', function() {
    const pdfInput = document.getElementById('pdf-page-input');
    if (pdfInput) {
        pdfInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                jumpToPage();
            }
        });
    }
});