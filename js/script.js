const dateInput = document.querySelector('input.date-input');
const dateOutputContainer = document.querySelector('.output-container')
const dateOutputText = document.querySelector('span.output-text');

const MouthsInPortuguese = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

const setInvalidDate = () => dateOutputText.textContent = `Data inválida`;

dateInput.oninput = () => {
  const { value } = dateInput;
  
  if(value.length === 10){
    const [day, mounth, year] = value.split('/');

    if(Date.parse(`${mounth}/${day}/${year}`)){
      dateOutputText.textContent = `${day} de ${MouthsInPortuguese[Number(mounth - 1)]} de ${year}`;
    } else {
      setInvalidDate();
    }
  } else {
    setInvalidDate();
  }
}