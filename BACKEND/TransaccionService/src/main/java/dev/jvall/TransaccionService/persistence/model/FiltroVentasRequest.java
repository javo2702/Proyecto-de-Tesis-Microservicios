package dev.jvall.TransaccionService.persistence.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FiltroVentasRequest {
    private String fechaini;
    private String fechafin;
}
