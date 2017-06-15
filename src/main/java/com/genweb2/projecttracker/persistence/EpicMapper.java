package com.genweb2.projecttracker.persistence;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.Epic;

import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/14/17.
 */
public interface EpicMapper {
    List<Epic> getAllEpic(Map<String, Object> param) throws ProjectTrackerException;

    void create(Epic epic) throws ProjectTrackerException;

    void update(Epic epic) throws ProjectTrackerException;
}
