function createVLines(no_c, table_lines_group, height, line_gap) {
    var x1 = 0
    var y1 = 0
    var x2 = 0
    var y2 = height

    for (let i = 0; i < no_c ; i++) {
        var line = `<line x1=${x1} x2=${x2} y1=${y1} y2=${y2} id='v_line_${i + 1}' stroke-width='2' style='stroke: var(--color-grey-1);' />`;

        table_lines_group.innerHTML += line;
        x1 += line_gap
        x2 += line_gap
    }
}

function createHLines(no_c, table_lines_group, width, line_gap) {
    var x1 = 0
    var y1 = 0
    var x2 = width
    var y2 = 0

    for (let i = 0; i < no_c ; i++) {
        var line = `<line x1=${x1} x2=${x2} y1=${y1} y2=${y2} id='h_line_${i + 1}' stroke-width='2' style='stroke: var(--color-grey-1);' />`;

        table_lines_group.innerHTML += line;
        y1 += line_gap
        y2 += line_gap
    }
}

function createline1Dots(no_c, table_lines_group, height, line_gap, values, color) {
    var x1 = 0

    for (let i = 0; i < no_c; i++) {
        var y1 = (height * 4 / 5) * values[i] / 100
        var circle = `<circle cx=${x1} cy=${y1} r=${5} fill="#fff" id='line1_circle_${i + 1}' stroke-width='4' style='stroke: ${color};' />`;

        table_lines_group.innerHTML += circle;
        x1 += line_gap
    }
}

function createline1lines(no_c, table_lines_group, height, line_gap, values, color) {
    var x1 = 0
    var x2 = line_gap

    for (let i = 0; i < no_c - 1; i++) {
        var y1 = (height * 4 / 5) * values[i] / 100
        var y2 = (height * 4 / 5) * values[i + 1] / 100
        var line = `<line x1=${x1} x2=${x2} y1=${y1} y2=${y2} id='line1_line_${i + 1}' stroke-width='4' style='stroke: ${color};' />`;


        table_lines_group.innerHTML += line;
        x1 += line_gap
        x2 += line_gap
    }
}