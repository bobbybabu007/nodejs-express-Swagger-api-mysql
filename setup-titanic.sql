CREATE DATABASE `titanic`;
USE `titanic`;
GO
/*SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
DROP TABLE if exists titanic;*/
CREATE TABLE titanic(
  uuid                     int (200) NOT NULL AUTO_INCREMENT PRIMARY KEY
  ,Survived                BIT  NOT NULL 
  ,Pclass                  INTEGER  NOT NULL
  ,Name                    VARCHAR(81) NOT NULL
  ,Sex                     VARCHAR(6) NOT NULL
  ,Age                     NUMERIC(4,2) NOT NULL
  ,Siblings_Spouses_Aboard INTEGER  NOT NULL
  ,Parents_Children_Aboard INTEGER  NOT NULL
  ,Fare                    NUMERIC(8,4) NOT NULL
)