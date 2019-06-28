CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id int REFERENCES users(id),
    user_info text,
    image text
);