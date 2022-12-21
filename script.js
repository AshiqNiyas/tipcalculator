let bill = document.getElementById('bill')
let tippercent = document.getElementById('tippercent')

let addpeople = document.getElementById('addpeople')
let reducepeople = document.getElementById('reducepeople')
let perperson = document.getElementById('perperson')
let numberofpeoplediv = document.getElementById('numberofpeople')
let numofpeople = Number(numberofpeoplediv.innerText)

//Calculating tipamount, total and perperson cost

const calculatebill = () =>{
    const billamount = Number(bill.value)
    const tipamount = Number(tippercent.value)/100

    const tipfinal = billamount*tipamount

    let total = (billamount+tipfinal)/numofpeople

    perperson.innerText = (total.toFixed(2))

}


//adding people to split bill

const addperson = () =>{
    numofpeople +=1
    numberofpeoplediv.innerText = numofpeople
    calculatebill()
}

//removing people 

const removeperson = () =>{
    if(numofpeople <= 1){
        return
    }
    numofpeople -=1
    numberofpeoplediv.innerText = numofpeople
    calculatebill()
}