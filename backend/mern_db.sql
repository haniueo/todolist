CREATE DATABASE mern_db;
CREATE TABLE products (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(2000),
    price DOUBLE, 
    createdAt DATE,
    updatedAt DATE
)ENGINE=INNODB;
