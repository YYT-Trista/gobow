// 價格表
    const priceData = {
        "double": { // 雙玄關門的尺寸價格
            "100 x 208 cm": {
                'COE5段鎖+3段暗栓':50500,
                '提升雙鎖心 (+6000)':56500
            },
        
            "118 x 208 cm": {
                'COE5段鎖+3段暗栓':58500,
                '提升雙鎖心 (+6000)':64500
            },
        },

        "child-mother": { // 子母門的尺寸價格
            "140 x 208 cm": {
                'COE5段鎖+3段暗栓':76000,
                '提升雙鎖心 (+6000)':82000
            },
            "150 x 208 cm": {
                'COE5段鎖+3段暗栓':84000,
                '提升雙鎖心 (+6000)':90000
            },
            "151 x 208 cm": {
                'COE5段鎖+3段暗栓':98500,
                '提升雙鎖心 (+6000)':104500
            }
        }
    };
                

    const typeSelect = document.getElementById('type-select');
    const sizeSelect = document.getElementById('size-select');
    const lockSelect = document.getElementById('lock-select');
    const priceSpan = document.getElementById('total-price');

    // 門型改變後 更新尺寸
    typeSelect.onchange = function() {
        const type = this.value;
        const sizes = priceData[type];

        // 清空後面選單
        sizeSelect.innerHTML = '<option value="" disabled selected>請選擇尺寸</option>';
        priceSpan.innerText = "0";  // 重設價格

        // 把對應的尺寸塞進第二個選單
        for (let size in sizes) {
            const opt = document.createElement('option');
            opt.value = size;
            opt.innerHTML = size;
            sizeSelect.appendChild(opt);
        }
        
    };

    // 尺寸改變 更新鎖心
    sizeSelect.onchange = function() {
        const type = typeSelect.value;
        const size = this.value;
        const lockOptions = priceData[type][size];
        
        // 清空鎖心選項
        lockSelect.innerHTML = '<option value="" disabled selected>請選擇鎖心等級</option>';
        priceSpan.innerText = "0"; // 重設價格顯示

        // 取得鎖心選項
        const locklevels = Object.keys(lockOptions);

        // 產生選項
        locklevels.forEach(function(level) {
            const opt = document.createElement('option');
            opt.value = level;
            opt.innerHTML = level;
            lockSelect.appendChild(opt);
        });

    };  


    lockSelect.onchange = function() {
        const type = typeSelect.value;
        const size = sizeSelect.value;
        const lock = this.value;

        const finalPrice = priceData[type][size][lock]
        priceSpan.innerText = finalPrice.toLocaleString();
    };

   

    
// =============
// 點擊選單換圖
// =============

//  建立專屬說明資料庫
const patternSpecs = {
    "01": [
        '紅鐵砂色',
        '外看 / 全開'
    ],
    "02": [
        '紅鐵砂色',
        '內看 / 全開'
    ],
    "03": [
        '深灰砂閃銀色',
        '門花:F10 三元及第',
        '外看/全開/開天全開'
    ],
    "03-1": [
        '黑砂色',
        '門花:F1 3x7',
        '外看/全開'
    ],
    "03-2": [
        '淺灰砂色',
        '門花:F9 世學經論',
        '外看/全開'
    ],
    "03-3": [
        '咖啡砂閃銀',
        '門花:F8 歡天喜地',
        '外看/全開'
    ],
    "05": [
        '黑砂色',
        '門花:F9 世學經論',
        '外看/全關'
    ],
    "05-1": [
        '米白垂紋色',
        '門花:F1 3X7',
        '外看/全關'
    ],
    "05-2": [
        '咖啡砂閃銀色',
        '門花:F7 生生不息',
        '外看/全關'
    ],
    "05-3": [
        '深灰砂閃銀色',
        '門花:F10 三元及第',
        '外看/全開'
    ],
    "05-4": [
        '紅鐵砂色',
        '門花:F8 歡天喜地',
        '外看/全開'
    ],
};

let currentPattern = '01';

const doorImage = document.getElementById('door-image');
const patternNameDisplay = document.getElementById('pattern-name');
const dynamicFeatures = document.getElementById('dynamic-features'); 
const patternBtns = document.querySelectorAll('.pattern-btn');

function updateVisual() {
    // 1. 更新型號文字
    patternNameDisplay.innerText = currentPattern;    
    
    // 2. 拼湊檔名並換掉圖片
    doorImage.src = `../images/樣品圖/百葉通風/${currentPattern}.jpg`;

    // 3. 更新專屬說明文字
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