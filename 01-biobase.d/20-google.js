/** @axisfunction scholar
 *  @menuentry Search in Google Scholar
 *  @name searchGoogleScholar
 *  @description Searches Google Scholar for documents containing the selected terms
 */
function searchGoogleScholar (terms) {
    terms = terms.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    var labels = terms.map(function(g){return encodeURIComponent(g);});
    window.open('http://scholar.google.com/scholar?q=' + labels.join('+OR+'), 'scholar');
};

