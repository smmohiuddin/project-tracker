package com.genweb2.projecttracker.services.task;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.Epic;
import com.genweb2.projecttracker.vo.Task;

import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/14/17.
 */
public interface ITaskService {

    List<Task> getAllTask(Map<String, Object> param) throws ProjectTrackerException;

    void createTask(Task task) throws ProjectTrackerException;

    void updateTask(Task task) throws ProjectTrackerException;
}
