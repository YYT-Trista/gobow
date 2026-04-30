/* 價格表 */
const priceData = {
    "first": { //01
        "100 x 208 cm": {
            '非甲級':73800,
            '甲級':88800
        },
        
        "118 x 208 cm": {
            '非甲級':81800,
            '甲級':97800
        },
    },

    "first2": { // 01子母門
        "140 x 208 cm": {
            '非甲級':104000,
            '甲級':132000
        },
        "150 x 208 cm": {
            '非甲級':114500,                                   
            '甲級':132000
        },
        "151 x 208 cm": {
            '非甲級':135000,
            '甲級':177500            
        },
    },

    "second": { // 02
        "100 x 208 cm": {
            '非甲級':56500,
            '甲級':81500
        },
        
        "118 x 208 cm": {
            '非甲級':64500,
            '甲級':89500
        },
    },

    "second2": { // 02子母門
        "140 x 208 cm": {
            '非甲級':85000,
            '甲級':122500
        },
        "150 x 208 cm": {
            '非甲級':93500,                                   
            '甲級':122500
        },
        "151 x 208 cm": {
            '非甲級':110500,
            '甲級':158000
        },
    },

    "third": { // 03
        "100 x 208 cm": {
            '非甲級':47500
        },
        "118 x 208 cm": {
            '非甲級':56000
        }
    },

    "third2": { // 03子母門
        "140 x 208 cm": {
            '非甲級':71000
        },
        "150 x 208 cm": {
            '非甲級':78000                                
        },
        "151 x 208 cm": {
            '非甲級':92500
        },
    },

    "fifth": { // 05
        "100 x 208 cm": {
            '非甲級':73800,
            '甲級':93800
        },
        
        "118 x 208 cm": {
            '非甲級':81800,
            '甲級':102000
        },
    },

    "fifth2": { // 05子母門
        "140 x 208 cm": {
            '非甲級':111000,
            '甲級' :146000
        },
        "150 x 208 cm": {
            '非甲級':122000,
            '甲級' :146000                                
        },
        "151 x 208 cm": {
            '非甲級':144500,
            '甲級' :187500
        },
    },

   "sixth": { // 06
        "100 x 208 cm": {
            '非甲級':56500,
            '甲級':81500
        },
        
        "118 x 208 cm": {
            '非甲級':64500,
            '甲級':89500
        },
    },

    "sixth2": { // 06子母門
        "140 x 208 cm": {
            '非甲級':85000,
            '甲級' :122500
        },
        "150 x 208 cm": {
            '非甲級':93500,
            '甲級' :122500                                
        },
        "151 x 208 cm": {
            '非甲級':110500,
            '甲級' :158000
        },
    },

    "seventh": { // 07
        "100 x 208 cm": {
            '非甲級':40000,
            '甲級':60700
        },
        
        "118 x 208 cm": {
            '非甲級':48500,
            '甲級':69000
        },
    },

    "seventh2": { // 07子母門
        "140 x 208 cm": {
            '非甲級':63800,
            '甲級' :93000
        },
        "150 x 208 cm": {
            '非甲級':70500,
            '甲級' :93000                                
        },
        "151 x 208 cm": {
            '非甲級':83000,
            '甲級' :116500
        },
    },


};

/*表格清單*/
const tableData = {
    "01": [
        { type: "圓轉如意", size: "100 x 208 cm", price1: "$ 73,800",price2: "$ 88,800" },
        { type: "", size: "118 x 208 cm", price1: "$ 81,800" ,price2: "$ 97,800" },
        { type: "圓轉如意子母門", size: "140 x 208 cm", price1: "$ 104,000" ,price2: "$ 132,000" },
        { type: "", size: "150 x 208 cm", price1: "$ 114,000" ,price2: "$ 132,000" },
        { type: "", size: "151 x 208 cm", price1: "$ 135,000" ,price2: "$ 177,500" }
    ],
    "02": [
        { type: "行方", size: "100 x 208 cm", price1: "$ 56,500",price2: "$ 81,500" },
        { type: "", size: "118 x 208 cm", price1: "$ 64,500" ,price2: "$ 89,500" },
        { type: "行方子母門", size: "140 x 208 cm", price1: "$ 85,000" ,price2: "$ 122,500" },
        { type: "", size: "150 x 208 cm", price1: "$ 93,500" ,price2: "$ 122,500" },
        { type: "", size: "151 x 208 cm", price1: "$ 110,500" ,price2: "$ 158,000" }
    ],
    "03": [
        { type: "如日中天", size: "100 x 208 cm", price1: "$ 47,500",price2: "x" },
        { type: "", size: "118 x 208 cm", price1: "$ 56,000" ,price2: "x" },
        { type: "如日中天子母門", size: "140 x 208 cm", price1: "$ 71,000" ,price2: "x" },
        { type: "", size: "150 x 208 cm", price1: "$ 78,000" ,price2: "x" },
        { type: "", size: "151 x 208 cm", price1: "$ 92,500" ,price2: "x" }
    ],
    "05": [
        { type: "洞悉天下", size: "100 x 208 cm", price1: "$ 73,800",price2: "$ 93,800" },
        { type: "", size: "118 x 208 cm", price1: "$ 81,800" ,price2: "$ 102,000" },
        { type: "洞悉天下子母門", size: "140 x 208 cm", price1: "$ 111,000" ,price2: "146,000" },
        { type: "", size: "150 x 208 cm", price1: "$ 122,000" ,price2: "146,000" },
        { type: "", size: "151 x 208 cm", price1: "$ 144,500" ,price2: "187,500" }
    ],
    "06": [
        { type: "雀躍三日", size: "100 x 208 cm", price1: "$ 56,500",price2: "$ 81,500" },
        { type: "", size: "118 x 208 cm", price1: "$ 64,500" ,price2: "$ 89,500" },
        { type: "雀躍三日子母門", size: "140 x 208 cm", price1: "$ 85,000" ,price2: "122,500" },
        { type: "", size: "150 x 208 cm", price1: "$ 93,500" ,price2: "122,500" },
        { type: "", size: "151 x 208 cm", price1: "$ 110,500" ,price2: "158,000" }
    ],
    "07": [
        { type: "一舉兩得", size: "100 x 208 cm", price1: "$ 40,000",price2: "$ 60,700" },
        { type: "", size: "118 x 208 cm", price1: "$ 48,500" ,price2: "$ 69,000" },
        { type: "一舉兩得子母門", size: "140 x 208 cm", price1: "$ 63,800" ,price2: "93,000" },
        { type: "", size: "150 x 208 cm", price1: "$ 70,500" ,price2: "93,000" },
        { type: "", size: "151 x 208 cm", price1: "$ 83,000" ,price2: "116,500" }
    ],
};
    
const priceTableBody = document.getElementById('price-table-body');

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

// 建立說明資料庫
const patternSpecs = {
    "01": [
        '深灰砂閃銀',
        '圓轉如意(雙面造型)',
        '玻璃:採烤漆玻璃+銀色立體造型'
    ],
    "02": [
        '灰砂色',
        '行方(雙面造型)',
        '玻璃:採噴砂造型玻璃'
    ],
    "03": [
        '黑砂色',
        '如日中天(雙面造型)',
        '玻璃:可挑選金絲玻璃/銀絲玻璃'
    ],
    "05": [
        '深灰砂閃銀',
        '洞悉天下(雙面造型)',
        '玻璃:鋼板烤漆+反射玻璃'
    ],
    "06": [
        '淺灰砂色',
        '雀躍三日(雙面造型)',
        '玻璃:採噴砂造型玻璃'
    ],
    "07": [
        '青銅砂色',
        '一舉兩得(雙面造型)'
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
    doorImage.src = `樣品圖/日式玄關門/${currentPattern}.jpg`;

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
                <td><b>${row.type}</b></td>
                <td>${row.size}</td>
                <td>${row.price1}</td>
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