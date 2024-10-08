var ctx = document.getElementById('performance-chart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Data Accessibility', 'Report Generation Time', 'Data Accuracy', 'Logistics Costs'],
      datasets: [{
          label: 'Improvement Percentage',
          data: [35, 60, 25, 15],
          backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)'
          ],
          borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true,
              title: {
                  display: true,
                  text: 'Improvement (%)'
              }
          }
      },
      plugins: {
          title: {
              display: true,
              text: 'Performance Improvements After Implementation'
          }
      }
  }
});