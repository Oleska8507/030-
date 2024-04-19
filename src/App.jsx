import { Route, Routes } from 'react-router-dom';
import './App.css';

const Profile = () => {
  return (
    <h2>Это страница с профилем</h2>
  )
}
const Friends = () => {
  return (
    <h2>Это страница с друзьями</h2>
  )
}
const Shop = () => {
  return (
    <h2>Это магазин</h2>
  )
}

function App() {
  return (
  <div className="container mt-5">
    <div className="row">
    <div className="col-3">
    <div className="nav flex-column nav-pills">
      <a href="/" className="nav-link">Главная</a>
      <a href="profile" className="nav-link">Профиль</a>
      <a href="friends" className="nav-link">Друзья</a>
      <a href="shop" className="nav-link">Магазин</a>
      </div>
    </div>
    <div className="col-9">
      <Routes>
        <Route path='/' element={<h2>вы в личном кабинете, выбор в меню слева</h2>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/friends' element={<Friends/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    <span></span>
    </div>
    </div>
  </div>
  );
}

export default App;
