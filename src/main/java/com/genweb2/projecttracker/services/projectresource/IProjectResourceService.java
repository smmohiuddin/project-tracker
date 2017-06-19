package com.genweb2.projecttracker.services.projectresource;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.Project;
import com.genweb2.projecttracker.vo.ProjectResource;

import java.util.List;

/**
 * Created by shakil on 6/8/17.
 */
public interface IProjectResourceService {

    void assignProjectResource(ProjectResource projectResource) throws ProjectTrackerException;
}
