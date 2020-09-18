let updating = false;
let updateInterval = 100;
let rightClickDisabled = true;

window.onload = function() {
    let content_css = document.createElement("link");
    content_css.href = "content-style.css";
    content_css.rel = "stylesheet";
    document.head.insertBefore(content_css, document.head.children[0]);
    setInterval(function() {
        if (!updating) {
            update();
        }
    }, updateInterval);
}

function update() {
    updating = true;
    //console.log("updating start");

    // if (document.getElementsByClassName("vc-bg-color-ghost-gray")[0].style.backgroundColor != "#3c3a50") {
    //     console.log("bgfix");
    // }
    document.oncontextmenu = function() {
        return true;
    }
    try {
        if (document.getElementsByClassName("vc-bg-color-ghost-gray")[0] != undefined)
            document.getElementsByClassName("vc-bg-color-ghost-gray")[0].style.backgroundColor = "#3c3a50";
        if (document.getElementsByClassName("dashboard-assignment-widget-container")[0] != undefined) {
            document.getElementsByClassName("dashboard-assignment-widget-container")[0].style.backgroundColor = "#45435c";
            document.getElementById("vcViewAlert").style.backgroundColor = "#45435c";
        }
        if (document.getElementsByClassName("feed-composer-textarea")[0] != undefined)
            document.getElementsByClassName("feed-composer-textarea")[0].parentElement.parentElement.classList.add("card-shadow");
        if (document.getElementsByClassName("feed-composer-textarea") != undefined)
            if (document.getElementsByClassName("feed-composer-textarea")[0] != undefined)
                document.getElementsByClassName("feed-composer-textarea")[0].children[0].style.backgroundColor = "#2d2c3b"

        if (document.getElementsByClassName("vc-activity-charts-widget") != undefined) {
            document.getElementsByClassName("vc-activity-charts-widget")[0].style.paddingBottom = "0px";
            document.getElementsByClassName("vc-activity-charts-widget")[0].style.marginTop = "2px";

        }
        if (document.getElementsByClassName("vc-left-menu-footer-eba") != undefined) {
            document.getElementsByClassName("vc-left-menu-footer-eba")[0].style.backgroundColor = "#45435c";
            document.getElementsByClassName("vc-left-menu-footer-eba")[0].style.height = "85px";
            // document.getElementsByClassName("vc-left-menu-footer-eba")[0].children[0].style.backgroundColor = "#fff5"
        }
        if (document.getElementsByClassName("vc-content-title-container") != undefined && document.getElementsByClassName("vc-tabButtons") != undefined) {
            document.getElementsByClassName("vc-content-title-container")[0].style.backgroundColor = "#45435c";
            document.getElementsByClassName("vc-tabButtons")[0].style.backgroundColor = "#45435c";
        }


    } catch (e) {
        //console.log(e);
    }

    updating = false;
}