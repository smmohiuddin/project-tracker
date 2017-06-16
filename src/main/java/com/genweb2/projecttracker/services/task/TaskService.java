package com.genweb2.projecttracker.services.task;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.persistence.EpicMapper;
import com.genweb2.projecttracker.persistence.TaskMapper;
import com.genweb2.projecttracker.vo.Epic;
import com.genweb2.projecttracker.vo.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/14/17.
 */
@Service("taskService")
public class TaskService implements ITaskService {


    @Autowired
    private TaskMapper taskMapper;

    @Override
    public List<Task> getAllTask(Map<String, Object> param) throws ProjectTrackerException {
        return this.taskMapper.getAllTask(param);
    }

    @Override
    public void createTask(Task task) throws ProjectTrackerException {
        this.taskMapper.create(task);
    }
}
