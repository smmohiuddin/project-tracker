package com.genweb2.projecttracker.controllers;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.services.resource.IResourceService;
import com.genweb2.projecttracker.vo.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping(value = "resources/{resourceID}")
    public List<Resource> updateProject(@PathVariable("resourceID") Integer resourceID, @RequestBody Resource resource) throws ProjectTrackerException{
        this.resourceService.updateResource(resource);
        return getResources();
    }
}
