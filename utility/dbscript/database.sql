
-- Create Project Table
CREATE TABLE Project
(
    ProjectID INT PRIMARY KEY AUTO_INCREMENT,
    ShortName VARCHAR(255) NOT NULL,
    Description TEXT,
    StartDate DATETIME NOT NULL,
    EndDate DATETIME,
    ActualStartDate DATETIME,
    ActualEndDate DATETIME,
    Status TINYINT
);
CREATE UNIQUE INDEX Project_ShortName_uindex ON Project (ShortName);


CREATE TABLE Epic
(
    EpicID INT PRIMARY KEY AUTO_INCREMENT,
    ProjectID INT,
    ShortName VARCHAR(255) NOT NULL,
    Description TEXT,
    StartDate DATETIME,
    EndDate DATETIME,
    ActualStartDate DATETIME,
    ActualEndDate DATETIME,
    Status TINYINT
);

ALTER TABLE Epic
ADD CONSTRAINT Epic_Project_ProjectID_fk
FOREIGN KEY (ProjectID) REFERENCES Project (ProjectID) ON UPDATE CASCADE;