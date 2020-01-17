import * as React from 'react';
import {titleStyles} from './title.styles';

interface Props {
    title: string;
}

export class Title extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
      }
    render(){
        return (
            <span style={titleStyles}>{this.props.title}</span>
        )
    }
    
}
