CREATE TABLE pokemon(
  id int NOT NULL AUTO_INCREMENT,
  pokemon_name VARCHAR(30) NOT NULL,
  img_path VARCHAR(300),
  point_value int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE player(
  id int NOT NULL AUTO_INCREMENT,
  player_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE draft(
 id int NOT NULL AUTO_INCREMENT,
 pokemon_id int NOT NULL,
 player_id int NOT NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
 FOREIGN KEY (player_id) REFERENCES player(id)
);