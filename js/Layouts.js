var graph = {};
var edgeNodes = [];
$(function () {
    window.cy = cytoscape({
        container: $('#cy')[0],
        style: cytoscape.stylesheet()
            .selector('node')
            .css({
                'content': 'data(name)',
                'text-valign': 'center',
                'color': 'red',
                'text-outline-width': 2,
                'text-outline-color': '#888',
            })
            .selector(':selected')
            .css({
                'background-color': 'black',
                'line-color': 'black',
                'target-arrow-color': 'black',
                'source-arrow-color': 'black',
                'text-outline-color': 'black',
                'border-color': 'black',
                'border-width': 5

            })
            .selector('edge')
            .css({
                'background-color': 'black',
                'line-color': 'black',
                'target-arrow-color': 'red',
                'source-arrow-color': 'black',
                'text-outline-color': 'black'
            })
            .selector('edge:selected')
            .css({
                'background-color': 'green',
                'line-color': 'green',
                'width': 5,
                'opacity':1,
                'color' : 'green'
            }),
        elements: {
            nodes: [],
            edges: []
        },
        layout: {
            name: 'arbor',
            refresh: 0,
            animate: true,
            infinite: true,
            ungrabifyWhileSimulating: false
        },

        ready: function(){
            var xmlObject = loadXMLDoc("sources/graph0.xml");
            var graphmlConverter = graphmlToJSON(xmlObject);
            atts = graphmlConverter.attributes;

            var cytoscapeJsGraph = {
                edges: graphmlConverter.objects[2],
                nodes: graphmlConverter.objects[1]
            };
            refreshCytoscape(cytoscapeJsGraph);
        }

    });



});

function refreshCytoscape(graphData) { // on dom ready

    cy = cytoscape({
        container: $('#cy')[0],
        style: cytoscape.stylesheet()
            .selector('node')
            .css({
                'content': 'data(name)',
                'text-valign': 'center',
                'color': 'white',
                'text-outline-width': 2,
                'text-outline-color': 'black',
                'border-width': 1,
                'border-color': 'black'

            })
            .selector('#head')
            .css({
                'height': 250,
                'width': 250,
                'background-color': 'rgb(255, 0, 0)',
                'border-width': 0
            })
            .selector('#facebook')
            .css({
                'height': 200,
                'width': 200,
                'background-color': 'rgb(255, 80, 80)',
                'border-width': 0
            })
            .selector('#github')
            .css({
                'height': 100,
                'width': 100,
                'background-color': 'rgb(255, 150, 150)',
                'border-width': 0
            })
            .selector('#cv')
            .css({
                'height': 80,
                'width': 80,
                'background-color': 'rgb(255, 200, 200)',
                'border-width': 0
            })
            .selector('node:selected')
            .css({
                'text-outline-color': 'black',
                'border-color': 'black',
                'border-width': 3,
                'opacity': 1
            })
            .selector('edge')
            .css({
                'width': 1,
                'background-color': 'black',
                'line-color': 'black',
                'color': 'black',
                'target-arrow-color': 'red',
                'source-arrow-color': 'black',
                'text-outline-color': 'black'
            })
            .selector('edge:selected')
            .css({
                'line-color': 'black',
                'width': 4,
                'opacity':1
            })
            .selector('#e0')
            .css({
                'width': 4
            })
            .selector('#e1')
            .css({
                'width': 2
            })
            .selector('#e2')
            .css({
                'width': 3
            })
            .selector('#e4')
            .css({
                'width': 5
            })
            .selector('#e5')
            .css({
                'width': 2
            }),


        elements: {
            nodes: graphData['nodes'],
            edges: graphData['edges']

        },
        layout: {
            name: 'arbor',
            refresh: 0,
            animate: true,
            infinite: true,
            ungrabifyWhileSimulating: false
        },
        boxSelectionEnabled: true,
        motionBlur: true,
        wheelSensitivity: 0.1,
        ready: function(){
            var i = 0;
            cy.$("#cv")[0]._private.data['href'] = 'https://github.com/furkansahin/CV/raw/master/CV.pdf';
            cy.$("#facebook")[0]._private.data['href'] = 'https://www.facebook.com/sahinfurkan07';
            cy.$("#github")[0]._private.data['href'] = 'https://github.com/furkansahin';
            cy.layout({
                name: 'preset'
            });
            cy.on('mouseover', 'node', function(evt){

                this.style('border-width', 2);

            });
            cy.on('mouseout', 'node', function(evt){

                this.style('border-width', 0);

            });
        }
    });

}
;
