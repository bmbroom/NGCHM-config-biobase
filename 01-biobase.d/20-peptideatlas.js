/** @axisfunction bio.protein.uniprotid
 *  @menuentry View Peptide Atlas
 *  @name openPeptideAtlas
 *  @description Opens the PeptideAtlas page for the first given uniprotid
 */
function openPeptideAtlas (names) {
    var gname = names[0];
    window.open('https://db.systemsbiology.net/sbeams/cgi/PeptideAtlas/Search?action=GO&search_key=' + gname, 'peptideatlas');
}

