
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Question'
--
-- ---

DROP TABLE IF EXISTS Question cascade;

CREATE TABLE Question (
  id SERIAL,
  product_id INTEGER NULL DEFAULT NULL,
  question_body VARCHAR NULL DEFAULT NULL,
  question_date BIGINT NULL DEFAULT NULL,
  asker_name VARCHAR NULL DEFAULT NULL,
  asker_email VARCHAR NULL DEFAULT NULL,
  reported BOOLEAN NULL DEFAULT NULL,
  question_helpfulness INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

COPY Question (id, product_id, question_body, question_date, asker_name, asker_email, reported, question_helpfulness)

FROM '/Users/andrewarsenault/Desktop/sdcdata/questions.csv'

DELIMITER ',' CSV HEADER;

-- ---
-- Table 'Answers'
--
-- ---

DROP TABLE IF EXISTS Answers cascade;

CREATE TABLE Answers (
  answer_id SERIAL,
  question_id_Questions INTEGER NULL DEFAULT NULL,
  body VARCHAR NULL DEFAULT NULL,
  date_written BIGINT NULL DEFAULT NULL,
  answerer_name VARCHAR NULL DEFAULT NULL,
  answerer_email VARCHAR NULL DEFAULT NULL,
  reported BOOLEAN NULL DEFAULT NULL,
  helpful INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (answer_id)
);

COPY Answers (answer_id, question_id_Questions, body,date_written, answerer_name, answerer_email, reported, helpful)

FROM '/Users/andrewarsenault/Desktop/sdcdata/answers.csv'

DELIMITER ',' CSV HEADER;

-- -- ---
-- -- Table 'Photos'
-- --
-- -- ---

DROP TABLE IF EXISTS Photos cascade;

CREATE TABLE Photos (
  id SERIAL,
  answer_id INTEGER NULL DEFAULT NULL,
  url VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (id)
);


COPY Photos (id, answer_id, url)

FROM '/Users/andrewarsenault/Desktop/sdcdata/answers_photos.csv'

DELIMITER ',' CSV HEADER;


-- -- ---
-- -- Foreign Keys
-- -- ---

ALTER TABLE Answers ADD FOREIGN KEY (question_id_Questions) REFERENCES Question (id);
ALTER TABLE Photos ADD FOREIGN KEY (answer_id) REFERENCES Answers (answer_id);

-- -- ---
-- -- Select Max Pkey
-- -- ---

SELECT setval('question_id_seq', COALESCE((SELECT MAX(id)+1 FROM Question), 1), false);
SELECT setval('answers_answer_id_seq', COALESCE((SELECT MAX(answer_id)+1 FROM Answers), 1), false);
SELECT setval('photos_id_seq', COALESCE((SELECT MAX(id)+1 FROM Photos), 1), false);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE Products ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Question ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Answers ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Photos ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Indexing
-- ---

CREATE INDEX question_product_id ON Question (product_id);
CREATE INDEX question_reported ON Question (reported);
CREATE INDEX photos_answer_id ON Photos (answer_id);
CREATE INDEX answers_question_id ON Answers (question_id_Questions);


-- ---
-- Test Data
-- ---

-- INSERT INTO Products (id) VALUES
-- ('');
-- INSERT INTO Question (question_id,question_body,question_date,user_id,question_helpfulness,reported,product_id_Products) VALUES
-- ('','','','','','','');
-- INSERT INTO Answers (answer_id,body,date,answerer_name,helpfulness,question_id_Questions) VALUES
-- ('','','','','','');
-- INSERT INTO Photos (id,url,answer_id) VALUES
-- ('','','');