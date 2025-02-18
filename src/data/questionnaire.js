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

var ques3 = [
  "I find many mathematical problems interesting and challenging.",
  "My parents are not very spiritual/religious people.",
  "Overall, I have a lot of respect for myself.",
  "I often tell small lies to avoid embarrassing situations.",
  "I get a lot of attention from members of the opposite sex.",
  "I have trouble expressing myself when trying to write something.",
  "I am usually pretty calm and relaxed.",
  "I hardly ever saw things the same way as my parents when I was growing up.",
  "I enjoy doing work for most academic subjects.",
  "I am never able to think up answers to problems that haven't already been figured out.",
  "I have a physically attractive body.",
  "I have few friends of the same sex that I can really count on.",
  "I am a good athlete.",
  "I have hesitated to take courses that involve mathematics.",
  "I am a spiritual/religious person.",
  "Overall, I lack self-confidence.",
  "People can always rely on me.",
  "I find it difficult to meet members of the opposite sex that I like.",
  "I can write effectively.",
  "I worry a lot.",
  "I would like to bring up children of my own (if I have any) like my parents raised me.",
  "I hate studying for many academic subjects.",
  "I am good at combining ideas in ways that others have not tried.",
  "I am ugly.",
  "I am comfortable talking to members of the same sex.",
  "I am awkward and poorly coordinated at most sports and physical activities.",
  "I have generally done better in mathematics courses than other courses.",
  "Spiritual/religious beliefs have little to do with my life philosophy.",
  "Overall, I am pretty accepting of myself.",
  "Being honest is not particularly important to me.",
  "I have lots of friends of the opposite sex.",
  "I have a poor vocabulary.",
  "I am happy most of the time.",
  "I still have many unresolved conflicts with my parents.",
  "I like most academic subjects.",
  "I wish I had more imagination and originality.",
  "I have a good body build.",
  "I don't get along very well with other members of the same sex.",
  "I have good endurance and stamina in sports and physical activities.",
  "Mathematics makes me feel inadequate.",
  "Spiritual/religious beliefs make my life better and make me a happier person.",
  "Overall, I don't have much respect for myself.",
  "I nearly always tell the truth.",
  "Most of my friends are more comfortable with members of the opposite sex than I am.",
  "I am an avid reader.",
  "I am anxious much of the time.",
  "My parents have usually been unhappy or disappointed with what I do and have done.",
  "I have trouble with most academic subjects.",
  "I enjoy working out new ways of solving problems.",
  "There are lots of things about the way I look that I would like to change.",
  "I make friends easily with members of the same sex.",
  "I hate sports and physical activities.",
  "I am quite good at mathematics.",
  "My spiritual/religious beliefs provide the guidelines by which I conduct my life.",
  "Overall, I have a lot of self-confidence.",
  "I sometimes take things that do not belong to me.",
  "I am comfortable talking to members of the opposite sex.",
  "I do not do well on tests that require a lot of verbal reasoning ability.",
  "I hardly ever feel depressed.",
  "My values are similar to those of my parents.",
  "I'm good at most academic subjects.",
  "I'm not very good at problem-solving.",
  "My body weight is about right (neither too fat nor too skinny).",
  "Other members of the same sex find me boring.",
  "I have a high energy level in sports and physical activities.",
  "I have trouble understanding anything that is based upon mathematics.",
  "Continuous spiritual/religious growth is important to me.",
  "Overall, I have a very good self-concept.",
  "I never cheat.",
  "I'm quite shy with members of the opposite sex.",
  "Relative to most people, my verbal skills are quite good.",
  "I tend to be high-strung, tense, and restless.",
  "My parents have never had much respect for me.",
  "I'm not particularly interested in most academic subjects.",
  "I have a lot of intellectual curiosity.",
  "I dislike the way I look.",
  "I share lots of activities with members of the same sex.",
  "I'm not very good at any activities that require physical ability and coordination.",
  "I have always done well in mathematics classes.",
  "I rarely if ever spend time in spiritual meditation or religious prayer.",
  "Overall, nothing that I do is very important.",
  "Being dishonest is often the lesser of two evils.",
  "I make friends easily with members of the opposite sex.",
  "I often have to read things several times before I understand them.",
  "I do not spend a lot of time worrying about things.",
  "My parents treated me fairly when I was young.",
  "I learn quickly in most academic subjects.",
  "I am not very original in my ideas, thoughts, and actions.",
  "I have nice facial features.",
  "Not many people of the same sex like me.",
  "I like to exercise vigorously at sports and/or physical activities.",
  "I never do well on tests that require mathematical reasoning.",
  "I am a better person as a consequence of my spiritual/religious beliefs.",
  "Overall, I have pretty positive feelings about myself.",
  "I am a very honest person.",
  "I have had lots of feelings of inadequacy about relating to members of the opposite sex.",
  "I am good at expressing myself.",
  "I am often depressed.",
  "It has often been difficult for me to talk to my parents.",
  "I hate most academic subjects.",
  "I am an imaginative person.",
  "I wish that I were physically more attractive.",
  "I am popular with other members of the same sex.",
  "I am poor at most sports and physical activities.",
  "At school, my friends always came to me for help in mathematics.",
  "I am basically an atheist and believe that there is no being higher than man.",
  "Overall, I have a very poor self-concept.",
  "I would feel OK about cheating on a test as long as I did not get caught.",
  "I am comfortable being affectionate with members of the opposite sex.",
  "In school, I had more trouble learning to read than most other students.",
  "I am inclined towards being an optimist.",
  "My parents understand me.",
  "I get good marks in most academic subjects.",
  "I would have no interest in being an inventor.",
  "Most of my friends are better looking than I am.",
  "Most people have more friends of the same sex than I do.",
  "I enjoy sports and physical activities.",
  "I have never been very excited about mathematics.",
  "I believe that there will be some form of continuation of my spirit or soul after my death.",
  "Overall, I have pretty negative feelings about myself.",
  "I value integrity above all other virtues.",
  "I never seem to have much in common with members of the opposite sex.",
  "I have good reading comprehension.",
  "I tend to be a very nervous person.",
  "I like my parents.",
  "I could never achieve academic honours, even if I worked harder.",
  "I can often see better ways of doing routine tasks.",
  "I am good looking.",
  "I have lots of friends of the same sex.",
  "I am a sedentary type who avoids strenuous activity.",
  "Overall, I do lots of things that are important.",
  "I am not a very reliable person.",
  "Spiritual/religious beliefs have little to do with the type of person I want to be.",
  "I have never stolen anything of consequence.",
  "Overall, I am not very accepting of myself.",
  "Few, if any, of my friends are very spiritual or religious.",
  "Is there any other relevant information you would like to add?",
  "Did you experience any difficulty in responding to this questionnaire?",
];

var q3values = [
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
  ques3,
  q1values,
  q2values,
  q3values,
};
