<div align="center">

# 🍰 Солодка Майстерня

**Sugar Rush Labs** — сучасний односторінковий сайт кондитерської з каталогом
десертів, фільтрацією за категоріями, галереєю, відгуками клієнтів та формою
замовлення.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open-ff69b4?style=for-the-badge&logo=githubpages)](https://ivanalekseev45.github.io/sugar-rush-labs/)
[![Figma](https://img.shields.io/badge/Figma-Design-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/UCknpohZVh4qpbnv15XAXj/%D0%A1%D0%BE%D0%BB%D0%BE%D0%B4%D0%BA%D0%B0-%D0%9C%D0%B0%D0%B9%D1%81%D1%82%D0%B5%D1%80%D0%BD%D1%8F?node-id=8203-60422)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222?style=for-the-badge&logo=github)](https://ivanalekseev45.github.io/sugar-rush-labs/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat&logo=swiper&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)

</div>

---

## 📋 Зміст

- [Про проєкт](#-про-проєкт)
- [Демо](#-демо)
- [Ключові можливості](#-ключові-можливості)
- [Технології](#-технології)
- [Структура проєкту](#-структура-проєкту)
- [Структура секцій](#-структура-секцій)
- [Адаптивність](#-адаптивність)
- [API](#-api)
- [Як запустити локально](#-як-запустити-локально)
- [Деплой](#-деплой)
- [Команда](#-команда)
- [Ліцензія](#-ліцензія)

---

## 🍩 Про проєкт

**Солодка Майстерня** — це лендінг-сайт для кондитерської, який знайомить
відвідувачів з асортиментом десертів, демонструє атмосферу майстерні та дозволяє
оформити замовлення в декілька кліків.

Проєкт розроблено командою у форматі **командної роботи** в межах навчального
курсу **GoIT** із застосуванням сучасного стеку JavaScript-розробки, REST API та
інструментів збірки.

---

## 🎬 Демо

🔗 **Live demo:**
[ivanalekseev45.github.io/sugar-rush-labs](https://ivanalekseev45.github.io/sugar-rush-labs/)

<div align="center">

<img src="/src/img/preview.png" alt="Solodka Maisternia preview" width="800"/>

</div>

---

## ✨ Ключові можливості

- 🧁 **Каталог десертів** — інтерактивні картки з даними, отриманими з REST API.
- 🔍 **Фільтрація за категоріями** — динамічна фільтрація з підвантаженням даних
  з бекенду.
- 📄 **Детальна інформація** — модальне вікно з повним описом обраного десерту.
- 🛒 **Форма замовлення** — модальне вікно з валідацією полів для оформлення
  замовлення.
- ⭐ **Відгуки клієнтів** — слайдер з рейтингом у вигляді зірочок.
- 🖼 **Галерея «Про нас»** — Swiper-слайдер з атмосферою майстерні (статична
  версія на мобільних).
- ❓ **FAQ** — інтерактивний акордеон з типовими питаннями.
- 🍔 **Бургер-меню** — повноекранна навігація для мобільних та планшетів.
- 🖱 **Кастомний курсор** — стилізований під макет, реагує на інтерактивні
  елементи.
- ☕ **Кастомний лоадер** — анімована чашка з парою під час запитів до бекенду.
- 🔔 **Пуш-повідомлення** — інформування користувача про помилки запитів.
- 📱 **Адаптивність** — повноцінна підтримка мобільних, планшетів та десктопів.
- 🖥 **Ретіна-дисплеї** — оптимізовані зображення `@1x` та `@2x`.

---

## 🛠 Технології

### Основні

| Технологія            | Призначення                             |
| --------------------- | --------------------------------------- |
| **HTML5**             | Семантична розмітка                     |
| **CSS3**              | Стилізація, адаптивна верстка, анімації |
| **JavaScript (ES6+)** | Інтерактивна логіка та робота з API     |
| **Vite**              | Збірник та dev-сервер                   |

### Бібліотеки

| Бібліотека                                                             | Версія    | Призначення                                              |
| ---------------------------------------------------------------------- | --------- | -------------------------------------------------------- |
| [`axios`](https://axios-http.com/)                                     | `^1.16.0` | HTTP-клієнт для запитів до бекенду                       |
| [`swiper`](https://swiperjs.com/)                                      | `^12.1.4` | Слайдери (модулі `Navigation`, `Pagination`, `Keyboard`) |
| [`accordion-js`](https://www.npmjs.com/package/accordion-js)           | `^3.4.1`  | Інтерактивний акордеон для FAQ                           |
| [`izitoast`](https://izitoast.marcelodolza.com/)                       | `^1.4.0`  | Пуш-повідомлення про помилки та статус операцій          |
| [`css-star-rating`](https://www.npmjs.com/package/css-star-rating)     | `^1.3.1`  | Зірочковий рейтинг для відгуків                          |
| [`modern-normalize`](https://github.com/sindresorhus/modern-normalize) | `^3.0.1`  | Скидання дефолтних стилів браузерів                      |

### Vite-плагіни

| Плагін                                                                             | Версія   | Призначення                                |
| ---------------------------------------------------------------------------------- | -------- | ------------------------------------------ |
| [`vite-plugin-html-inject`](https://www.npmjs.com/package/vite-plugin-html-inject) | `^1.1.2` | Підключення HTML-партіалів                 |
| [`vite-plugin-full-reload`](https://www.npmjs.com/package/vite-plugin-full-reload) | `^1.2.0` | Повне перезавантаження при змінах HTML/CSS |

### Власні рішення

- **Кастомний курсор** — реалізований на CSS + JavaScript, інтерактивно реагує
  на наведення.
- **Кастомний лоадер** — анімована чашка з парою на чистому CSS
  (`@keyframes move`, `@keyframes rise`), без зображень.
- **SVG-спрайти** — `sprite.svg` та `star-rating.icons.svg` для оптимізації
  запитів та зменшення розміру.

---

## 📁 Структура проєкту

```
sugar-rush-labs/
├── .github/
│   └── workflows/              # GitHub Actions для авто-деплою
├── src/
│   ├── css/                    # Стилі секцій та глобальні стилі
│   ├── js/                     # JS-модулі (логіка секцій, API, модалки)
│   ├── img/                    # Зображення проєкту, SVG-спрайти
│   ├── partials/               # HTML-партіали (header, footer, modals)
│   └── main.js                 # Точка входу
├── index.html                  # Головна HTML-сторінка
├── vite.config.js              # Конфігурація Vite
├── package.json
├── .editorconfig
├── .prettierrc.json
└── README.md
```

---

## 🧱 Структура секцій

| Секція            | Опис                                                                   |
| ----------------- | ---------------------------------------------------------------------- |
| **Header**        | Логотип, навігація, кнопка «До покупок», бургер-меню                   |
| **Hero**          | Головний банер з вітальним заголовком та CTA-кнопкою                   |
| **Dessert List**  | Каталог десертів з фільтром за категоріями та кнопкою «Завантажити ще» |
| **About Us**      | Опис майстерні + Swiper-галерея                                        |
| **FAQ**           | Часті запитання у форматі акордеону                                    |
| **Feedback**      | Slider з відгуками клієнтів та зірочковим рейтингом                    |
| **Dessert Modal** | Модальне вікно з детальною інформацією про десерт                      |
| **Order Modal**   | Модальне вікно з формою замовлення                                     |
| **Footer**        | Контактна інформація                                                   |

---

## 📐 Адаптивність

Верстка адаптивна під три ключові точки перелому:

| Пристрій   | Ширина                                    |
| ---------- | ----------------------------------------- |
| 📱 Mobile  | від `320px` (гумова), адаптивна з `375px` |
| 📲 Tablet  | від `768px`                               |
| 💻 Desktop | від `1440px`                              |

Усі статичні зображення (контентні та фонові) оптимізовані під ретіна-екрани
(`@1x` / `@2x`).

---

## 🔌 API

Бекенд:
[`https://deserts-store.b.goit.study`](https://deserts-store.b.goit.study/api-docs/)

| Метод  | Маршрут        | Опис                                                   |
| ------ | -------------- | ------------------------------------------------------ |
| `GET`  | `/categories`  | Отримати список категорій десертів                     |
| `GET`  | `/deserts`     | Отримати список десертів (з пагінацією та фільтрацією) |
| `GET`  | `/deserts/:id` | Отримати детальну інформацію про десерт                |
| `POST` | `/orders`      | Надіслати замовлення                                   |

> ⚠️ Під час будь-якого запиту відображається **кастомний лоадер**, а помилки
> виводяться у вигляді **пуш-повідомлень iziToast**.

---

## 🚀 Як запустити локально

### Вимоги

- [Node.js](https://nodejs.org/) версії **18+**
- npm (встановлюється разом з Node.js)

### Кроки

1. **Клонувати репозиторій:**

   ```bash
   git clone https://github.com/IvanAlekseev45/sugar-rush-labs.git
   cd sugar-rush-labs
   ```

2. **Встановити залежності:**

   ```bash
   npm install
   ```

3. **Запустити dev-сервер:**

   ```bash
   npm run dev
   ```

   Проєкт буде доступний за адресою `http://localhost:5173/sugar-rush-labs/`.

4. **Зібрати продакшн-версію:**

   ```bash
   npm run build
   ```

   Зібрані файли з'являться у директорії `dist/`.

5. **Переглянути продакшн-збірку локально:**

   ```bash
   npm run preview
   ```

---

## 🌐 Деплой

Проєкт автоматично розгортається на **GitHub Pages** при пуші у гілку `main`
через **GitHub Actions**.

Workflow знаходиться у файлі `.github/workflows/`.

🔗 **Production URL:**
[https://ivanalekseev45.github.io/sugar-rush-labs/](https://ivanalekseev45.github.io/sugar-rush-labs/)

---

## 👥 Команда

| Розробник          | Роль         | GitHub                                                    |
| ------------------ | ------------ | --------------------------------------------------------- |
| Ivan Alekseev      | Team Lead    | [@IvanAlekseev45](https://github.com/IvanAlekseev45)      |
| Romario Korzun     | Scrum Master | [@mrkorzun](https://github.com/mrkorzun)                  |
| Alena Shykova      | Developer    | [@igra26](https://github.com/Tigra26)                     |
| Daniil_Renhevych   | Developer    | [@Huliga101](https://github.com/Huliga101)                |
| Julie Babaeva      | Developer    | [@JulieBabaeva](https://github.com/JulieBabaeva)          |
| Viktoriia Abramova | Developer    | [@viktoriaabc](https://github.com/viktoriaabc)            |
| Dmytro Levchenko   | Developer    | [@d-levchenko](https://github.com/d-levchenko)            |
| Viktoriia Dmytryk  | Developer    | [@viktoriia-dmytryk](https://github.com/viktoriia-dmytryk) |

---

## 📄 Ліцензія

Проєкт створено в навчальних цілях у рамках курсу **GoIT**.

<div align="center">

**© 2025 Солодка Майстерня. Усі права захищені.**

Зроблено з ❤️ та 🍰

</div>
