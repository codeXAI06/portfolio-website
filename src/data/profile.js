const profile = {
  name: 'Thakur Vijay Kumar Singh',
  firstName: 'Vijay',
  email: 'tvijaykumarsingh06@gmail.com',
  github: 'https://github.com/codeXAI06',
  linkedin: 'https://www.linkedin.com/in/vijayxkumar06',
  intro: 'B.Tech AI/ML student who builds full-stack products, reliable backend systems, and applied ML experiences that solve meaningful problems.',
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ],
  highlights: ['JPMorgan Chase Code for Good · Runner-up', 'Smart Interviews · Rank 2 / 300+', 'LeetCode Weekly Contest 474 · Rank 75'],
  skills: {
    Languages: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
    Frontend: ['HTML', 'CSS', 'React.js', 'Angular'],
    Backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Socket.IO'],
    'AI / ML': ['Scikit-learn', 'spaCy', 'Hugging Face', 'OCR', 'NLP'],
    Databases: ['MongoDB', 'MySQL'],
    Tools: ['Git', 'GitHub', 'Postman', 'Linux'],
  },
  projects: [
    {
      name: 'ReliefLink',
      kicker: 'REAL-TIME COORDINATION',
      artTitle: 'People → help',
      description: 'An AI-powered disaster relief coordination platform connecting people in crisis with nearby volunteers through triage, live updates, voice input, and location-aware workflows.',
      stack: ['React', 'Node.js', 'AI triage', 'SSE'],
      github: 'https://github.com/codeXAI06/ReliefLink',
    },
    {
      name: 'Fair Maps',
      kicker: 'RESPONSIBLE AI',
      artTitle: 'Equity in focus',
      description: 'A disaster-response mapping system designed to make AI-driven predictions more equitable across communities, with attention to underrepresented and data-sparse regions.',
      stack: ['Python', 'FastAPI', 'ML', 'Geospatial'],
      github: 'https://github.com/codeXAI06/Fair-Maps',
    },
    {
      name: 'AQI Prediction Web App',
      kicker: 'APPLIED ML',
      artTitle: 'Forecast air quality',
      description: 'An end-to-end AQI forecasting experience combining historical air-quality data, weather context, a trained regression model, and live Open-Meteo enrichment.',
      stack: ['Python', 'Flask', 'React', 'Scikit-learn'],
      github: 'https://github.com/codeXAI06/aqi',
    },
  ],
  achievements: [
    { icon: '01', eyebrow: 'JPMorgan Chase · Code for Good', title: 'Hackathon runner-up', detail: 'Recognized for building a practical solution under pressure with a team.' },
    { icon: '02', eyebrow: 'Smart Interviews · DSA Final Contest', title: 'Ranked 2nd among 300+', detail: 'A strong finish in a competitive data structures and algorithms contest.' },
    { icon: '03', eyebrow: 'LeetCode · Weekly Contest 474', title: 'Ranked 75th globally', detail: 'Placed in the top tier of a contest with 32,000+ participants.' },
  ],
}

export default profile
