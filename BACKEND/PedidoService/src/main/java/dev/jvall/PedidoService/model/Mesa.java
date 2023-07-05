package dev.jvall.PedidoService.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="mesa")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Mesa implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idmesa;
    private int numero;
    private int capacidad;
    private String ubicacion;
    private String estado;

}
