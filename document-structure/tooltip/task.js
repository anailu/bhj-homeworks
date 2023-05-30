const tooltips = document.querySelectorAll(".has-tooltip");
let activeTooltip = null;

tooltips.forEach((tooltip) => {
    tooltip.addEventListener("click", showTooltip);
});

function createTooltipElement(title) {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "tooltip";
    tooltipElement.innerHTML = title;
    tooltipElement.classList.add("tooltip_active");
    return tooltipElement;
}

function removeTooltip(tooltipElement) {
    tooltipElement.remove();
    activeTooltip = null;
}

function showTooltip(event) {
    event.preventDefault();

    const tooltip = event.currentTarget;
    const title = tooltip.getAttribute("title");

    if (activeTooltip && activeTooltip === tooltip.nextElementSibling) {
        removeTooltip(activeTooltip);
        return;
    }

    if (activeTooltip) {
        removeTooltip(activeTooltip);
    }

    const tooltipElement = createTooltipElement(title);

    tooltip.parentNode.insertBefore(tooltipElement, tooltip.nextElementSibling);;
    activeTooltip = tooltipElement;

    const position = tooltip.getBoundingClientRect();
    tooltipElement.style.left = `${position.left}px`;
    tooltipElement.style.top = `${position.top + position.height}px`;
}