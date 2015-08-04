/** @axisfunction bio.gene.hugo
 *  @menuentry View in Zodiac
 *  @name viewZodiacG
 *  @description Shows interactions between the selected genes using Zodiac
 */
function viewZodiacG (genes) {
    genes = genes.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    var glist = encodeURIComponent(genes.join('\n'));
    window.open('http://compgenome.org/zodiac?Gene_List=' + glist, 'zodiac');
};

/** @matrixfunction bio.gene.hugo bio.gene.hugo
 *  @menuentry View in Zodiac
 *  @name viewZodiacG2
 *  @description Shows interactions between the selected genes using Zodiac
 */
function viewZodiacG2 (g1, g2) {
    g1 = g1.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    g2 = g2.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    var glist = encodeURIComponent(g1.concat(g2).join('\n'));
    window.open('http://compgenome.org/zodiac?Gene_List=' + glist, 'zodiac');
};

