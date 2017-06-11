package com.genweb2.projecttracker.controllers;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.services.project.IProjectService;
import com.genweb2.projecttracker.vo.project.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by shakil on 6/8/17.
 */

@RestController
public class ProjectController {

    @Autowired
    private IProjectService projectService;

    @GetMapping(value = "/projects", headers = {"Access-Control-Allow-Origin: *"})
    public List<Project> getProjects() throws ProjectTrackerException {
        return projectService.getProjects(null);
    }
}
