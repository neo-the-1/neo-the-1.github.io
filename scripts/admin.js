function fetchHits() {
    $.get("https://neo-the-1.cfapps.io/hits", (data) => {
        document.getElementById('count').innerHTML = data.total;

        var tbody = document.getElementById("table-body");
        for (var rowIdx in data.details) {
            var tr = tbody.insertRow();
            tr.insertCell().innerHTML = data.details[rowIdx].date + ' ' + data.details[rowIdx].time;
            tr.insertCell().innerHTML = data.details[rowIdx].ip;
            tr.insertCell().innerHTML = data.details[rowIdx].userAgent;
        }
    });
}