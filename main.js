// 1. Lấy các phần tử từ HTML sang để điều khiển
const video = document.getElementById('myVideo');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnMuteUnmute = document.getElementById('btnMuteUnmute');
const myButton = document.getElementById('myButton');

// 2. Chức năng nút Phát / Tạm dừng video
btnPlayPause.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        btnPlayPause.innerText = 'Tạm Dừng (Pause)';
        btnPlayPause.style.backgroundColor = '#dc3545'; // Đổi sang màu đỏ khi đang phát
    } else {
        video.pause();
        btnPlayPause.innerText = 'Phát Tiếp (Play)';
        btnPlayPause.style.backgroundColor = '#007bff'; // Đổi lại màu xanh khi dừng
    }
});

// 3. Chức năng nút Bật / Tắt tiếng
btnMuteUnmute.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        btnMuteUnmute.innerText = 'Tắt Tiếng (Mute)';
        btnMuteUnmute.style.backgroundColor = '#007bff';
    } else {
        video.muted = true;
        btnMuteUnmute.innerText = 'Bật Tiếng (Unmute)';
        btnMuteUnmute.style.backgroundColor = '#6c757d'; // Đổi sang màu xám khi tắt tiếng
    }
});

// 4. Chức năng nút dưới cùng của bạn (Bật thông báo chào mừng)
myButton.addEventListener('click', function() {
    alert('Chào mừng bạn đến với Miu Shop Xin! Chúc bạn xem video vui vẻ 🎉');
});