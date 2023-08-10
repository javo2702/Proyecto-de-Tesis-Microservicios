package dev.jvall.AuthService.util;


import dev.jvall.AuthService.model.User;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import io.jsonwebtoken.Jwts;
@Service
public class JwtGeneratorImpl implements JwtGeneratorInterface{
    @Value("${security.jwt.secret:JwtSecretKey}")
    private String secret;
    @Override
    public Map<String, String> generateToken(User user) {
        String jwtToken="";
        jwtToken = Jwts.builder().setSubject(user.getUserName()).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "secret").compact();
        Map<String, String> jwtTokenGen = new HashMap<>();
        jwtTokenGen.put("token", jwtToken);
        jwtTokenGen.put("message", "Token generado");
        return jwtTokenGen;
    }
}