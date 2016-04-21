/** @axisfunction bio.gene.hugo
 *  @menuentry View HGNC
 *  @name openHGNCGene
 *  @description Opens the HGNC page for the first given HUGO gene name
 */
function openHGNCGene (names) {
    var gname = names[0];
    window.open('http://www.genenames.org/cgi-bin/gene_symbol_report?q=data/hgnc_data.php&match=' + gname, 'hgnc');
}

