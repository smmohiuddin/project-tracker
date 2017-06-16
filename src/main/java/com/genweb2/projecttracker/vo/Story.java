package com.genweb2.projecttracker.vo;

/**
 * Created by shakil on 6/15/17.
 */
public class Story extends Base {

    private Integer storyID;
    private Epic epic;

    public Integer getStoryID() {
        return storyID;
    }

    public void setStoryID(Integer storyID) {
        this.storyID = storyID;
    }

    public Epic getEpic() {
        return epic;
    }

    public void setEpic(Epic epic) {
        this.epic = epic;
    }
}
