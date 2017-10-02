import React, {PropTypes as T} from 'react';
import SlideRadio from './SlideRadio';

export default class SlideRadioExample extends React.Component {
    
	constructor(props) {
    	super(props);
  	}
    
    changeValue = (selectedItem) => {
        var newItem = selectedItem.value;
    }

    render() {
        let radioOptions = [
            { id: 1, value: "a", label: "Bananas" }, 
            { id: 2, value: "b", label: "Apples" }, 
            { id: 3, value: "c", label: "Grapes" },
            { id: 4, value: "d", label: "Elderberries" },
        ];

        return (
            <div style={{fontFamily: "helvetica"}}>            
                <h3>Slide Radio Input </h3>
                <div style={{ width: "200px"}}>
                    <SlideRadio initialValue={radioOptions[1]}
                        options={radioOptions}
                        template={o => o.label}
                        onChange={this.changeValue} />
                </div>
            </div>
        );
    }
}
