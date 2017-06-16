package com.genweb2.projecttracker.persistence;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.Epic;
import com.genweb2.projecttracker.vo.Task;

import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/14/17.
 */
public interface TaskMapper {
    List<Task> getAllTask(Map<String, Object> param) throws ProjectTrackerException;

    void create(Task task) throws ProjectTrackerException;

    void update(Task task) throws ProjectTrackerException;
}
