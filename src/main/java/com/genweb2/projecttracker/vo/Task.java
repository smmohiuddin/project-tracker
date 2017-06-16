package com.genweb2.projecttracker.vo;

/**
 * Created by shakil on 6/15/17.
 */
public class Task extends BaseAttr {
    private Integer taskID;
    private Story story;

    private Resource resource;

    public Integer getTaskID() {
        return taskID;
    }

    public void setTaskID(Integer taskID) {
        this.taskID = taskID;
    }

    public Story getStory() {
        return story;
    }

    public void setStory(Story story) {
        this.story = story;
    }

    public Resource getResource() {
        return resource;
    }

    public void setResource(Resource resource) {
        this.resource = resource;
    }
}
