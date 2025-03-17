const g = document.getElementById('points');
    const radius = 1;
    const spacing = 5; 

    for (let i = 0; i <= 270; i += spacing) {
      for(let j = 0; j <= 200; j += spacing){
          const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          circle.setAttribute("cx", i);
          circle.setAttribute("cy", j);
          circle.setAttribute("r", radius);
          circle.setAttribute("fill", "#00C85380");
          g.appendChild(circle);
      }
    }