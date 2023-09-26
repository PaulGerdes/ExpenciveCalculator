let insert;
let plusOderMinus;
let nummerEintrag = 1;
let issuancetype;
let knopfZahl;
let vermogen = 0;

function VermögensVerwaltung(einkommen) {
  console.log(einkommen);
  vermogen = vermogen + einkommen;
  document.getElementById("#incomeDashboard").innerHTML = vermogen;
}

function setIncome() {
  if (!document.querySelector("#income").value) {
    document.querySelector("#income").value = "Du musst eine zahl eingeben";
  }
  if (document.querySelector("#income").value > null) {
    insert = document.querySelector("#income").value;
    VermögensVerwaltung(insert.value);
    neuerEintrag(insert, "plus");
    document.querySelector("#income").value;
  }
}

function setissuance() {
  if (!document.querySelector("#issuancevalue").value) {
    document.querySelector("#issuancevalue").value =
      "Du musst eine zahl eingeben";
  } else {
    if (!document.querySelector("#issuancetype").value) {
      document.querySelector("#issuancetype").value =
        "Du musst einen Grund eingeben";
    }
  }
  if (
    document.querySelector("#issuancevalue").value > null &&
    document.querySelector("#issuancetype").value > null
  ) {
    insert = document.querySelector("#issuancevalue").value;
    issuancetype = document.querySelector("#issuancetype");

    neuerEintrag(insert, "minus", issuancetype);
    document.querySelector("#issuancetype").value;
    document.querySelector("#issuancevalue").value;
    document.getElementById("issuanceDashbaord").innerHTML = insert;
  }
}

function neuerEintrag(insert, plusOderMinus, issuancetype) {
  nummerEintrag = nummerEintrag + 1;
  console.log(nummerEintrag);
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
    var wert3 = document.createElement("p");
    wert3.innerHTML = null;
    document.getElementById("eintrag" + nummerEintrag).appendChild(wert3);
  } else {
    var wert3 = document.createElement("p");
    wert3.innerHTML = issuancetype.value;
    document.getElementById("eintrag" + nummerEintrag).appendChild(wert3);
  }
  var wert4 = document.createElement("button");
  knopfzahl = "button" + nummerEintrag;
  wert4.id = nummerEintrag;
  wert4.innerHTML = "x";
  wert4.setAttribute("onclick", "deleteblock(this.id)");

  document.getElementById("eintrag" + nummerEintrag).appendChild(wert4);
}

function deleteblock(zahl) {
  console.log(zahl);
  let testid = "eintrag" + zahl;
  datei = document.getElementById(testid);
  datei.remove();
}
