/** @axisfunction bio.gene.hugo
 *  @menuentry View in MuPIT
 *  @name viewMupitG
 *  @description Shows gene structure in MuPIT
 */
function viewMupitG (genes) {
    genes = genes.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    var glist = encodeURIComponent(genes[0]);
    window.open('http://mupit.icm.jhu.edu/?gene=' + glist, 'mupit');
};
