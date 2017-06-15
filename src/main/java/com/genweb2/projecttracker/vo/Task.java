package com.genweb2.projecttracker.vo;

/**
 * Created by shakil on 6/15/17.
 */
public class Task extends Base {
    private Integer taskID;
    private Story story;

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
}
