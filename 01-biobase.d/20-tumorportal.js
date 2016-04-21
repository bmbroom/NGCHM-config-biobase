/** @axisfunction bio.gene.hugo
 *  @menuentry View TumorPortal
 *  @name openTumorPortalGene
 *  @description Opens the TumorPortal page for the first given HUGO gene name
 */
function openTumorPortalGene (names) {
    var gname = names[0];
    window.open('http://www.tumorportal.org/view?geneSymbol=' + gname, 'tumorportal');
}

