package com.genweb2.projecttracker.vo;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.genweb2.projecttracker.utility.DateDeSerializer;
import com.genweb2.projecttracker.utility.DateSerializer;

import java.util.Date;

/**
 * Created by shakil on 6/8/17.
 */
public class Project {

    private Integer projectID;
    private String shortName;
    private String description;
    private Date startDate;
    private Date actualStartDate;
    private Date endDate;
    private Date actualEndDate;
    private int status;

    public Integer getProjectID() {
        return projectID;
    }

    public void setProjectID(Integer projectID) {
        this.projectID = projectID;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @JsonSerialize(using = DateSerializer.class)
    public Date getStartDate() {
        return startDate;
    }

    @JsonDeserialize(using = DateDeSerializer.class)
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    @JsonSerialize(using = DateSerializer.class)
    public Date getActualStartDate() {
        return actualStartDate;
    }

    @JsonDeserialize(using = DateDeSerializer.class)
    public void setActualStartDate(Date actualStartDate) {
        this.actualStartDate = actualStartDate;
    }

    @JsonSerialize(using = DateSerializer.class)
    public Date getEndDate() {
        return endDate;
    }

    @JsonDeserialize(using = DateDeSerializer.class)
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @JsonSerialize(using = DateSerializer.class)
    public Date getActualEndDate() {
        return actualEndDate;
    }

    @JsonDeserialize(using = DateDeSerializer.class)
    public void setActualEndDate(Date actualEndDate) {
        this.actualEndDate = actualEndDate;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
