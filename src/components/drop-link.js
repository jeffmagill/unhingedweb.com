import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import {drop} from '../lib/animations.js'
import {leaves} from '../lib/dom.js'
import "./drop-link.scss"

class DropLink extends React.Component  {
    constructor(props) {
        super(props);
        this.onEntry = this.onEntry.bind(this);
        this.onExit = this.onExit.bind(this);
        this.dropWhitelist = [ 
            'P',
            'BLOCKQUOTE',
            'G'
        ];
    }

    onEntry(node, event, exit, entry) {
        // console.log('On Enter');
        
        // let target = node.node.querySelector('main.main');
        // var elements = leaves(target, this.dropWhitelist);
        
        // window.unhinged = window.unhinged || {};
        // window.unhinged.leaves = leaves;
        // console.log('recalculating leaves', elements);
    }

    //when navigating away, find all leaves and 'drop' them via css class
    onExit(node, event, exit, entry) {
        // console.log('On Exit');

        let elements = [];

        // TODO: dont use window. sessionStorage?
        if(window.unhinged!==undefined && window.unhinged.leaves !== undefined) {
            elements = window.unhinged.leaves;
            // console.log('using cached leaves', elements);
        }
        else {
            let target = node.node.querySelector('main.main');
            elements = leaves(target, this.dropWhitelist);
            // console.log('no cached leaves. calculating', elements);
        } 

        if(elements.length > 0) {
            drop(elements, () => Math.random() * 333);
        }
    }

    render() {
        return (
            <TransitionLink
                to={this.props.to}
                entry={{length: 1, trigger: this.onEntry}}
                exit={{length: 1, trigger: this.onExit}}
                >
                {this.props.children}
            </TransitionLink>
        );
    }
}

export default DropLink
