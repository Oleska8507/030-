const user = {
  id: "1",
  name: "Иван",
  lastname: "Иванов",
  emil: "ivan@ya.ru",
  about: "это моя история из жизни",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
};


const users = {
  0: {name: "Колобок", lastname: "Круглый"},
  1: {name: "Соловей", lastname: "Разбойник"},
  2: {name: "Змей", lastname: "Горыныч"},
  3: {name: "Баба", lastname: "Яга"},
  4: {name: "Леший", lastname: "Добрый"},
}

export function getUser () {
  return user;
}

export function getUsers() {
  return users;
}