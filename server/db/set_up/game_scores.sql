CREATE TABLE game_scores (
    id SERIAL PRIMARY KEY,
    user_id int REFERENCES users(id),
    date DATE,
    score INT
);