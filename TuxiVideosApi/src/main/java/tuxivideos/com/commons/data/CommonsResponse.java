package tuxivideos.com.commons.data;

import tuxivideos.com.commons.dto.DataHeader;

import java.util.HashMap;

public class CommonsResponse {
    public static HashMap<Integer, DataHeader> mapResponse = new HashMap<>();

    public static void initMap(){
        mapResponse.put(200, new DataHeader(true,200));
    }

}
