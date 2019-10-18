import '../css/index.css';

window.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.querySelector('.buttons-wrap');
    buttonsContainer.innerHTML = '<button class="button button_yellow" type="button">Да</button>' +
        '<button class="button">Нет</button>';

    const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
    setTimeout(function() {
        const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
        const purchaseListContainer = document.querySelector(".purchase-list-wrap");

        confirmPurchaseButton.onclick = () => {
            purchaseListContainer.style.display = "block";
            fridgeInfoContainer.style.display = "none";
            buttonsContainer.style.display = "none";
        }
    }, 500);

    document.querySelector(".header-menu__switcher").addEventListener("click", function () {
        document.querySelector(".header-menu").classList.toggle("header-menu_active")
    })
}, !1);

