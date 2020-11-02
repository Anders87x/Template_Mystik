(function($) {
  'use strict';

  $("#news-flash").webTicker();

  //Crypto Overview slider
  $('.ms-crypto-overview-slider').slick({
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 9,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
  });

  //Bitcoin chart
  var ctx = document.getElementById('bitcoin-chart').getContext("2d");
  var gradientStroke = ctx.createLinearGradient(0, 0, 0, 450);
  gradientStroke.addColorStop(0, '#F7931A');

  var gradientFill = ctx.createLinearGradient(0, 0, 0, 450);
  gradientFill.addColorStop(0, "rgba(247, 147, 26,0.2)");
  gradientFill.addColorStop(1, "rgba(255,255,255,0)");

  new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        datasets: [{
            label: "Data",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [4,3,2,3,1,4,3,5,4,5,4,6,7,5,4]
        }]
    },
    options: {
        elements: {
          line: {
              tension: 0
          }
        },
        legend: {
        display: false,
        position: "bottom"
        },
        scales: {
          yAxes: [{
            display: false,
          }],
          xAxes: [{
              display: false,
          }]
        }
      }
  });

  //Ethereum chart
  var ethereumCtx = document.getElementById('ethereum-chart').getContext("2d");
  var gradientStrokeEthereum = ethereumCtx.createLinearGradient(0, 0, 0, 450);
  gradientStrokeEthereum.addColorStop(0, '#4e8ee8');

  var gradientFillEthereum = ethereumCtx.createLinearGradient(0, 0, 0, 450);
  gradientFillEthereum.addColorStop(0, "rgba(78, 142, 232,0.2)");
  gradientFillEthereum.addColorStop(1, "rgba(255,255,255,0)");

  new Chart(ethereumCtx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        datasets: [{
            label: "Data",
            borderColor: gradientStrokeEthereum,
            pointBorderColor: gradientStrokeEthereum,
            pointBackgroundColor: gradientStrokeEthereum,
            pointHoverBackgroundColor: gradientStrokeEthereum,
            pointHoverBorderColor: gradientStrokeEthereum,
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFillEthereum,
            borderWidth: 2,
            data: [4,5,3,7,5,7,8,9,7,6,7,7,6,5,3]
        }]
    },
    options: {
        elements: {
          line: {
              tension: 0
          }
        },
        legend: {
        display: false,
        position: "bottom"
        },
        scales: {
          yAxes: [{
            display: false,
          }],
          xAxes: [{
              display: false,
          }]
        }
      }
  });

  //zcash chart
  var zCashCtx = document.getElementById('zcash-chart').getContext("2d");
  var gradientStrokeZCash = zCashCtx.createLinearGradient(0, 0, 0, 450);
  gradientStrokeZCash.addColorStop(0, '#e5a93d');

  var gradientFillZCash = zCashCtx.createLinearGradient(0, 0, 0, 450);
  gradientFillZCash.addColorStop(0, "rgba(229, 169, 61,0.2)");
  gradientFillZCash.addColorStop(1, "rgba(255,255,255,0)");

  new Chart(zCashCtx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        datasets: [{
            label: "Data",
            borderColor: gradientStrokeZCash,
            pointBorderColor: gradientStrokeZCash,
            pointBackgroundColor: gradientStrokeZCash,
            pointHoverBackgroundColor: gradientStrokeZCash,
            pointHoverBorderColor: gradientStrokeZCash,
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFillZCash,
            borderWidth: 2,
            data: [5,6,8,1,5,3,9,7,5,8,7,3,6,9,1]
        }]
    },
    options: {
        elements: {
          line: {
              tension: 0
          }
        },
        legend: {
        display: false,
        position: "bottom"
        },
        scales: {
          yAxes: [{
            display: false,
          }],
          xAxes: [{
              display: false,
          }]
        }
      }
  });

  //Peercoin chart
  var peerCoinCtx = document.getElementById('peercoin-chart').getContext("2d");
  var gradientStrokePeercoin = peerCoinCtx.createLinearGradient(0, 0, 0, 450);
  gradientStrokePeercoin.addColorStop(0, '#3FA30C');

  var gradientFillPeercoin = peerCoinCtx.createLinearGradient(0, 0, 0, 450);
  gradientFillPeercoin.addColorStop(0, "rgba(63, 163, 12,0.2)");
  gradientFillPeercoin.addColorStop(1, "rgba(255,255,255,0)");

  new Chart(peerCoinCtx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        datasets: [{
            label: "Data",
            borderColor: gradientStrokePeercoin,
            pointBorderColor: gradientStrokePeercoin,
            pointBackgroundColor: gradientStrokePeercoin,
            pointHoverBackgroundColor: gradientStrokePeercoin,
            pointHoverBorderColor: gradientStrokePeercoin,
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFillPeercoin,
            borderWidth: 2,
            data: [1,4,7,3,5,7,6,5,8,3,5,5,4,3,7]
        }]
    },
    options: {
        elements: {
          line: {
              tension: 0
          }
        },
        legend: {
        display: false,
        position: "bottom"
        },
        scales: {
          yAxes: [{
            display: false,
          }],
          xAxes: [{
              display: false,
          }]
        }
      }
  });

  //Real time rating chart
  var ratingCtx = document.getElementById("crypto-rating-graph").getContext("2d");
  var gradientStrokePrimary = ratingCtx.createLinearGradient(0, 0, 0, 450);
  gradientStrokePrimary.addColorStop(0, '#357ffa');

  var gradientFillPrimary = ratingCtx.createLinearGradient(0, 0, 0, 450);
  gradientFillPrimary.addColorStop(0, "rgba(53,127,250,0.4)");
  gradientFillPrimary.addColorStop(1, "rgba(255,255,255,0)");

  var time = ["12 AM", "2 AM", "4 AM", "6 AM", "8 AM", "10 AM",
    "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM"
  ];

  var data = {

    labels: ["12 AM", "2 AM", "4 AM", "6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM"],
    datasets: [{
      label: "Price",
      borderColor: gradientStrokePrimary,
      pointBorderWidth: 9,
      pointRadius: 9,
      pointBorderColor: 'transparent',
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: '#357ffa',
      pointBackgroundColor: 'transparent',
      fill: true,
      backgroundColor: gradientFillPrimary,
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 55, 40, 70, 56, 76, 51, 59]
    }]
  };
  var options = {
    animation: false,
    scaleOverride: true,
    scaleSteps: 10,
    scaleStepWidth: 10,
    scaleStartValue: 0,
    elements: {
      line: {
          tension: 0
      }
    },
    legend: {
      display: false,
      position: "top"
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                padding: 20
            },
        }],
        xAxes: [{

            ticks: {
                padding: 20,
                beginAtZero: true,
            }
        }]
    }
  };

  var realTimeChart = new Chart(ratingCtx, {
    type: 'line',
    data: data,
    options: options,
  });

  //Update chart every 1 second
  setInterval(function() {
    setData(data.datasets[0].data);
    setLabels(data.labels);

    realTimeChart.data.datasets[0].data = data.datasets[0].data;
    realTimeChart.update();

  }, 1000);

  //Change labels
  function setLabels(labels) {
    var nextTimeIndex = time.indexOf(labels[labels.length - 1]) + 1;
    var nextTimeName = time[nextTimeIndex] != undefined ? time[nextTimeIndex] : "12 PM";
    labels.push(nextTimeName);
    labels.shift();
  }

  //Generate random data
  function setData(data) {
    data.push(Math.floor(Math.random() * 100) + 1);
    data.shift();
  }

  //Active orders chart
  var activeOrdersChart = new Chart(document.getElementById("active-orders"), {
    type: 'doughnut',
    data: {
      labels: ["Ehereum", "Bitcoin", "Dash", "Litecoin", "Peercoin"],
      datasets: [
        {
          label: "Population (millions)",
          borderColor: 'transparent',
          backgroundColor: ["#357ffa", "#f0ad4e","#d9534f","#445cc8","#5cb85c"],
          data: [478,267,734,784,433]
        }
      ]
    },
    options: {
      cutoutPercentage: 70,
      animation: {
        animateScale: true
      },
      title: {
        display: false,
        text: 'Predicted world population (millions) in 2050'
      },
      legend: {
        position: 'left',
        display: false,
      },
    }
  });

  //Trends
  /* Sessions by Channel Trends Charts */
  var trend_1 = [1, 3, 5, 4, 3, 3, 4, 8, 5];
  var trend_2 = [3, 2, 5, 4, 8, 4, 5, 2, 3];
  var trend_3 = [7, 5, 4, 5, 4, 7, 5, 5, 4];
  var trend_4 = [3, 3, 4, 6, 7, 6, 6, 4, 3];
  var trend_5 = [5, 4, 6, 7, 6, 5, 5, 7, 4];
  var labels = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17","Jan-18", "Jan-19"];
  var options = {
    legend: {
    display: false,
    position: "bottom"
    },
    scales: {
      yAxes: [{
        display: false,
      }],
      xAxes: [{
          display: false,
      }]
    },
    elements: {
       point:{
         radius: 0
       }
     }
  };

  new Chart(document.getElementById('trend-01').getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#F7931A',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_1
        }]
    },
    options: options
  });
  new Chart(document.getElementById('trend-02').getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#4e8ee8',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_2
        }]
    },
    options: options
  });
  new Chart(document.getElementById('trend-03').getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#3FA30C',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_3
        }]
    },
    options: options
  });
  new Chart(document.getElementById('trend-04').getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#3FA30C',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_4
        }]
    },
    options: options
  });
  new Chart(document.getElementById('trend-05').getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#F7931A',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_5
        }]
    },
    options: options
  });

  //Candle Chart
  function randomNumber(min, max) {
  	return Math.random() * (max - min) + min;
  }

  function getRandomBarNoTime(lastClose) {
  	var open = randomNumber(lastClose * .95, lastClose * 1.05);
  	var close = randomNumber(open * .95, open * 1.05);
  	var high = randomNumber(Math.max(open, close), Math.max(open, close) * 1.1);
  	var low = randomNumber(Math.min(open, close) * .9, Math.min(open, close));
  	return {
  		o: open,
  		h: high,
  		l: low,
  		c: close,
  	};
  }

  function randomBar(date, lastClose) {
  	var bar = getRandomBarNoTime(lastClose);
  	bar.t = date.valueOf();
  	return bar;
  }

  function getRandomData(date, count) {
  	var dateFormat = 'MMMM DD YYYY';
  	var date = moment(date, dateFormat);
  	var data = [randomBar(date, 30)];
  	while (data.length < count) {
  		date = date.clone().add(1, 'd');
  		if (date.isoWeekday() <= 5) {
  			data.push(randomBar(date, data[data.length - 1].c));
  		}
  	}
  	return data;
  }

  // Candlestick
  var candleStickCtx = document.getElementById("candle-chart").getContext("2d");
  var candleCount = 40;
  var candleData = getRandomData('April 01 2017', candleCount);

  var candlestickChart = new Chart(candleStickCtx, {
  	type: 'candlestick',
  	data: {
  		datasets: [{
        color: {
          up: "rgb(157,126,253)",
          down: "rgb(57,211,236)",
          unchanged: "grey",
        },
        borderColor: "rgb(157,126,253)",
        borderWidth: 2,
        backgroundColor: "red",
  			data: candleData
  		}]
  	},
    options: {
      scales: {
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
        }]
      },
      legend: {
        display: false,
        position: 'left',
      },
    }
  });

})(jQuery);
