/* 價格表 */
const priceData = {
    "01": { 
        "碳纖維防爆門": 218000,
        "碳纖維防爆門子母門": 327000,
        "碳纖維防爆門雙開門": 435000
    },
    "02": { 
        "碳纖維防爆門": 218000,
        "碳纖維防爆門子母門": 327000,
        "碳纖維防爆門雙開門": 435000
    },
    "03": { 
        "碳纖維防爆門": 350000,
        "碳纖維防爆門子母門": 539000,
        "碳纖維防爆門雙開門": 635000
    },
    "05": { 
        "碳纖維防爆門": 350000,
        "碳纖維防爆門子母門": 539000,
        "碳纖維防爆門雙開門": 635000
    },
    "06": { 
        "碳纖維防爆門": 350000,
        "碳纖維防爆門子母門": 539000,
        "碳纖維防爆門雙開門": 635000
    },
    "07": { 
        "碳纖維防爆門": 350000,
        "碳纖維防爆門子母門": 539000,
        "碳纖維防爆門雙開門": 635000
    },
    "08": { 
        "碳纖維防爆門": 350000,
        "碳纖維防爆門子母門": 539000,
        "碳纖維防爆門雙開門": 635000
    },
    "09": { 
        "碳纖維防爆門": 350000,
        "碳纖維防爆門子母門": 539000,
        "碳纖維防爆門雙開門": 635000
    }
};

/*表格清單*/
const tableData = {
    "01": [
        { type: "碳纖維防爆門", size: "120 x 240 cm", price1: "x", price2: "$ 218,000" },
        { type: "碳纖維防爆門子母門", size: "150 x 240 cm", price1: "x", price2: "$ 327,000" },
        { type: "碳纖維防爆門雙開門", size: "240 x 240 cm", price1: "x", price2: "$ 435,000" }
    ],
    "02": [
        { type: "碳纖維防爆門", size: "120 x 240 cm", price1: "x", price2: "$ 218,000" },
        { type: "碳纖維防爆門子母門", size: "150 x 240 cm", price1: "x", price2: "$ 327,000" },
        { type: "碳纖維防爆門雙開門", size: "240 x 240 cm", price1: "x", price2: "$ 435,000" }
    ],
    "03": [
        { type: "碳纖維防爆門", size: "120 x 240 cm", price1: "x", price2: "$ 350,000" },
        { type: "碳纖維防爆門子母門", size: "150 x 240 cm", price1: "x", price2: "$ 539,000" },
        { type: "碳纖維防爆門雙開門", size: "240 x 240 cm", price1: "x", price2: "$ 635,000" }
    ],
    "05": [
        { type: "碳纖維防爆門", size: "120 x 240 cm", price1: "x", price2: "$ 350,000" },
        { type: "碳纖維防爆門子母門", size: "150 x 240 cm", price1: "x", price2: "$ 539,000" },
        { type: "碳纖維防爆門雙開門", size: "240 x 240 cm", price1: "x", price2: "$ 635,000" }
    ],
    "06": [
        { type: "碳纖維防爆門", size: "120 x 240 cm", price1: "x", price2: "$ 350,000" },
        { type: "碳纖維防爆門子母門", size: "150 x 240 cm", price1: "x", price2: "$ 539,000" },
        { type: "碳纖維防爆門雙開門", size: "240 x 240 cm", price1: "x", price2: "$ 635,000" }
    ],
    "07": [
        { type: "碳纖維防爆門", size: "120 x 240 cm", price1: "x", price2: "$ 350,000" },
        { type: "碳纖維防爆門子母門", size: "150 x 240 cm", price1: "x", price2: "$ 539,000" },
        { type: "碳纖維防爆門雙開門", size: "240 x 240 cm", price1: "x", price2: "$ 635,000" }
    ],
    "08": [
        { type: "碳纖維防爆門", size: "120 x 240 cm", price1: "x", price2: "$ 350,000" },
        { type: "碳纖維防爆門子母門", size: "150 x 240 cm", price1: "x", price2: "$ 539,000" },
        { type: "碳纖維防爆門雙開門", size: "240 x 240 cm", price1: "x", price2: "$ 635,000" }
    ],
    "09": [
        { type: "碳纖維防爆門", size: "120 x 240 cm", price1: "x", price2: "$ 350,000" },
        { type: "碳纖維防爆門子母門", size: "150 x 240 cm", price1: "x", price2: "$ 539,000" },
        { type: "碳纖維防爆門雙開門", size: "240 x 240 cm", price1: "x", price2: "$ 635,000" }
    ]
};
    
const priceTableBody = document.getElementById('price-table-body');

const numberSelect = document.getElementById('number-select');
const typeSelect = document.getElementById('type-select');
const priceSpan = document.getElementById('total-price');

// 選型號
    numberSelect.onchange = function() {
        const number = this.value;
        const types = priceData[number]; // 第一層

        //選完之後要把後面的選項清空
        typeSelect.innerHTML = '<option value="" disabled selected>請選擇門型</option>'; 

        // 挑選項
        for (let type in types) {
            const opt = document.createElement('option');
            opt.value = type;
            opt.innerHTML = type;
            typeSelect.appendChild(opt);
        }
    };

    // 選完換算錢
    typeSelect.onchange = function() {
    const number = numberSelect.value;
    const type = this.value;
    
    // 直接從兩層資料庫中抓最後的錢
    const finalPrice = priceData[number][type];
    priceSpan.innerText = finalPrice.toLocaleString();
    };


   

    
// =============
// 點擊選單換圖
// =============

// 建立說明資料庫
const patternSpecs = {
    "01": [
        '深灰砂閃銀色',
        '端硯(雙面造型)',
        '該產品配有黑色不鏽鋼、碳纖維面飾板'
    ],
    "02": [
        '紅鐵砂色',
        '橫卡(雙面造型)',
        '該產品配灰砂色、深灰砂閃銀色不鏽鋼面飾板'
    ],
    "03": [
        '黃灰砂閃黃手工漆',
        '端硯(雙面造型)',
        '該產品配黑不鏽鋼面飾板'
    ],
    "05": [
        '灰砂色',
        '端硯(雙面造型)',
        '該產品配黑不鏽鋼、銀面飾板'
    ],
    "06": [
        '黑檀面飾漆',
        '橫卡(雙面造型)',
        '該產品配黑不鏽鋼色、木紋烤漆不鏽鋼手工漆'
    ],
    "07": [
        '黑檀面飾手工漆',
        '溫馨(雙面造型)',
        '該產品配黑不鏽鋼面飾板'
    ],
    "08": [
        '銀古銅手工漆',
        '雙翼(雙面造型)'
    ],
    "09": [
        '黑檀面飾漆',
        '大器(雙面造型)'
    ]
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
    doorImage.src = `../images/樣品圖/碳纖維防爆門/${currentPattern}.jpg`;

    // 更新專屬說明文字
    if (patternSpecs[currentPattern]) {
        dynamicFeatures.innerHTML = ""; // 先清空舊的項目
        patternSpecs[currentPattern].forEach(text => {
            const li = document.createElement('li');
            li.innerText = text;
            dynamicFeatures.appendChild(li);
        });
    }

    //價格表
    if (tableData[currentPattern]) {
        priceTableBody.innerHTML = ""; // 先清空舊表格
        tableData[currentPattern].forEach(row => {
            // 建立一行新橫列
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="color: #3e3f42;"><b>${row.type}</b></td>
                <td>${row.size}</td>
                <td>${row.price2}</td>
            `;
            priceTableBody.appendChild(tr);
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