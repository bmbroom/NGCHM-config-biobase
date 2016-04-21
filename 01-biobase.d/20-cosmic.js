/** @axisfunction bio.gene.hugo
 *  @menuentry View Cosmic
 *  @name openCosmicGene
 *  @description Opens the Cosmic page for the first given HUGO gene name
 */
function openCosmicGene (names) {
    var gname = names[0];
    window.open('http://cancer.sanger.ac.uk/cosmic/gene/analysis?ln=' + gname, 'cosmic');
}

