/** @axisfunction bio.gene.hugo
 *  @menuentry View NCBI Gene
 *  @name openNCBIGenePage
 *  @description Opens the NCBI page for the (first) given HUGO gene name
 */
function openNCBIGenePage (names) {
    var gname = names[0];
    window.open('http://www.ncbi.nlm.nih.gov/gene?term=(homo%20sapiens%5BOrganism%5D)%20AND%20' + gname + '%5BGene%20Name%5D', 'NCBI');
}

/** @axisfunction bio.gene.entrezid
 *  @menuentry View NCBI Entrez ID
 *  @name openNCBIEntrezIDPage
 *  @description Opens the NCBI page for the (first) given gene Entrez ID
 */
function openNCBIEntrezIDPage (eids) {
    var gid = eids[0];
    window.open('http://www.ncbi.nlm.nih.gov/gene/' + gid, 'NCBI');
}

/** @axisfunction bio.geo.acc.id
 *  @menuentry View GEO Accession
 *  @name openGEOAccession
 *  @description Opens the GEO Accession page for the (first) given GEO accession id
 */
function openGEOAccession (aids) {
    var aid = aids[0];
    window.open('http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=' + aid, 'NCBI');
}

