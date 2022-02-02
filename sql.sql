SELECT CONCAT(NAME, '(', SUBSTRING(OCCUPATION, 1, 1), ')') FROM `sample` WHERE 1;

SELECT CONCAT('There are a total of ', count(OCCUPATION), ' ', OCCUPATION, 's.') FROM `sample` GROUP BY OCCUPATION;

SELECT questions.difficulty, count(questions.difficulty)
FROM questions
INNER JOIN question_skills ON questions.id = question_skills.question_id
INNER JOIN skills ON skills.id = question_skills.id
WHERE questions.active 
GROUP BY questions.difficulty
ORDER BY count(questions.difficulty) DESC


Object-Oriented Programming (OOP)
Dependency Inversion
Polymorphism
Systems Architecture
Caching
Programming Concepts
Data Types
JavaScript
Javascript Closure
Internet Security
Cross Site Scripting (XSS)