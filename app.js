const data = [
    { name: 'João', age: 40 },
    { name: 'Maria', age: 28 },
    { name: 'Pedro', age: 24 },
    { name: 'Paula', age: 19 },
    { name: 'Teresa', age: 47 },
    { name: 'Gabriel', age: 50 },
    { name: 'Emily', age: 52 },
    { name: 'Carlos', age: 32 },
    { name: 'Leandro', age: 35 },
    { name: 'Sandra', age: 21 },
];

const container = document.querySelector('.container');

//Functions
function sortRows(table, n, comparator) {
    const tbody = table.tBodies[0];
    const rows = tbody.getElementsByTagName('tr');
    rows = Array.prototype.slice.call(rows, 0);

    rows.sort((row1, row2) => {
        const cell1 = row1.getElementsByTagName('td')[n];
        const cell2 = row2.getElementsByTagName('td')[n];
        const val1 = cell1.textContent;
        const val2 = cell2.textContent;
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
    const headers = table.getElementsByTagName('th');
    for (var j = 0; j < headers.length; i++) {
        (function (n) {
            headers[i].onclick = function () {
                sortRows(table, n);
            }
        }());
    }
}

function createTable() {
    const table = `
        <table> 
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>

            <tbody class="table-body">
            </tbody>
        </table>
    `;
    
    container.innerHTML = table;
} // .table-body to manipulate

function populateTable() {
    const tableItems = [];
    const tbody = document.querySelector('.table-body');
    for (let i = 0; i < data.length; i++) {
        tableItems[i] = `
                        <tr>
                        <td class="table-name">${data[i].name}</td>
                        <td class="table-age">${data[i].age}</td>
                        </tr>`;

    } // this function isn't working properly

}

window.onload = createTable();