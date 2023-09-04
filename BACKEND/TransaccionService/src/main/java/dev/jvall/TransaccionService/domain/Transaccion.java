package dev.jvall.TransaccionService.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import reactor.util.annotation.Nullable;

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
