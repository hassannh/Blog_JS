




CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);


CREATE TABLE blog (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE,
    author VARCHAR(255),
    picture VARCHAR(255) -- Assuming you store the picture file path
);


CREATE TABLE post_category (
    post_id INT,
    category_id INT,
    FOREIGN KEY (post_id) REFERENCES blog(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);
