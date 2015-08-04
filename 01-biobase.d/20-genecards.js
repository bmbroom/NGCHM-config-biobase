/** @axisfunction bio.gene.hugo
 *  @menuentry View Genecard
 *  @name openGeneCardPage
 *  @description Opens the GeneCards page for the first given HUGO gene name
 */
function openGeneCardPage (names) {
    var gname = names[0];
    window.open('http://www.genecards.org/cgi-bin/carddisp.pl?gene=' + gname + '&search=' + gname, 'genecards');
}

