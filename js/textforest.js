function textforest () {
    d3.select('#button')
        .on('click', function (event) {
            nv.addGraph(function () {
                var chart = nv.models.discreteBarChart()
                    .x(function (d) { return d.label; })
                    .y(function (d) { return d.value; })
                    .staggerLabels(true)
                    .tooltips(false)
                    .showValues(true);

                var svg = d3.select('#charts svg');

                var data = generateData(d3.select('#text-area').node().value);

                svg
                    .datum(data)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            });
        });
}

function generateData (text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    var values = alphabet.split('').map(function (letter) {
        return {
            'label': letter,
            'value': text.toLowerCase()
                        .split('')
                        .filter(function (textLetter) {
                            return textLetter === letter;
                        })
                        .length
        };
    });

    return [
        {
            key: 'Letters',
            values: values
        }
    ];
}
