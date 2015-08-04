/** @axisfunction bio.go.id
 *  @menuentry View Amigo
 *  @name openAmigo
 *  @description Opens the Amigo GO browser page for the goid concerned
 */
function openAmigo (names) {
    var goid = names[0];
    window.open('http://amigo.geneontology.org/cgi-bin/amigo/term_details?term=' + goid, 'genoontology');
};

/** @axisfunction bio.go.id
 *  @menuentry View OLSVis
 *  @name openOLSVis
 *  @description Opens the OLSVis GO browser page for the goid concerned
 */
function openOLSVis (names) {
    var goid = names[0];
    window.open('http://ols.wordvis.com/q=' + goid, 'genoontology');
};

/** @axisfunction bio.go.id
 *  @menuentry View QuickGO
 *  @name openQuickGO
 *  @description Opens the QuickGO browser page for the goid concerned
 */
function openQuickGO (names) {
    var goid = names[0];
    window.open('http://www.ebi.ac.uk/QuickGO/GTerm?id=' + goid, 'genoontology');
};

