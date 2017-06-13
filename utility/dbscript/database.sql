
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