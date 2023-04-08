const ctx = document.getElementById("main-chart").getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  let amount = [];
  let days = [];
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      amount = data.map((item) => item.amount);
      days = data.map((item) => item.day);

      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [...days],
          datasets: [
            {
              data: [...amount],
              backgroundColor: ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(186, 34%, 60%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              display: false, // untuk menghilangkan angka pada garis y
            },
          },
          elements: {
            line: {
              borderWidth: 0, // untuk menghilangkan garis di chart
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
              displayColors: false,
              backgroundColor: "hsl(25, 47%, 15%)",
              titleFontSize: 14,
              cornerRadius: 0,
              bodyFontSize: 15,
              position: "nearest",
              intersect: false,
              bodyFontColor: "#ffffff",
              callbacks: {
                title: function (tooltipItem, data) {
                  return null;
                },
                label: function (tooltipItem, data) {
                  return "$" + tooltipItem.raw;
                },
              },
              custom: function (tooltip) {
                if (!tooltip) return;
                tooltip.displayColors = false;
                tooltip.cornerRadius = 15;
              },
            },
          },
          borderRadius: 5,
        },
      });
    });
});
