document.getElementById("submit").addEventListener("click", addItem);
var arr = [];

function addItem() {
    // event.preventDefault();
    let p_name = document.getElementById("name").value;
    let P_email = document.getElementById("email").value;
    let P_address = document.getElementById("address").value;
    let P_amountt = document.getElementById("amount").value;

    let mydataobj = {
        person_name: p_name,
        person_email: P_email,
        person_address: P_address,
        person_amount: Number(P_amountt)
    };
    arr.push(mydataobj);
    localStorage.setItem("user", JSON.stringify(arr));

}