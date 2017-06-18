package com.genweb2.projecttracker.controllers;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.services.resource.IResourceService;
import com.genweb2.projecttracker.vo.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by shakil on 6/8/17.
 */

@RestController
public class ResourceController {

    @Autowired
    private IResourceService resourceService;

    @GetMapping(value = "/resources")
    public List<Resource> getResources() throws ProjectTrackerException {
        return this.resourceService.getAllResources();
    }

    @PostMapping(value = "/resources")
    public List<Resource> createProject(@RequestBody Resource resource) throws ProjectTrackerException{
        this.resourceService.createResource(resource);
        return getResources();
    }

    /*
    @PutMapping(value = "projects/{projectID}")
    public List<Project> updateProject(@PathVariable("projectID") Integer projectID, @RequestBody Project project) throws ProjectTrackerException{
        project.setProjectID(projectID);
        this.projectService.updateProject(project);
        return getProjects();
    }*/
}
