/** @axisfunction bio.protein.uniprotid
 *  @menuentry View Uniprot
 *  @name openUniprot
 *  @description Opens the Uniprot page for the first given uniprotid
 */
function openUniprot (names) {
    var gname = names[0];
    window.open('http://www.uniprot.org/uniprot/' + gname, 'uniprot');
}

