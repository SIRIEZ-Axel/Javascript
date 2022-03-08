// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {

    var btn = document.getElementById("run");
    btn.addEventListener("click", () => {
            window.lib.getPosts( function(error, table) {
                if (error){
                    console.log(error)
                } else{
                    console.log(table)
                }
            })
    })

})();
