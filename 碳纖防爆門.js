    // 價格表
    const priceData = {
        "double": { // 碳纖維防爆門
            "120 x 240 cm": 218000
        },

        "child-mother": { // 碳纖維防爆子母門
            "150 x 240 cm": 327000
        },

        "single-out": { // 碳纖維防爆雙開門
            "240 x 240 cm": 435000
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
        '深灰砂閃銀',
        '臻藏(雙面造型)',
        '該產品也有黑砂色、紅鐵砂色'
    ],
    "01-1": [
        '銅雕面飾漆',
        '臻藏(雙面造型)'
    ],
    "02": [
        '紅鐵砂色',
        '漣漪(雙面造型)',
        '該產品也有黑砂色、深灰砂閃銀'
    ],
    "02-1": [
        '銅雕面飾漆',
        '漣漪(雙面造型)'
    ],
    "03" : [
        '黃灰砂黃手染工法',
        '吉曜(雙面造型)'
    ],
    "03-1" : [
        '銅雕面飾漆',
        '吉曜(雙面造型)'
    ],
    "03-2" : [
        '黑砂色',
        '吉曜(雙面造型)'
    ],
    "05" : [
        '全消光黑',
        '端硯(雙面造型)'
    ],
    "05" : [
        '全消光黑',
        '端硯(雙面造型)',
        '該產品也有紅鐵砂色'
    ],
    "05-1" : [
        '銅雕面飾漆',
        '端硯(雙面造型)'
    ],
    "06" : [
        '木紋烤漆手染工法',
        '雍和(雙面造型)',
        '該產品也有銅雕面飾漆和黑砂色'
    ],
    "07" : [
        '木紋手染工法',
        '掬馨(雙面造型)'
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
    doorImage.src = `樣品圖/碳纖防爆門/${currentPattern}.jpg`;

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