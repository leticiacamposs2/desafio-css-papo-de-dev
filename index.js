const COLORS = [
    { name: 'green', hex: '#B5DB48' },
    { name: 'red', hex: '#FF3838' },
    { name: 'blue', hex: '#3864FF' }
];

function colorsOptions() {
    for (let cor in COLORS) {
        return `
            <div class="colors-options" style="background:${COLORS[cor].hex}">
            </div>
        `
    }
}
