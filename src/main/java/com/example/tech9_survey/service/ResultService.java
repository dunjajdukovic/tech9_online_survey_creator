package com.example.tech9_survey.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tech9_survey.domain.SurveyResult;
import com.example.tech9_survey.repository.ResultRepository;

@Service
public class ResultService {

	private ResultRepository resultRepository;
	
	@Autowired
	public ResultService(ResultRepository resultRepository) {
		this.resultRepository = resultRepository;
	}
	
	public List<SurveyResult> findAll() {
		return resultRepository.findAll();
	}
	
	public SurveyResult findOne(Long id) {
		return resultRepository.findOne(id);
	}
	
	public List<SurveyResult> findBySurveyId(Long surveyId) {
		return resultRepository.findBySurveyId(surveyId);
	}

	@Transactional
	public SurveyResult save(SurveyResult surveyResult) {
		return resultRepository.save(surveyResult);
	}

	@Transactional
	public void delete(Long id) {
		resultRepository.delete(id);
	}
	
}
