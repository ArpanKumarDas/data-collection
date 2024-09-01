const marks1 = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 10,
    label: 10,
  },
  {
    value: 20,
    label: 20,
  },
  {
    value: 30,
    label: 30,
  },
  {
    value: 40,
    label: 40,
  },
  {
    value: 50,
    label: 50,
  },
  {
    value: 60,
    label: 60,
  },
  {
    value: 70,
    label: 70,
  },
  {
    value: 80,
    label: 80,
  },
  {
    value: 90,
    label: 90,
  },
  {
    value: 100,
    label: 100,
  },
];

const marks2 = [
  {
    value: 0,
  },
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,
  },
  {
    value: 50,
  },
  {
    value: 60,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,
  },
  {
    value: 100,
  },
];

var ques1 = [
  "I do not get tired quickly.",
  "I don’t think I am more nervous than others.",
  "I have very few headaches.",
  "My hand often shakes when I try to do something.",
  "I have diarrhoea/stomach trouble once a month or more.",
  "I worry about something bad happening.",
  "My hands and feet often become cold.",
  "I sweat even on cool days.",
  "Even when I am stressed, my heartbeat remains normal.",
  "I feel hungry most of the time.",
  "I am not troubled by constipation.",
  "I have lost sleep due to excessive worrying.",
  "I feel embarrassed a lot.",
  "When I am embarrassed, I start sweating.",
  "I am more sensitive than most other people.",
  "I have a lot of stomach trouble.",
  "I worry a lot.",
  "I wish I could be as happy as others seem to be.",
  "I feel anxiety about something or someone most of the time.",
  "Waiting makes me nervous.",
  "When I am excited, I find it hard to fall asleep.",
  "Sometimes I feel that difficulties are piling up so high I can't overcome them.",
  "I worry about small things.",
  "I am happy most of the time.",
  "I don’t get scared easily",
  "I feel useless at times.",
  "I find it hard to concentrate on a task or job.",
  "I feel self-conscious.",
  "I get upset if things don't go right.",
  "Sometimes I think I am not good at anything.",
  "I am usually calm.",
  "I am not self-confident.",
  "I sometimes feel that I am about to have a nervous breakdown.",
  "I am self-confident.",
  "I work under a great deal of tension.",
  "Is there any other relevant information you would like to add?",
  "Did you experience any difficulty in responding to this questionnaire?",
];

var q1values = [
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  "",
  "",
];

var q2values = [
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  [
    [0, 100],
    [0, 100],
  ],
  "",
  "",
];

var ques2 = [
  "I never feel sure of myself when I am speaking in English class.",
  "I don't worry about making mistakes in English class.",
  "I tremble when I have to talk in English class.",
  "It frightens me when I don't understand what the teacher is saying in English class.",
  "It wouldn't bother me to take more English classes.",
  "During English class, I find myself thinking about things that have nothing to do with the course.",
  "I keep thinking that the other students are better at English than I am.",
  "I am at ease during tests in English class.",
  "I start to panic when I have to speak without preparation in English class.",
  "I worry about the consequences of failing the English course.",
  "I don't understand why some people get so upset over English classes.",
  "In English class, I get so nervous that I forget things I know.",
  "It embarrasses me to volunteer answers in English class.",
  "I would not be nervous speaking in English with native speakers.",
  "I get upset when I don't understand what the teacher is correcting.",
  "Even if I am well prepared for English class, I feel anxious about it.",
  "I often feel like not going to English class.",
  "I feel confident about being asked to speak in English class.",
  "I am afraid that my English teacher is ready to correct every mistake I make.",
  "I can feel my heart pounding when the English teacher asks me to answer a question.",
  "The more I study for an English test, the more confused I get.",
  "I don't have to prepare very well for the English course.",
  "I feel that the other students speak English better than I do.",
  "I feel self‐conscious about speaking in English in front of other students.",
  "The English class moves so quickly that I worry about getting left behind.",
  "I feel more tense and nervous in English class than in my other classes.",
  "I get nervous and confused when I am speaking in English class.",
  "When I'm on my way to English class, I feel very relaxed.",
  "i get nervous when I don't understand every word the English teacher says.",
  "I feel overwhelmed by the number of rules I have to learn to speak English.",
  "I am afraid that the other students will laugh at me when I speak in English.",
  "I would probably feel comfortable around native speakers of English.",
  "I get nervous when the English teacher asks questions that I haven't prepared for in advance.",
  "Is there any other relevant information you would like to add?",
  "Did you experience any difficulty in responding to this questionnaire?",
];

// idea: try to make the obj it into array, like the article
// [{ q: , slider: [[],[]]}, {}, {}, {}]
var questionnaire1 = {
  q1: {
    ques: "I do not get tired quickly.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q2: {
    ques: "I don’t think I am more nervous than others.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q3: {
    ques: "I have very few headaches.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q4: {
    ques: "My hand often shakes when I try to do something.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q5: {
    ques: "I have diarrhoea/stomach trouble once a month or more.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q6: {
    ques: "I worry about something bad happening.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q7: {
    ques: "My hands and feet often become cold.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q8: {
    ques: "I sweat even on cool days.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q9: {
    ques: "Even when I am stressed, my heartbeat remains normal.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q10: {
    ques: "I feel hungry most of the time.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q11: {
    ques: "I am not troubled by constipation.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q12: {
    ques: "I have lost sleep due to excessive worrying.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q13: {
    ques: "I feel embarrassed a lot.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q14: {
    ques: "When I am embarrassed, I start sweating.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q15: {
    ques: "I am more sensitive than most other people.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q16: {
    ques: "I have a lot of stomach trouble.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q17: {
    ques: "I worry a lot.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q18: {
    ques: "I wish I could be as happy as others seem to be.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q19: {
    ques: "I feel anxiety about something or someone most of the time.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q20: {
    ques: "Waiting makes me nervous.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q21: {
    ques: "When I am excited, I find it hard to fall asleep.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q22: {
    ques: "Sometimes I feel that difficulties are piling up so high I can't overcome them.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q23: {
    ques: "I worry about small things.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q24: {
    ques: "I am happy most of the time.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q25: {
    ques: "I don’t get scared easily",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q26: {
    ques: "I feel useless at times.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q27: {
    ques: "I find it hard to concentrate on a task or job.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q28: {
    ques: "I feel self-conscious.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q29: {
    ques: "I get upset if things don't go right.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q30: {
    ques: "Sometimes I think I am not good at anything.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q31: {
    ques: "I am usually calm.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q32: {
    ques: "I am not self-confident.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q33: {
    ques: "I sometimes feel that I am about to have a nervous breakdown.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q34: {
    ques: "I am self-confident.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q35: {
    ques: "I work under a great deal of tension.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
};

var questionnaire2 = {
  q1: {
    ques: "I never feel sure of myself when I am speaking in English class.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q2: {
    ques: "I don't worry about making mistakes in English class.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q3: {
    ques: "I tremble when I have to talk in English class.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q4: {
    ques: "It frightens me when I don't understand what the teacher is saying in English class.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q5: {
    ques: "It wouldn't bother me to take more English classes.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q6: {
    ques: "During English class, I find myself thinking about things that have nothing to do with the course.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q7: {
    ques: "I keep thinking that the other students are better at English than I am.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q8: {
    ques: "I am at ease during tests in English class.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q9: {
    ques: "I start to panic when I have to speak without preparation in English class.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q10: {
    ques: "I worry about the consequences of failing the English course.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q11: {
    ques: "I don't understand why some people get so upset over English classes.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q12: {
    ques: "In English class, I get so nervous that I forget things I know.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q13: {
    ques: "It embarrasses me to volunteer answers in English class.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q14: {
    ques: "I would not be nervous speaking in English with native speakers.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q15: {
    ques: "I get upset when I don't understand what the teacher is correcting.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q16: {
    ques: "Even if I am well prepared for English class, I feel anxious about it.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q17: {
    ques: "I often feel like not going to English class.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q18: {
    ques: "I feel confident about being asked to speak in English class.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q19: {
    ques: "I am afraid that my English teacher is ready to correct every mistake I make.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q20: {
    ques: "I can feel my heart pounding when the English teacher asks me to answer a question.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q21: {
    ques: "The more I study for an English test, the more confused I get.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q22: {
    ques: "I don't have to prepare very well for the English course.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q23: {
    ques: "I feel that the other students speak English better than I do.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q24: {
    ques: "I feel self‐conscious about speaking in English in front of other students.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q25: {
    ques: "The English class moves so quickly that I worry about getting left behind.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q26: {
    ques: "I feel more tense and nervous in English class than in my other classes.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q27: {
    ques: "I get nervous and confused when I am speaking in English class.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q28: {
    ques: "When I'm on my way to English class, I feel very relaxed.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q29: {
    ques: "i get nervous when I don't understand every word the English teacher says.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q30: {
    ques: "I feel overwhelmed by the number of rules I have to learn to speak English.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q31: {
    ques: "I am afraid that the other students will laugh at me when I speak in English.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q32: {
    ques: "I would probably feel comfortable around native speakers of English.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
  q33: {
    ques: "I get nervous when the English teacher asks questions that I haven't prepared for in advance.",
    slider0: [0, 100],
    slider1: [0, 100],
  },
};

export {
  marks1,
  marks2,
  questionnaire1,
  questionnaire2,
  ques1,
  ques2,
  q1values,
  q2values,
};
