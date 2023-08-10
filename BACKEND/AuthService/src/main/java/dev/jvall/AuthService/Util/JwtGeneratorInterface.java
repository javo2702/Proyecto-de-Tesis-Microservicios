package dev.jvall.AuthService.util;

import dev.jvall.AuthService.model.User;

import java.util.Map;
public interface JwtGeneratorInterface {
    Map<String, String> generateToken(User user);
}
