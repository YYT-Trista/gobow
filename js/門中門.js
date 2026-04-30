    //價格表
    const priceData = {
        "double": { // 雙玄關門的尺寸價格
            "100 x 208 cm": {
                'COE5段鎖+3段暗栓':66000,
                '提升雙鎖心 (+6000)':72000
            },
        
            "118 x 208 cm": {
                'COE5段鎖+3段暗栓':79200,
                '提升雙鎖心 (+6000)':85200
            },
        },

        "child-mother": { // 子母門的尺寸價格
            "140 x 208 cm": {
                'COE5段鎖+3段暗栓':99000,
                '提升雙鎖心 (+6000)':105000
            },
            "150 x 208 cm": {
                'COE5段鎖+3段暗栓':109000,
                '提升雙鎖心 (+6000)':115000
            },
            "151 x 208 cm": {
                'COE5段鎖+3段暗栓':128500,
                '提升雙鎖心 (+6000)':134500
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
        priceSpan.innerText = "0";  // 重設價格顯示

        // 把對應的尺寸塞進第二個選單
        for (let size in sizes) {
            const opt = document.createElement('option');
            opt.value = size;
            opt.innerHTML = size;
            sizeSelect.appendChild(opt);
        }
        
    };

    // 尺寸改變後 換鎖心
    sizeSelect.onchange = function() {
        const type = typeSelect.value;
        const size = this.value;
        const lockOptions = priceData[type][size];
        
        // 清空舊的鎖心選項
        lockSelect.innerHTML = '<option value="" disabled selected>請選擇鎖心等級</option>';
        priceSpan.innerText = "0"; // 重設價格顯示

        // 取得鎖心選項
        const locklevels = Object.keys(lockOptions);

        // 3. 產生選項
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

// 1. 建立專屬說明資料庫
const patternSpecs = {
    "01": [
        '門花:F6 五福臨門',
        '外看 / 開'
    ],
    "02": [
        '門花:D3 璀璨',
        '外看/開'
    ],
    "03": [
        '寬板導角',
        '門花:A11 百事大吉',
        '內看/開'
    ],
    "05": [
        '精雕 石角(雙面造型)',
        '門花:A1橫格',
        '外看/開'
    ],
    "06": [
        '一體成型精雕 錢幣(雙面造型)',
        '門花:E7 錢幣',
        '外看/開'
    ],
    "07": [
        '琉璃',
        '魚躍龍門(單面造型)'
    ],
    "07-1": [
        '琉璃(外門) ',
        '魚躍龍門(單面造型)'
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
    doorImage.src = `../樣品圖/門中門/${currentPattern}.jpg`;

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