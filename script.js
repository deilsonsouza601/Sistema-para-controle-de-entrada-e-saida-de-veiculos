function deletar(element) {
    Swal.fire({
        title: 'Tem certeza?',
        text: "Você não será capaz de reverter isso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pode apagar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            element.remove();
            Swal.fire(
                'Apagado!',
                'Veículo retirado do pátio com sucesso!',
                'success'
            )
        }
    })
}

function cadastro(e) {
    let modelo = document.querySelector('#modelo');
    let placa = document.querySelector('#placa');

    if (!modelo.value || !placa.value) {
        alert('Digite o modelo e a placa!');
        return false;
    }

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();


    e.preventDefault();
    let item = `
        <tr>
            <th scope="row">${modelo.value}</th>
            <td>${placa.value}</td>
            <td>${hora}:${minutos}</td>
            <td><button onclick="deletar(this.parentNode.parentNode)" class="btn btn-danger"><i class="fa fa-close"></i></button></td>
        </tr>`;
    lista.innerHTML = lista.innerHTML + item;

    modelo.value = '';
    placa.value = '';

}

button = document.querySelector('.btnCadastro')
lista = document.querySelector('#lista');
button.addEventListener('click', cadastro);