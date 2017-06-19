package com.genweb2.projecttracker.persistence;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.ProjectResource;

/**
 * Created by mohiuddin on 6/13/17.
 */
public interface ProjectResourceMapper {

    void assignProjectResource(ProjectResource projectResource) throws ProjectTrackerException;
}
