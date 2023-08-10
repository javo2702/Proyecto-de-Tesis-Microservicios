package dev.jvall.AuthService.service;


import dev.jvall.AuthService.model.User;
import dev.jvall.AuthService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository){
        this.userRepository=userRepository;
    }
    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }
    @Override
    public User getUserByNameAndPassword(String name, String password) throws ChangeSetPersister.NotFoundException {
        User user = userRepository.findByUserNameAndPassword(name, password);
        if(user == null){
            throw new ChangeSetPersister.NotFoundException();
        }
        return user;
    }
}