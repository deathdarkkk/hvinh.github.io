// Ngày bắt đầu yêu
const startDate = new Date('2024-08-15T00:00:00');

// Hàm cập nhật thời gian
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days-number').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours-number').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes-number').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds-number').textContent = seconds.toString().padStart(2, '0');
}

// Cập nhật số liệu và làm mới mỗi giây
setInterval(updateCountdown, 1000);

// Gọi hàm ngay khi trang được load để hiển thị ngay lập tức
window.onload = updateCountdown;

let heartInterval;
const maxHearts = 10; // Số trái tim tối đa hiển thị trên màn hình

// Tạo phần tử âm thanh
const audio = new Audio('Music/Noi-Nay-Co-Anh.mp3');

// Phát âm thanh khi trái tim xuất hiện
function playSound() {
    audio.currentTime = 0; // Đặt thời gian phát lại từ đầu
    audio.play();
}

// Thêm trái tim bay
function createHeart() {
    if (document.querySelectorAll('.heart').length < maxHearts) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw'; // Vị trí ngẫu nhiên trên trục X
        heart.style.animationDuration = Math.random() * 10 + 5 + 's'; // Thay đổi thời gian bay
        document.body.appendChild(heart);

        // Phát âm thanh khi trái tim xuất hiện
        playSound();

        // Xóa trái tim sau khi hoàn thành animation
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Xóa trái tim cũ và tạo trái tim mới
function manageHearts() {
    // Xóa trái tim cũ nếu vượt quá số tối đa
    const hearts = document.querySelectorAll('.heart');
    if (hearts.length > maxHearts) {
        hearts.forEach((heart, index) => {
            if (index < hearts.length - maxHearts) {
                heart.remove();
            }
        });
    }

    // Tạo trái tim mới
    createHeart();
}

// Tạo trái tim bay ngẫu nhiên
heartInterval = setInterval(manageHearts, 500);