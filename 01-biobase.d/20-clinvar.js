/** @axisfunction bio.gene.hugo
 *  @menuentry View ClinVar
 *  @name openClinVar
 *  @description Opens the ClinVar page for the first given HUGO gene name
 */
function openClinVar (names) {
    var gname = names[0];
    window.open('http://www.ncbi.nlm.nih.gov/clinvar/?term=' + gname + '%5Bgene%5D', 'clinvar');
}

