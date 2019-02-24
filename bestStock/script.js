const app = document.getElementById('root');
const container = document.createElement('div');
app.appendChild(container);
var request = new XMLHttpRequest();
const gTable = document.getElementById('gridTable');
var baseURL = "http://localhost:8080/StockArchive/webresources/stock?type=bestperforming";
var url = "http://localhost:8080/StockArchive/webresources/stock?type=bestperforming&page=1&fromDT=2015-01-01&toDT=2015-12-31";
var currPage = 1;
request.open('GET', url, true);

request.onload = function () {

	var rsp = JSON.parse(this.response);
	if (request.status >= 200 && request.status < 400){
		if(rsp.meta.code == 200){
			var data = rsp.data;
			var topRow = gTable.insertRow(0);
			var cell1 = topRow.insertCell(0);
			var cell2 = topRow.insertCell(1);
			var cell3 = topRow.insertCell(2);
			var cell4 = topRow.insertCell(3);
			cell1.innerHTML = "Company";
			cell2.innerHTML = "Minimum in Year";
			cell3.innerHTML = "Maximum in Year";
			cell4.innerHTML = "Difference";
			var currPageEle = document.getElementById("pageNum");
			currPageEle.innerHTML = currPage;
			var stockRows = data.stockRows;
			for(var i = 0; i < 20; i++){

				var row = gTable.insertRow(i+1);
	
				var cell1 = row.insertCell(0);
				cell1.id=stockRows[i].ticker;
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				
				cell1.innerHTML = stockRows[i].ticker;
				
				cell1.style.color="#0000CC";
				cell2.innerHTML = stockRows[i].minInYear;
				cell3.innerHTML = stockRows[i].maxInYear;
				cell4.innerHTML = stockRows[i].difference
				gTable.cellPadding = '10';				    
			}
			if (gTable != null) {
				for (var i = 0; i < gTable.rows.length; i++) {
					for (var j = 0; j < gTable.rows[i].cells.length; j++)
						gTable.rows[i].cells[j].onclick = function () { getval(this); };
				}
			}
	
			function getval(cell) {
				window.location.assign("C:/StockArchives/Symbol/index.html?ticker="+cell.innerHTML);
			}
		}
	}
}
request.send();

function refresh(){
	
	var fromDT = document.getElementById("fromDate").value;
	var toDT = document.getElementById("toDate").value;
	currPage = 1;
	url = baseURL + "&page="+currPage+"&fromDT="+fromDT+"&toDT="+toDT;
	var request1 = new XMLHttpRequest();
	request1.open('GET', url, true);
	request1.onload = function () {
		
		var rsp = JSON.parse(this.response);
		if (request1.status >= 200 && request1.status < 400){
	  
			var data = rsp.data;
			var Table = document.getElementById("gridTable");
			Table.innerHTML = "";
			
			var topRow = gTable.insertRow(0);
			var cell1 = topRow.insertCell(0);
			var cell2 = topRow.insertCell(1);
			var cell3 = topRow.insertCell(2);
			var cell4 = topRow.insertCell(3);
			cell1.innerHTML = "Company";
			cell2.innerHTML = "Minimum in Year";
			cell3.innerHTML = "Maximum in Year";
			cell4.innerHTML = "Difference";
			
			var currPageEle = document.getElementById("pageNum");
			currPageEle.innerHTML = currPage;
			
			var stockRows = data.stockRows;
			for(var i = 0; i < 20; i++){

				var row = gTable.insertRow(i+1);
	
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				
				cell1.innerHTML = stockRows[i].ticker;
				cell1.id=stockRows[i].ticker;
				cell1.style.color="#0000CC";
				cell2.innerHTML = stockRows[i].minInYear;
				cell3.innerHTML = stockRows[i].maxInYear;
				cell4.innerHTML = stockRows[i].difference
				gTable.cellPadding = '10';	
			}
			if (gTable != null) {
				for (var i = 0; i < gTable.rows.length; i++) {
					for (var j = 0; j < gTable.rows[i].cells.length; j++)
						gTable.rows[i].cells[j].onclick = function () { getval(this); };
				}
			}
	
			function getval(cell) {
				window.location.assign("C:/StockArchives/Symbol/index.html?ticker="+cell.innerHTML);
			}
	}
	}
	request1.send();
}

function next(){
	
	var fromDT = document.getElementById("fromDate").value;
	var toDT = document.getElementById("toDate").value;
	currPage = currPage + 1;
	url = baseURL + "&page="+currPage+"&fromDT="+fromDT+"&toDT="+toDT;
	var request1 = new XMLHttpRequest();
	request1.open('GET', url, true);
	request1.onload = function () {
		
		var rsp = JSON.parse(this.response);
		if (request1.status >= 200 && request1.status < 400){
	  
			var data = rsp.data;
			var Table = document.getElementById("gridTable");
			Table.innerHTML = "";
			
			var topRow = gTable.insertRow(0);
			var cell1 = topRow.insertCell(0);
			var cell2 = topRow.insertCell(1);
			var cell3 = topRow.insertCell(2);
			var cell4 = topRow.insertCell(3);
			cell1.innerHTML = "Company";
			cell2.innerHTML = "Minimum in Year";
			cell3.innerHTML = "Maximum in Year";
			cell4.innerHTML = "Difference";
			var currPageEle = document.getElementById("pageNum");
			currPageEle.innerHTML = currPage;
			var stockRows = data.stockRows;
			for(var i = 0; i < 20; i++){

				var row = gTable.insertRow(i+1);
	
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				
				cell1.innerHTML = stockRows[i].ticker;
				cell1.id=stockRows[i].ticker;
				cell1.style.color="#0000CC";
				cell2.innerHTML = stockRows[i].minInYear;
				cell3.innerHTML = stockRows[i].maxInYear;
				cell4.innerHTML = stockRows[i].difference
				gTable.cellPadding = '10';	
			}
			if (Table != null) {
				for (var i = 0; i < Table.rows.length; i++) {
					for (var j = 0; j < Table.rows[i].cells.length; j++)
						Table.rows[i].cells[j].onclick = function () { getval(this); };
				}
			}
	
			function getval(cell) {
				window.location.assign("C:/StockArchives/Symbol/index.html?ticker="+cell.innerHTML);
			}
		}
	}
	request1.send();
}