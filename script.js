let handleId = 0;

const h1 = document.getElementById("time")
const go = document.getElementById("go")
const stop = document.getElementById("stop")

function getTime() {
    const date = new Date()
    
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const time = `${hour}:${minutes}:${seconds}`

    h1.textContent = time;

}

go.onclick = function(){
    if(handleId==0){
        handleId = setInterval(getTime, 1000)
    }
}

stop.onclick = function(){
    clearInterval(handleId)
    handleId = 0;
}

getTime()

function compute(form){
    if(confirm("당신은 공주가 맞습니까??"))
        alert("당신은"+document.pointerLockElement.expr.value+"를 입력했습니다.")
    else
        alert("야레야레, 못말리는 아가씨")
}