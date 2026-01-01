# SamuraiJS Social Network (Mock Backend Version)

Навчальний SPA-проєкт соціальної мережі, побудований на **React + Redux**, з **власним mock backend** 

Проєкт демонструє роботу з:
- авторизацією    
- protected routes    
- асинхронними запитами    
- Redux Thunk    
- REST API    
- деплоєм frontend + backend
    

---

## 🚀 Live Demo

- **Frontend:** _([https://user2371.github.io/Social-Network-petProject/](https://user2371.github.io/Social-Network-petProject/))_
    
- **Backend (JSON Server на Render):**  
    👉 [https://samurai-mock-api.onrender.com](https://samurai-mock-api.onrender.com)
    

---

## 🧠 Функціонал

### 👤 Авторизація

- Login / Logout    
- Перевірка авторизації при старті додатку    
- Persist auth після refresh    
- Protected routes (`/profile`, `/dialogs`)
    

### 👥 Users
- Отримання списку користувачів    
- Пагінація    
- Follow / Unfollow    
- Disable кнопок під час запиту    

### 🙍‍♂️ Profile

- Завантаження профілю користувача    
- Статус користувача (читання / оновлення)    
- Аватар 
    

---

## 🧱 Технології

### Frontend
- React (class components)    
- Redux    
- Redux Thunk    
- React Router v6    
- Axios
    

### Backend
- JSON Server    
- Render (deploy)    
- REST API
    

---

## 🧩 Архітектура

- Redux reducers розділені по доменах    
- Асинхронна логіка через thunk    
- HOC `withAuthRedirect`    
- Lazy loading (`React.lazy + Suspense`)    
- Класичний підхід, як у legacy production-проєктах