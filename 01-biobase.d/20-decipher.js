/** @axisfunction bio.gene.hugo
 *  @menuentry View Decipher
 *  @name openDecipher
 *  @description Opens the Decipher page for the first given HUGO gene name
 */
function openDecipher (names) {
    var gname = names[0];
    window.open('https://decipher.sanger.ac.uk/search?q=' + gname, 'decipher');
}

