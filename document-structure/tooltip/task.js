const tooltips = document.querySelectorAll(".has-tooltip");

tooltips.forEach((tooltip) => {
    tooltip.addEventListener("click", (event) => {
        event.preventDefault();

        const title = tooltip.getAttribute("title");
        const tooltipElement = document.createElement("div");
        const activeTooltip = document.querySelector(".tooltip_active");

        if (activeTooltip) {
            activeTooltip.remove();
            return;
        }

        tooltipElement.className = "tooltip";
        tooltipElement.innerHTML = title;
        tooltipElement.classList.add("tooltip_active");

        tooltip.parentNode.appendChild(tooltipElement);

        const position = tooltip.getBoundingClientRect();

        tooltipElement.style.left = `${position.left}px`;
        tooltipElement.style.top = `${position.top + position.height}px`;
    })
})