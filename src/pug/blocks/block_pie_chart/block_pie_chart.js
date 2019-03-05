let canvas = document.getElementById('pie');
let block_pie_chart = document.getElementsByClassName('block_pie_chart')[1];
console.log(block_pie_chart);
let doughnutChart = new Chart(canvas,{
    type: 'doughnut',
    showTooltips: false,
    data: {
        datasets: [{
            data: [
                block_pie_chart.dataset.piece1,
                block_pie_chart.dataset.piece2,
                block_pie_chart.dataset.piece3,
                block_pie_chart.dataset.piece4
            ],
            backgroundColor: [
                "#747474",
                "#e75735",
                "#4eb7a8",
                "#e5e5e5"
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false
        },
        cutoutPercentage: 61,
        maintainAspectRatio: false,
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
    }
});