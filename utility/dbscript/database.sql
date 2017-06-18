
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

-- Create Epic table
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

ALTER TABLE Epic ADD CONSTRAINT Epic_Project_ProjectID_fk FOREIGN KEY (ProjectID) REFERENCES Project (ProjectID) ON UPDATE CASCADE;

-- Create Story Table
CREATE TABLE Story
(
  StoryID INT PRIMARY KEY AUTO_INCREMENT,
  EpicID INT,
  ShortName VARCHAR(255) NOT NULL,
  Description TEXT,
  StartDate DATETIME,
  EndDate DATETIME,
  ActualStartDate DATETIME,
  ActualEndDate DATETIME,
  Status TINYINT
);

ALTER TABLE Story ADD CONSTRAINT Story_Epic_EpicID_fk FOREIGN KEY (EpicID) REFERENCES Epic (EpicID) ON UPDATE CASCADE;

-- Create Task Table
CREATE TABLE Task
(
  TaskID INT PRIMARY KEY AUTO_INCREMENT,
  StoryID INT,
  ShortName VARCHAR(255) NOT NULL,
  Description TEXT,
  StartDate DATETIME,
  EndDate DATETIME,
  ActualStartDate DATETIME,
  ActualEndDate DATETIME,
  Status TINYINT
);

ALTER TABLE Task ADD CONSTRAINT Task_Story_StoryID_fk FOREIGN KEY (StoryID) REFERENCES Story (StoryID) ON UPDATE CASCADE;

-- Create Resource Table
CREATE TABLE Resource
(
    ResourceID INT PRIMARY KEY AUTO_INCREMENT,
    ResourceName VARCHAR(255) NOT NULL,
    MonthlySalary INT NOT NULL,
    OverHeadRatio DOUBLE,
    BillingRate INT
);

ALTER TABLE Task ADD ResourceID INT NULL;
ALTER TABLE Task ADD CONSTRAINT Task_Resource_ResourceID_fk FOREIGN KEY (ResourceID) REFERENCES Resource (ResourceID) ON UPDATE CASCADE;
ALTER TABLE Task MODIFY COLUMN ResourceID INT AFTER StoryID;

ALTER TABLE Resource CHANGE OverHeadRatio OverheadRatio DOUBLE;