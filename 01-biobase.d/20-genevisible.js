/** @axisfunction bio.protein.uniprotid
 *  @menuentry View Genevisible
 *  @name openGenevisiblePeptide
 *  @description Opens the Genevisible page for the first given uniprotid
 */
function openGenevisiblePeptide (names) {
    var gname = names[0];
    window.open('https://genevisible.com/tissues/HS/UniProt/' + gname, 'genevisible');
}

/** @axisfunction bio.gene.hugo
 *  @menuentry View Genevisible
 *  @name openGenevisibleHugo
 *  @description Opens the Genevisible page for the first given hugo gene symbol
 */
function openGenevisibleHugo (names) {
    var gname = names[0];
    window.open('https://genevisible.com/tissues/HS/Gene%20Symbol/' + gname, 'genevisible');
}

