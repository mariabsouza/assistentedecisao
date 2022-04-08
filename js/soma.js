function enviar() {
  const data = document.querySelectorAll('input[type="checkbox"]:checked')

  let soma = 0
  let ids = ""
  for (let i = 0; i < data.length; i++) {
    let id = data[i].id
    ids = ids + id
    console.log(ids)
  }

  // //let exception = "sgdSinistromesmoDftprodutoEssenc"
  // if (ids == exception) {
      
  //   soma = 1
  // }

  for (let i = 0; i < data.length; i++) {
      value = parseInt(data[i].value)
      soma = value + soma
      console.log(soma)
  }

  if (soma >= 8) {
    Swal.fire({
      icon: 'info',
      title: 'PT',
      text: 'Caso você não concorde com a decisão, favor reportar',
    })
  } else if (soma < 8) {
    Swal.fire({
      icon: 'info',
      title: 'Reparo',
      text: 'Caso você não concorde com a decisão, favor reportar',
    })
  } else {
    Swal.fire({
      icon: 'info',
      title: 'PT',
      text: 'Decisão não prevista. Gentileza reportar',
    })
  }   
}

function limpar() {
  const data = document.querySelectorAll('input[type="checkbox"]:checked')
  for (let i = 0; i < data.length; i++) {
    data[i].checked = false
  }

}

