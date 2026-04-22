-- SQL script to create tables and indexes for the food pantry database

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    item_id INT REFERENCES items(id),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    quantity INT NOT NULL,
    customer_name VARCHAR(255) NOT NULL
);

CREATE INDEX idx_items_name ON items (name);
CREATE INDEX idx_orders_item_id ON orders (item_id);