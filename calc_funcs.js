let lastRes=0
let res =''
let autofuncs='X'
let basicString = ''
let monitorString = ''
let evalString = ''

monitor = document.getElementById('monitor')

function addCharToMonitor(x){
    switch(x){
        case 'pi':
            basicString += 'p'
            break;
        case 'e':
            basicString += 'e'
            break;
        case '^2':
            basicString += 't'
            break;
        case '1/':
            basicString += 'u'
            break;
        case 'abs':
            autofuncs = 'abs'
            CalculateAutoFunctions()
            break;
        case 'exp':
            autofuncs = 'exp'
            CalculateAutoFunctions()
            break;
        case 'mod':
            basicString += '%'
            break;
        case 'sqrt':
            autofuncs = 'sqrt'
            CalculateAutoFunctions()
            break;
        case 'fact':
            autofuncs = 'fact'
            CalculateAutoFunctions()
            break;
        case '^':
            basicString += '^'
            break;
        case '10^':
            autofuncs = '10^'
            CalculateAutoFunctions()
            break;
        case 'log':
            autofuncs = 'log'
            CalculateAutoFunctions()
            break;
        case 'ln':
            autofuncs = 'ln'
            CalculateAutoFunctions()
            break;
        default:
            basicString += x
            break;
    }

    if(autofuncs == 'X'){
        CreateStrings()
        monitor.innerHTML = monitorString
    } 
    autofuncs = 'X'
}

function CreateStrings(){
    monitorString = ''
    evalString = ''
    console.log('π')
    console.log('basic =' + basicString)
    for (let i = 0; i < basicString.length; i++) {
        switch(basicString[i]){
            case 'p':
                monitorString += 'π'
                evalString += Math.PI
                break;
            case 'e':
                monitorString += 'e'
                evalString += Math.E
                break;
            case 't':
                monitorString += '^2'
                evalString += '**2'
                break;
            case 'u':
                monitorString += '1/'
                evalString += '1/'
                break;
            case '%':
                monitorString += '%'
                evalString += 'mod'
                break;
            case '^':
                monitorString += '^'
                evalString += '**'
                break;
            default:
                monitorString += basicString[i]
                evalString += basicString[i]
                break;
        }
    };
    console.log('monitor = '+monitorString+' # eval = '+evalString)
    console.log('eval = '+evalString)
}

// this method calclates the equation on the monitor and apllies the overall function
function CalculateAutoFunctions(){
    try {
    res = eval(evalString)
    } catch(error){
        res = 'Syntax Error'
        basicString = 'Syntax Error'
        monitorString = 'Syntax Error'
        evalString = 'Syntax Error'
    }
    let tempNum = parseFloat(res)
    switch (autofuncs) {
        case 'abs':
            tempNum = Math.abs(tempNum)
            break;
        case 'exp':
            tempNum = Math.exp(tempNum)
            break;
        case 'sqrt':
            tempNum = Math.sqrt(tempNum)
            break;
        case 'fact':
            tempNum = nFactorial(tempNum)
            break;
        case '10^':
            tempNum = Math.pow(10,tempNum)
            break;
        case 'log':
            tempNum = Math.log10(tempNum)
            break;
        case 'ln':
            tempNum = Math.log(tempNum)
            break;
    }
    res = String(tempNum)
    evalString = res
    calculateResult()
}

// this method calculates the equation and shows it on the monitor
function calculateResult(){
    try {
        res = eval(evalString)
        } catch(error){
            res = 'Syntax Error'
            basicString = 'Syntax Error'
            monitorString = 'Syntax Error'
            evalString = 'Syntax Error'
        }
    monitorString = res
    evalString = res
    basicString = res
    monitor.innerHTML = monitorString
}

// this method resets the calculator and clears the monitor
function clearMonitor(){
    monitor.innerHTML = ''
    res = ''
    basicString = ''
    monitorString = ''
    evalString = ''
    autofuncs = 'X'
}

// this method deletes the last entered number/function
function delete_Last_char(){
    basicString = basicString.slice(0, -1)
    CreateStrings()
    monitor.innerHTML = monitorString
}

// this method is used to alert that the pressed button is implemented yet
function Not_Implemented_Alert(){
    alert('Sorry! This function is not implemented yet ...')
 }

 // function that returns N factorial
function nFactorial(num)
{
    num = parseFloat(num)
    let rval=1;
    for (let i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}