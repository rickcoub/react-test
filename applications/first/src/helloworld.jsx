var BigText = React.createClass({
    text: "EMPTY",
    render: function() {
        return (
            <div className="BigText">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
});

var HelloWorld = React.createClass({
    render: function() {
        return (
            <div className="HelloWorld">
                <BigText text="Hello World" />
                <BigText text="It's simple example" />
            </div>
        );
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('example')
);