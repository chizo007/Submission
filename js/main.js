(function ($) {
    "use strict";
    
    function fetchData(pageNo, category) {
        $.ajax({
            url: 'https://dummyjson.com/products/category/tablets',
            method: "GET",
            contentType: "application/json",
            success: function (data) {
                const products = data.products;
                const filteredProducts = category === "all" ? products : products.filter(product => product.furniture === category);
                
                $("#child").empty(); // Clear previous products
                filteredProducts.forEach(product => {
                    $("#child").append(`
                        <div class="container-fluid pt-5 bg-light border-3" style="width: 95%; border-radius: 12px;" >
                            <div class="text-left mb-4">
                            </div>
                            <div id="parent" class="row px-xl-5 pb-3">
                            </div>
       
                        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div class="card product-item border-0 mb-4">
                                <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img class="img-fluid w-100" src="${product.images[0]}" alt="">
                                </div>
                                <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 class="text-truncate mb-3">${product.title}</h6>
                                    <div class="d-flex justify-content-center">
                                        <h6>${product.price}</h6><h6 class="text-muted ml-2"><del>${product.price}</del></h6>
                                    </div>
                                </div>
                                <div class="card-footer d-flex justify-content-between bg-light border">
                                    <a href="home.html?id=${product.id}" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                    <a href="Cart.html" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    `);
                });
            },
        });
    }
    
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
            fetchData(0, "all"); // Fetch all products initially
        }
        
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        // Handle category filter change
        $('#categoryFilter').change(function () {
            const kitchen = $(this).val();
            fetchData(0, kitchen); // Fetch products based on selected category
        });
    });
    
    // Other existing code...

})(jQuery);

// Product Cards//


        const products = [
            {
                id: 1,
                image: "img/JUICE.jpeg",
                name: "Bottled Fruit Juice",
                rating: 4.5,
                price: 120,
                description: "Refreshing fruit juice made from freshly squeezed fruits. No added sugars or preservatives."
            },
            {
                id: 1,
                image: "img/JUICE.jpeg",
                name: "Bottled Fruit Juice",
                rating: 4.5,
                price: 120,
                description: "Refreshing fruit juice made from freshly squeezed fruits. No added sugars or preservatives."
            },
            {
                id: 1,
                image: "img/JUICE.jpeg",
                name: "Bottled Fruit Juice",
                rating: 4.5,
                price: 120,
                description: "Refreshing fruit juice made from freshly squeezed fruits. No added sugars or preservatives."
            },
            {
                id: 1,
                image: "img/JUICE.jpeg",
                name: "Bottled Fruit Juice",
                rating: 4.5,
                price: 120,
                description: "Refreshing fruit juice made from freshly squeezed fruits. No added sugars or preservatives."
            },
            {
                id: 1,
                image: "img/JUICE.jpeg",
                name: "Bottled Fruit Juice",
                rating: 4.5,
                price: 120,
                description: "Refreshing fruit juice made from freshly squeezed fruits. No added sugars or preservatives."
            },
            {
                id: 1,
                image: "img/JUICE.jpeg",
                name: "Bottled Fruit Juice",
                rating: 4.5,
                price: 120,
                description: "Refreshing fruit juice made from freshly squeezed fruits. No added sugars or preservatives."
            },
            {
                id: 1,
                image: "img/JUICE.jpeg",
                name: "Bottled Fruit Juice",
                rating: 4.5,
                price: 120,
                description: "Refreshing fruit juice made from freshly squeezed fruits. No added sugars or preservatives."
            },
            {
                id: 1,
                image: "img/JUICE.jpeg",
                name: "Bottled Fruit Juice",
                rating: 4.5,
                price: 120,
                description: "Refreshing fruit juice made from freshly squeezed fruits. No added sugars or preservatives."
            },
            {
                id: 1,
                image: "img/JUICE.jpeg",
                name: "Bottled Fruit Juice",
                rating: 4.5,
                price: 120,
                description: "Refreshing fruit juice made from freshly squeezed fruits. No added sugars or preservatives."
            },
            // Add more product objects here...
        ];

        const productContainer = document.getElementById('productContainer');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        let currentIndex = 0;
        const itemsPerLoad = 4; // Changed to 8 to load two rows of 4 products each

        function createProductCard(product) {
            return `
                <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div class="card product-item border-0 mb-4 position-relative">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="${product.image}" alt="" />
                            <svg width="35" height="35" style="flex-shrink: 0; position: absolute; top: 0px; left: 0px; transform:rotate(-270deg);" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="0,35 29,35 14.5,0" fill="yellow" />
                            </svg>
                        </div>
                        <div class="card-footer d-flex flex-column align-items-start bg-light border">
                            <h6 class="text-truncate mb-3 text-dark">${product.name}</h6>
                            <span class="text-warning">
                                <i class="fas fa-star"></i> ${product.rating}
                            </span>
                            <h6 class="text-truncate mb-3 text-dark pt-2">#${product.price}</h6>
                            <div class="product-action">
                                <a href="#" class="btn btn-sm text-dark p-0 mb-2 view-detail" data-product-id="${product.id}">
                                    <i class="fas fa-eye text-primary mr-1"></i>View Detail
                                </a>
                                <a href="#" class="btn btn-sm text-dark p-0 add-to-cart" data-product-id="${product.id}">
                                    <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function loadMoreProducts() {
            const fragment = document.createDocumentFragment();
            const endIndex = Math.min(currentIndex + itemsPerLoad, products.length);
            
            for (let i = currentIndex; i < endIndex; i++) {
                const productHTML = createProductCard(products[i]);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = productHTML;
                fragment.appendChild(tempDiv.firstElementChild);
            }
            
            productContainer.appendChild(fragment);
            currentIndex = endIndex;

            if (currentIndex >= products.length) {
                loadMoreBtn.style.display = 'none';
            }
        }

        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                document.getElementById('productModalLabel').textContent = product.name;
                document.getElementById('productModalBody').innerHTML = `
                    <img src="${product.image}" class="img-fluid mb-3" alt="${product.name}">
                    <p>${product.description}</p>
                    <p><strong>Price:</strong> #${product.price}</p>
                    <p><strong>Rating:</strong> ${product.rating}/5</p>
                `;
                $('#productModal').modal('show');
            }
        }

        loadMoreBtn.addEventListener('click', loadMoreProducts);

        productContainer.addEventListener('click', (event) => {
            const viewDetailBtn = event.target.closest('.view-detail');
            const addToCartBtn = event.target.closest('.add-to-cart');
            
            if (viewDetailBtn) {
                event.preventDefault();
                const productId = parseInt(viewDetailBtn.dataset.productId);
                showProductDetails(productId);
            } else if (addToCartBtn) {
                event.preventDefault();
                alert('Product added to cart!');
            }
        });

        document.getElementById('addToCartBtn').addEventListener('click', () => {
            alert('Product added to cart!');
            $('#productModal').modal('hide');
        });

        // Initial load
        loadMoreProducts();
    

        //alt-Product Card Start//
        
        const altProducts = [
            {
                id: 1,
                image: "img/ipad.jpeg",
                name: "Fizzy Soda Pop",
                rating: 4.2,
                price: 75,
                description: "Refreshing carbonated beverage with a perfect blend of sweetness and fizz."
            },
            {
                id: 1,
                image: "img/custom-nike-air-force-1-shoes.png",
                name: "Fizzy Soda Pop",
                rating: 4.2,
                price: 75,
                description: "Refreshing carbonated beverage with a perfect blend of sweetness and fizz."
            },
            {
                id: 1,
                image: "img/fridge.jpeg",
                name: "Fizzy Soda Pop",
                rating: 4.2,
                price: 75,
                description: "Refreshing carbonated beverage with a perfect blend of sweetness and fizz."
            },
            {
                id: 1,
                image: "img/watch.webp",
                name: "Fizzy Soda Pop",
                rating: 4.2,
                price: 75,
                description: "Refreshing carbonated beverage with a perfect blend of sweetness and fizz."
            },
            {
                id: 1,
                image: "img/noodles.jpeg",
                name: "Fizzy Soda Pop",
                rating: 4.2,
                price: 75,
                description: "Refreshing carbonated beverage with a perfect blend of sweetness and fizz."
            },
            {
                id: 1,
                image: "img/fan.jpeg",
                name: "Fizzy Soda Pop",
                rating: 4.2,
                price: 75,
                description: "Refreshing carbonated beverage with a perfect blend of sweetness and fizz."
            },
            {
                id: 1,
                image: "img/coca.png",
                name: "Fizzy Soda Pop",
                rating: 4.2,
                price: 75,
                description: "Refreshing carbonated beverage with a perfect blend of sweetness and fizz."
            },
             {
                id: 1,
                image: "img/fotor (jtv).png",
                name: "Fizzy Soda Pop",
                rating: 4.2,
                price: 75,
                description: "Refreshing carbonated beverage with a perfect blend of sweetness and fizz."
            },
            {
                id: 1,
                image: "img/Checkers-Custard-Powder-removebg-preview.png",
                name: "Fizzy Soda Pop",
                rating: 4.2,
                price: 75,
                description: "Refreshing carbonated beverage with a perfect blend of sweetness and fizz."
            },
            // Add more product objects here...
        ];

        const altProductContainer = document.getElementById('altProductContainer');
        const altLoadMoreBtn = document.getElementById('altLoadMoreBtn');
        let altCurrentIndex = 0;
        const altItemsPerLoad = 8;

        function createAltProductCard(product) {
            return `
                <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div class="card alt-product-item border-0 mb-4 position-relative">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="${product.image}" alt="" />
                            <svg width="35" height="35" style="flex-shrink: 0; position: absolute; top: 0px; left: 0px; transform:rotate(-270deg);" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="0,35 29,35 14.5,0" fill="orange" />
                            </svg>
                        </div>
                        <div class="card-footer d-flex flex-column align-items-start bg-light border">
                            <h6 class="text-truncate mb-3 text-dark">${product.name}</h6>
                            <span class="text-warning">
                                <i class="fas fa-star"></i> ${product.rating}
                            </span>
                            <h6 class="text-truncate mb-3 text-dark pt-2">#${product.price}</h6>
                            <div class="alt-product-action">
                                <a href="#" class="btn btn-sm text-dark p-0 mb-2 alt-view-detail" data-product-id="${product.id}">
                                    <i class="fas fa-eye text-secondary mr-1"></i>View Detail
                                </a>
                                <a href="#" class="btn btn-sm text-dark p-0 alt-add-to-cart" data-product-id="${product.id}">
                                    <i class="fas fa-shopping-cart text-secondary mr-1"></i>Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function loadMoreAltProducts() {
            const fragment = document.createDocumentFragment();
            const endIndex = Math.min(altCurrentIndex + altItemsPerLoad, altProducts.length);
            
            for (let i = altCurrentIndex; i < endIndex; i++) {
                const productHTML = createAltProductCard(altProducts[i]);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = productHTML;
                fragment.appendChild(tempDiv.firstElementChild);
            }
            
            altProductContainer.appendChild(fragment);
            altCurrentIndex = endIndex;

            if (altCurrentIndex >= altProducts.length) {
                altLoadMoreBtn.style.display = 'none';
            }
        }

        function showAltProductDetails(productId) {
            const product = altProducts.find(p => p.id === productId);
            if (product) {
                document.getElementById('altProductModalLabel').textContent = product.name;
                document.getElementById('altProductModalBody').innerHTML = `
                    <img src="${product.image}" class="img-fluid mb-3" alt="${product.name}">
                    <p>${product.description}</p>
                    <p><strong>Price:</strong> #${product.price}</p>
                    <p><strong>Rating:</strong> ${product.rating}/5</p>
                `;
                $('#altProductModal').modal('show');
            }
        }

        altLoadMoreBtn.addEventListener('click', loadMoreAltProducts);

        altProductContainer.addEventListener('click', (event) => {
            const viewDetailBtn = event.target.closest('.alt-view-detail');
            const addToCartBtn = event.target.closest('.alt-add-to-cart');
            
            if (viewDetailBtn) {
                event.preventDefault();
                const productId = parseInt(viewDetailBtn.dataset.productId);
                showAltProductDetails(productId);
            } else if (addToCartBtn) {
                event.preventDefault();
                alert('Product added to cart!');
            }
        });

        document.getElementById('altAddToCartBtn').addEventListener('click', () => {
            alert('Product added to cart!');
            $('#altProductModal').modal('hide');
        });

        // Initial load
        loadMoreAltProducts();
        //Product Card End//
    