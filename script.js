let insert;
let plusOderMinus;
let nummerEintrag = 1;
let issuancetype;

function setIncome() {
  insert = document.querySelector("#income").value;
  console.log(insert);
  NeuerEintrag(insert, "plus");
  document.querySelector("#income").value = null;
  document.getElementById("incomeDashboard").innerHTML = insert;
}
function setissuance() {
  nummerEintrag = nummerEintrag + 1;
  insert = document.querySelector("#issuancevalue").value;
  issuancetype = document.querySelector("#issuancetype");
  console.log(insert);
  NeuerEintrag(insert, "minus", issuancetype);
  document.querySelector("#issuancetype").value = null;
  document.querySelector("#issuancevalue").value = null;
  document.getElementById("issuanceDashbaord").innerHTML = insert;
}
function NeuerEintrag(insert, plusOderMinus, issuancetype) {
  var einzufuegendesObjekt = document.createElement("div");

  einzufuegendesObjekt.id = "eintrag" + nummerEintrag;
  einzufuegendesObjekt.className = "Eintrag";
  document.getElementById("history").appendChild(einzufuegendesObjekt);
  var wert1 = document.createElement("p");
  wert1.innerHTML = insert + "€";
  document.getElementById("eintrag" + nummerEintrag).appendChild(wert1);
  var wert2 = document.createElement("p");
  wert2.innerHTML = plusOderMinus;
  document.getElementById("eintrag" + nummerEintrag).appendChild(wert2);

  if (issuancetype == null) {
  } else {
    var wert3 = document.createElement("p");
    wert3.innerHTML = issuancetype.value;
    document.getElementById("eintrag" + nummerEintrag).appendChild(wert3);
  }
}
