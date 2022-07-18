# Select test node

This toy example shows one way of dynamically changing a form in the edit node dialog
based on the selection of a corresponding config node. This is based on the approach
recommeneded in several threads in which node-serialport is mentioned.

The select-test type node utilizes a config node (select-config aka selconf).  The
selconf node contains one property called 'setting' which can be set to either 'foo'
or 'bar'.

Based on the config node 'setting' value (foo or bar), the select-test node dynically builds a
form with appropriate options relating to foo or bar respectively.

The option that the user selects from the dynamic drop down list becomes the property 'setting'
for the select-test node itself.

If no config-node has been configured, the user is not shown any input form.

The actual behavior of the select-test node is that of the lower-case example
node from the Node-RED 'Creating Nodes' documentation section, plus it appends
the value of the setting described above.
