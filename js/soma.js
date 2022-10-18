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

  const situacoes = [
    //1
    {id: 'defeitoGFsgdSinistro',
    value: 'PT'},
    //2
    {id: 'defeitoGFdemandaPT',
    value: 'Reparo'},
    //3
    {id: 'defeitoGFdemandaPTprodutoEssenc',
    value: 'Reparo'},
    //4
    {id: 'defeitoGFsgdSinistrodemandaPT',
    value: 'PT'},
    //5
    {id: 'sgdSinistrodemandaPTmesmoDft',
    value: 'PT'},
    //6
    {id: 'sgdSinistrodemandaPT',
    value: 'PT'},
    //7
    {id: 'sgdSinistromesmoDft',
    value: 'Reparo'},
    //8
    {id: 'sgdSinistromesmoDftcliVulneravel',
    value: 'PT'},
    //9
    {id: 'sgdSinistromesmoDftprodutoEssenc',
    value: 'PT'},
    //10
    {id: 'trcSinistro',
    value: 'PT'},
    //11
    {id: 'mesmoDfttrcSinistro',
    value: 'PT'},
    //12
    {id: 'sgdSinistro',
    value: 'Reparo'},
    //13
    {id: 'sgdSinistrocliVulneravel',
    value: 'PT'},
    //14
    {id: 'sgdSinistroprodutoEssenc',
    value: 'PT'},
    //15
    {id: 'trintaDiasquarenta5dias',
    value: 'Reparo'},
    //16
    {id: 'produtoEssenctrintaDias',
    value: 'PT'},
    //17
    {id: 'demandaPTtrintaDias',
    value: 'PT'}
  ]


  

  for (let i = 0; i < data.length; i++) {
      value = parseInt(data[i].value)
      soma = value + soma
      //console.log(soma)
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
      title: 'Oops...',
      text: 'Decisão não prevista. Gentileza reportar',
    })
  }   


  for (let i = 0; i < situacoes.length; i++) {
    if (ids == situacoes[i].id) {
      //console.log("Decisão " + (i+1) + " - Resultado: " + situacoes[i].value)
      let texto = "Decisão " + (i+1) + " - Resultado: " + situacoes[i].value
      Swal.fire({
        icon: 'info',
        title: situacoes[i].value,
        text: texto,
      })
    } 
  }
}

function limpar() {
  const data = document.querySelectorAll('input[type="checkbox"]:checked')
  for (let i = 0; i < data.length; i++) {
    data[i].checked = false
  }

}

