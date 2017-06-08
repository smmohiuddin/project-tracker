package com.genweb2.projecttracker.vo.project;

import java.util.Date;

/**
 * Created by shakil on 6/8/17.
 */
public class Project {

    private Integer projectID;
    private String projectName;
    private Date startDate;
    private Date actualStartDate;
    private Date endDate;
    private Date actualEndDate;

    public Project(Integer projectID, String projectName, Date startDate, Date actualStartDate, Date endDate, Date actualEndDate) {
        this.projectID = projectID;
        this.projectName = projectName;
        this.startDate = startDate;
        this.actualStartDate = actualStartDate;
        this.endDate = endDate;
        this.actualEndDate = actualEndDate;
    }

    public Integer getProjectID() {
        return projectID;
    }

    public void setProjectID(Integer projectID) {
        this.projectID = projectID;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getActualStartDate() {
        return actualStartDate;
    }

    public void setActualStartDate(Date actualStartDate) {
        this.actualStartDate = actualStartDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Date getActualEndDate() {
        return actualEndDate;
    }

    public void setActualEndDate(Date actualEndDate) {
        this.actualEndDate = actualEndDate;
    }
}
