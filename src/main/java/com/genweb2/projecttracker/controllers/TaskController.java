package com.genweb2.projecttracker.controllers;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.services.task.ITaskService;
import com.genweb2.projecttracker.types.StatusType;
import com.genweb2.projecttracker.vo.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/14/17.
 */
@RestController
public class TaskController {

    @Autowired
    private ITaskService taskService;

    @GetMapping(value = "/stories/{storyID}/tasks")
    public List<Task> getTasks(@PathVariable("storyID") Integer storyID) throws ProjectTrackerException {
        Map<String, Object> param = new HashMap<>();
        param.put("storyID", storyID);
        return this.taskService.getAllTask(param);
    }

    @PostMapping(value = "/stories/{storyID}/tasks")
    public List<Task> createEpic(@PathVariable("storyID") Integer storyID, @RequestBody Task task) throws ProjectTrackerException {
        task.setStatus(StatusType.OPEN.getCode());
        task.getStory().setStoryID(storyID);
        this.taskService.createTask(task);
        return getTasks(storyID);
    }

    @PutMapping(value = "/stories/{storyID}/tasks/{taskID}")
    public List<Task> updateProject(@PathVariable("storyID") Integer storyID, @PathVariable("taskID") Integer taskID, @RequestBody Task task) throws ProjectTrackerException {
        task.setTaskID(taskID);
        task.getStory().setStoryID(storyID);
        this.taskService.updateTask(task);
        return getTasks(storyID);
    }

}
