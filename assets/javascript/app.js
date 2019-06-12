var firebaseConfig = {
    apiKey: "AIzaSyDXjBB-vSG-MrzwN1n8BkrM8Iy7HSpZry0",
    authDomain: "edm-061219.firebaseapp.com",
    databaseURL: "https://edm-061219.firebaseio.com",
    projectId: "edm-061219",
    storageBucket: "",
    messagingSenderId: "552578487441",
    appId: "1:552578487441:web:6c1b8adba050431c"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


var employeeName = "";
var role = "";
var startDate = "";
var monthsWorked;
var monthlyRate = "";
var totalBilled;

firebase.database.ServerValue.TIMESTAMP

//Add Employee

employeeName = $("#employeeName").val().trim();
role = $("#role").val().trim();
startDate = $("#startDate").val().trim();
monthlyRate = $("#monthlyRate").val().trim();


