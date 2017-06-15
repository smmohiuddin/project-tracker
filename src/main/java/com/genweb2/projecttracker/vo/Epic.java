package com.genweb2.projecttracker.vo;

/**
 * Created by shakil on 6/14/17.
 */
public class Epic extends Base{
    private Integer epicID;
    private Project project;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Integer getEpicID() {
        return epicID;
    }

    public void setEpicID(Integer epicID) {
        this.epicID = epicID;
    }
}
