/** @axisfunction bio.gene.hugo
 *  @menuentry Search Vega
 *  @name searchVega
 *  @description Searches Vega for the first given HUGO gene name
 */
function searchVega (names) {
    var gname = names[0];
    window.open('http://vega.sanger.ac.uk/Homo_sapiens/psychic?site=vega&q=' + gname, 'vega');
}

