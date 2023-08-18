document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".lws-addMatch");
    const container = document.querySelector(".all-matches");

    addButton.addEventListener("click", function () {
        const matchHTML = 
      `  <div class="match">
        <div class="wrapper">
            <button class="lws-delete">
                <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">Match 1</h3>
        </div>
        <div class="inc-dec">
            <form class="incrementForm">
                <h4>Increment</h4>
                <input
                    type="number"
                    name="increment"
                    class="lws-increment"
                />
            </form>
            <form class="decrementForm">
                <h4>Decrement</h4>
                <input
                    type="number"
                    name="decrement"
                    class="lws-decrement"
                />
            </form>
        </div>
        <div class="numbers">
            <h2 class="lws-singleResult">120</h2>
        </div>
    </div>`
        

        container.insertAdjacentHTML("beforeend", matchHTML);
    });




    

    container.addEventListener("click", function (event) {
        if (event.target.classList.contains("lws-delete")) {
            event.target.closest(".match").remove();
        }
    });

    container.addEventListener("input", function (event) {
        if (
            event.target.classList.contains("lws-increment") ||
            event.target.classList.contains("lws-decrement")
        ) {
            const match = event.target.closest(".match");
            const increment = parseInt(match.querySelector(".lws-increment").value) || 0;
            const decrement = parseInt(match.querySelector(".lws-decrement").value) || 0;
            const total = 120 + increment - decrement;

            match.querySelector(".lws-singleResult").textContent = total;
        }
    });
});