import React from 'react';

const styles = {
    dot:{
        position:'relative',
        width:'18px',
        height:'18px',
        borderRadius:'50%',
        transition: 'all 0.5s ease-in-out',
        marginTop:'15px',
    },
    focus:{
        background:'hsl(360,100%,68%)',
    },
    ink:{
        display:'block',
        position:'absolute',
        top:'-25%',
        left:'-25%',
        background:'hsl(360,100%,68%)',
        borderRadius:'100%',
        height:'150%',
        width:'150%',
        transform:'scale(0)',
    },
    ripple:{
        opacity:'0',
        transform:'scale(2.5)',
        transition: 'all 0.37s linear', 
    },
    block:{
        position:'fixed',
        top:'30%',
        right:'10%',
        padding:'15px',
    },
}

const ScrollBlock = React.createClass({
    
    _getSectionCount(){
        return document.querySelectorAll('section.page').length;
    },
    render(){
        let sectionCount = this._getSectionCount();
        let dots = [];
        for (var i = 0; i < sectionCount; i++) {
            dots.push(<ScrollDot page={i} key={i}/>);
        }
        return(
            <div className="scroll-block" style={styles.block}>
                {dots}
            </div>
        );
    }
});

const ScrollDot = React.createClass({
    
    getInitialState(){
        return { focus : false};
    },
    componentDidMount (){
        window.addEventListener('scroll', this._detectScroll);
    },

    _calculateSectionHeight(){
        var sectionHeight = window.getComputedStyle(document.querySelector('section.page')).getPropertyValue('height');
        return sectionHeight;
    },
    _detectScroll(){
        var sectionHeight = parseInt(this._calculateSectionHeight());
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        this._checkFoucs(top/sectionHeight);
    },
    
    _checkFoucs(pageFocused){
        pageFocused = parseInt(pageFocused+0.5);
        if ( this.props.page == pageFocused){
            this.setState({ focus:true});
        }else{
            this.setState({ focus:false});
        } 
    },
    
    render(){
        let dotStyle = this.state.focus ? Object.assign({},styles.dot,styles.focus) : Object.assign({},styles.dot,{});
        let inkStyle = this.state.focus ? Object.assign({},styles.ink,styles.ripple) : Object.assign({},styles.ink,{});
        return(
            <div className="dot shadow" style={dotStyle}>
                <span className="ink" style = {inkStyle}/>
            </div>
        ); 
    }
});

module.exports = {ScrollBlock, ScrollDot};
