package edu.learn.jpa.repos;

import edu.learn.jpa.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepo extends PagingAndSortingRepository<User,Long> {

    @Query("SELECT u FROM User u WHERE u.username = :username and u.password = :password")
    User login(@Param("username") String username,@Param("password") String password);
}
