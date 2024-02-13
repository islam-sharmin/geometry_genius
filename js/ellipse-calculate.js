function calculateEllipseArea() {
    const majorRedius = getInputValueById('ellipse-major-redius');

    const minorRedius = getInputValueById('ellipse-minor-redius');

    const area = 3.14 * majorRedius * minorRedius;

    setInnerTextById('ellipse-area', area);

}