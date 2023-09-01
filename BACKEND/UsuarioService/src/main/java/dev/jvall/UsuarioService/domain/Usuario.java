package dev.jvall.UsuarioService.domain;

import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    @Nullable
    private Integer idusuario;
    private String nombres;
    private String apellidos;
    private String usuario;
    private String dni;
    private String telefono;
    private String rol;
    private Boolean estado;
    private String creacion;
}
