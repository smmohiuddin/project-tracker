package com.genweb2.projecttracker.services.resource;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.persistence.ResourceMapper;
import com.genweb2.projecttracker.vo.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by shakil on 6/8/17.
 */

@Service("resourceService")
public class ResourceService implements IResourceService {

    @Autowired
    private ResourceMapper resourceMapper;

    @Override
    public List<Resource> getAllResources() throws ProjectTrackerException {
        return this.resourceMapper.getAllResources();
    }

    @Override
    public void createResource(Resource resource) throws ProjectTrackerException {
        this.resourceMapper.create(resource);
    }
}
