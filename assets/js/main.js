// COdigo para a lista de tarelas

const tarefas = [];
const resultado = document.querySelector('#resultado');

document.querySelector('form').addEventListener('submit', function(e){
    
    e.preventDefault();
    
    const tarefa = document.querySelector('#tarefa').value;

    if(tarefa == ''){

        alert('Digite uma tarefa');

    }else{

        tarefas.push(tarefa);
        console.log(tarefas);
        resultado.style.display = 'block';

        const index = tarefas.length - 1; // último índice do array

        resultado.innerHTML += `
            <div class="tarefa" id="tarefa-${index}">
                <p>${tarefa}</p>
                <button type="button" id="remover-${index}">x</button>
            </div>`;

        document.querySelector(`#remover-${index}`).addEventListener('click', () => {
          tarefas.splice(index, 1);
          document.querySelector(`#tarefa-${index}`).remove();
          console.log(tarefas);
      });
}});