new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      datasets: [{ 
          data: [0, 150, 140, 240, 295, 310, 420, 425],
          label: "Open",
          borderColor: "red",
          fill: false
        }, { 
          data: [0, 100, 90, 220, 298, 400, 500, 300],
          label: "Click",
          borderColor: "aqua",
          fill: false
        }, { 
          data: [298, 389, 450, 608, 650, 680, 710, 700],
          label: "Click Second Time",
          borderColor: "orange",
          fill: false
        }
      ]
  }});
  new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
        labels: ["Open", "Bounce", "Unsubsribe"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["red", "aqua","orange"],
          data: [ 40, 40, 20]
        }]
      }
  }); 
  new Chart(document.getElementById("bar-chart-grouped"), {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "Tesla Model S",
            backgroundColor: "aqua",
            data: [500, 420, 305, 780, 550, 450, 310, 450, 550, 600, 700, 890]
          }, {
            label: "BMW 5 Series",
            backgroundColor: "red",
            data: [408, 547, 675, 734, 800, 500, 890, 400, 500, 500, 600 ,510]
          }
        ]
      }
  });