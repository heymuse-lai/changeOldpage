
function explain1Toshow(){
    let explain1Div=document.querySelector("#explain1");
    let explain2Div=document.querySelector("#explain2");

    let explain3Div=document.querySelector("#explain3");
    explain1Div.style.display="block";
    explain2Div.style.display="none";
    explain3Div.style.display="none";
    explain1Div.innerHTML="橡膠是製作輪胎相當重要的一部份，但不是全部；即使是橡膠本身，也含有天然橡膠和合成橡膠二種。天然橡膠比較軟，因此抓地力、吸收震動的能力較強，且散熱性較佳，高性能胎所用的天然橡膠比例就會比較高。合成橡膠膠質稍微硬一些，但是卻也因此比較耐磨，需要增長輪胎的行駛里程的話，就要多加一點合成橡膠。";


}
function explain2Toshow(){
    let explain1Div=document.querySelector("#explain1");
    let explain2Div=document.querySelector("#explain2");

    let explain3Div=document.querySelector("#explain3");
    explain1Div.style.display="none";
    explain2Div.style.display="block";
    explain3Div.style.display="none";
    explain2Div.textContent="以台灣相當普遍的195/60HR15這個規格來解釋好了。第一個數字195表示這一條輪胎踏面﹙Tread，也就是胎面、輪胎接地面﹚的寬度是195mm。踏面寬度愈高、則輪胎價格也愈高。第二個數字60則表示這一條輪胎的扁平比﹙Aspect Ratio﹚，也就是從接地面到輪圈胎邊的邊牆高度是其踏面的60%。這個60是個百分比，而不是個絕對值，同樣胎面寬度是195的輪胎，如果選195/60就會比195/65看起來〝低〞和〝扁〞，因為前者的胎邊高度只有踏面195mm的60%，而後者有65%。扁平比和胎寬相反，扁平比愈低的輪胎價格愈高。第三個英文字母H，表示這一條輪胎廠方的保證最高安全極速是210km/h。字母依順序愈往後、則安全極速愈高，當然價錢也就愈貴。輪胎的安全極速標示請參考所附﹙表格一﹚。第4個英文字母'R'，表示此輪胎為輻射層(Radial)結構。最後一個數字15，則是表示這一條輪胎的內徑、也就是胎唇的直徑是15英吋，必需搭配15英吋的輪圈使用，否則裝不上去。";
}

function explain3Toshow(){
    let explain1Div=document.querySelector("#explain1");
    let explain2Div=document.querySelector("#explain2");

    let explain3Div=document.querySelector("#explain3");
    explain1Div.style.display="none";
    explain2Div.style.display="none";
    explain3Div.style.display="block";
    explain3Div.innerHTML="那是因為添加了黑色碳煙﹙Carbon Black﹚的關係，添加碳煙的目的，是為了提昇輪胎抗磨損的能力";
    
}