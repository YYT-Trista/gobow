    // 價格表
    const priceData = {
        "double": { // 雙玄關門的尺寸價格
            "100 x 208 cm": 120000,
            "118 x 208 cm": 128000
        },

        "child-mother": { // 子母門的尺寸價格
            "140 x 208 cm": 195000,
            "150 x 208 cm": 195000,
            "151 x 208 cm": 235000
        },

        "single-out": { // 外門的尺寸價格
            "100 x 208 cm": 55000,
            "118 x 208 cm": 63000
        },

        "single-out-child-mother": {
            "140 x 208 cm": 82000,
            "150 x 208 cm": 90000,
            "151 x 208 cm": 106500
        },
        "anti-dirty": {
            "100 x 208 cm": 80000,
            "118 x 208 cm": 88000
        },
        "anti-dirty-child-mother": {
            "140 x 208 cm": 130000,
            "150 x 208 cm": 130000,
            "151 x 208 cm": 155000
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
        '斑駁灰(雙面造型)',
        '※造型框價格另計'
    ],
    "02": [
        '外門:D7-1百事大吉 (實木門花價格另計)',
        '內門:米黃格紋(雙面造型)'
    ],
    "03": [
        '外門:D2琴棋',
        '內門:棕灰格紋(雙面造型)'
    ],
    "05": [
        '外門:F5 劃時代',
        '內門:石燒紋紅鏽石(雙面造型)'
    ],
    "06": [
        '原色織紋(雙面造型)',
        '※造型框價格另計'
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
    doorImage.src = `樣品圖/防水防污/${currentPattern}.jpg`;

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