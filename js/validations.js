function showValidationMessage(element_id) {
    var element = document.getElementById(element_id)

    if (document.getElementById(`${element_id}-error`)) {
        return
    }

    var error_label = document.createElement(`label`)
    error_label.id = `${element_id}-error`
    error_label.className = `error`
    error_label.setAttribute('for', `${element_id}`)
    element.parentElement.appendChild(error_label)
    error_label.innerHTML = element.validationMessage;
    document.getElementById(`${element_id}`).classList.add('invalid');
}

function hideValidationMessage(element_id) {

    if (!document.getElementById(`${element_id}-error`)) {
        return
    }

    document.getElementById(`${element_id}-error`).remove()
    document.getElementById(`${element_id}`).classList.remove('invalid');
}

function check(fields, location) {
    var formValid = true
    fields.forEach(x => {
        var element1 = document.getElementById(`${x}`)

        if (!element1.checkValidity()) {
            showValidationMessage(`${x}`)
            formValid = false
        }
    });

    if (formValid) {
        document.location = location
    }
}

function check2(fields, location) {
    var formValid = true
    fields.forEach(x => {
        var element1 = document.getElementById(`${x}_s`)
        var element2 = document.getElementById(`${x}_e`)

        if (!element1.checkValidity()) {
            showValidationMessage(`${x}_s`)
            formValid = false
        }

        if (!element2.checkValidity()) {
            showValidationMessage(`${x}_e`)
            formValid = false
        }
    });

    if (formValid) {
        document.location = location
    }
}

function singleFieldCheck(fields) {
    fields.forEach((x) => {
        var element1 = document.getElementById(`${x}`)

        element1.addEventListener('blur', () => {
            if (!element1.checkValidity()) {
                showValidationMessage(`${x}`)
            } else {
                hideValidationMessage(`${x}`)
            }

        })
    })
}

function singleFieldCheck2(fields) {
    fields.forEach((x) => {
        var element1 = document.getElementById(`${x}_s`)
        var element2 = document.getElementById(`${x}_e`)

        element1.addEventListener('blur', () => {
            if (!element1.checkValidity()) {
                showValidationMessage(`${x}_s`)
            } else {
                hideValidationMessage(`${x}_s`)
            }

        })

        element2.addEventListener('blur', () => {
            if (!element2.checkValidity()) {
                showValidationMessage(`${x}_e`)
            } else {
                hideValidationMessage(`${x}_e`)
            }

        })
    })
}