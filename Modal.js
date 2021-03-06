var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function () {
        var $this = this;
        return {
            id: Math.random(),
            title: "Title",
            body: "body",
            footer: "footer",
            isOpen: true,
            onClose: function () {
            },
            bodyStyle: {}
        };
    },
    getInitialState: function () {
        var $this = this;
        return {};
    },
    render: function () {
        var $this = this;
        var style = {};
        if ($this.props.isOpen) {
            style.display = "block";
            style.overflow = 'auto';
        }

        var onClose = $this.props.onClose;

        return (

            <div>
                <div className="modal" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                     style={style}>
                    <div id={$this.props.id} className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" aria-label="Close"
                                        onClick={onClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                {
                                    typeof $this.props.title == "string" ?
                                        <h4 className="modal-title" id="myModalLabel">
                                            {$this.props.title}
                                        </h4> : $this.props.title
                                }
                            </div>
                            <div className="modal-body" style={$this.props.bodyStyle}>
                                {$this.props.body}
                            </div>
                            <div className="modal-footer">
                                {$this.props.footer}
                            </div>
                        </div>
                    </div>
                </div>
                {!!$this.props.isOpen ? (<div className="modal-backdrop" style={{opacity: 0.5}}></div>) : ""}
            </div>

        );
    }
});