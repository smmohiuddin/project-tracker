package com.genweb2.projecttracker.controllers;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.services.epic.IEpicService;
import com.genweb2.projecttracker.types.StatusType;
import com.genweb2.projecttracker.vo.Epic;
import com.genweb2.projecttracker.vo.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/14/17.
 */
@RestController
public class EpicController {

    @Autowired
    private IEpicService epicService;

    @GetMapping(value = "/projects/{projectID}/epics")
    public List<Epic> getEpics(@PathVariable("projectID") Integer projectID) throws ProjectTrackerException {
        Map<String, Object> param = new HashMap<>();
        param.put("projectID", projectID);
        return this.epicService.getAllEpic(param);
    }

    @PostMapping(value = "/projects/{projectID}/epics")
    public List<Epic> createEpic(@PathVariable("projectID") Integer projectID, @RequestBody Epic epic) throws ProjectTrackerException {
        epic.setStatus(StatusType.OPEN.getCode());
        epic.getProject().setProjectID(projectID);
        this.epicService.createEpic(epic);
        return getEpics(epic.getProject().getProjectID());
    }

    @PutMapping(value = "/projects/{projectID}/epics/{epicID}")
    public List<Epic> updateProject(@PathVariable("projectID") Integer projectID, @PathVariable("epicID") Integer epicID, @RequestBody Epic epic) throws ProjectTrackerException {
        epic.setEpicID(epicID);
        epic.getProject().setProjectID(projectID);
        this.epicService.updateEpic(epic);
        return getEpics(projectID);
    }

}
