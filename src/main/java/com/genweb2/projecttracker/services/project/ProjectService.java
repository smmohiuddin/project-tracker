package com.genweb2.projecttracker.services.project;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.persistence.ProjectMapper;
import com.genweb2.projecttracker.vo.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/8/17.
 */

@Service("projectService")
public class ProjectService implements IProjectService {

    @Autowired
    private ProjectMapper projectMapper;


    @Override
    public List<Project> getProjects(Map<String, Object> param) throws ProjectTrackerException {
        return this.projectMapper.getAllProjects(null);
    }
}
