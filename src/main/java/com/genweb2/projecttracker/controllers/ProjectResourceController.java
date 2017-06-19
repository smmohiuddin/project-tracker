package com.genweb2.projecttracker.controllers;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.services.projectresource.IProjectResourceService;
import com.genweb2.projecttracker.types.StatusType;
import com.genweb2.projecttracker.vo.Project;
import com.genweb2.projecttracker.vo.ProjectResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by shakil on 6/19/17.
 */

@RestController
public class ProjectResourceController {

    @Autowired
    private IProjectResourceService projectResourceService;

    /*@GetMapping(value = "/projects")
    public List<Project> getProjects() throws ProjectTrackerException {
        return projectService.getProjects();
    }*/

    @PostMapping(value = "/project-resources")
    public List<ProjectResource> assignProjectResource(@RequestBody ProjectResource projectResource) throws ProjectTrackerException{
        this.projectResourceService.assignProjectResource(projectResource);
        return null;
    }
}
