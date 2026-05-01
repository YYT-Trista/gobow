    // 1. 建立價格資料庫 (這就是你的二階對照表)
    const priceData = {
        "double": { // 鋼製壓板的尺寸價格 借用雙玄關的名字啦
            "100 x 208 cm": {
                "非甲級": {
                    '外門：雙鎖心 , 內門：COE5段鎖+3段暗栓' :40000,
                    '更換鎖心（+6000）':46000
                },
                "甲級": {
                    '外門：雙鎖心 , 內門：COE5段鎖+3段暗栓' :60700,
                    '更換鎖心（+6000）':66700
                }
            },
            "118 x 208 cm":{
                "非甲級": {'外門：雙鎖心 , 內門：COE5段鎖+3段暗栓' :48500,
                    '更換鎖心（+6000）':54500
                },
                "甲級": {'外門：雙鎖心 , 內門：COE5段鎖+3段暗栓' :69000,
                    '更換鎖心（+6000）':75000
                }
            }
        },

        "child-mother": { // 鋼製壓板子母門的尺寸價格
            "140 x 208 cm": {
                "非甲級": {
                    '外門：雙鎖心 , 內門：COE5段鎖+3段暗栓' :63800,
                    '更換鎖心（+6000）':66800
                },
                "甲級": {
                    '外門：雙鎖心 , 內門：COE5段鎖+3段暗栓' :93000,
                    '更換鎖心（+6000）':99000
                }
            },
            "150 x 208 cm": {
                "非甲級": {'外門：雙鎖心 , 內門：COE5段鎖+3段暗栓' :70500,
                    '更換鎖心（+6000）':77500
                },
                "甲級": {
                    '外門：雙鎖心 , 內門：COE5段鎖+3段暗栓' :93000,
                    '更換鎖心（+6000）':99000
                }
            },
            "151 x 208 cm": {
                "非甲級": {
                    '外門：雙鎖心 , 內門：COE5段鎖+3段暗栓' :83000,
                    '更換鎖心（+6000）':89000
                },
                "甲級": {
                    '外門：雙鎖心 , 內門：COE5段鎖+3段暗栓' :116500,
                    '更換鎖心（+6000）':122500
                }
            }
        }
    };

    

    const typeSelect = document.getElementById('type-select');
    const sizeSelect = document.getElementById('size-select');
    const fireSelect = document.getElementById('fire-select');
    const lockSelect = document.getElementById('lock-select');
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

    // 尺寸改變後 換防火
    sizeSelect.onchange = function() {
        const type = typeSelect.value;
        const size = this.value;
        const fireOptions = priceData[type][size];
        
        // 清空舊的防火選項
        fireSelect.innerHTML = '<option value="" disabled selected>請選擇防火等級</option>';
        priceSpan.innerText = "0"; // 重設價格顯示

        // 取得所有的防火選項清單
        const firelevels = Object.keys(fireOptions);

        // 3. 產生選項
        firelevels.forEach(function(level) {
            const opt = document.createElement('option');
            opt.value = level;
            opt.innerHTML = level;
            fireSelect.appendChild(opt);
        });

    };  

    // 鎖心
    fireSelect.onchange = function() {
        const type = typeSelect.value;
        const size = sizeSelect.value;
        const fire = this.value
        const lockOptions = priceData[type][size][fire];
        
        lockSelect.innerHTML = '<option value="" disabled selected>請選擇更換鎖心</option>';
        for (let lock in lockOptions) {
            const opt = document.createElement('option');
            opt.value = lock;
            opt.innerHTML = lock;
            lockSelect.appendChild(opt);
        }

    };  

    lockSelect.onchange = function() {
        const type = typeSelect.value;
        const size = sizeSelect.value;
        const fire = fireSelect.value;
        const lock = this.value;

        const finalPrice = priceData[type][size][fire][lock]
        priceSpan.innerText = finalPrice.toLocaleString();
    };

   

    
// =============
// 點擊選單換圖
// =============

// 1. 建立「門花系列」的專屬說明資料庫
const patternSpecs = {
    "01": [
        '極光(雙面造型)'
    ],
    "02": [
        '橫卡(雙面造型)'
    ],
    "03": [
        '5+1(雙面造型)'
    ],
    "05": [
        '永恆(雙面造型)'
    ],
    "06": [
        '觀自在(雙面造型)',
        '※子門為素面造型'
    ],
    "07": [
        '晶鑽(雙面造型)'
    ],
    "08": [
        '圓融(雙面造型)'
    ],
    "09": [
        '迎福(雙面造型)',
        '※子門為素面造型'
    ],
    "10": [
        '韻律(雙面造型)',
        '※子門為素面造型'
    ],
    "11": [
        '一以貫之(雙面造型)',
        '※此款無子母門工法'
    ],
    "12": [
        '外門:F12 GB',
        '內門:晶鑽(雙面造型)'
    ],
    "13": [
        '外門:F11三陽開泰',
        '內門:橫卡(雙面造型)'
    ],
    "15": [
        '外門:F12 GB',
        '內門:觀自在(雙面造型)'
    ],
    "16": [
        '外門:春風(子門無門花)',
        '內門:迎福(雙面造型)'
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
    
    // 湊檔名並換掉圖片
    doorImage.src = `../images/樣品圖/鋼製壓板/${currentPattern}.jpg`;

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