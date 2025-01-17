// Находим контейнер для карточек товаров
const productsList = document.querySelector(".products__list");

// Очищаем контейнер перед добавлением новых карточек
productsList.innerHTML = "";

// Загружаем данные из JSON-файла
fetch("../json/products.json")
  .then((response) => response.json())
  .then((products) => {
    // Для каждого товара создаем карточку
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-card__image">
                <h3 class="product-card__title">${product.name}</h3>
                <p class="product-card__description">${product.description}</p>
                <a href="${product.link}" class="product-card__link">Подробнее</a>
            `;

      // Добавляем карточку в список
      productsList.appendChild(productCard);
    });
  })
  .catch((error) => console.error("Ошибка загрузки данных:", error));
