/* 價格表 */
const priceData = {
    "first": { //01
        "100 x 208 cm": {
            '非甲級':52500,
            '甲級':77500
        },
        
        "118 x 208 cm": {
            '非甲級':61000,
            '甲級':86000
        },
    },

    "first2": { // 01子母門
        "140 x 208 cm": {
            '非甲級':79000,
            '甲級':116000
        },
        "150 x 208 cm": {
            '非甲級':87000,                                   
            '甲級':116000
        },
        "151 x 208 cm": {
            '非甲級':102500,
            '甲級':150000            
        },
    },

    "second": { // 02
        "100 x 208 cm": {
            '非甲級':93000,
            '甲級':112000
        },
        
        "118 x 208 cm": {
            '非甲級':101000,
            '甲級':120000
        },
    },

    "second2": { // 02子母門
        "140 x 208 cm": {
            '非甲級':140000,
            '甲級':185000
        },
        "150 x 208 cm": {
            '非甲級':154000,                                   
            '甲級':185000
        },
        "151 x 208 cm": {
            '非甲級':182000,
            '甲級':224000
        },
    },

    "third": { // 03  // 跟02是一樣的 其實html也不會有資料導過來 直接設在02了
        "100 x 208 cm": {
            '非甲級':93000,
            '甲級':112000
        },
        
        "118 x 208 cm": {
            '非甲級':101000,
            '甲級':120000
        },
    },

    "third2": { // 03子母門
        "140 x 208 cm": {
            '非甲級':140000,
            '甲級':185000
        },
        "150 x 208 cm": {
            '非甲級':154000,                                   
            '甲級':185000
        },
        "151 x 208 cm": {
            '非甲級':182000,
            '甲級':224000
        },
    },

    "fifth": { // 05
        "120 x 245 cm": {
            '非甲級':350000
        },
        
        "150 x 245 cm": {
            '非甲級':470000
        },

        "240 x 245 cm": {
            '非甲級' :590000
        }
    },

};

/*表格清單*/
const tableData = {
    "01": [
        { type: "川流不息·直卡", size: "100 x 208 cm", price1: "$ 52,500",price2: "$ 77,500" },
        { type: "", size: "118 x 208 cm", price1: "$ 61,000" ,price2: "$ 86.000" },
        { type: "川流不息·直卡", size: "140 x 208 cm", price1: "$ 79,000" ,price2: "$ 116,000" },
        { type: "", size: "150 x 208 cm", price1: "$ 87,000" ,price2: "$ 116,000" },
        { type: "", size: "151 x 208 cm", price: "$ 102,500" ,price2: "$ 150,000" }
    ],
    "02": [
        { type: "山川大地/百鍊成鋼", size: "100 x 208 cm", price1: "$ 93,000",price2: "$ 112,000" },
        { type: "", size: "118 x 208 cm", price1: "$ 101,000" ,price2: "$ 120,000" },
        { type: "山川大地/百鍊成鋼子母門", size: "140 x 208 cm", price1: "$ 140,000" ,price2: "$ 185,000" },
        { type: "", size: "150 x 208 cm", price1: "$ 154,000" ,price2: "$ 185,000" },
        { type: "", size: "151 x 208 cm", price1: "$ 182,000" ,price2: "$ 224,000" }
    ],
    "03": [
        { type: "山川大地/百鍊成鋼", size: "100 x 208 cm", price1: "$ 93,000",price2: "$ 112,000" },
        { type: "", size: "118 x 208 cm", price1: "$ 101,000" ,price2: "$ 120,000" },
        { type: "山川大地/百鍊成鋼子母門", size: "140 x 208 cm", price1: "$ 140,000" ,price2: "$ 185,000" },
        { type: "", size: "150 x 208 cm", price1: "$ 154,000" ,price2: "$ 185,000" },
        { type: "", size: "151 x 208 cm", price1: "$ 182,000" ,price2: "$ 224,000" }
    ],
    "05": [
        { type: "磐石·致遠", size: "120 x 245 cm", price1: "$ 350,000",price2: " x " },
        { type: "", size: "150 x 245 cm", price1: "$ 470,000" ,price2: " x " },
        { type: "", size: "240 x 245 cm", price1: "$ 590,000" ,price2: " x " },
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
        '灰砂色',
        '正面/屋外:川流不息',
        '反面/屋內:直卡'
    ],
    "02": [
        '咖啡砂閃銀',
        '山川大地(雙面造型)',
        '綠橡木天然石材(原礦)'
        
    ],
    "03": [
        '黑砂色',
        '山川大地(雙面造型)',
        '金龍石天然石材(原礦)'
    ],
    "05": [
        '手工菱格紋',
        '磐石・致遠',
        '正面/屋外:綠橡木天然石材(原礦)',
        '反面/屋內:天然實木直紋風化胡桃木色'
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
    doorImage.src = `../樣品圖/日式玄關門/${currentPattern}.jpg`;

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