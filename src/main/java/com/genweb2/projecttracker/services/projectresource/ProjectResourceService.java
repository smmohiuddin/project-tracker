package com.genweb2.projecttracker.services.projectresource;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.persistence.ProjectMapper;
import com.genweb2.projecttracker.persistence.ProjectResourceMapper;
import com.genweb2.projecttracker.vo.Project;
import com.genweb2.projecttracker.vo.ProjectResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by shakil on 6/8/17.
 */

@Service("projectResourceService")
public class ProjectResourceService implements IProjectResourceService {


    @Autowired
    private ProjectResourceMapper projectResourceMapper;

    @Override
    public void assignProjectResource(ProjectResource projectResource) throws ProjectTrackerException {
        this.projectResourceMapper.assignProjectResource(projectResource);
    }
}
