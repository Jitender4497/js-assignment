var NFT = [];
function mintNFT(name, address, uid) {
    var newNFT = { "NFTname": name, "Address": address, "UID": uid };
    NFT.push(newNFT);
}
function listNFTs() {
    for (let i = 0; i < NFT.length; i++) {
        console.log("Name: " + NFT[i].NFTname);
        console.log("Address: " + NFT[i].Address);
        console.log("UID: " + NFT[i].UID);
    }
}
function getTotalSupply() {
    return NFT.length;
}
mintNFT("Jitender kumar", "Narnaul(Haryana)", "22BCS14701");
mintNFT("Ankur", "Uttarakhand", "22BCS14622");
listNFTs();
console.log("No. of NFT: " + getTotalSupply());
