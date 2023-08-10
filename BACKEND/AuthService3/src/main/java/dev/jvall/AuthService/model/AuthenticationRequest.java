package dev.jvall.AuthService.model;

public class AuthenticationRequest {
    private String username;
    private String password;

    // getters y setters

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
