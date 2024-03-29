const readline = require('readline-sync');

const BMI_MAX_AND_MIN = {
  'Baixo peso': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'PEso normal': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Sobrepeso': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obesidade Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obesidade Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obesidade Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
};


const bmiCalc = (weigth, height) => { 
  console.log(`Seu peso é ${ weigth }kg e sua altura ${ height }cm .`)
  
  const heightInMeters = height / 100;
  const squareHeight = heightInMeters * heightInMeters;

  const bmi = weigth / squareHeight;
  return bmi;
};

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); 

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; 

    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

const main = () => {
  const weigth = readline.questionFloat('Qual seu peso? (kg)');
  const height = readline.questionFloat('Qual sua altura? (cm)') 

  const bmi = bmiCalc(weigth, height);
  const bmiResult = handleBMIResult(bmi);
  console.log(`Seu IMC é ${ bmi.toFixed(2) }kg/m² `)
  console.log(`Su estado atual é de ${ bmiResult }`)
}

main();