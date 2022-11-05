import http from 'k6/http';
import { sleep, check, group } from 'k6';
import {allQuestions, getAnswers, addQuestion, addAnswer, helpfulQuestion, reportQuestion, helpfulAnswer, reportAnswer, postQdata, postAdata} from './dependencies.js'
export const options = {
  vus: 5, // Virtual Users
  duration: '10s'
};

export default function test() {
  group('getQuestions', () => {
    const allQuestionsResponse = http.get(allQuestions);
    check(allQuestionsResponse, {
      'transaction time < 10ms': (r) => r.timings.duration < 10,
      'transaction time < 50ms': (r) => r.timings.duration < 50,
      'transaction time < 50ms': (r) => r.timings.duration < 75,
      'transaction time < 100ms': (r) => r.timings.duration < 100,
      'transaction time < 100ms': (r) => r.timings.duration < 150,
      'transaction time < 200ms': (r) => r.timings.duration < 200,
      'transaction time < 500ms': (r) => r.timings.duration < 500,
      'transaction time < 1000ms': (r) => r.timings.duration < 1000,
      'transaction time < 2000ms': (r) => r.timings.duration < 2000,
      'transaction time < 5000ms': (r) => r.timings.duration < 5000,
      'transaction time < 10s': (r) => r.timings.duration < 10000,
      'transaction time < 20s': (r) => r.timings.duration < 20000,
    });
  });

  group('getAnswers', () => {
    const answersResponse = http.get(getAnswers);
    check(answersResponse, {
      'transaction time < 10ms': (r) => r.timings.duration < 10,
      'transaction time < 50ms': (r) => r.timings.duration < 50,
      'transaction time < 50ms': (r) => r.timings.duration < 75,
      'transaction time < 100ms': (r) => r.timings.duration < 100,
      'transaction time < 100ms': (r) => r.timings.duration < 150,
      'transaction time < 200ms': (r) => r.timings.duration < 200,
      'transaction time < 500ms': (r) => r.timings.duration < 500,
      'transaction time < 1000ms': (r) => r.timings.duration < 1000,
      'transaction time < 2000ms': (r) => r.timings.duration < 2000,
      'transaction time < 5000ms': (r) => r.timings.duration < 5000,
      'transaction time < 10s': (r) => r.timings.duration < 10000,
      'transaction time < 20s': (r) => r.timings.duration < 20000,
    });
  });

  group('addQuestion', () => {
    const addQuestionResponse = http.post(addQuestion, postQdata);
    check(addQuestionResponse, {
      'transaction time < 10ms': (r) => r.timings.duration < 10,
      'transaction time < 50ms': (r) => r.timings.duration < 50,
      'transaction time < 50ms': (r) => r.timings.duration < 75,
      'transaction time < 100ms': (r) => r.timings.duration < 100,
      'transaction time < 100ms': (r) => r.timings.duration < 150,
      'transaction time < 200ms': (r) => r.timings.duration < 200,
      'transaction time < 500ms': (r) => r.timings.duration < 500,
      'transaction time < 1000ms': (r) => r.timings.duration < 1000,
      'transaction time < 2000ms': (r) => r.timings.duration < 2000,
      'transaction time < 5000ms': (r) => r.timings.duration < 5000,
      'transaction time < 10s': (r) => r.timings.duration < 10000,
      'transaction time < 20s': (r) => r.timings.duration < 20000,
    });
  });

  group('addAnswer', () => {
    const addAnswerResponse = http.post(addAnswer, postAdata);
    check(addAnswerResponse, {
      'transaction time < 10ms': (r) => r.timings.duration < 10,
      'transaction time < 50ms': (r) => r.timings.duration < 50,
      'transaction time < 50ms': (r) => r.timings.duration < 75,
      'transaction time < 100ms': (r) => r.timings.duration < 100,
      'transaction time < 100ms': (r) => r.timings.duration < 150,
      'transaction time < 200ms': (r) => r.timings.duration < 200,
      'transaction time < 500ms': (r) => r.timings.duration < 500,
      'transaction time < 1000ms': (r) => r.timings.duration < 1000,
      'transaction time < 2000ms': (r) => r.timings.duration < 2000,
      'transaction time < 5000ms': (r) => r.timings.duration < 5000,
      'transaction time < 10s': (r) => r.timings.duration < 10000,
      'transaction time < 20s': (r) => r.timings.duration < 20000,
    });
  });

  group('helpfulQuestion', () => {
    const helpfulQuestions = http.put(helpfulQuestion);
    check(helpfulQuestions, {
      'transaction time < 10ms': (r) => r.timings.duration < 10,
      'transaction time < 50ms': (r) => r.timings.duration < 50,
      'transaction time < 50ms': (r) => r.timings.duration < 75,
      'transaction time < 100ms': (r) => r.timings.duration < 100,
      'transaction time < 100ms': (r) => r.timings.duration < 150,
      'transaction time < 200ms': (r) => r.timings.duration < 200,
      'transaction time < 500ms': (r) => r.timings.duration < 500,
      'transaction time < 1000ms': (r) => r.timings.duration < 1000,
      'transaction time < 2000ms': (r) => r.timings.duration < 2000,
      'transaction time < 5000ms': (r) => r.timings.duration < 5000,
      'transaction time < 10s': (r) => r.timings.duration < 10000,
      'transaction time < 20s': (r) => r.timings.duration < 20000,
    });
  });

  group('reportQuestion', () => {
    const reportQuestions = http.put(reportQuestion);
    check(reportQuestions, {
      'transaction time < 10ms': (r) => r.timings.duration < 10,
      'transaction time < 50ms': (r) => r.timings.duration < 50,
      'transaction time < 50ms': (r) => r.timings.duration < 75,
      'transaction time < 100ms': (r) => r.timings.duration < 100,
      'transaction time < 100ms': (r) => r.timings.duration < 150,
      'transaction time < 200ms': (r) => r.timings.duration < 200,
      'transaction time < 500ms': (r) => r.timings.duration < 500,
      'transaction time < 1000ms': (r) => r.timings.duration < 1000,
      'transaction time < 2000ms': (r) => r.timings.duration < 2000,
      'transaction time < 5000ms': (r) => r.timings.duration < 5000,
      'transaction time < 10s': (r) => r.timings.duration < 10000,
      'transaction time < 20s': (r) => r.timings.duration < 20000,
    });
  });

  group('helpfulAnswer', () => {
    const helpfulAnswers = http.put(helpfulAnswer);
    check(helpfulAnswers, {
      'transaction time < 10ms': (r) => r.timings.duration < 10,
      'transaction time < 50ms': (r) => r.timings.duration < 50,
      'transaction time < 50ms': (r) => r.timings.duration < 75,
      'transaction time < 100ms': (r) => r.timings.duration < 100,
      'transaction time < 100ms': (r) => r.timings.duration < 150,
      'transaction time < 200ms': (r) => r.timings.duration < 200,
      'transaction time < 500ms': (r) => r.timings.duration < 500,
      'transaction time < 1000ms': (r) => r.timings.duration < 1000,
      'transaction time < 2000ms': (r) => r.timings.duration < 2000,
      'transaction time < 5000ms': (r) => r.timings.duration < 5000,
      'transaction time < 10s': (r) => r.timings.duration < 10000,
      'transaction time < 20s': (r) => r.timings.duration < 20000,
    });
  });

  group('reportAnswer', () => {
    const reportAnswers = http.put(reportAnswer);
    check(reportAnswers, {
      'transaction time < 10ms': (r) => r.timings.duration < 10,
      'transaction time < 50ms': (r) => r.timings.duration < 50,
      'transaction time < 50ms': (r) => r.timings.duration < 75,
      'transaction time < 100ms': (r) => r.timings.duration < 100,
      'transaction time < 100ms': (r) => r.timings.duration < 150,
      'transaction time < 200ms': (r) => r.timings.duration < 200,
      'transaction time < 500ms': (r) => r.timings.duration < 500,
      'transaction time < 1000ms': (r) => r.timings.duration < 1000,
      'transaction time < 2000ms': (r) => r.timings.duration < 2000,
      'transaction time < 5000ms': (r) => r.timings.duration < 5000,
      'transaction time < 10s': (r) => r.timings.duration < 10000,
      'transaction time < 20s': (r) => r.timings.duration < 20000,
    });
  });

}