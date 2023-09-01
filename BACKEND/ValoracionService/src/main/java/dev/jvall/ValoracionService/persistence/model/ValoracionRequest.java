package dev.jvall.ValoracionService.persistence.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ValoracionRequest {
    private String usuario;
    private String nombres;
    private int valoracion;
    private String opinion;
    private String clasificacion;
    private int idpedidoin;
}
