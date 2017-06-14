package com.genweb2.projecttracker.types;

/**
 * Created by shakil on 6/14/17.
 */
public enum StatusType {
    OPEN(0, "Open"),
    DEV_INPROGRESS(1, "Dev In-Progress"),
    QA_INPROGRESS(2, "QA In-Progress"),
    CLOSED(9, "Closed");

    private int code;
    private String desc;

    StatusType(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}