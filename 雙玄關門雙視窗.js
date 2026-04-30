    /* 價格表 */
    const priceData = {
        "double": { // 雙玄關門的尺寸價格
            "100 x 208 cm": {
                '非甲級':79500,
                '甲級':100500
            },
        
            "118 x 208 cm": {
                '非甲級':87500,
                '甲級':108500
            },
        },

        "child-mother": { // 子母門的尺寸價格
            "140 x 208 cm": {
                '非甲級':119500,
                '甲級':154000
            },
            "150 x 208 cm": {
                '非甲級':131500,                                   
                '甲級':154000
            },
            "151 x 208 cm": {
                '非甲級':155500,
                '甲級':196000
            },
        },
        "single-out": { // 外門的尺寸價格
            "100 x 208 cm": {
                '非甲級':55000
            },
            "118 x 208 cm": {
                '非甲級':63000
            }
        }
    };
                

    

    const typeSelect = document.getElementById('type-select');
    const sizeSelect = document.getElementById('size-select');
    const fireSelect = document.getElementById('fire-select');
    const priceSpan = document.getElementById('total-price');

    // 門型改變更新尺寸
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

    // 尺寸改變 更新防火
    sizeSelect.onchange = function() {
        const type = typeSelect.value;
        const size = this.value;
        const fireOptions = priceData[type][size];
        
        // 清空舊的防火選項
        fireSelect.innerHTML = '<option value="" disabled selected>請選擇防火等級</option>';
        priceSpan.innerText = "0"; // 重設價格顯示

        // 取得所有的防火選項清單
        const firelevels = Object.keys(fireOptions);

        // 產生選項
        firelevels.forEach(function(level) {
            const opt = document.createElement('option');
            opt.value = level;
            opt.innerHTML = level;
            fireSelect.appendChild(opt);
        });

    };  


    fireSelect.onchange = function() {
        const type = typeSelect.value;
        const size = sizeSelect.value;
        const fire = this.value;

        const finalPrice = priceData[type][size][fire]
        priceSpan.innerText = finalPrice.toLocaleString();
    };

   

    
// =============
// 點擊選單換圖
// =============

// 1. 建立說明資料庫
const patternSpecs = {
    "01": [
        '外門:A10禪',
        '內門:卡登(雙面造型)'
    ],
    "02": [
        '外門:A7崇山峻嶺',
        '內門:卡登(雙面造型)'
    ],
    "03": [
        '外門:A11百事大吉',
        '內門:卡登(雙面造型)'
    ],
    "05": [
        '外門:E6 GB',
        '內門:卡登(雙面造型)'
    ],
    "06": [
        '外門:E1生生不息',
        '內門:卡登(雙面造型)'
    ],
    "07": [
        '外門:E5三元及第',
        '內門:卡登(雙面造型)'
    ],
    "08": [
        '外門:A2 三星拱照',
        '內門:卡登(雙面造型)'
    ],
    "09": [
        '外門:E3世學經論',
        '內門:卡登(雙面造型)'
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
    doorImage.src = `樣品圖/雙視窗/${currentPattern}.jpg`;

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