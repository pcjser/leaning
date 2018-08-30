import React, {Component} from 'react';
import PCHeader from '../components/pc_header';
import PCFooter from '../components/pc_footer';
import PCNewsContainer from "../components/pc_newsContainer";

export default class PCIndex extends Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}