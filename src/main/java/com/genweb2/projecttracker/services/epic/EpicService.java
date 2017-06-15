package com.genweb2.projecttracker.services.epic;

import com.genweb2.projecttracker.exception.ProjectTrackerException;
import com.genweb2.projecttracker.persistence.EpicMapper;
import com.genweb2.projecttracker.vo.Epic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * Created by shakil on 6/14/17.
 */
@Service("epicService")
public class EpicService implements IEpicService{

    @Autowired
    private EpicMapper epicMapper;

    @Override
    public List<Epic> getAllEpic(Map<String, Object> param) throws ProjectTrackerException {
        return this.epicMapper.getAllEpic(param);
    }

    @Override
    public void createEpic(Epic epic) throws ProjectTrackerException {
        this.epicMapper.create(epic);
    }

    @Override
    public void updateEpic(Epic epic) throws ProjectTrackerException {
        this.epicMapper.update(epic);
    }


}
