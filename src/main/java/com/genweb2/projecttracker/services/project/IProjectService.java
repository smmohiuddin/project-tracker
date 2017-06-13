package com.genweb2.projecttracker.services.project;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.Project;

import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/8/17.
 */
public interface IProjectService {

    List<Project> getProjects(Map<String, Object> param) throws ProjectTrackerException;

    void createProject(Project project) throws ProjectTrackerException;
}
