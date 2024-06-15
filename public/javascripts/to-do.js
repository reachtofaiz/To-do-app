let createbtn = document.querySelector('.create-btn');
let container2 = document.querySelector('.container2');
let count = 0;

createbtn.addEventListener('click', function (e) {
    console.log("Btn clicked")
    let uniqueId = count++;

    let subcontainer = document.createElement('div')
    subcontainer.className = 'subcontainer';
    subcontainer.id = 'subcontainer_' + uniqueId;

    let title = document.createElement('div')
    title.className = 'title';
    
    let title_input = document.createElement('input')
    title_input.type = 'text'
    title_input.disabled = true;  
    title.appendChild(title_input)

    let iconContainer = document.createElement('div');
    iconContainer.className = 'iconContainer';

    let editIcon = document.createElement('img')
    editIcon.src = '/images/edit.svg'
    editIcon.alt = 'Error'

    editIcon.addEventListener('click', (e) => {
        console.log("edit icon is clicked");
        toDoWork.disabled = false; 
        title_input.disabled = false;

    })

    let deleteIcon = document.createElement('img')
    deleteIcon.src = '/images/delete.svg'
    deleteIcon.alt = 'Error'


    deleteIcon.addEventListener('click', (e) => {
        console.log("delete icon is clicked");
        let deleteSubcontainer = e.target.closest('.subcontainer');
        if (deleteSubcontainer) {
            deleteSubcontainer.remove();
        }
    });


    let description = document.createElement('div')
    description.className = 'description'

    let toDoWork  = document.createElement('textarea');
    toDoWork.name = 'toDoWork';
    toDoWork.rows = '15';
    toDoWork.cols = '26';
    toDoWork.disabled = true;  
    description.appendChild(toDoWork)
/* <textarea name="description" rows="15" cols="26"></textarea> */




    container2.appendChild(subcontainer)
    subcontainer.appendChild(title)
    subcontainer.appendChild(iconContainer)
    subcontainer.appendChild(description)

    iconContainer.appendChild(editIcon)
    iconContainer.appendChild(deleteIcon)
})

document.addEventListener('click', function (event) {
    let subcontainers = document.querySelectorAll('.subcontainer');

    subcontainers.forEach(subcontainer => {
        let isClickInside = subcontainer.contains(event.target);
        let title_input = subcontainer.querySelector('.title input');
        let toDoWork = subcontainer.querySelector('textarea');

        if (!isClickInside) {
            title_input.disabled = true;
            toDoWork.disabled = true;
        }
    });
});
/* 
        <div class="subcontainer">
            <div class="title">Reading</div>
            <input type="text" class="title">
            <div class="iconContainer">
                <img src="/images/edit.svg" alt="">
                <img src="/images/delete.svg" alt="">
            </div>
            <div class="description"></div>
*/


