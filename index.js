const form = document.getElementById('form-atividade'); 
const nameInput = document.getElementById('nome'); 
const numberInput = document.getElementById('telefone');
const contactList = document.getElementById('tabela');

form.addEventListener('submit', (event) => { event.preventDefault();

const name = nameInput.value.trim(); 
const number = numberInput.value.trim();

if (!name ||!number) { alert('Preencha todos os campos!'); return; }

const row = document.createElement('tr'); 
const nameCell = document.createElement('td'); 
const numberCell = document.createElement('td');

nameCell.textContent = name; 
numberCell.textContent = number;

row.appendChild(nameCell); 
row.appendChild(numberCell);

contactList.appendChild(row);

nameInput.value = ''; 
numberInput.value = ''; });