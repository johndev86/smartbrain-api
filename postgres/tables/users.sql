BEGIN TRANSACTION;

CREATE TABLE users (
    id serial PRIMARY key, 
    name varchar(100), 
    email text UNIQUE NOT null,
    pet text DEFAULT '',
    age SMALLINT DEFAULT 0,
    entries BIGINT DEFAULT 0,
    joined TIMESTAMP NOT NULL
);

COMMIT;