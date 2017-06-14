package com.genweb2.projecttracker.utility;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


public class DateDeSerializer extends JsonDeserializer<Date> {

    @Override
    public Date deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException {
        try {
            SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy");
            String date = jp.getText();
            if (!StringUtils.isEmpty(date)) {
                try {
                    return format.parse(date);
                } catch (ParseException e) {
                    throw new RuntimeException(e);
                }
            } else {
                return null;
            }
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}