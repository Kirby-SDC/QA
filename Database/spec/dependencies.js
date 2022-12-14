
//mock request data
export const postQdata = {
  body: 'k6test',
  name: 'k6test',
  email: 'k6test@gmail.com',
  product_id: Math.floor(Math.random() * 1000000) + 1
}

export const postAdata = {
  body: 'k6test',
  name: 'k6test',
  email: 'k6test@gmail.com',
  photos: ['k6test', 'k6test', 'k6test']
}

//test routes
export const allQuestions = `http://18.234.102.235:3000/qa/questions?product_id=${Math.floor(Math.random() * 100)}&page=${Math.floor(Math.random() * 200)}&count=${Math.floor(Math.random() * 100)}`;
export const getAnswers = `http://18.234.102.235:3000/qa/questions/${Math.floor(Math.random() * 1000000) + 1}/answers`;
export const addQuestion = 'http://18.234.102.235:3000/qa/questions'
export const addAnswer = `http://18.234.102.235:3000/qa/questions/${Math.floor(Math.random() * 1000000) + 1}/answers`
export const helpfulQuestion = `http://18.234.102.235:3000/qa/questions/${Math.floor(Math.random() * 1000000) + 1}/helpful`
export const reportQuestion = `http://18.234.102.235:3000/qa/questions/${Math.floor(Math.random() * 1000000) + 1}/report`
export const helpfulAnswer=`http://18.234.102.235:3000/qa/answers/${Math.floor(Math.random() * 1000000) + 1}/helpful`
export const reportAnswer=`http://18.234.102.235:3000/qa/answers/${Math.floor(Math.random() * 1000000) + 1}/report`