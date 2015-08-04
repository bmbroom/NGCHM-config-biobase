/** @axisfunction bio.mirna
 *  @menuentry View miRBase page
 *  @name viewMiRBasePage
 *  @description Opens the miRBase page for the (first) given miRNA ID
 */
function viewMiRBasePage (eids) {
    var gid = eids[0];
    window.open('http://www.mirbase.org/cgi-bin/query.pl?terms=' + gid, 'miRBase');
}

