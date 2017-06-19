
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

-- Create Project Resource table
CREATE TABLE ProjectResource
(
  ProjectResourceID INT PRIMARY KEY AUTO_INCREMENT,
  ProjectID INT NOT NULL,
  ResourceID INT NOT NULL,
  Role VARCHAR(255) NOT NULL,
  Ratio DOUBLE NOT NULL,
  CONSTRAINT ProjectResource_Project_ProjectID_fk FOREIGN KEY (ProjectID) REFERENCES Project (ProjectID) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT ProjectResource_Resource_ResourceID_fk FOREIGN KEY (ResourceID) REFERENCES Resource (ResourceID) ON UPDATE CASCADE
);

-- Create Engagement table
CREATE TABLE Engagement
(
  EngagementID INT PRIMARY KEY AUTO_INCREMENT,
  ProjectResourceID INT NOT NULL,
  StartDate DATETIME NOT NULL,
  EndDate DATETIME,
  Ratio DOUBLE,
  Cost INT,
  CONSTRAINT Engagement_ProjectResource_ProjectResourceID_fk FOREIGN KEY (ProjectResourceID) REFERENCES ProjectResource (ProjectResourceID)
);

-- create WorkLog table
CREATE TABLE WorkLog
(
  WorkLogID INT PRIMARY KEY AUTO_INCREMENT,
  TaskID INT NOT NULL,
  ResourceID INT NOT NULL,
  WorkDate DATETIME NOT NULL,
  Effort DOUBLE NOT NULL,
  Description TEXT,
  CONSTRAINT WorkLog_Task_TaskID_fk FOREIGN KEY (TaskID) REFERENCES Task (TaskID),
  CONSTRAINT WorkLog_Resource_ResourceID_fk FOREIGN KEY (ResourceID) REFERENCES Resource (ResourceID)
);

