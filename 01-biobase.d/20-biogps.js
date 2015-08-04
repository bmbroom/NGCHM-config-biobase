/** @axisfunction bio.gene.hugo
 *  @menuentry Search BioGPS
 *  @name searchBioGPS
 *  @description Searches BioGPS for the first given HUGO gene name
 */
function searchBioGPS (names) {
    var gname = names[0];
    window.open('http://biogps.org/search/?q=' + gname, 'biogps');
}

