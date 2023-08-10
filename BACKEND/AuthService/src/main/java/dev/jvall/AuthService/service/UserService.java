package dev.jvall.AuthService.service;


import dev.jvall.AuthService.model.User;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
@Service
public interface UserService {
    public void saveUser(User user);
    public User getUserByNameAndPassword(String name, String password) throws ChangeSetPersister.NotFoundException;
}