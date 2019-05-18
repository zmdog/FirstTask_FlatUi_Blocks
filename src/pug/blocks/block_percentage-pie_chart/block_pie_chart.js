let block_pie_chart = document.getElementsByClassName('block_pie_chart');
let $ = require('jquery');
let Chart = require('../../../../node_modules/chart.js/src/chart');

$(document).ready(()=>{
    for(let i=0;i<block_pie_chart.length;i++){
        console.log('работает');
        let canvas = block_pie_chart[i].getElementsByTagName('canvas');
        let doughnutChart = new Chart(canvas,{
            type: 'doughnut',
            showTooltips: false,
            data: {
                datasets: [{
                    data: [
                        block_pie_chart[i].dataset.piece1,
                        block_pie_chart[i].dataset.piece2,
                        block_pie_chart[i].dataset.piece3,
                        block_pie_chart[i].dataset.piece4
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
    }
});