package com.genweb2.projecttracker.persistence;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.Story;

import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/14/17.
 */
public interface StoryMapper {
    List<Story> getAllStories(Map<String, Object> param) throws ProjectTrackerException;

    void create(Story story) throws ProjectTrackerException;

    void update(Story story) throws ProjectTrackerException;
}
