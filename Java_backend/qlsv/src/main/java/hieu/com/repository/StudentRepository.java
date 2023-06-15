package hieu.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hieu.com.model.Student;

public interface StudentRepository extends JpaRepository<Student, String> {

}
