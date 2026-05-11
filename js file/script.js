const products = [
    {
        id: 1,
        name: "V70 FE Dual Sim Titanium Silver",
        category: "Phone",
        price: 22990,
        image: "../image products/phones/vivo-v60.png",
        rating: 5
    },
       {
        id: 2,
        name: "Galaxy Tab A9 Plus Graphite 8GB RAM 128GB 5G - Middle East Version",
        category: "tablets",
        price: 9000,
        image: "../image products/tablets/Galaxy Tab A9 Plus Graphite 8GB RAM 128GB 5G - Middle East Version.png",
        rating: 4.5
    },
    {
        id: 3,
        category: "wearable",
        name: "220 mAh O20 Smartwatch - 2.04'' Display, IP68 Waterproof Deep Blue",
        price: 1000,
        image: "../image products/wearable/220 mAh O20 Smartwatch - 2.04'' Display, IP68 Waterproof Deep Blue.png",
        rating: 5
    },
    {
        id: 4,
        name: "20000 mAh 20000 mAh 22.5W JR-PBF16 20000mAh LED Fast Charging",
        category: "accessories",
        price: 1500,
        image: "../image products/accessories/20000 mAh 20000 mAh 22.5W JR-PBF16 20000mAh LED Fast Charging.png",
        rating: 5
    },
   
    {
        id: 5, 
        name: "Q11i Wireless Over-Ear Bluetooth Headphones by Anker",
        category: "headset",
        price: 7400,
        image: "../image products/headphone/Q11i Wireless Over-Ear Bluetooth Headphones by Anker.png",
        rating: 5
    },
   
    {
        id: 6,
        name: "X6c Dual SIM 4G Moonlight White",
        category: "Phone",
        price: 7400,
        image: "../image products/phones/honor-X6c.png",
        rating: 5
    },
      {
        id: 7,
        name: "iPad 2025 (11th Generation) A16 11-inch Wi-Fi 128GB Silver",
        category: "tablets",
        price: 8000,
        image: "../image products/tablets/iPad 2025 (11th Generation) A16 11-inch Wi-Fi 128GB Silver.png",

        rating: 5
    },
    {
        id: 8,
        name: "Band 11 Smart Watch, Enhanced Sleep Tracking",
        category: "wearable",
        price: 2500,
        image: "../image products/wearable/Band 11 Smart Watch, Enhanced Sleep Tracking.png",
        rating: 5
    },
    {
        id: 9,
        name: "Case for iPhone 16 Pro Max Shockproof Magnetic Phone Case",
        category: "accessories",
        price: 500,
        image: "../image products/accessories/Case for iPhone 16 Pro Max Shockproof Magnetic Phone Case.png",
        rating: 5
    },
    {
        id: 10,
        name: "Tune 520Bt Wireless On Ear Headphones Pure Bass Sound 57H",
        category: "headset",
        price: 7400,
        image: "../image products/headphone/Tune 520Bt Wireless On Ear Headphones Pure Bass Sound 57H.png",
        rating: 5
    },
      {
        id: 11,
        name: "Galaxy A17 Dual SIM 4G Gray",
        category: "Phone",
        price: 8725,
        image: "../image products/phones/galaxy-a17.png",
        rating: 5
    },
      {
        id: 12,
        name: "Matepad SE 11-Inch Tablet Nebula Gray",
        category: "Tablets",
        price: 35000,
        image: "../image products/tablets/Matepad SE 11-Inch Tablet Nebula Gray.png",
        rating: 4.3
    },
      {
        id: 13,
        name: "One – 12-Month Membership – 5.0 Health and Fitness Wearable",
        category: "wearable",
        price: 3725,
        image: "../image products/wearable/One 12Month Membership Wearable.png",
        rating: 5
    },
      {
        id: 14,
        name: "Compatible-with-Case-for-Samsung-Galaxy-Tab-S8",
        category: "accessories",
        price: 1200,
        image: "../image products/accessories/Compatible-with-Case-for-Samsung-Galaxy-Tab-S8.png",
        rating: 4.5
    },
      {
        id: 15,
        name: "V20i by Anker Open-Ear Headphones",
        category: "headset",
        price: 2500,
        image: "../image products/headphone/V20i by Anker Open-Ear Headphones.png",
        rating: 4.4
    },
     {
        id: 16,
        name: "Note 50 S Dual SIM Titanium Grey",
        category: "Phone",
        price: 13300,
        image: "../image products/phones/Note-50-s.png",
        rating: 5
    },
    {
        id: 17,
        name: "Pad X8b WiFi Space Grey 4GB RAM 128GB WiFi With Flip Cover",
        category: "tablets",
        price: 8300,
        image: "../image products/tablets/Pad X8b WiFi Space Grey 4GB RAM 128GB WiFi With Flip Cover.png",
        rating: 5
    },
    {
       id: 18,
       name: "X10 Wearfit Pro Smart Watch",
       category: "wearable",
       price: 3300,
       image: "../image products/wearable/X10_Series_10_Wearfit_Pro_Smart_Watch.png",
       rating: 5
   },
     {
        id: 19,
        name: "POCO Pad M1 12.1 Grey 8GB RAM 256GB WiFi - Global Version",
        category: "tablets",
        price: 8000,
        image: "../image products/tablets/POCO Pad M1 12.1 Grey 8GB RAM 256GB WiFi - Global Version.png",
        rating: 5
    },
     {
        id: 20,
        name: "Xiaomi Smart Band 10  1.72'' AMOLED Display Touchscreen",
        category: "wearable",
        price: 2800,
        image: "../image products/wearable/Xiaomi Smart Band 10  1.72'' AMOLED Display Touchscreen.png",
        rating: 5
    },
];


let currentCategory = 'all';

function displayProducts(productsArray) {
    const container = document.getElementById("various-products");
    if (!container) return;

    container.innerHTML = "";

    if (productsArray.length === 0) {
        container.innerHTML = `<p style="text-align:center; width:100%; color:var(--text); padding:20px;">No products found.</p>`;
        return;
    }

    productsArray.forEach(product => {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}">
                <span class="name">${product.name}</span>
                <div class="rating">${product.rating}⭐</div>
                <div class="details">
                    <span class="price">${product.price}<span> EGP</span></span>
                    <button class="add-to-cart" onclick="Buy(${product.id})">BUY NOW</button>
                </div>
            </div>
        `;
    });
}

function applyFilters() {
    const searchBar = document.getElementById("SEARCH");
    const searchTerm = searchBar ? searchBar.value.toLowerCase() : "";

    const filtered = products.filter(p => {
        const matchesCategory = currentCategory === 'all' || 
                                (p.category && p.category.toLowerCase() === currentCategory.toLowerCase());
        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });

    displayProducts(filtered);
}

function filterProducts(categoryName) {
    currentCategory = categoryName;
    applyFilters();
}

function Buy(productID) {
    const product = products.find(p => p.id == productID);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('MYCART')) || [];
        const existingProduct = cart.find(item => item.id == productID);

        if (existingProduct) {
            existingProduct.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }
        
        localStorage.setItem('MYCART', JSON.stringify(cart));
        alert(`Added ${product.name} to cart!`);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const isHomePage = window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/");

    if (isHomePage) {
        displayProducts(products.slice(0, 5));
    } else {
        displayProducts(products);
    }
    // -----------------------------------------------

    const searchBar = document.getElementById("SEARCH");
    if (searchBar) {
        searchBar.addEventListener("input", applyFilters);
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const authSection = document.querySelector(".btn");

    if (currentUser && authSection) {
        const oldLoginBtn = authSection.querySelector("button:not(.theme-toggle-btn)");
        if (oldLoginBtn) oldLoginBtn.remove();

        const userDiv = document.createElement("div");
        userDiv.style.cssText = "display:flex; align-items:center; gap:10px; margin-left:10px;";
        userDiv.innerHTML = `
            <span style="font-weight: 600; font-size: 14px; color:var(--text);">Hi, ${currentUser.name.split(' ')[0]}</span>
            <button onclick="logout()" style="background: #e05252; color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; font-size: 12px;">Logout</button>
        `;
        authSection.appendChild(userDiv);
    }
});

function logout() {
    localStorage.removeItem("currentUser");
    window.location.reload();
}