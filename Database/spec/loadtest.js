import http from 'k6/http';
import { sleep, check, group } from 'k6';

export const options = {
  vus: 5, // Virtual Users
  duration: '100s'
};

const postQdata =
  {
    body: 'k6test',
    name: 'k6test',
    email: 'k6test@gmail.com',
    product_id: Math.floor(Math.random() * 1000000) + 1
  }

const postAdata = {
  body: 'k6test',
  name: 'k6test',
  email: 'k6test@gmail.com',
  photos: ['k6test', 'k6test', 'k6test']
}

const allQuestions = `http://localhost:3000/qa/questions?product_id=${Math.floor(Math.random() * 100)}&page=${Math.floor(Math.random() * 200)}&count=${Math.floor(Math.random() * 100)}`;
const getAnswers = `http://localhost:3000/qa/questions/${Math.floor(Math.random() * 1000000) + 1}/answers`;
const addQuestion = 'http://localhost:3000/qa/questions'
const addAnswer = `http://localhost:3000/qa/questions/${Math.floor(Math.random() * 1000000) + 1}/answers`
const helpfulQuestion = `http://localhost:3000/qa/questions/${Math.floor(Math.random() * 1000000) + 1}/helpful`
const reportQuestion = `http://localhost:3000/qa/questions/${Math.floor(Math.random() * 1000000) + 1}/helpful`
const helpfulAnswer=`http://localhost:3000/qa/answers/${Math.floor(Math.random() * 1000000) + 1}/helpful`
const reportAnswer=`http://localhost:3000/qa/answers/${Math.floor(Math.random() * 1000000) + 1}/helpful`



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