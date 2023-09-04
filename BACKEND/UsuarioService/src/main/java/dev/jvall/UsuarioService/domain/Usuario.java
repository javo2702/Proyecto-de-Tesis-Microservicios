package dev.jvall.UsuarioService.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import reactor.util.annotation.Nullable;

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
