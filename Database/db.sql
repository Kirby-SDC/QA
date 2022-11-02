
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Products'
--
-- ---

DROP TABLE IF EXISTS Products cascade;

CREATE TABLE Products (
  id SERIAL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Question'
--
-- ---

DROP TABLE IF EXISTS Question cascade;

CREATE TABLE Question (
  question_id SERIAL,
  question_body VARCHAR NULL DEFAULT NULL,
  question_date DATE NULL DEFAULT NULL,
  user_id VARCHAR NULL DEFAULT NULL,
  question_helpfulness INTEGER NULL DEFAULT NULL,
  reported BOOLEAN NULL DEFAULT NULL,
  product_id_Products INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (question_id)
);

-- ---
-- Table 'Answers'
--
-- ---

DROP TABLE IF EXISTS Answers cascade;

CREATE TABLE Answers (
  answer_id SERIAL,
  body VARCHAR NULL DEFAULT NULL,
  date DATE NULL DEFAULT NULL,
  answerer_name VARCHAR NULL DEFAULT NULL,
  helpfulness INTEGER NULL DEFAULT NULL,
  question_id_Questions INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (answer_id)
);

-- ---
-- Table 'Photos'
--
-- ---

DROP TABLE IF EXISTS Photos cascade;

CREATE TABLE Photos (
  id SERIAL,
  url VARCHAR NULL DEFAULT NULL,
  answer_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE Question ADD FOREIGN KEY (product_id_Products) REFERENCES Products (id);
ALTER TABLE Answers ADD FOREIGN KEY (question_id_Questions) REFERENCES Question (question_id);
ALTER TABLE Photos ADD FOREIGN KEY (answer_id) REFERENCES Answers (answer_id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE Products ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Question ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Answers ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Photos ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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