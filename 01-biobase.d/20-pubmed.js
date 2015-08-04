/** @axisfunction bio.pubmed
    @menuentry Search Pubmed for all
    @name searchPubmedAll
    @description Searches Pubmed for documents containing all the selected terms.
*/

function searchPubmedAll (terms) {
     terms = terms.sort().filter(function(el,i,a){return i==a.indexOf(el);});
     var labels = terms.map(function(g){return encodeURIComponent(g);});
     window.open('http://www.ncbi.nlm.nih.gov/pubmed/?term=' + labels.join('+AND+'), 'pubmed');
};

/** @axisfunction bio.pubmed
    @menuentry Search Pubmed for any
    @name searchPubmedAny
    @description Searches Pubmed for documents containing any of the selected terms.
*/

function searchPubmedAny (terms) {
    terms = terms.sort().filter(function(el,i,a){return i==a.indexOf(el);});
    var labels = terms.map(function(g){return encodeURIComponent(g);});
    window.open('http://www.ncbi.nlm.nih.gov/pubmed/?term=' + labels.join('+OR+'), 'pubmed');
};

