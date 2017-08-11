package com.example.tech9_survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.tech9_survey.domain.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

}
