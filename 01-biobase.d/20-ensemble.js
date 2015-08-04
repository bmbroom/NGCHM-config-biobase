/** @axisfunction bio.gene.hugo
 *  @menuentry Search Ensemble for gene
 *  @name searchEnsembleForGene
 *  @description Searches Ensemble for the first given HUGO gene name
 */
function searchEnsembleForGene (names) {
    var gname = names[0];
    window.open('http://ensembl.org/Multi/psychic?site=ensembl&species=Homo_sapiens&q=' + gname, 'ensemble');
}

/** @axisfunction bio.transcriptid
 *  @menuentry Search Ensemble for transcript
 *  @name searchEnsembleForTranscript
 *  @description Searches Ensemble for the first given transcript id
 */
function searchEnsembleForTranscript (names) {
    var tname = names[0];
    window.open('http://ensembl.org/Multi/psychic?site=ensembl&species=Homo_sapiens&q=' + tname, 'ensemble');
}

