package com.genweb2.projecttracker.services.epic;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.vo.Epic;

import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/14/17.
 */
public interface IEpicService {

    List<Epic> getAllEpic(Map<String, Object> param) throws ProjectTrackerException;

    void createEpic(Epic epic) throws ProjectTrackerException;

    void updateEpic(Epic epic) throws ProjectTrackerException;
}
