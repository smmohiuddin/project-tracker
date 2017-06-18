package com.genweb2.projecttracker.services.resource;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.Project;
import com.genweb2.projecttracker.vo.Resource;

import java.util.List;

/**
 * Created by shakil on 6/8/17.
 */
public interface IResourceService {

    List<Resource> getAllResources() throws ProjectTrackerException;

    void createResource(Resource resource) throws ProjectTrackerException;
}
