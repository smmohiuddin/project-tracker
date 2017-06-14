package com.genweb2.projecttracker.controllers;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.services.project.IProjectService;
import com.genweb2.projecttracker.types.StatusType;
import com.genweb2.projecttracker.vo.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by shakil on 6/8/17.
 */

@RestController
public class ProjectController {

    @Autowired
    private IProjectService projectService;

    @GetMapping(value = "/projects")
    public List<Project> getProjects() throws ProjectTrackerException {
        return projectService.getProjects();
    }

    @PostMapping(value = "/projects")
    public List<Project> createProject(@RequestBody Project project) throws ProjectTrackerException{
        project.setStatus(StatusType.OPEN.getCode());
        this.projectService.createProject(project);
        return getProjects();
    }

    @PutMapping(value = "projects/{projectID}")
    public List<Project> updateProject(@PathVariable("projectID") Integer projectID, @RequestBody Project project) throws ProjectTrackerException{
        project.setProjectID(projectID);
        this.projectService.updateProject(project);
        return getProjects();
    }
}
