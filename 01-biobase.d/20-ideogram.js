/** @axisfunction bio.gene.hugo
 *  @menuentry View Ideogram
 *  @name viewGenesetIdeogramG
 *  @description Shows the genomic locations of the selected genes.
 */
function viewGenesetIdeogramG (genes) {
    genes = genes.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    var labels = genes.map(function(g){return encodeURIComponent(g);});
    window.open('http://bioinformatics.mdanderson.org/ideogramviewer/Ideogram.html?genelist1=' + labels.join(','), 'ideogram');
};

/** @matrixfunction bio.gene.hugo bio.gene.hugo
 *  @menuentry View Ideogram
 *  @name viewGenesetIdeogramG2
 *  @description Shows the genomic locations of the selected genes
 */
function viewGenesetIdeogramG2 (g1, g2) {
    g1 = g1.filter(function(el,i,a){return i==a.indexOf(el);});
    g2 = g2.filter(function(el,i,a){return i==a.indexOf(el);});
    g1 = g1.map(function(g){return encodeURIComponent(g);});
    g2 = g2.map(function(g){return encodeURIComponent(g);});
    window.open('http://bioinformatics.mdanderson.org/ideogramviewer/Ideogram.html?genelist1=' + g1.join(',') + '&genelist2=' + g2.join(','), 'ideogram');
};

/** @axisfunction bio.mirna
 *  @menuentry View Ideogram
 *  @name viewGenesetIdeogramM
 *  @description Shows the genomic locations of the selected mirnas
 */
function viewGenesetIdeogramM (mirs) {
    mirs = mirs.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    var labels = mirs.map(function(g){return encodeURIComponent(g);});
    window.open('http://bioinformatics.mdanderson.org/ideogramviewer/Ideogram.html?mirlist1=' + labels.join(','), 'ideogram');
};

/* @matrixfunction bio.mirna bio.mirna
 * @menuentry View Ideogram
 * @name viewGenesetIdeogramM2
 * @description Shows the genomic locations of the selected mirnas
 */
function viewGenesetIdeogramM2 (mirs1, mirs2) {
    mirs1 = mirs1.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    mirs2 = mirs2.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    mirs1 = mirs1.map(function(g){return encodeURIComponent(g);});
    mirs2 = mirs2.map(function(g){return encodeURIComponent(g);});
    window.open('http://bioinformatics.mdanderson.org/ideogramviewer/Ideogram.html?mirlist1=' + mirs1.join(',') + '&mirlist2=' + mirs2.join(','), 'ideogram');
};

/** @matrixfunction bio.gene.hugo bio.mirna
 *  @menuentry View Ideogram
 *  @name viewGenesetIdeogramGM
 *  @description Shows the genomic locations of the selected genes and mirnas
 */
function viewGenesetIdeogramGM (genes1, mirs1) {
    genes1 = genes1.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    mirs1 = mirs1.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    genes1 = genes1.map(function(g){return encodeURIComponent(g);});
    mirs1 = mirs1.map(function(g){return encodeURIComponent(g);});
    window.open('http://bioinformatics.mdanderson.org/ideogramviewer/Ideogram.html?genelist1=' + genes1.join(',') + '&mirlist1=' + mirs1.join(','), 'ideogram');
};
