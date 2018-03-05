DROP SCHEMA IF EXISTS beepo_test
;

CREATE SCHEMA beepo_test
;

CREATE TABLE beepo_test.scripts (
  `id`         INT(10)  NOT NULL AUTO_INCREMENT,
  `body`       LONGTEXT NOT NULL,
  `file_name`  TEXT     NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)
;
