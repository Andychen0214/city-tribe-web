document.addEventListener('DOMContentLoaded', () => {
    const dishes = [
        { name: '涼拌山豬皮', images: ['涼拌山豬皮.jpg'] },
        { name: '招牌桶烤雞', images: ['招牌桶烤雞.jpg', '招牌桶烤雞_2.jpg', '招牌桶烤雞_3.jpg'] },
        { name: '原味烤豬', images: ['原味烤豬.jpg', '原味烤豬_2.jpg'] },
        { name: '鐵板鴕鳥肉', images: ['鐵板骰子牛.jpg', '鐵板骰子牛_2.jpg', '鐵板骰子牛_3.jpg'] },
        { name: '石板雙拼', images: ['石板雙拼.jpg', '石板雙拼_2.jpg', '石板雙拼_3.jpg'] },
        { name: '鐵板豆腐', images: ['鐵板豆腐.jpg', '鐵板豆腐_2.jpg'] },
        { name: '涼拌檳榔花', images: ['涼拌檳榔花.jpg', '涼拌檳榔花_2.jpg'] },
        { name: '洛神糖醋海魚', images: ['洛神糖醋海魚.jpg', '洛神糖醋海魚_2.jpg'] },
        { name: '橙汁鳳梨蝦球', images: ['橙汁鳳梨蝦球.jpg', '橙汁鳳梨蝦球_2.jpg'] },
        { name: '南瓜紅藜珍珠丸', images: ['南瓜紅藜珍珠丸.jpg', '南瓜紅藜珍珠丸_2.jpg'] },
        { name: '鐵板山豬肉', images: ['鐵板山豬肉.jpg', '鐵板山豬肉_2.jpg', '鐵板山豬肉_3.jpg'] },
        { name: '紅糟海鰻', images: ['紅糟海鰻.jpg', '紅糟海鰻_2.jpg'] },
        { name: '馬告清蒸海上鮮', images: ['馬告清蒸海上鮮.jpg', '馬告清蒸海上鮮_2.jpg', '馬告清蒸海上鮮_3.jpg'] },
        { name: '花東螺肉', images: ['花東螺肉.jpg', '花東螺肉_2.jpg', '花東螺肉_3.jpg'] },
        { name: '三杯軟絲', images: ['三杯軟絲.jpg', '三杯軟絲_2.jpg', '三杯軟絲_3.jpg'] },
        { name: '三杯高山茶油雞', images: ['三杯高山茶油雞.jpg', '三杯高山茶油雞_2.jpg', '三杯高山茶油雞_3.jpg'] },
        { name: '椒鹽蟋蟀', images: ['椒鹽蟋蟀.jpg'] },
        { name: '龍膽野菜火鍋', images: ['龍膽野菜火鍋.jpg', '龍膽野菜火鍋_2.jpg', '龍膽野菜火鍋_3.jpg'] },
        { name: '情人的眼淚', images: ['情人的眼淚.jpg'] },
        { name: '花東野菜', images: ['花東野菜.jpg', '花東野菜_2.jpg'] },
        { name: '炸炒飛機', images: ['炸炒飛機.jpg', '炸炒飛機_2.jpg'] },
        { name: '豐年慶典', images: ['豐年慶典.jpg', '豐年慶典_2.jpg'] },
        { name: '勇士樹豆豬腳', images: ['勇士樹豆豬腳.jpg', '勇士樹豆豬腳_2.jpg', '勇士樹豆豬腳_3.jpg'] },
        { name: '剝皮辣椒鍋', images: ['剝皮辣椒鍋.jpg', '剝皮辣椒鍋_2.jpg'] },
        { name: '鹹酥溪蝦', images: ['鹹酥溪蝦.jpg', '鹹酥溪蝦_2.jpg'] },
        { name: '轎篙筍', images: ['轎篙筍.jpg', '轎篙筍_2.jpg'] },
        { name: '洛神鳳梨排骨', images: ['洛神鳳梨排骨.jpg', '洛神鳳梨排骨_2.jpg'] },
        { name: '古早味鯿豬肉', images: ['古早味鯿豬肉.jpg', '古早味鯿豬肉_2.jpg'] },
        { name: '馬告檸檬魚', images: ['馬告檸檬魚.jpg', '馬告檸檬魚_2.jpg'] },
        { name: '鹽烤台灣鯛', images: ['鹽烤台灣鯛.jpg', '鹽烤台灣鯛_2.jpg', '鹽烤台灣鯛_3.jpg', '鹽烤台灣鯛_4.jpg'] },
        { name: '紅藜蟹黃海鮮煲', images: ['紅藜蟹黃海鮮煲.jpg'] },
        { name: '鹹魚木桶飯', images: ['鹹魚木桶飯.jpg', '鹹魚木桶飯_2.jpg', '鹹魚木桶飯_3.jpg', '鹹魚木桶飯_4.jpg'] },
        { name: '鹹魚木桶飯拼阿拜', images: ['鹹魚木桶飯拼阿拜.jpg', '鹹魚木桶飯拼阿拜_2.jpg', '鹹魚木桶飯拼阿拜_3.jpg', '鹹魚木桶飯拼阿拜_4.jpg', '鹹魚木桶飯拼阿拜_5.jpg', '鹹魚木桶飯拼阿拜_6.jpg'] },
        { name: '馬告檸檬蝦', images: ['馬告檸檬蝦.jpg', '馬告檸檬蝦_2.jpg', '馬告檸檬蝦_3.jpg'] }
    ];

    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    dishes.forEach((dish, index) => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'gallery-card fade-up';
        card.style.animationDelay = `${(index % 4) * 0.1}s`;

        // Using the first image as thumbnail
        const thumb = dish.images[0];

        card.innerHTML = `
            <div class="gallery-img-wrap">
                <img src="assets/images/dishes/${thumb}" alt="${dish.name}" loading="lazy">
                <div class="gallery-overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    <span>點擊放大</span>
                </div>
                ${dish.images.length > 1 ? `<span class="gallery-count"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> ${dish.images.length}</span>` : ''}
            </div>
            <div class="gallery-content">
                <h3 class="gallery-title">${dish.name}</h3>
            </div>
        `;

        // Click event to open modal
        card.addEventListener('click', () => {
            openModal(dish);
        });

        grid.appendChild(card);

        // Use the IntersectionObserver from main.js if available
        if (typeof observer !== 'undefined') {
            observer.observe(card);
        } else {
            // Fallback: immediately show if observer isn't found
            setTimeout(() => card.classList.add('visible'), 100);
        }
    });

    // Modal Logic
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentDish = null;
    let currentImageIndex = 0;

    function openModal(dish) {
        currentDish = dish;
        currentImageIndex = 0;
        updateModalImage();
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling

        // Setup buttons
        if (dish.images.length > 1) {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        } else {
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        }
    }

    function updateModalImage() {
        if (!currentDish) return;
        modalImg.src = `assets/images/dishes/${currentDish.images[currentImageIndex]}`;
        const countText = currentDish.images.length > 1 ? ` (${currentImageIndex + 1}/${currentDish.images.length})` : '';
        captionText.innerHTML = `${currentDish.name}${countText}`;
    }

    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    if (prevBtn) {
        prevBtn.onclick = function (e) {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + currentDish.images.length) % currentDish.images.length;
            updateModalImage();
        }
    }

    if (nextBtn) {
        nextBtn.onclick = function (e) {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % currentDish.images.length;
            updateModalImage();
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});
