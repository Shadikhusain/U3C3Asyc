var data = JSON.parse(localStorage.getItem("user"))
displayamount(data);
console.log(data)

function displayamount(data) {
    data.map(({ person_amount }) => {
        document.getElementById("wallet_balance").innerText = person_amount;
    })
}


var voucher_list = document.getElementById("voucher_list");


getData()

async function getData() {
    try {
        let response = await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers");
        let datas = await response.json();
        displaydata(datas.vouchers)

        console.log("data", data);
    } catch (err) {
        console.log("Error", err)
    }
}


function displaydata(datas) {
    data.map(({ image, name, price }) => {
        var images = document.createElement("img");
        images.setAttribute("src", image);

        voucher_list.append(images)


    })
}