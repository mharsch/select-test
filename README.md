# Select test node

This toy example shows one way of dynamically changing a form in the edit node dialog
based on the selection of a corresponding config node. This is based on the approach
recommeneded in several threads in which node-serialport is mentioned.

The select-test type node utilizes a config node (select-config aka selconf).  The
selconf node contains one property called 'setting' which can be set to either 'foo'
or 'bar'.

The select-test node looks at it's config node and sets it's own property 'setting'
to the selconf 'setting' value.

Based on it's 'setting' value (foo or bar), the select-test node dynically builds a
form with appropriate options relating to foo or bar respectively.

If no config-node has been configured, the user is not shown any input form.

The actual behavior of the select-test node is that of the lower-case example
node from the Node-RED 'Creating Nodes' documentation section, plus it appends
the value of the setting described above.
