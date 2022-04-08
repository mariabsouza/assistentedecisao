function enviar () {
  let defeitoGF = document.querySelector('#defeitoGF').checked
  let sgdSinistro = document.querySelector('#sgdSinistro').checked
  let demandaPT = document.querySelector('#demandaPT').checked
  let mesmoDft = document.querySelector('#mesmoDft').checked
  let trcSinistro = document.querySelector('#trcSinistro').checked
  let produtoEssenc = document.querySelector('#produtoEssenc').checked
  let cliVulneravel = document.querySelector('#cliVulneravel').checked


  if ((defeitoGF == false) || (sgdSinistro == false) && trcSinistro == false) {
    alert("reparo 1")
  } else if (defeitoGF == true && demandaPT == true) {
    alert("Reparo")
  } else if ((defeitoGF == true) && (sgdSinistro == true) && (produtoEssenc == true)) {
    alert("Reparo")
  } else if (trcSinistro == true) {
    alert("PT 2")
  } else if ((defeitoGF == true || cliVulneravel == true ) && (sgdSinistro == true || trcSinistro == true)) {
    alert("PT 3")
  } else if (mesmoDft == true && (trcSinistro == false) && (cliVulneravel == false) && (demandaPT == false) && (produtoEssenc == false)) {
    alert("Reparo 4")
  } else if (mesmoDft == true && (trcSinistro == true) || (cliVulneravel == true) || (demandaPT == true) || (produtoEssenc == true) ){
    alert("PT 5")
  } 
}
