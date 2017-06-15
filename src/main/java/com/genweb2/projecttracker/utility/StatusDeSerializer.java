package com.genweb2.projecttracker.utility;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.genweb2.projecttracker.types.StatusType;
import org.springframework.util.StringUtils;

import java.io.IOException;


public class StatusDeSerializer extends JsonDeserializer<Integer> {

    @Override
    public Integer deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException {
        try {
            String statusDesc = jp.getText();
            if (!StringUtils.isEmpty(statusDesc)) {
                try {
                    return StatusType.getCodeByDesc(statusDesc);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}