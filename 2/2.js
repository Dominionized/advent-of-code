var reader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

var totalWrappingPaper = 0;
var totalRibbon = 0;

reader.on('line', function (line) {
    var splitLine = line.split('x').map(function (data) {
        return parseInt(data);
    });

    var smallestDim = Number.MAX_VALUE;
    var secondSmallestDim = Number.MAX_VALUE;

    splitLine.forEach(function (number) {
        if (number < smallestDim) {
            secondSmallestDim = smallestDim;
            smallestDim = number;
        } else if (number < secondSmallestDim) {
            secondSmallestDim = number;
        }
    });

    console.log("Smallest dim: " + smallestDim);
    console.log("Sec smallest dim: " + secondSmallestDim);

    var smallestSide = smallestDim * secondSmallestDim;

    console.log('Dimensions : ' + splitLine);
    console.log('Smallest side: ' + smallestSide);
    var l = splitLine[0], w = splitLine[1], h = splitLine[2];
    console.log("Paper to add : " + (2*l*w + 2*w*h + 2*h*l));
    totalWrappingPaper += (2*l*w + 2*w*h + 2*h*l);
    totalWrappingPaper += smallestSide;
    console.log('Total wrapping paper so far : ' + totalWrappingPaper);

    var ribbon = 2*smallestDim + 2*secondSmallestDim + (l*w*h);
    totalRibbon += ribbon;
    console.log('Ribbon for present: ' + ribbon);

    console.log('------------------------------------------------------');
}).on('close', function () {
    console.log('Total wrapping paper needed: ' + totalWrappingPaper);
    console.log('Total ribbon needed: ' + totalRibbon);
});
