package dev.jvall.UsuarioService.persistence.model;

import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioRequest {
    @Nullable
    private Integer iduser_in;
    private String nombres_in;
    private String apellidos_in;
    private String usuario_in;
    @Nullable
    private String password_in;
    private String dni_in;
    private String telefono_in;
    private Integer idrol_in;
}
