<!DOCTYPE html>
<html lang="en" ng-app>
<head>
  <meta charset="UTF-8">
  <title>Food for Thoughts - charts</title>
  <!-- Latest compiled and minified CSS -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="../bootstrap-3.3.7-dist/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.min.js"></script>
  <link rel="stylesheet" href="css/style.css"> 
  <!-- <script src="./js/app.js"></script> -->
  <link href="https://fonts.googleapis.com/css?family=Patrick+Hand|Source+Code+Pro" rel="stylesheet">
</head>
<body id="html-body">
  <div class="container">
    <div class="row">
        <div class="big-header">
          <p class="text-right">Analysis</p>
        </div> <!-- today's date -->
    </div> <!-- first row -->
    <div class="row">
      <div id="Today" class="tabcontent">
        <h3>Today</h3>
        <p>How are you today?</p>
      </div>

      <div id="This-Week" class="tabcontent">
        <h3>This Week</h3>
        <p>This Week is looking great!</p> 
      </div>

      <div id="This-Month" class="tabcontent">
        <h3>This Month</h3>
        <p>How did you do this Month?</p>
      </div>

      <div id="This-Year" class="tabcontent">
        <h3>This Year</h3>
        <p>This Year's progress</p>
      </div>

    <button class="tablink" onclick="openTabs('Today', this, 'red')" id="defaultOpen">Today</button>
    <button class="tablink" onclick="openTabs('This-Week', this, 'green')">This Week</button>
    <button class="tablink" onclick="openTabs('This-Month', this, 'blue')">This Month</button>
    <button class="tablink" onclick="openTabs('This-Year', this, 'orange')">This Year</button>

    </div>
    <div class="row">
      <canvas id="progress-chart"></canvas>
    </div> <!-- range select  -->
  </div><!-- closing container -->
<!--   <footer class="footer">
  <p>cool things like github and main page pr presentation etc</p>
  <p>hello I'm {{ 5 + 5 }} testing anguler</p>
  </footer> -->
<!--   put JS links in here -->
<script>

  var userID = undefined;
  getUserID()

//test data

// var mealData = [
//       {
//         "user": "Yoko",
//         "meal": "breakfast",
//         "protein": 0,
//         "carb": 5,
//         "fat": 0,
//         "veggies": 1,
//         "time_created": "2017-11-28T23:16:13.000Z"
//       },
//       {
//         "user": "Yoko",
//         "meal": "lunch",
//         "protein": 0,
//         "carb": 5,
//         "fat": 0,
//         "veggies": 1,
//         "time_created": '2017-11-28T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "snack",
//         "protein": 0,
//         "carb": 5,
//         "fat": 0,
//         "veggies": 1,
//         "time_created": '2017-11-28T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "breakfast",
//         "protein": 0,
//         "carb": 5,
//         "fat": 0,
//         "veggies": 1,
//         "time_created": '2017-11-29T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "breakfast",
//         "protein": 2,
//         "carb": 3,
//         "fat": 1,
//         "veggies": 2,
//         "time_created": '2017-11-29T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "breakfast",
//         "protein": 2,
//         "carb": 3,
//         "fat": 1,
//         "veggies": 0,
//         "time_created": '2017-11-30T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "breakfast",
//         "protein": 2,
//         "carb": 3,
//         "fat": 1,
//         "veggies": 0,
//         "time_created": '2017-12-01T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "dinner",
//         "protein": 1,
//         "carb": 6,
//         "fat": 0,
//         "veggies": 4,
//         "time_created": '2017-12-02T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "snack",
//         "protein": 0,
//         "carb": 3,
//         "fat": 1,
//         "veggies": 0,
//         "time_created": '2017-12-03T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "breakfast",
//         "protein": 0,
//         "carb": 3,
//         "fat": 2,
//         "veggies": 0,
//         "time_created": '2017-12-04T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "Dinner",
//         "protein": 2,
//         "carb": 3,
//         "fat": 1,
//         "veggies": 0,
//         "time_created": '2017-12-04T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "breakfast",
//         "protein": 3,
//         "carb": 3,
//         "fat": 1,
//         "veggies": 6,
//         "time_created": '2017-12-06T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "Lunch",
//         "protein": 5,
//         "carb": 5,
//         "fat": 1,
//         "veggies": 6,
//         "time_created": '2017-12-06T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "Dinner",
//         "protein": 4,
//         "carb": 3,
//         "fat": 1,
//         "veggies": 1,
//         "time_created": '2017-12-06T23:16:13.000Z'
//       },
//       {
//         "user": "Yoko",
//         "meal": "late night snack",
//         "protein": 2,
//         "carb": 1,
//         "fat": 0,
//         "veggies": 0,
//         "time_created": '2017-12-06T23:16:13.000Z'
//       }
//     ]//sample meal data



  // function buildChart(range){

  //   if (range === "Today"){
  //     loadChart(todayChart);
  //   } else if (range === "This-Week") {
  //     loadChart(thisWeekChart);
  //   } else if (range === "This-Month") {
  //     // thisMonthChart();
  //     console.log('this month')
  //   } else if (range === "This-Year") {
  //     // thisYearChart();
  //     console.log('this year')
  //   }

  // };

  // function todayChart(){
  // //build and pass today's meal data to chart 
  //   var todaysDate = new Date();
  //   console.log(todaysDate = mealData[14].time_created)
  //   //make labels and data sets
  //   var labelArray = [];
  //   var proteinData = [];
  //   var carbData = [];
  //   var fatData = [];
  //   var veggiesData = [];
  //   for (var i = mealData.length-1; i > 0; i--) {
  //       if(todaysDate === mealData[i].time_created){
  //       labelArray.push(mealData[i].meal);
  //       proteinData.push(mealData[i].protein);
  //       carbData.push(mealData[i].carb);
  //       fatData.push(mealData[i].fat);
  //       veggiesData.push(mealData[i].veggies);
  //     }
  //   }
  //   return [
  //     labelArray, proteinData, carbData, fatData, veggiesData
  //   ]
  // };

  // function thisWeekChart(){

  // //build and pass this week's meal data to chart
  // var aWkAgo = new Date();
  // aWkAgo.setDate(aWkAgo.getDate() - 6);

  // var labelArray = [];
  // var proteinData = [];
  // var carbData = [];
  // var fatData = [];
  // var veggiesData = [];  
  // var weekDays = {0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat"}
  // //find meals from this week and push them to the data sets
  // for (var i = mealData.length-1; i > 0; i--) {
    
  //   var timeStamp = new Date(mealData[i].time_created);


  //   if(timeStamp <= aWkAgo){
  //       //get which day of the week from time stamp
  //       var nthDay = timeStamp.getDay(timeStamp);
  //       labelArray.push(weekDays[nthDay]);
  //       proteinData.push(mealData[i].protein);
  //       carbData.push(mealData[i].carb);
  //       fatData.push(mealData[i].fat);
  //       veggiesData.push(mealData[i].veggies);
  //       foo(labelArray, proteinData, carbData, fatData, veggiesData);
  //    }
  //   }
  //   return [
  //     labelArray, proteinData, carbData, fatData, veggiesData
  //   ]
  // };

  // function foo(labelArray, proteinData, carbData, fatData, veggiesData){
  //   var labelArray = labelArray;
  //   var proteinData = proteinData;
  //   var carbData = 4
  //   for(meal in ){

  //   }
  // };

  // function loadChart(callback){
    
  //   var chartData = callback();
  //   console.log(chartData)
  //   var labelsChartData = chartData[0].reverse();
  //   var proteinChartData = chartData[1].reverse();
  //   var carbChartData = chartData[2].reverse();
  //   var fatChartData = chartData[3].reverse();
  //   var veggiesChartData = chartData[4].reverse();
  //   var ctx = document.getElementById("progress-chart").getContext('2d');

  //   var myChart = new Chart(ctx, {
  //     // The type of chart we want to create
  //     type: 'line',

  //     // The data for our dataset
  //     data: {
  //         labels: labelsChartData,
  //         datasets: [{
  //             label: "carb",
  //             backgroundColor: 'rgb(255, 99, 132)',
  //             borderColor: 'rgb(255, 99, 132)',
  //             data: carbChartData,
  //         },
  //         {
  //           label: "veggies",
  //           backgroundColor: 'rgb(255, 200, 102)',
  //           borderColor: 'rgb(255, 200, 102)',
  //           data: veggiesChartData,
  //         },
  //         {
  //           label: "protein",
  //           backgroundColor: 'rgb(212, 180, 102)',
  //           borderColor: 'rgb(212, 180, 102)',
  //           data: proteinChartData,
  //         },
  //         {
  //           label: "fat",
  //           backgroundColor: 'rgb(245, 180, 102)',
  //           borderColor: 'rgb(245, 180, 102)',
  //           data: fatChartData,
  //         }

  //         ]},

  //     // Configuration options go here
  //     options: {scales: {
  //             yAxes: [{
  //                 stacked: true
  //             }]
  //         }}
  //   });
  // };

// Tabs navigation

function openTabs(range,elmnt,color) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(range).style.display = "block";
    elmnt.style.backgroundColor = color;

    // buildChart(range);

//THE GET REQUEST URL SHOULD BE /MEALS/DATEVARIABLE/USERID

    $.ajax({
      url: "/meals/365/"+userID
    }).done(function(data){
      console.log(data)
    })


}

    function getUserID(){
      $.get("/api/user_data", function(data){
          userID = data.id
          console.log("userID = " + userID)
          openTabs('Today', document.getElementById("defaultOpen"), 'red')
          
      })
    }
// Get the element with id="defaultOpen" and click on it


</script>

</body>
</html>