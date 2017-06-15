package com.genweb2.projecttracker.utility;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.genweb2.projecttracker.types.StatusType;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by shakil on 6/13/17.
 */
public class StatusSerializer extends JsonSerializer<Integer> {


    @Override
    public void serialize(Integer integer, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        String statusDesc = StatusType.getDescByCode(integer);
        jsonGenerator.writeString(statusDesc);
    }
}
