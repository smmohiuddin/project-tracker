package com.genweb2.projecttracker.persistence;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.Project;

import java.util.List;
import java.util.Map;

/**
 * Created by mohiuddin on 6/13/17.
 */
public interface ProjectMapper {

    public List<Project> getAllProjects(Map<String, Object> param) throws ProjectTrackerException;
}
