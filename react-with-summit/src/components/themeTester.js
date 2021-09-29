import React from 'react';
import ThemeContext from '../lib/ThemeContext';

export default class ThemeTester extends React.Component {
    render(){
        const {theme} = this.context;
        console.log(theme);
        return (
            <div>
                This is theme
                <br/> color: {theme}
            </div>
        );
    }

};

ThemeTester.contextType = ThemeContext
