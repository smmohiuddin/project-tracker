package com.genweb2.projecttracker.vo;

/**
 * Created by shakil on 6/15/17.
 */
public class Story extends Base {

    private Integer epicID;
    private Epic epic;

    public Integer getEpicID() {
        return epicID;
    }

    public void setEpicID(Integer epicID) {
        this.epicID = epicID;
    }

    public Epic getEpic() {
        return epic;
    }

    public void setEpic(Epic epic) {
        this.epic = epic;
    }
}
