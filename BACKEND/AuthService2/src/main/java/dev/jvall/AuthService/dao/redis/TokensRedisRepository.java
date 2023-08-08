package dev.jvall.AuthService.dao.redis;

import dev.jvall.AuthService.model.redis.TokensEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokensRedisRepository extends CrudRepository<TokensEntity, String> {
}