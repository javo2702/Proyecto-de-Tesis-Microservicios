package dev.jvall.TransaccionService.domain;

import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transaccion {
    private Integer idtransaccion;
    private Double monto;
    private String fecha;
    @Nullable
    private Integer idorigen;
    private String tipo;
    private String descripcion;
}
