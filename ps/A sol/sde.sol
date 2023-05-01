// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.8.2 <0.9.0;
contract me{
    uint256 public count=0;
    address admin=0x5832F5cC05D45D0CcfD1cb4e76be40dC0041692A;
    modifier onlyadmin(){
        require(msg.sender == admin);
        _;
    }
    address labeller=0x369Eb812CAec8977eB99F878459fA842876bF9CF;
    modifier onlylabeller(){
        require(msg.sender == labeller);
        _;
    }
    address developer=0xFdd1c5A6cE7965AE851981C1eEBb4850D65Fc4Dc;
    modifier onlydeveloper(){
        require(msg.sender == developer);
        _;
    }
    address verifier=0x5dF564976cdbf5B1C1A54BD3837450D7b3DaC349;
    modifier onlyverifier(){
        require(msg.sender == verifier);
        _;
    }
    mapping(uint => patchinfo) a;
    mapping(string => patchr) ac;
    uint[] public verified;
    uint[] public downloaded;
    uint[] public pid; 
    uint hashDigits = 8;
    uint hashModulus = 10 ** hashDigits;
    enum status {inprogress,verified}
    struct patchr{
        string[] ar1;
        string[] ar2;
    }
    struct patchinfo{
        uint patchid;
        string patchfilename;
        bytes patchlink;
        string patchversion;
        string patchplatform;
        string[] features;
        uint timestamp;
        string verstat;
        string depstat;
        uint[] userids;
    }
    mapping(uint=> uint[]) userpatch;
    uint256 public count1=0;
    mapping(string => bugreport[]) b;
    string[] public bid;
    uint hashDigits2 = 8;
    uint hashModulus2 = 10 ** hashDigits2;
    struct bugreport{
        string appname;
        string version;
        string description;
        string fts;
        uint prior;
    }
    string[] public devds;
    string[] public devft;
    function hashid(string memory name,bytes memory ln,string memory ver,string memory plat) public returns(uint){
        uint random = uint(keccak256(abi.encodePacked(name,ln,ver,plat)));
        return random % hashModulus;
    }
    function addpatch(string memory name,bytes memory ln,string memory ver,string memory plat,string[] memory ft) onlydeveloper public{
        count++;
        uint t=block.timestamp;
        uint[] memory s;
        string memory res=string.concat(name,ver);
        uint pd=hashid(res,ln,ver,plat);
        a[pd]=patchinfo(pd,res,ln,ver,plat,ft,t,"Inprogress","not deployed",s);
        pid.push(pd);
        // s.push(emp(id,name,sal));
    }
    function download(uint patid) public{
        downloaded.push(patid);
    }
    function getArray() public view returns (uint[] memory) {
        return downloaded;
    }
    function getuids(uint pidd) public view returns(uint[] memory){
        return a[pidd].userids;
    }
    function patchidarr() public view returns(uint[] memory){
        return pid;
    }
    function get(uint id) public view returns(string memory,bytes memory,string memory,string memory,string[] memory){
        return (a[id].patchfilename,a[id].patchlink,a[id].patchversion,a[id].patchplatform,a[id].features);
    }
    function vadd(uint _id) onlyverifier public {
        verified.push(_id);
        a[_id].verstat="verified";
    }
    // function deployed2() public view returns(uint[] memory){
    //     return deployed;
    // }
    function rvadd(uint _id) onlyverifier public {
        a[_id].verstat="patch failed";
    }
    function dadd(uint _id) onlyadmin public {
        // deployed.push(_id);
        a[_id].depstat="deployed";
    }
    function vpatchidarr() public view returns(uint[] memory){
        return verified;
    }
    function getpatches() public view returns(patchinfo[] memory){
        patchinfo[] memory id = new patchinfo[](count);
        for (uint i = 0; i < pid.length; i++) {
            patchinfo storage member = a[pid[i]];
            id[i] = member;
        }
        return id;
    }
    bytes public file;
    // function settxt(bytes memory _file) public{
    //     file=_file;
    // }
    function gettxt(bytes memory _f) public returns(bytes memory){
        // string memory tc= string(f);
        return _f;
    } 
    // bugreport[] public bugs;
    string[] public plist;
    string[] public dlist;
    // function bhashid(string memory name,string memory ln,string memory ver,string memory plat) public returns(uint){
    //     uint random2 = uint(keccak256(abi.encodePacked(name,ln,ver,plat)));
    //     return random2 % hashModulus2;
    // }
    function addbug(string memory name,string memory vers,string memory des,string memory ft) public {
        count1++;
        // uint pd2=bhashid(name,vers,des,ft);
        // b[name]=bugreport(name,vers,des,ft,0));
        bugreport memory nbug=bugreport(name,vers,des,ft,0);
        b[name].push(nbug);
        bid.push(name);
        // bugs.push(bugreport(name,vers,des,ft));
    }
    function gbug(string memory _id) public view returns(bugreport[] memory){
        return b[_id];
    }
    // function getbugs() public returns(bugreport[] memory){
    //     bugreport[] memory id = new bugreport[](bid.length);
    //     for (uint i = 0; i < bid.length; i++) {
    //         bugreport storage member = b[bid[i]];
    //         id[i] = member;
    //     }
    //     return id;
    // }
    function gprior(string memory name,string[] memory bugdes,uint[] memory bprior) onlylabeller public{
        // bugreport[] memory nbug=b[name];
        for(uint j=0;j<bprior.length;j++){
        for(uint i=0;i<b[name].length;i++){
            if((keccak256(abi.encodePacked(b[name][i].description)) == keccak256(abi.encodePacked(bugdes[j])))){
            b[name][i].prior=bprior[j];
            break;
            }
        }
        }
    }
    function gbf(string memory name,string[] memory ds,string[] memory ftt) onlyadmin public{
        for(uint i=0;i<ds.length;i++){
            devds.push(ds[i]);
        }
        for(uint i=0;i<ftt.length;i++){
            devft.push(ftt[i]);
        }
        ac[name]=patchr(ds,ftt);
    }
    function getarr(string memory apname) public returns(patchr memory){
        return ac[apname];
    }
    // function bprior(string[] memory ds,string[] memory lt) public{
    //     dlist=ds;
    //     plist=lt;
    // }
    // function gprior() public returns(string[] memory,string[] memory){
    //     return (dlist,plist);
    // }
}