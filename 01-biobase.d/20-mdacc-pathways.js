/** @axisfunction bio.mdacc.pathwayid
 *  @menuentry View Pathway
 *  @name openMDACCPathwayID
 *  @description Opens the MD Anderson pathways browser page for the pathway concerned
 */
function openMDACCPathwayID (names) {
    var gname = names[0];
    window.open('http://bioinformatics.mdanderson.org/PathwaysBrowser/pathway/latest/mdaPathwayId/' + gname, 'pathways');
};

/** @axisfunction bio.go.id
 *  @menuentry View PathwaysBrowser
 *  @name openPathwaysBrowserGO
 *  @description Opens the PathwaysBrowser GO page for the goid concerned
 */
function openPathwaysBrowserGO (names) {
    var goid = names[0];
    window.open('http://bioinformatics.mdanderson.org/PathwaysBrowser/goTerm/latest/goId/' + goid, 'geneontology');
};
