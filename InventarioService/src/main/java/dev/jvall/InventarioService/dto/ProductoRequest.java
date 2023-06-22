package dev.jvall.InventarioService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductoRequest {
    private String nombre;
    private String descripcion;
    private double precio;
    private String estado;
    private double descuento;
    private int idcategoria;
}
