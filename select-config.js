module.exports = function(RED) {
    function SelectConfigNode(n) {
        RED.nodes.createNode(this,n);
        this.setting = n.setting;
    }
    RED.nodes.registerType("select-config",SelectConfigNode);
}
