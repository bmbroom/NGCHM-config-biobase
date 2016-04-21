/** @axisfunction bio.gene.hugo
 *  @menuentry View FireBrowse
 *  @name openFireBrowseGene
 *  @description Opens the FireBrowse page for the first given HUGO gene name
 */
function openFireBrowseGene (names) {
    var gname = names[0];
    window.open('http://firebrowse.org/viewGene.html?gene=' + gname + '&search=' + gname, 'firebrowse');
}

