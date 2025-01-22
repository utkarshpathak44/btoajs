
const allDataTemplate=[{date:(new Date()).toString().slice(3,16).trim(), expenses:[{name:"Pizza",type:2, price:500}]}]


const elementType=["food","rent","bills","commute","other"]
const expenseHeader=`
    <div class="expenseHeader">
        <form id="expenseForm">
            <input required type="text" id="newExpense" name="name" placeholder="Add a new expense for today.">
            <select required name="type" id="mySelect">
                <option value="1">Food</option>
                <option value="2">Rent</option>
                <option value="3">Bills</option>
                <option value="4">Commute</option>
                <option value="5">Other</option>
            </select>
            <input required type="number" id="" name="price" placeholder="Enter price">
            <input class="button submitButton" type="submit"/>
        </form>
    </div>
`



let allData=[]

function addToday(data) {
    addNewExpense((new Date()).toString().slice(3,16).trim(),data);
}

function addNewExpense(date,expense){
    const existingEntry = allData.find(
        (entry) => new Date(entry.date).toString().slice(3,16).trim() === date
      );
    if(existingEntry){
        existingEntry.expenses.push(expense)
    }else{
        allData.push({
            date: new Date(date),
            expenses: [expense],
          });
    }
    localStorage.setItem('ExpenseData', JSON.stringify(allData));
    allExpensesRepresent(allData)
    findTotalExpense()
}

function deleteAnExpense(id){
    
}

function findTotalExpense(data,time=1){
    let toalExpense=0
    allData.forEach((x)=>{
        x.expenses.forEach((y)=>{
            toalExpense+=parseFloat(y.price)
        })
    })
    const representExprense=document.querySelector(".total")
    representExprense.innerHTML=toalExpense+"&#8377;"
    // return toalExpense
}

function expenseByCategory(time,category){
    //time to be given in day, month, year format
}



//render the selected month in dom
function allExpensesRepresent(data,day){
    //need to fix this function so that we can access it for anyday
    const expenseContainer = document.querySelector('.expenseContainer');
    const template=document.createElement('template')
    let todaysDataHtml=""
    data.forEach((aday=>{
            if(day===data.Date){
            let thisDays=``
            aday.expenses.forEach((item)=>{
                thisDays+=`
                <div class="expense" id="${item.id}">
                    <span>${item.name}</span>
                    <span>${elementType[parseInt(item.type)-1]}</span>
                    <span>${item.price}</span>
                </div>
                `
            })
            todaysDataHtml=`
            <div class="" id="">
                ${thisDays}
            <div>
            `
        }
    }))
    let k=expenseHeader+todaysDataHtml
    template.innerHTML=k
    // console.log(k)
    expenseContainer.innerHTML=k
    //adding the form submit eventListener right here
    addEventListeners()
    
}

function addEventListeners(){
    const form = document.getElementById('expenseForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
    
        // Create FormData object from the form
        const formData = new FormData(form);
    
        // Extract values from the formData
        const expenseName = formData.get('name');  // Get name of the expense
        const expenseType = formData.get('type');  // Get type of the expense (category)
        const price = formData.get('price');              // Get price value
        addToday({"name":expenseName,"type":expenseType,"price":price})
    });
}

function renderCalender(month,year){
    
    const calender=document.querySelector(".calContainer")
    const template=document.createElement('template')

    const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    const daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31]

    const firstDay = new Date(year, month, 1);


    let daysInPreviousMonth=0
    let calederBegin=1
    let previousMonthEnded=false



    if(firstDay.getDay()!=1){
        daysInPreviousMonth=daysInMonth[(firstDay.getMonth()-1+12)%12]
        calederBegin=daysInPreviousMonth-firstDay.getDay()+1
    }else{
        previousMonthEnded=true
    }
    let newMonthBegins=false
    let str=""

    for(let i=0;i<35;i++){
        if(!previousMonthEnded){
            if(calederBegin<daysInPreviousMonth){
                calederBegin++;
            }else{
                previousMonthEnded=true
                calederBegin=1
            }

        }else{
            if(calederBegin<daysInMonth[firstDay.getMonth()]){
                calederBegin++

            }else{
                calederBegin=1
                newMonthBegins=true

            }
        }
        str+=`<div class="dayHolder ${previousMonthEnded&&!newMonthBegins?"thisMonth":""}">${calederBegin} ${days[i%7].substring(0,3)}</div>`
    }
    let str2=`<div class="calenderTitle">${firstDay.toDateString().split(' ')[1]}, ${firstDay.toDateString().split(' ')[3]}</div>`+str

    console.log(new Date())

    template.innerHTML=str2

    calender.append(template.content)
}


function loadData(){
    return JSON.parse(localStorage.getItem('ExpenseData'));
}

function init(){
    //load the existing expense entries
    allData=loadData()//add a new entry to the array if it doesn't exist TBI
    // if(allData){
    //     localStorage.setItem("ExpenseData",JSON.stringify(allDataTemplate))
    // }
    allData=loadData()
    renderCalender(new Date().getMonth(),new Date().getFullYear())
    //renders the current month's calender
    const today=(new Date()).toString().slice(3,16).trim()
    allExpensesRepresent(allData,today)
    console.log(findTotalExpense(allData))

}

init()