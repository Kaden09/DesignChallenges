const g = document.getElementById("columns");
    const heights = [100, 50, 90, 100, 60, 130, 110, 130, 170, 110, 100, 50, 60, 70]
    const containerHeight = 200;

function drawColumns(){
    for (let i = 0; i < heights.length; i++) {
        setTimeout(() => {
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("fill", "#0cde73");
            rect.setAttribute("width", "14px");
            rect.setAttribute("height", "0");
            rect.setAttribute("rx", "7px");
            rect.setAttribute("x", `${i * 22}px`); 
            rect.setAttribute("y", `${containerHeight}px`);
            rect.setAttribute("class", "column")
            g.appendChild(rect);
            setTimeout(()=>{
                rect.setAttribute("height", `${heights[i]}px`);
                rect.setAttribute("y", `${containerHeight - heights[i]}px`);
            },50)
            
        }, i * 80); 
    }
}
    
drawColumns()