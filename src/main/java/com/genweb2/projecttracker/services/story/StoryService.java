package com.genweb2.projecttracker.services.story;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.persistence.StoryMapper;
import com.genweb2.projecttracker.vo.Story;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/14/17.
 */
@Service("storyService")
public class StoryService implements IStoryService {

    @Autowired
    private StoryMapper storyMapper;

    @Override
    public List<Story> getAllStories(Map<String, Object> param) throws ProjectTrackerException {
        return this.storyMapper.getAllStories(param);
    }

    @Override
    public void createStory(Story story) throws ProjectTrackerException {
        this.storyMapper.create(story);
    }

    @Override
    public void updateStory(Story story) throws ProjectTrackerException {
        this.storyMapper.update(story);
    }
}
