package com.genweb2.projecttracker.controllers;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.services.story.IStoryService;
import com.genweb2.projecttracker.types.StatusType;
import com.genweb2.projecttracker.vo.Story;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/16/17.
 */

@RestController
public class StoryController {

    @Autowired
    private IStoryService storyService;

    @GetMapping(value = "/epics/{epicID}/stories")
    public List<Story> getStories(@PathVariable("epicID") Integer epicID) throws ProjectTrackerException {
        Map<String, Object> param = new HashMap<>();
        param.put("epicID", epicID);
        return this.storyService.getAllStories(param);
    }

    @PostMapping(value = "/epics/{epicID}/stories")
    public List<Story> createEpic(@PathVariable("epicID") Integer epicID, @RequestBody Story story) throws ProjectTrackerException {
        story.setStatus(StatusType.OPEN.getCode());
        story.getEpic().setEpicID(epicID);
        this.storyService.createStory(story);
        return getStories(story.getEpic().getEpicID());
    }
}
