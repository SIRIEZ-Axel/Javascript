// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    function tableCreate() {
        const target = document.getElementById("target"),
              tbl = document.createElement('table');
        tbl.style.width = '100px';
        tbl.style.border = '1px solid black';
      
        for (let i = 0; i < 10; i++) {
          const tr = tbl.insertRow();
          for (let j = 0; j < 1; j++) {
            if (i === 2 && j === 1) {
              break;
            } else {
              const td = tr.insertCell();
              td.appendChild(document.createTextNode(`Cell ${i}`));
              td.style.border = '1px solid black';
              if (i === 1 && j === 1) {
                td.setAttribute('rowSpan', '2');
              }
            }
          }
        }
        target.appendChild(tbl);
      }
      
      tableCreate();
})();
