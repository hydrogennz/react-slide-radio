import React, {PropTypes as T} from 'react';
import { findDOMNode } from 'react-dom';
import styles from './style.less';
// import cx from 'classnames';

export default class SlideRadio extends React.Component {
    static propTypes = { 
        options: T.array.isRequired,
        template: T.func,
        onChange: T.func,
    };
    
	constructor(props) {
    	super(props);
        
        this.state = {
            focussedOption: props.initialValue,
            underlineStyle: { left: 0, width: 0 }
        };
  	}

    componentDidMount() {
        this.setUnderlinePosition(this.state.focussedOption);
        
        setTimeout(() => {
            this.setUnderlinePosition(this.state.focussedOption);
        }, 100);
    }

    setUnderlinePosition = (focussedOption) => {
        if(focussedOption) {
            var option = this.refs[this.getIdentityKey(focussedOption)];

            this.setState({
                 underlineStyle: { left: option.offsetLeft, width: Math.ceil(option.getBoundingClientRect().width) }
            });
        }
    }

    handleOnChange(option, event) {
        // Get inner span if we clicked on the div
        this.setState({
            focussedOption: option,
        });

        this.setUnderlinePosition(option);    
        this.props.onChange(option);
    }

    renderOption(option) {
        if (this.props.template) {
            return this.props.template(option);
        }

        return option.toString();
    }

    getIdentityKey(tag) {
        if (this.props.identityKey) {
            return tag[this.props.identityKey];
        } else if (tag.id) {
            return tag.id;
        } else if (tag.guid) {
            return tag.guid;
        } else {
            return this.props.options.findIndex(r => r === tag);
        }
    }

    render() {
        var { focussedOption, positions, underlineStyle } = this.state;

        return (
            <div className="toggle" ref="toggle">
                {this.props.options.map(o => {
                        let matched = this.getIdentityKey(o) == this.getIdentityKey(focussedOption);
                        let classes = "toggle-option " + (matched ? 'active' : '');
                        
                        return <div key={this.getIdentityKey(o)} className={classes} onClick={this.handleOnChange.bind(this, o)}><span ref={this.getIdentityKey(o)}>{this.renderOption(o)}</span></div>;
                    }
                )}
                
                <div className={"toggle-underline"} style={underlineStyle}></div>
            </div>
        );
    }
}
