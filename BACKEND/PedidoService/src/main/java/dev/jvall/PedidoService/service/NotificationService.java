package dev.jvall.PedidoService.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
public class NotificationService {
    private static Map<String, String> storeData = new HashMap<String, String>();

    public void triggerEvent(String eventData) {
        System.out.println("Display To Angular App");
        try {
            System.out.println(eventData);
            ObjectMapper mapper = new ObjectMapper();
            String jsonText = mapper.writeValueAsString(eventData);
            putMyData(jsonText);
        } catch (IOException e1) {
            e1.printStackTrace();
        }
    }
    public void removeData(){
        storeData = new HashMap<String, String>();
    }
    @CachePut(value = "myData")
    public void putMyData(String myData) {
        if (storeData.containsKey("mydata")) {
            storeData.remove("mydata");
        }
        storeData.put("mydata", myData);
    }
    @Cacheable(value = "myData")
    public String getMyData() {
        String myitem= "";
        try {
            myitem = storeData.get("mydata");
        } catch (Exception e) {
        }
        return myitem;
    }
}
