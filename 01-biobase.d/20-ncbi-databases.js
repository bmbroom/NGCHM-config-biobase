/** @axisfunction bio.gene.hugo
 *  @menuentry Search NCBI databases
 *  @name searchNCBIDatabases
 *  @description Searches NCBI databases for the first given HUGO gene name
 */
function searchNCBIDatabases (names) {
    var gname = names[0];
    window.open('http://www.ncbi.nlm.nih.gov/gquery/?term=((' + gname + '%5BGene+Symbol%5D)+AND+Homo+sapiens%5BOrganism%5D)', 'ncbi');
}

