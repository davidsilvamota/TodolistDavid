let texto = window.document.getElementById("texto");
let notcomplet = window.document.getElementById("notcompled");
let complet = window.document.getElementById("compled");

let add = window.document
  .getElementById("add")
  .addEventListener("click", adicionar);
function adicionar() {
  if (texto.value == ``) {
    window.alert("[erro] verifique os dados e tente novamente");
  } else {
    let nlista = window.document.createElement("li");
    notcompled.appendChild(nlista);
    nlista.innerHTML = `${texto.value}`;
    texto.value = ``;

    let btna = window.document.createElement("button");
    btna.setAttribute("class", "add");
    btna.textContent = `+`;
    nlista.appendChild(btna);

    let btne = window.document.createElement("button");
    btne.setAttribute("class", "ex");
    btne.textContent = `x`;
    nlista.appendChild(btne);

    btne.addEventListener("click", excluir);
    function excluir() {
      nlista.remove();
    }

    btna.addEventListener("click", comfirma);

    function comfirma() {
      complet.appendChild(nlista);
      btna.remove()
    }
  }
}
