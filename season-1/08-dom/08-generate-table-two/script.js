// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    function tableCreate() {
        const target = document.getElementById("target"),
              tbl = document.createElement('table');
        tbl.style.width = '100px';
        tbl.style.border = '1px solid black';
      
        for (let i = 1; i <= 10; i++) {
          const tr = tbl.insertRow();
          for (let j = 1; j <= 10; j++) {
            const td = tr.insertCell();
            var mult = i * j
            td.appendChild(document.createTextNode(`${mult}`));
            td.style.border = '1px solid black';
          }
        }
        target.appendChild(tbl);
      }
      tableCreate();

})();
