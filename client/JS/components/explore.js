function renderExplore() {
    // roll to decide following event
    document.querySelector("body").style.backgroundImage =
        "url('')";

        
    const loadingMenu = document.querySelector("#page").innerHTML = `
        <button onClick="renderFight()"> Fight </button>
        <button onClick="exploreEvent()"> Explore </button>
    `;
    setTimeout(loadingMenu, 5000) 
}

function exploreEvent() {
    fetch("/api/events")
        .then((res) => res.json())
        .then((randEvent) => {
            if (randEvent.event != "fight monster") {
                document.querySelector("#page").innerHTML = `
                    <h2>${randEvent.event}</h2>
                    <img src=${randEvent.image}> 
                    <p>${randEvent.quote}</p>
                    <button onClick="renderFight()"> Fight </button>
                    <button onClick="exploreEvent()"> Explore </button>
                `;
            } else {
                renderFight();
            }
        });
}
//}         document.querySelector('#page').innerHTML = `
//             <h2>${randEvent.event}</h2>
//             <img src=${randEvent.image}>
//             <p>${randEvent.quote}</p>

//     }
// });

// exploreEvent();
