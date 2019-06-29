$(document).ready(function(){
    $('.block-pie-chart').each(function(index, elem){
        let doughnutChart = new Chart($(this).find('canvas'),{
            type: 'doughnut',
            showTooltips: false,
            data: {
                datasets: [{
                    data: [
                        elem.dataset.piece1,
                        elem.dataset.piece2,
                        elem.dataset.piece3,
                        elem.dataset.piece4
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
    });
});