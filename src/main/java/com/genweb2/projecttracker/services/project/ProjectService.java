package com.genweb2.projecttracker.services.project;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.project.Project;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/8/17.
 */

@Service("projectService")
public class ProjectService implements IProjectService {

    @Override
    public List<Project> getProjects(Map<String, Object> param) throws ProjectTrackerException {
        List<Project> projects = new ArrayList<>();
        projects.add(new Project(1, "Ktr", new Date(), new Date(), new Date(), new Date()));
        projects.add(new Project(2, "eMobile Court", new Date(), new Date(), new Date(), new Date()));
        projects.add(new Project(3, "Cadence", new Date(), new Date(), new Date(), new Date()));

        return projects;
    }
}
