let create = document.querySelector("#create");
let modal = document.querySelector("#create-student");
let update_model = document.querySelector("#update-student");
let close = document.querySelector("#close")
let update_close = document.querySelector("#update_close")
let save = document.querySelector("#save");
let update = document.querySelector("#update");
let success = document.querySelector(".alert-success")
let error = document.querySelector(".alert-danger")


create.addEventListener("click", () => {
    modal.style.display = "flex";
});
close.addEventListener("click", () => {
    modal.style.display = "none";
})
update_close.addEventListener("click", () => {
    update_model.style.display = "none";

})


// create Student

save.addEventListener("click", async () => {
    try {
        let name = document.querySelector("#name").value;
        let age = document.querySelector("#age").value;
        let country = document.querySelector("#country").value;


        const res = await fetch("php/insert-data.php", {
            method: "POST",
            body: JSON.stringify({ "name": name, "age": age, "country": country }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const output = await res.json();

        if (output.success) {
            success.style.display = "flex";
            success.innerText = output.message;
            name = "";
            age = "";
            country = "";
            modal.style.display = "none";
            getStudents();
            getTotalCount();
            setTimeout(() => {
                success.style.display = "none";
                success.innerText = "";

            }, 1000)

        } else {
            error.style.display = "flex";
            error.innerText = output.message;
            setTimeout(() => {
                error.style.display = "none";
                error.innerText = "";

            }, 1000)
        }
    } catch (error) {
        error.style.display = "flex";
        error.innerText = error.message;
        setTimeout(() => {
            error.style.display = "none";
            error.innerText = "";

        }, 1000)
    }
});

// select Student

const getStudents = async () => {
    try {
        const tbody = document.querySelector("#tbody");
        let tr = "";
        const res = await fetch("php/select-data.php", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const output = await res.json();
        if (output.empty === "empty") {
            tr = "<tr>Record Not Found</td>"
        } else {
            for (var i in output) {
                tr += `
            <tr>
            <td>${parseInt(i) + 1}</td>
            <td>${output[i].std_name}</td>
            <td>${output[i].std_age}</td>
            <td>${output[i].std_country}</td>
            <td><button onclick="editStudent(${output[i].id})" class="btn btn-success">Edit</button></td>
            <td><button onclick="deleteStudent(${output[i].id})"  class="btn btn-danger">Delete</button></td>
            </tr>`
            }
        }
        tbody.innerHTML = tr;
    } catch (error) {
        console.log("error " + error)
    }
}

getStudents();


// edit students

const editStudent = async (id) => {
    update_model.style.display = "flex";

    const res = await fetch(`php/edit-data.php?id=${id}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    })
    const output = await res.json();
    if (output["empty"] !== "empty") {
        for (var i in output) {
            document.querySelector("#id").value = output[i].id
            document.querySelector("#edit_name").value = output[i].std_name
            document.querySelector("#edit_age").value = output[i].std_age
            document.querySelector("#edit_country").value = output[i].std_country
        }
    }

}

// update student

update.addEventListener("click", async () => {
    let id = document.querySelector("#id").value;
    let name = document.querySelector("#edit_name").value;
    let age = document.querySelector("#edit_age").value;
    let country = document.querySelector("#edit_country").value;

    const res = await fetch("php/update-data.php", {
        method: "POST",
        body: JSON.stringify({
            "id": id,
            "name": name,
            "age": age,
            "country": country
        })
    });

    const output = await res.json();
    if (output.success) {
        success.style.display = "flex";
        success.innerText = output.message;
        name = "";
        age = "";
        country = "";
        update_model.style.display = "none";
        getStudents();
        setTimeout(() => {
            success.style.display = "none";
            success.innerText = "";

        }, 1000)
    } else {
        error.style.display = "flex";
        error.innerText = output.message;
        setTimeout(() => {
            error.style.display = "none";
            error.innerText = "";
        }, 1000)
    }

})

// delete student

const deleteStudent = async (id) => {
    const res = await fetch("php/delete-data.php?id=" + id, {
        method: "GET",
    });
    const output = await res.json();
    if (output.success) {
        success.style.display = "flex";
        success.innerText = output.message;
        setTimeout(() => {
            success.style.display = "none";
            success.innerText = "";
        }, 1000)
        getStudents();
        getTotalCount();
    } else {
        error.style.display = "flex";
        error.innerText = output.message;
        setTimeout(() => {
            error.style.display = "none";
            error.innerText = "";
        }, 1000)
    }
}

// get total count  students;

const getTotalCount = async () => {
    let total = document.querySelector("#total");
    const res = await fetch("php/get-total-count.php", {
        method: "GET"
    })
    const output = await res.json();
    total.innerText = output;
}
getTotalCount();