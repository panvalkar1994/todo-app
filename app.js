let itemList = [];

document.getElementById("myBtn").addEventListener("click",()=>{
    var item = document.getElementById("task").value;
    itemList.push(item);
    for(const it in itemList){
        var li = document.createElement("li");
        var textDoc = document.createTextNode(itemList[it]);
        li.appendChild(textDoc);
        document.getElementsByClassName("my-list")[0].appendChild(li);
        console.log(itemList[it]);
    }
    document.getElementById("task").value = "";
})