package dev.jvall.InventarioService.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="producto")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Producto implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idproducto;
    private String nombre;
    private String descripcion;
    private double precio;
    private String estado;
    private double descuento;
    private String imagen;
    private String categoria;
}
