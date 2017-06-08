package com.genweb2.projecttracker.exception;

/**
 * Created by shakil on 6/8/17.
 */
public class ProjectTrackerException extends Exception{
    private static final long serialVersionUID = 8761763194763355804L;


    public ProjectTrackerException(String message) {
        super(message);
    }


    public ProjectTrackerException(String message, Throwable ex) {
        super(message, ex);
    }
}
