let boxes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '$', '#', '@', '*', '&'];
function gen8(){
    let output = document.getElementById("password");
    let a1 = Math.floor(1 + Math.random()*(66));
    let a2 = Math.floor(1 + Math.random()*(66));
    let a3 = Math.floor(1 + Math.random()*(66));
    let a4 = Math.floor(1 + Math.random()*(66));
    let a5 = Math.floor(1 + Math.random()*(66));
    let a6 = Math.floor(1 + Math.random()*(66));
    let a7 = Math.floor(1 + Math.random()*(66));
    let a8 = Math.floor(1 + Math.random()*(66));
    let r1 = boxes[a1];
    let r2 = boxes[a2];
    let r3 = boxes[a3];
    let r4 = boxes[a4];
    let r5 = boxes[a5];
    let r6 = boxes[a6];
    let r7 = boxes[a7];
    let r8 = boxes[a8];
    output.innerHTML = r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8;
}

function gen12(){
    let output = document.getElementById("password");
    let a1 = Math.floor(1 + Math.random()*(66));
    let a2 = Math.floor(1 + Math.random()*(66));
    let a3 = Math.floor(1 + Math.random()*(66));
    let a4 = Math.floor(1 + Math.random()*(66));
    let a5 = Math.floor(1 + Math.random()*(66));
    let a6 = Math.floor(1 + Math.random()*(66));
    let a7 = Math.floor(1 + Math.random()*(66));
    let a8 = Math.floor(1 + Math.random()*(66));
    let a9 = Math.floor(1 + Math.random()*(66));
    let a10 = Math.floor(1 + Math.random()*(66));
    let a11 = Math.floor(1 + Math.random()*(66));
    let a12 = Math.floor(1 + Math.random()*(66));
    let r1 = boxes[a1];
    let r2 = boxes[a2];
    let r3 = boxes[a3];
    let r4 = boxes[a4];
    let r5 = boxes[a5];
    let r6 = boxes[a6];
    let r7 = boxes[a7];
    let r8 = boxes[a8];
    let r9 = boxes[a9];
    let r10 = boxes[a10];
    let r11 = boxes[a11];
    let r12 = boxes[a12];
    output.innerHTML = r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9 + r10 + r11 + r12;
}

function gen16(){
    let output = document.getElementById("password");
    let a1 = Math.floor(1 + Math.random()*(66));
    let a2 = Math.floor(1 + Math.random()*(66));
    let a3 = Math.floor(1 + Math.random()*(66));
    let a4 = Math.floor(1 + Math.random()*(66));
    let a5 = Math.floor(1 + Math.random()*(66));
    let a6 = Math.floor(1 + Math.random()*(66));
    let a7 = Math.floor(1 + Math.random()*(66));
    let a8 = Math.floor(1 + Math.random()*(66));
    let a9 = Math.floor(1 + Math.random()*(66));
    let a10 = Math.floor(1 + Math.random()*(66));
    let a11 = Math.floor(1 + Math.random()*(66));
    let a12 = Math.floor(1 + Math.random()*(66));
    let a13 = Math.floor(1 + Math.random()*(66));
    let a14 = Math.floor(1 + Math.random()*(66));
    let a15 = Math.floor(1 + Math.random()*(66));
    let a16 = Math.floor(1 + Math.random()*(66));
    let r1 = boxes[a1];
    let r2 = boxes[a2];
    let r3 = boxes[a3];
    let r4 = boxes[a4];
    let r5 = boxes[a5];
    let r6 = boxes[a6];
    let r7 = boxes[a7];
    let r8 = boxes[a8];
    let r9 = boxes[a9];
    let r10 = boxes[a10];
    let r11 = boxes[a11];
    let r12 = boxes[a12];
    let r13 = boxes[a13];
    let r14 = boxes[a14];
    let r15 = boxes[a15];
    let r16 = boxes[a16];
    output.innerHTML = r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9 + r10 + r11 + r12 + r13 + r14 + r15 + r16;
}
function copyTxt(){
    navigator.clipboard.writeText(document.getElementById("password").innerText);
    alert("Copied !")
}
