package com.genweb2.projecttracker.persistence;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.Resource;

import java.util.List;

/**
 * Created by mohiuddin on 6/13/17.
 */
public interface ResourceMapper {

    List<Resource> getAllResources() throws ProjectTrackerException;

    void create(Resource resource) throws ProjectTrackerException;

    void update(Resource resource) throws ProjectTrackerException;
}
