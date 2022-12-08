CREATE DATABASE ng_item_db;


USE ng_item_db;


CREATE TABLE items(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(120),
    marca VARCHAR(120),
    linea VARCHAR(100),
    descripcion VARCHAR(120),
    codigo INT(15),
    precio FLOAT,
    talla VARCHAR(120),
    imagen VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);