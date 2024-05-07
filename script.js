var imagesPath = "img/";

// Массив объектов с марками автомобилей
var brands = [
    { value: "", label: "Выберите марку автомобиля" },
    { value: "LADA", label: "LADA" },
    { value: "Renault", label: "Renault" },
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "Mercedes-Benz", label: "Mercedes-Benz" },
    { value: "Toyota", label: "Toyota" }
];

// Массив объектов с типами кузова
var bodyTypes = [
    { value: "", label: "Выберите тип кузова" },
    { value: "sedan", label: "Седан" },
    { value: "suv", label: "Внедорожник" },
    { value: "hatchback", label: "Хэтчбек" }
];

// Массив объектов с информацией об автомобилях
var cars = [
    {
        brand: "Kia Rio",
        description: "Подробное описание",
        year: "2015",
        mileage: "50 000",
        price: "1 100 000",
        image: "car-1.webp"
    },
    {
        brand: "Mazda6",
        description: "Подробное описание",
        year: "2016",
        mileage: "80 000",
        price: "900 000",
        image: "car-2.webp"
    },
    {
        brand: "Volkswagen Touareg",
        description: "Подробное описание",
        year: "2020",
        mileage: "30 000",
        price: "1 800 000",
        image: "car-3.webp"
    },
    {
        brand: "Hyundai Solaris",
        description: "Подробное описание",
        year: "2013",
        mileage: "100 000",
        price: "800 000",
        image: "car-4.webp"
    },
    {
        brand: "ВАЗ-2101",
        description: "Подробное описание",
        year: "1989",
        mileage: "120 000",
        price: "150 000",
        image: "car-5.webp"
    },
    {
        brand: "KIA K5",
        description: "Подробное описание",
        year: "2022",
        mileage: "20 000",
        price: "1 900 000",
        image: "car-6.webp"
    },
    {
        brand: "Volkswagen Polo",
        description: "Подробное описание",
        year: "2020",
        mileage: "20 000",
        price: "1 500 000",
        image: "car-7.webp"
    },
    {
        brand: "Mercedes-Benz 500K",
        description: "Подробное описание",
        year: "1936",
        mileage: "5 000",
        price: "75 000 000",
        image: "car-8.webp"
    },
    {
        brand: "Subaru Forester",
        description: "Подробное описание",
        year: "2012",
        mileage: "150 000",
        price: "1 000 000",
        image: "car-9.webp"
    }
];

// Функция для заполнения выпадающего списка данными
function populateDropdown(selectElement, options) {
    options.forEach(function(option) {
        var optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        selectElement.appendChild(optionElement);
    });
}

// Функция для создания и добавления элементов HTML на страницу для каждого автомобиля
function populateCarItems() {
    var carItemList = document.getElementById("car-item-list");

    cars.forEach(function(car) {
        var imageCarPath = imagesPath + car.image;

        var carItem = document.createElement("div");
        carItem.className = "car-item";
        carItem.onclick = function() {
            showCarDetails(car.brand, car.description, car.year, car.mileage, car.price, imageCarPath);
        };

        var carImage = document.createElement("img");
        carImage.src = imageCarPath;
        carImage.alt = car.brand;
        carImage.onclick = function(event) {
            expandImage(carImage.src, event);
        };

        var carTitle = document.createElement("h2");
        carTitle.textContent = car.brand;

        var carYear = document.createElement("p");
        carYear.textContent = "Год выпуска: " + car.year;

        var carMileage = document.createElement("p");
        carMileage.textContent = "Пробег: " + car.mileage + " км";

        var carPrice = document.createElement("p");
        carPrice.textContent = "Цена: " + car.price + " ₽";

        var contactButton = document.createElement("button");
        contactButton.className = "button-contact";
        contactButton.textContent = "Связаться";
        contactButton.onclick = function(event) {
            handleContactButtonClick(event);
        };

        carItem.appendChild(carImage);
        carItem.appendChild(carTitle);
        carItem.appendChild(carYear);
        carItem.appendChild(carMileage);
        carItem.appendChild(carPrice);
        carItem.appendChild(contactButton);

        carItemList.appendChild(carItem);
    });
}

function filterCars() {
    // Здесь можно добавить скрипт для фильтрации списка автомобилей
    alert('Фильтрация применена!');
}

function expandImage(imageSrc, event) {
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.src = imageSrc;
    document.getElementById("expandedImage").style.display = "flex";
    event.stopPropagation(); // Остановка всплытия события, чтобы блок .car-item не вызывал свой обработчик
}

function closeExpandedImage() {
    document.getElementById("expandedImage").style.display = "none";
}

// Функция для открытия модального окна с подробностями автомобиля
function openModal(title, description, year, mileage, price, imageSrc) {
  var modal = document.getElementById("carDetailsModal");
  document.getElementById("carTitle").innerHTML = title;
  document.getElementById("carDescription").innerHTML = description;
  document.getElementById("carYear").innerHTML = "Год выпуска: " + year;
  document.getElementById("carMileage").innerHTML = "Пробег: " + mileage + " км";
  document.getElementById("carPrice").innerHTML = "Цена: $" + price;
  document.getElementById("carImage").src = imageSrc;
  modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
    var modal = document.getElementById("carDetailsModal");
    modal.classList.add("fadeOutModal");
    setTimeout(function() {
        modal.style.display = "none";
        modal.classList.remove("fadeOutModal");
    }, 500);
}

// Функция для отображения подробной информации о выбранном автомобиле при нажатии на объявление
function showCarDetails(title, description, year, mileage, price, imageSrc) {
  openModal(title, description, year, mileage, price, imageSrc);
}

function handleContactButtonClick(event) {
    event.stopPropagation();
    alert('Контактная информация для покупки');
}

// Вызываем функцию при загрузке страницы
window.onload = function() {
    populateCarItems();

    var brandDropdown = document.getElementById("brand");
    var bodyTypeDropdown = document.getElementById("body-type");

    populateDropdown(brandDropdown, brands);
    populateDropdown(bodyTypeDropdown, bodyTypes);

    // Функция для открытия и закрытия модального окна
    function toggleModal(title, description, year, mileage, price, imageSrc) {
        var modal = document.getElementById("carDetailsModal");
        if (modal.style.display === "block") {
            closeModal();
        } else {
            openModal(title, description, year, mileage, price, imageSrc);
        }
    }

    // Вызываем функцию для открытия и закрытия модального окна при клике на крестик
    document.querySelector(".close").onclick = toggleModal;

    // Добавляем обработчик события для закрытия модального окна при клике вне его области
    window.onclick = function(event) {
        var modal = document.getElementById("carDetailsModal");
        if (event.target == modal) {
            toggleModal();
        }
    };
};


