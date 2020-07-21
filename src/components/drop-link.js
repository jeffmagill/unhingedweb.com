import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Fade from 'gatsby-plugin-transition-link/AniLink/Fade'

import "./drop-link.scss"

class DropLink extends React.Component  {
    constructor(props) {
        super(props);
        this.leafs = this.leafs.bind(this);
        this.onEntry = this.onEntry.bind(this);
        this.onExit = this.onExit.bind(this);
        this.dropWhitelist = [ 
            'P',
            'BLOCKQUOTE',
            'G'
        ];
    }

    onEntry(node, event, exit, entry) {
        console.log('On Enter');
        // document.querySelectorAll('.dropping').forEach( item => {
        //     item.classList.remove('dropping');
        //     item.classList.remove('dropping--right');
        // })
    }

    onExit(node, event, exit, entry) {
        console.log('On Exit');
        let target = node.node.querySelector('main.main');
        var leaves = this.leafs(target);
        this.drop(leaves)
    }

    leafs(t = {}) {
        var results = [];
        if(this.dropWhitelist.indexOf(t.tagName) >= 0) {
            results.push(t)    
        }
        if(t.children && t.children.length) {
            results = results.concat([...t.children].flatMap(this.leafs));
        }
        else {
            results.push(t)    
        }
        return results;
    }

    drop(items) {
        items.forEach( (el, index) => setTimeout( () => { 
            if(index % 2 == 0) {
                el.classList.add('dropping--right');
            }
            el.classList.add('dropping')
        }, Math.random()*333));
    }


    render() {
        return (
            <TransitionLink
                fade
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
