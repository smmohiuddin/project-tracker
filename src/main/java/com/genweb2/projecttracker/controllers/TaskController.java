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

    /*
    @PutMapping(value = "/projects/{projectID}/epics/{epicID}")
    public List<Epic> updateProject(@PathVariable("projectID") Integer projectID, @PathVariable("epicID") Integer epicID, @RequestBody Epic epic) throws ProjectTrackerException {
        epic.setEpicID(epicID);
        epic.getProject().setProjectID(projectID);
        this.epicService.updateEpic(epic);
        return getEpics(projectID);
    }*/

}
