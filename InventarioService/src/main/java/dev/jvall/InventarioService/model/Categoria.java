package dev.jvall.InventarioService.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="categoria")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Categoria implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idcategoria;
    private String nombre;
    private String descripcion;
    private String estado;
}
