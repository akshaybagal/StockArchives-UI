const app = document.getElementById('root');
const container = document.createElement('div');
app.appendChild(container);

var baseURL = "http://localhost:8080/StockArchive/webresources/symbol?";
//var url = "http://localhost:8080/StockArchive/webresources/symbol?ticker=NFLX&page=1&fromDT=2005-08-25&toDT=2016-12-31";

const urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('ticker');
if(myParam == null){
	myParam = "NFLX";
}
var fromDT = "2005-08-25";
var toDT = "2016-12-31";
var currPage = 1;
url = baseURL + "ticker="+myParam+"&page="+currPage+"&fromDT="+fromDT+"&toDT="+toDT;
const gTable = document.getElementById('gridTable');
var headerEle = document.getElementById("header");
headerEle.innerHTML = myParam;

var request = new XMLHttpRequest();
request.open('GET', url, true);


request.onload = function () {
  var rsp = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400){
	  
		var data = rsp.data;
		var topRow = gTable.insertRow(0);
		
		var cell1 = topRow.insertCell(0);
		var cell2 = topRow.insertCell(1);
		var cell3 = topRow.insertCell(2);
		var cell4 = topRow.insertCell(3);
		var cell5 = topRow.insertCell(4);
		var cell6 = topRow.insertCell(5);
		
		cell1.innerHTML = "Date"
		cell2.innerHTML = "Opening Value";
		cell3.innerHTML = "Closing Value";
		cell4.innerHTML = "Low in day";
		cell5.innerHTML = "High in day";
		cell6.innerHTML = "Volume";
		var currPageEle = document.getElementById("pageNum");
		currPageEle.innerHTML = currPage;
		var symbolRows = data.symbolRows;
		for(var i = 0; i < symbolRows.length; i++){

			var row = gTable.insertRow(i+1);

			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);
			
			cell1.innerHTML = symbolRows[i].stockDate;
			cell2.innerHTML = symbolRows[i].open;
			cell3.innerHTML = symbolRows[i].close;
			cell4.innerHTML = symbolRows[i].low;
			cell5.innerHTML = symbolRows[i].high;
			cell6.innerHTML = symbolRows[i].volume;
			gTable.cellPadding = '10';
			
		}
	}
 }
request.send();

function refresh(){
	
	var fromDT = document.getElementById("fromDate").value;
	var toDT = document.getElementById("toDate").value;
	var tickerEle = document.getElementById("ticker").value;
	if(tickerEle == false){
		tickerEle = "NFLX";
	}
	tickerEle = tickerEle.toUpperCase();
	var headerEle = document.getElementById("header");
	headerEle.innerHTML = tickerEle;
	currPage = 1;
	url = baseURL + "ticker="+tickerEle+"&page="+currPage+"&fromDT="+fromDT+"&toDT="+toDT;
	var requestRefresh = new XMLHttpRequest();
	requestRefresh.open('GET', url, true);
	requestRefresh.onload = function () {
		
		var rsp = JSON.parse(this.response);
		if (requestRefresh.status >= 200 && requestRefresh.status < 400){
	  
			var data = rsp.data;
			var Table = document.getElementById("gridTable");
			Table.innerHTML = "";
			
			var topRow = gTable.insertRow(0);
			var cell1 = topRow.insertCell(0);
			var cell2 = topRow.insertCell(1);
			var cell3 = topRow.insertCell(2);
			var cell4 = topRow.insertCell(3);
			var cell5 = topRow.insertCell(4);
			var cell6 = topRow.insertCell(5);
			
			cell1.innerHTML = "Date"
			cell2.innerHTML = "Opening Value";
			cell3.innerHTML = "Closing Value";
			cell4.innerHTML = "Low in day";
			cell5.innerHTML = "High in day";
			cell6.innerHTML = "Volume";
			
			var currPageEle = document.getElementById("pageNum");
			currPageEle.innerHTML = currPage;
			
			var symbolRows = data.symbolRows;
			for(var i = 0; i < symbolRows.length; i++){

				var row = gTable.insertRow(i+1);
	
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				var cell5 = row.insertCell(4);
				var cell6 = row.insertCell(5);
				
				cell1.innerHTML = symbolRows[i].stockDate;
				cell2.innerHTML = symbolRows[i].open;
				cell3.innerHTML = symbolRows[i].close;
				cell4.innerHTML = symbolRows[i].low;
				cell5.innerHTML = symbolRows[i].high;
				cell6.innerHTML = symbolRows[i].volume;
				gTable.cellPadding = '10';
			
			}
		}
	}
	requestRefresh.send();
}

function next(){
	
	var fromDT = document.getElementById("fromDate").value;
	var toDT = document.getElementById("toDate").value;
	var tickerEle = document.getElementById("ticker").value;
	if(tickerEle == false){
		tickerEle = "NFLX";
	}
	currPage = currPage + 1;
	url = baseURL + "ticker="+tickerEle+"&page="+currPage+"&fromDT="+fromDT+"&toDT="+toDT;
	var requestNext = new XMLHttpRequest();
	requestNext.open('GET', url, true);
	requestNext.onload = function () {
		
		var rsp = JSON.parse(this.response);
		if (requestNext.status >= 200 && requestNext.status < 400){
	  
			var data = rsp.data;
			var Table = document.getElementById("gridTable");
			Table.innerHTML = "";
			
			var topRow = gTable.insertRow(0);
			var cell1 = topRow.insertCell(0);
			var cell2 = topRow.insertCell(1);
			var cell3 = topRow.insertCell(2);
			var cell4 = topRow.insertCell(3);
			var cell5 = topRow.insertCell(4);
			var cell6 = topRow.insertCell(5);
			
			cell1.innerHTML = "Date"
			cell2.innerHTML = "Opening Value";
			cell3.innerHTML = "Closing Value";
			cell4.innerHTML = "Low in day";
			cell5.innerHTML = "High in day";
			cell6.innerHTML = "Volume";
			var currPageEle = document.getElementById("pageNum");
			currPageEle.innerHTML = currPage;
			var symbolRows = data.symbolRows;
			for(var i = 0; i < symbolRows.length; i++){

				var row = gTable.insertRow(i+1);
	
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				var cell5 = row.insertCell(4);
				var cell6 = row.insertCell(5);
				
				cell1.innerHTML = symbolRows[i].stockDate;
				cell2.innerHTML = symbolRows[i].open;
				cell3.innerHTML = symbolRows[i].close;
				cell4.innerHTML = symbolRows[i].low;
				cell5.innerHTML = symbolRows[i].high;
				cell6.innerHTML = symbolRows[i].volume;
				gTable.cellPadding = '10';
			}
		}
	}
	requestNext.send();
}