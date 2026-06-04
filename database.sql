CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(20),
  email VARCHAR(100)
);

CREATE TABLE boats (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  type VARCHAR(50),
  capacity VARCHAR(50),
  min_hours INT,
  price_per_hour INT,
  description TEXT
);

CREATE TABLE routes (
  id INT PRIMARY KEY,
  title VARCHAR(120),
  duration VARCHAR(50),
  description TEXT
);

CREATE TABLE bookings (
  id INT PRIMARY KEY,
  user_id INT,
  boat_id INT,
  route_id INT,
  booking_date DATE,
  status VARCHAR(50),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (boat_id) REFERENCES boats(id),
  FOREIGN KEY (route_id) REFERENCES routes(id)
);

INSERT INTO boats (id, name, type, capacity, min_hours, price_per_hour, description)
VALUES
(1, 'Neva Classic', 'Катер', 'до 5 гостей', 2, 5000, 'Катер для небольшой компании'),
(2, 'River Premium', 'Катер', 'до 8 гостей', 2, 8500, 'Просторный катер для прогулок'),
(3, 'Sky Yacht', 'Яхта', 'до 15 гостей', 3, 18000, 'Яхта для праздников и фотосессий');
