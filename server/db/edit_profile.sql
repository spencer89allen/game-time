UPDATE profiles
SET image= $2, user_info= $3
WHERE username = $1;