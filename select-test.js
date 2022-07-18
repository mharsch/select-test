module.exports = function(RED) {
    function SelectTestNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.config_node = RED.nodes.getNode(config.selconf);
        node.setting = config.setting;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase() + node.setting;
            node.send(msg);
        });
    }
    RED.nodes.registerType("select-test",SelectTestNode);
    RED.httpAdmin.get("/config_options", RED.auth.needsPermission('select-test.read'), function(req, res) {
        var node = this;
        foo = [{"name": "option1", "value": 1}, {"name": "option2", "value": 2}]
        res.json(foo);
    });
}
