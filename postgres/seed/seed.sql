BEGIN TRANSACTION;

INSERT INTO users (email, name, entries, joined) values ('john@email.com', 'John', 4, '2018-01-01');
INSERT INTO login (hash, email) values ('$2a$10$OdWBo9oIifMog91/AxbTxu0FrIwczAUVwsWqhNqEWfqHs9ieERIe2', 'john@email.com');


COMMIT;