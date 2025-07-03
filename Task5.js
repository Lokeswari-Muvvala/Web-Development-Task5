const header = document.querySelector("navbar");

window.addEventListener("scroll",function()
{
    navbar.classLister.toggle("sticky",window.scrollY > 0)
});

let cart = [];
const addToCartButtons = document.querySelectorAll('.row-btn1');

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const productBox = button.closest('.Box');

        const title = productBox.querySelector('.h3')?.innerText.trim();
        const subtitle = productBox.querySelector('.h4')?.innerText.trim();
        const price = productBox.querySelector('.price')?.innerText.trim();
        const image = productBox.querySelector('img')?.getAttribute('src');

        const product = {
            title: title,
            subtitle: subtitle,
            price: price,
            image: image
        };

        cart.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));


        console.log(`Added to cart:`, product);

        alert(`${title} added to cart!`);
    });
});
