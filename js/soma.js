function enviar() {
  const data = document.querySelectorAll('input[type="checkbox"]:checked')

  let soma = 0
  let ids = ""
  for (let i = 0; i < data.length; i++) {
    let id = data[i].id
    ids = ids + id
    console.log(ids)
    console.log(typeof(ids))
  }

  let exception = "sgdSinistromesmoDftprodutoEssenc"

  for (let i = 0; i < data.length; i++) {
    console.log(ids)
    console.log(exception)
    if (ids == exception) {
      
      soma = 1
    } else {
      value = parseInt(data[i].value)
      soma = value + soma
    }
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

