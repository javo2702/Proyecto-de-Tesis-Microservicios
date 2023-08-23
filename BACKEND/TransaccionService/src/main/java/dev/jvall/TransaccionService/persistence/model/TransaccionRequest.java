package dev.jvall.TransaccionService.persistence.model;

import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransaccionRequest {
    private Double monto;
    private String fecha;
    @Nullable
    private Integer idorigen;
    private Integer idtipo;
    private String descripcion;
}
