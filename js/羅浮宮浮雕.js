    // 價格表
    const priceData = {
        "single": { // 單門的尺寸價格
            "100 x 223 cm": 208000,
            "100 x 245 cm": 218000,
            "120 x 223 cm": 234000,
            "120 x 245 cm": 244000
        },

        "child-mother": { // 子母門的尺寸價格
            "150 x 223 cm": 322000,
            "150 x 245 cm": 338000
        },

        "double": { // 雙開門的尺寸價格
            "240 x 223 cm": 398000,
            "240 x 245 cm": 418000
        },

        };

    

    const typeSelect = document.getElementById('type-select');
    const sizeSelect = document.getElementById('size-select');
    const priceSpan = document.getElementById('total-price');

    // 門型改變後 更新尺寸
    typeSelect.onchange = function() {
        const type = this.value;
        const sizes = priceData[type];

        // 清空後面選單
        sizeSelect.innerHTML = '<option value="" disabled selected>請選擇尺寸</option>';
        priceSpan.innerText = "0";  // 重設價格顯示

        // 把對應的尺寸塞進第二個選單
        for (let size in sizes) {
            const opt = document.createElement('option');
            opt.value = size;
            opt.innerHTML = size;
            sizeSelect.appendChild(opt);
        }
        
    };

    sizeSelect.onchange = function() {
        const type = typeSelect.value;
        const size = this.value;

        const finalPrice = priceData[type][size]
        priceSpan.innerText = finalPrice.toLocaleString();
    };

   

    
// =============
// 點擊選單換圖
// =============

// 1. 建立專屬說明資料庫
const patternSpecs = {
    "01": [
        '純白&香檳金'
    ],
    "01-1": [
        '紅古銅手工漆'
    ],
    "01-2": [
        '紅鐵砂色'
    ],
    "02": [
        '黑砂色'
    ],
    "03": [
        '純白色'
    ],
    "05": [
        '深灰砂閃銀'
    ],
    "06": [
        '黑砂色'
    ],
    "07": [
        '銀古銅手工漆'
    ],
    "08": [
        '灰砂色'
    ],
    "09": [
        '紅鐵砂色'
    ],
    "10": [
        '咖啡砂閃銀'
    ],
    "11": [
        '黑砂色'
    ],
};

let currentPattern = '01';

const doorImage = document.getElementById('door-image');
const patternNameDisplay = document.getElementById('pattern-name');
const dynamicFeatures = document.getElementById('dynamic-features'); 
const patternBtns = document.querySelectorAll('.pattern-btn');

function updateVisual() {
    // 更新型號文字
    patternNameDisplay.innerText = currentPattern;    
    
    // 拼湊檔名並換掉圖片
    doorImage.src = `../樣品圖/羅浮宮浮雕/${currentPattern}.jpg`;

    // 更新專屬說明文字
    if (patternSpecs[currentPattern]) {
        dynamicFeatures.innerHTML = ""; // 先清空舊的項目
        patternSpecs[currentPattern].forEach(text => {
            const li = document.createElement('li');
            li.innerText = text;
            dynamicFeatures.appendChild(li);
        });
    }
}

// 門花按鈕點擊
patternBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // 清除大家的 active 狀態
        patternBtns.forEach(b => b.classList.remove('active'));
        // 幫自己加上 active
        this.classList.add('active');
        // 更新當前型號並換圖換文字
        currentPattern = this.getAttribute('data-pattern');
        updateVisual();
    });
});

// 網頁一打開時先載入預設圖片樣式
updateVisual();