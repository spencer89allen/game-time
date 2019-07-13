SELECT * FROM game_scores
WHERE username = $1
LIMIT 10;