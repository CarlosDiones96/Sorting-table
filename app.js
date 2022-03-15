const table = document.querySelector('#myTable');
const sortBtn = document.querySelector('#sortBtn');

//Functions
function sortRows(table, n, comparator) {
    let tbody = table.tBodies[0];
    let rows = tbody.getElementsByTagName('tr');
    rows = Array.prototype.slice.call(rows, 0);

    rows.sort((row1, row2) => {
        let cell1 = row1.getElementsByTagName('td')[n];
        let cell2 = row2.getElementsByTagName('td')[n];
        let val1 = cell1.textContent;
        let val2 = cell2.textContent;
        if (comparator) {
            return comparator(val1, val2);
        }
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    });

    for (let i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }
}

function makeSortable(table) {
    let headers = table.getElementsByTagName('th');
    for (var j = 0; j < headers.length; j++) {
        (function (n) {
            headers[j].onclick = function () {
                sortRows(table, n);
            }
        }());
    }
}

makeSortable(table);

//Events
sortBtn.addEventListener('click', ()=>{
    sortRows(table, 0);
});